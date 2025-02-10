// import { gql, useMutation } from "@apollo/client";
// import React, { useState } from "react";
import Label from "../../components/Label";
// import { signIn } from "@/auth";
import { redirect } from "next/navigation"
import { signIn } from "@/auth"
import { AuthError } from "next-auth"

let isError: boolean = false;

export function Login() {

    return (
        <div id='logincontainer'>
            <div className="contentwrap">
                <h1>
                    <img src="../assets/Images/00_login_page_top_mms.gif" alt="MMS Finance" />
                </h1>
                <div className="column">
                    <img src="../assets/Images/00_login_page_globe.jpg" alt="" />
                </div>

                <div className="column">
                    <form action={async (formdata) => {
                        "use server"
                        let id: boolean = false;
                        try {
                            const respo = await signIn("credentials", {
                                username: formdata.get("username"),
                                password: formdata.get("password"),
                                redirect: false,
                            });
                        } catch (error) {
                            console.log(error);
                            redirect('/error');
                        } finally {
                            redirect('/');

                            // if (id) {
                            //     redirect('/');
                            // }
                        }
                    }}>
                        Forgot your password? click here
                        <div className="information">
                            {/* <%=MessageFactory.GetMessage("MFSSec0007", MessageType.Information).Value %>, 
                <%=Html.ActionLink(MessageFactory.GetMessage("MFS0078", MessageType.Information).Value, "RequestChangePassword","ChangePassword")%>                     */}
                            <Label />
                        </div>
                        <p></p>
                        <table cellSpacing="0.5px">
                            <tbody>

                                <tr>
                                    <td><Label Text="Username" /></td>
                                    <td><input name="username" id="username" type="text" ></input></td>
                                </tr>
                                <tr>
                                    <td><Label Text="Password" /></td>
                                    <td><input name="password" id="password" type="password" ></input></td>
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
                                    <td><input type="image" value="Login" src="../assets/Images/login.jpg" style={{ width: 71, height: 21 }} alt="login" /></td>
                                </tr>
                                {isError && (<tr>
                                    <td></td>
                                    <td>Invalid Credential</td>
                                </tr>)
                                }

                            </tbody>
                        </table>
                    </form>
                </div>
                <div className="footer clear">
                    {/* <%=FieldDictionaryFactory.GetFieldDictionary("MFSCopyright").FieldName %> &copy; 2009 Mitrais - <%= Html.DisplayVersion() %> <%=FieldDictionaryFactory.GetFieldDictionary("MFSBuildNumber").FieldName %>: <%= Html.DisplayBuildNumber() %> | <%=FieldDictionaryFactory.GetFieldDictionary("MFSBuildDate").FieldName%>: <%= Html.DisplayBuildDate() %> */}
                </div>
            </div>
        </div>
    );
}

export default Login;