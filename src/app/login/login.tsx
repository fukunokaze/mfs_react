import Label from "../../components/Label";
import { redirect } from "next/navigation";
import { signIn } from "../../lib/auth";
import Image from "next/image";

let isError: boolean = false;

export function Login() {
  return (
    <div id="logincontainer" style={{ backgroundColor: '#DFDFE1', overflow: 'auto', minHeight: '100vh' }}>
      <div style={{ width: '583px', margin: '2rem auto', backgroundColor: '#F2F2F2' }}>
        <h1 style={{ margin: 0 }}>
          <Image
            src="/assets/Images/00_login_page_top_mms.gif"
            alt="MMS Finance"
            width={200}
            height={60}
            priority
          />
        </h1>
        <div className="float-start" style={{ width: '280px' }}>
          <Image
            src="/assets/Images/00_login_page_globe.jpg"
            alt=""
            width={300}
            height={300}
          />
        </div>

        <div className="float-start" style={{ width: '280px' }}>
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
            <div className="mt-4">
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
                    <input name="username" id="username" type="text" className="d-block float-start" style={{ width: '120px' }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Label Text="Password" />
                  </td>
                  <td>
                    <input name="password" id="password" type="password" className="d-block float-start" style={{ width: '120px' }} />
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
                    <button type="submit" style={{ width: '71px', height: '21px' }}>
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
        <div className="clearfix" style={{ backgroundColor: '#DFDFE1', fontSize: '10px', color: '#777777', paddingTop: '0.5rem' }}>{/* Copyright © 2009 Mitrais */}</div>
      </div>
    </div>
  );
}

export default Login;
