import Label from "../../components/Label";
import { redirect } from "next/navigation";
import { signIn } from "../../lib/auth";
import Image from "next/image";

let isError: boolean = false;

export function Login() {
  return (
    <div id="logincontainer" className="bg-[#DFDFE1] overflow-auto min-h-screen">
      <div className="w-[583px] my-8 mx-auto bg-[#F2F2F2]">
        <h1 className="m-0">
          <Image
            src="/assets/Images/00_login_page_top_mms.gif"
            alt="MMS Finance"
            width={200}
            height={60}
            priority
          />
        </h1>
        <div className="float-left w-[280px]">
          <Image
            src="/assets/Images/00_login_page_globe.jpg"
            alt=""
            width={300}
            height={300}
          />
        </div>

        <div className="float-left w-[280px]">
          <form
            action={async (formdata) => {
              "use server";
              let id: boolean = false;
              try {
                const respo = await signIn("credentials", {
                  username: formdata.get("username"),
                  password: formdata.get("password"),
                  redirect: false,
                });
              } catch (error) {
                console.error("Login error:", error);
                redirect("/error");
              } finally {
                redirect("/");
              }
            }}
          >
            Forgot your password? click here
            <div className="mt-6">
              <Label />
            </div>
            <p></p>
            <table cellSpacing="0.5px">
              <tbody>
                <tr>
                  <td>
                    <Label Text="Username" />
                  </td>
                  <td>
                    <input name="username" id="username" type="text" className="w-[120px] block float-left" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Label Text="Password" />
                  </td>
                  <td>
                    <input name="password" id="password" type="password" className="w-[120px] block float-left" />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button type="submit" className="w-[71px] h-[21px]">
                      <Image
                        src="/assets/Images/login.jpg"
                        width={71}
                        height={21}
                        alt="login"
                      />
                    </button>
                  </td>
                </tr>
                {isError && (
                  <tr>
                    <td></td>
                    <td>Invalid Credential</td>
                  </tr>
                )}
              </tbody>
            </table>
          </form>
        </div>
        <div className="bg-[#DFDFE1] text-[10px] text-[#777777] pt-2 clear-both">{/* Copyright © 2009 Mitrais */}</div>
      </div>
    </div>
  );
}

export default Login;
