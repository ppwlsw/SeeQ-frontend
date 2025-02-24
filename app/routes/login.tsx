import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { redirect, useFetcher, type ActionFunctionArgs, type LoaderFunctionArgs } from "react-router";

export async function loader( {request}: LoaderFunctionArgs){
    const url = new URL(request.url);
    const token = url.searchParams.get("token");
    console.log(token);
    return null;
} 

export default function Login() {
  return (
    <div className="flex flex-col justify-end h-screen bg-primary-dark-50 overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full absolute top-[15%]">
        <img
          src="/register-logo.png"
          alt="logo"
          className="h-60 w-auto"
        />
      </div>
      <div className="grid grid-cols-1 justify-center items-center z-50">
        <div className="h-full col-start-1 row-start-1 bg-gray-100 rounded-t-[40px]">
          <p className="mt-4 text-center text-3xl">เข้าสู่ระบบ</p>
        </div>
        <div className="flex flex-col items-center gap-3 col-start-1 row-start-1 h-full w-full mt-32 bg-white borde shadow-lg shadow-black/80 rounded-t-[40px] p-16 pt-8 pb-0">
          <FetcherForm />
          <div className="flex text-center items-center w-full">
            <span className="flex-grow h-px bg-gray-300"></span>
            <span className="text-gray-500">Or</span>
            <span className="flex-grow h-px bg-gray-300"></span>
          </div>
          <div className="flex justify-center items-center gap-6 bg-white w-full rounded-full p-4 border border-black"
          onClick={googleSignIn}>
            <img
              src="/google-logo.png"
              alt="google-logo"
              className="h-6 w-auto"
            />
            <p className="text-lg">เข้าสู่ระบบด้วย Google</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FetcherForm() {
  const fetcher = useFetcher<ActionMessage>();
  return (
    <fetcher.Form
      method="POST"
      className="flex flex-col justify-start items-center w-full "
    >
      <div className="flex flex-col justify-evenly items-center w-full gap-6">
        <InputForm name="email" type="text" label="อีเมล" placeholder="อีเมล" />

        <InputForm
          name="password"
          type="password"
          label="รหัสผ่าน"
          placeholder="รหัสผ่าน"
        />
        <p
          className={`w-full text-red-500 text-center border border-red-500 bg-red-100 p-1 rounded-md ${
            fetcher.data?.error ? "opacity-100" : "opacity-0"
          }`}
        >
          {fetcher.data?.error ? fetcher.data.error : "error"}
        </p>
        <button
          type="submit"
          className="bg-primary-dark text-white text-xl p-4 rounded-full w-full"
        >
          เข้าสู่ระบบ
        </button>
      </div>
    </fetcher.Form>
  );
}

interface InputFormProps {
  name: string;
  type: string;
  label: string;
  placeholder: string;
}

function InputForm({ name, type, label, placeholder }: InputFormProps) {
  let isPassword = type === "password";
  let [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col relative [&:has(input:focus)>label]:opacity-100 w-full">
      <label
        className="opacity-0 absolute -top-4 left-4 bg-white p-1"
        htmlFor={name}
      >
        {label}
      </label>

      {isPassword && showPassword && (
        <Eye
          className="absolute right-4 top-4 text-gray-500"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        />
      )}

      {isPassword && !showPassword && (
        <EyeClosed
          className="absolute right-4 top-4 text-gray-500"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        />
      )}

      <input
        className="border border-gray-300 p-3 rounded-md focus:border-primary-dark 
                focus:outline-none focus:placeholder:opacity-0 w-full"
        type={showPassword && isPassword ? "text" : type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
}

interface ActionMessage {
  message: string;
  error: string;
  status: number;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  formData.set("email", (formData.get("email") as string).toLowerCase());
  const error = validateInput(formData);

  if (error) {
    return error;
  }
  console.log(formData);

  const response = await fetch("http://localhost/api/login", {
    method: "POST",
    body: formData,
  });

  if (response.status !== 201) {
    return {
      status: response.status,
      message: "",
      error:
        response.status === 404
          ? "ไม่พบข้อมูล"
          : response.status === 401
          ? "อีเมลหรือรหัสผ่านไม่ถูกต้อง"
          : "เกิดข้อผิดพลาด",
    };
  }
  console.log(response);

  return redirect("/successful-register");
}

function validateInput(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  if (
    !new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(
      email as string
    )
  ) {
    return {
      message: "",
      error: "กรุณากรอกอีเมล",
      status: 400,
    };
  }
  if (!password) {
    return {
      message: "",
      error: "กรุณากรอกรหัสผ่าน",
      status: 400,
    };
  }
  return null;
}

async function googleSignIn() {
  const response = await fetch("http://localhost/api/auth/google", {
    method: "GET",
  });
  const json = await response.json();
  window.location.href = json.url as string;
}
