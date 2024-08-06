"use client";

import { Button, InputText } from "@/components/formElements";
import { Divider } from "@/components/general";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="bg-[#2C282E] min-h-screen grid grid-cols-2 items-center">
            <div className="bg-[linear-gradient(151.79deg,_#4A47D8_8.44%,_#7632CC_89.1%)] pl-60 min-h-[800px] flex flex-col justify-end py-8">
                <p className="text-[128px] font-extrabold">MiduAI</p>
                <p className="text-[64px] font-medium">ToughtStream</p>
                <p className="font-medium">Donde tu opinión cuenta.</p>
            </div>
            <div className="px-40 flex flex-col gap-8">
                <div className="">
                    <h1 className="text-[40px] font-medium">Comienza ahora</h1>
                    <p className="font-medium">
                        Accede a tu cuenta colocando tus credenciales.
                    </p>
                </div>
                <div className="flex gap-x-8">
                    <Button
                        icon="https://ik.imagekit.io/noj6wnuqy/webPortfolioOnTrial/google.svg"
                        text="Log in with Google"
                        variant="bordered"
                        onClick={() => {signIn("google")}}
                    />
                    <Button
                        icon="https://ik.imagekit.io/noj6wnuqy/webPortfolioOnTrial/twitch.svg"
                        text="Log in with Twitch"
                        variant="bordered"
                        onClick={() => {signIn("twitch")}}
                    />
                </div>
                {/* <Divider />
                <div className="flex flex-col gap-y-5">
                    <InputText
                        name="email"
                        label="Email"
                        placeholder="Escribir aquí"
                    />
                    <InputText
                        name="password"
                        type="password"
                        label="Contraseña"
                        placeholder="********"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <Button
                        text="Iniciar sesión"
                        bgColor="linear-gradient(151.79deg, #4A47D8 8.44%, #7632CC 89.1%)"
                    />

                    <p className="text-center">
                        ¿No tienes una cuenta?{" "}
                        <Link
                            href={"/registro"}
                            className="underline underline-offset-4"
                        >
                            Regístrate aquí.
                        </Link>
                    </p>
                </div> */}
            </div>
        </div>
    );
}
