import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Link, redirect, useFetcher, type ActionFunctionArgs } from "react-router";

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

    const response = await fetch("http://localhost/api/register", {
        method: "POST",
        body: formData,
    });

    if (response.status !== 201) {
        return {
            status: response.status,
            message: "",
            error: response.status === 422 ? "อีเมลนี้ถูกใช้ไปแล้ว": "เกิดข้อผิดพลาด",
        };
    }

    return redirect("/successful-register");
}

function validateInput(formData : FormData) {
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const password = formData.get("password") as string;
    const password_confirmation = formData.get("password_confirmation") as string;
    if (!new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email as string)) {
        return {
            message: "",
            error: "กรุณากรอกอีเมล",
            status: 400,
        };
    }
    if ((!new RegExp(/^[ก-๙a-zA-Z\s]+$/).test(name)) ||  name.length < 3) {
        return {
            message: "",
            error: "กรุณากรอกชื่อ-สกุล",
            status: 400,
        }
    }
    if (!new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/).test(password)) {
        return {
            message: "",
            error: "กรุณากรอกรหัสผ่าน 6 ตัวขึ้นไป ประกอบด้วยตัวเล็ก ตัวใหญ่ และตัวเลข",
            status: 400,
        }
    }
    if (password !== password_confirmation) {
        return {
            message: "",
            error: "รหัสผ่านไม่ตรงกัน",
            status: 400,
        }
    }
    return null;
}



export default function Register() {
  return (
    <div className="h-screen flex flex-col justify-end bg-primary-dark-50 overflow-hidden">
      <div className="flex justify-center absolute top-[5%] w-full">
        <img
          src="/register-logo.png"
          alt="logo"
          className="h-60 w-auto"
        />
      </div>

      <div className="grid grid-cols-1 justify-center items-center z-50">
        <div className="h-full col-start-1 row-start-1 bg-gray-100 rounded-t-[40px]">
          <p className="mt-4 text-center text-3xl">
          ลงทะเบียน
          </p>
        </div>
        <div className="col-start-1 row-start-1 h-full">
          <div className="mt-16 h-full">
            <FetcherForm />
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
      className="flex flex-col bg-white border w-full shadow-lg shadow-black/80 rounded-t-[40px] h-full"
    >
      <div
        className="flex flex-col items-center justify-center h-full w-full p-16 pt-8
            [&>div]:w-full gap-6"
      >
        <InputForm name="email" type="text" label="อีเมล" placeholder="อีเมล" />
        <InputForm
          name="name"
          type="text"
          label="ชื่อ-สกุล"
          placeholder="ชื่อ-สกุล"
        />
        <InputForm
          name="phone"
          type="text"
          label="เบอร์โทร"
          placeholder="เบอร์โทร"
        />
        <InputForm
          name="password"
          type="password"
          label="รหัสผ่าน"
          placeholder="รหัสผ่าน"
        />
        <InputForm
          name="password_confirmation"
          type="password"
          label="รหัสผ่านอีกครั้ง"
          placeholder="รหัสผ่านอีกครั้ง"
        />

        <div className="flex flex-col w-full gap-4 justify-center items-center text-center">
            {fetcher.data?.error && <p className="w-full text-red-500 border border-red-500 bg-red-100 p-1 rounded-md">{fetcher.data.error}</p>}
        </div>
       

        <button
          type="submit"
          className="bg-primary-dark text-white text-xl p-4 rounded-full w-full"
        >
          สมัครสมาชิก
        </button>

        <p>
          <span className="text-gray-500">มีบัญชีอยู่แล้ว? </span>

          <Link to="/login" prefetch="viewport" className="text-primary-dark">
            เข้าสู่ระบบ
          </Link>
        </p>
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
    <div className="flex flex-col relative [&:has(input:focus)>label]:opacity-100">
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
            focus:outline-none focus:placeholder:opacity-0"
        type={showPassword && isPassword ? "text" : type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
}
