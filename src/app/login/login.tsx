// import { gql, useMutation } from "@apollo/client";
// import React, { useState } from "react";
import Label from "../../components/Label";
// import { signIn } from "@/auth";
import { redirect } from "next/navigation"
import { signIn, auth, providerMap } from "@/auth"
import { AuthError } from "next-auth"

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
                        try {
                            await signIn("credentials", formdata);
                        } catch (error) {
                            if (error instanceof AuthError) {
                                console.log("login error");
                            }
                            throw error
                        }
                        // await signIn("credentials", formdata)
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