"use client";

import Label from "../../components/Label";
import Image from "next/image";
import { useFormState } from "react-dom";
import { handleLogin } from "./actions";

let isError: boolean = false;

export function Login() {
  const [state, formAction] = useFormState(handleLogin, void {});

  // If login is successful, redirect
  if (state?.error) {
    isError = true;
  } else {
    isError = false;
  }

  return (
    <div
      id="logincontainer"
      style={{
        backgroundColor: "#DFDFE1",
        overflow: "auto",
        minHeight: "100vh",
      }}
    >
      <div className="contentwrap container p-0">
        <h1 className="row g-0">
          <Image
            src="/assets/Images/00_login_page_top_mms.gif"
            alt="MMS Finance"
            fill
            sizes="(max-width: 768px) 100vw, 583px"
            unoptimized
          />
        </h1>
        <div className="column">
          <Image
            src="/assets/Images/00_login_page_globe.jpg"
            alt=""
            width={216}
            height={160}
          />
        </div>

        <div className="float-start" style={{ width: "280px" }}>
          <form action={formAction}>
            Forgot your password? click here
            <div className="mt-4" style={{ color: "red" }}>
              <span>{state?.error || ""}</span>
            </div>
            <p></p>
            <table cellSpacing="0.5px">
              <tbody>
                <tr>
                  <td>
                    <Label Text="Username" />
                  </td>
                  <td>
                    <input
                      name="username"
                      id="username"
                      type="text"
                      className="d-block float-start"
                      style={{ width: "120px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Label Text="Password" />
                  </td>
                  <td>
                    <input
                      name="password"
                      id="password"
                      type="password"
                      className="d-block float-start"
                      style={{ width: "120px" }}
                    />
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
                    <button type="submit">
                      <img src="/assets/Images/login.jpg" alt="login" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <div
          className="clearfix"
          style={{
            backgroundColor: "#DFDFE1",
            fontSize: "10px",
            color: "#777777",
            paddingTop: "0.5rem",
          }}
        >
          {/* Copyright © 2009 Mitrais */}
        </div>
      </div>
    </div>
  );
}

export default Login;
