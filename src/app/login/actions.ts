"use server";
import { signIn } from "../../lib/auth";
import { auth } from "../../lib/auth";
import { AuthResponse } from "@/services/loginService";
import { redirect } from "next/navigation";

export async function handleLogin(prevState: any, formData: FormData) {
  try {
    const respo = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });

  } catch (errorEx: AuthResponse | any) {
    return {
      error: errorEx.cause.err.message || "An error occurred during login",
      isSuccess: false,
    };
  }
  redirect("/");
}

export async function checkAuth() {
  const session = await auth();
  return session;
}
