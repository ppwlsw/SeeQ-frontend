import { Link, useFetcher } from "react-router";

export default function SuccessfulRegister() {
  const fetcher = useFetcher();
  return (
    <div className="grid grid-cols-1 items-center h-svh bg-white">
      <div className="flex flex-col justify-center items-center w-svw h-svh col-start-1 row-start-1">
        <img
          src="/public/successful-register-bg.png"
          alt="logo"
          className="h-72 w-auto"
        />
      </div> 
      <div className="flex flex-col justify-center items-center w-svw h-svh col-start-1 row-start-1">
        <div className="flex flex-col justify-center items-center gap-6 mt-96 p-8">
          <p
            className="text-green-500 w-fit text-xm bg-green-100 text-center p-1 
                  rounded-md border border-green-500"
          >
            ระบบได้ทำการส่งอีเมลยืนยันแล้ว
            กรุณายืนยันอีเมลของท่านเพื่อใช้ในการเข้าสู่ระบบ
          </p>
          <Link to="/login" prefetch="viewport" className="text-white text-center text-xl bg-primary-dark w-full p-4 rounded-md">
            ตกลง
          </Link>
        </div>
      </div>
    </div>
  );
}
