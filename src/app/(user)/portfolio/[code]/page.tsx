import { Button, InputStart } from "@/components/formElements";
import styles from "./PortfolioPage.module.css";
import Image from "next/image";

export default function PortfolioPage() {
    return (
        <div className="bg-[#2C282E] min-h-screen grid grid-cols-2 items-center">
            <div className="bg-[linear-gradient(151.79deg,_#4A47D8_8.44%,_#7632CC_89.1%)] pl-60 min-h-[800px] flex flex-col items-start justify-end py-8 gap-4">
                <p className="flex items-center gap-2">
                    <span className="aspect-square bg-white text-[#7D33DC] rounded-full p-4 text-2xl leading-none">
                        04
                    </span>
                    :
                    <span className="aspect-square bg-white text-[#7D33DC] rounded-full p-4 text-2xl leading-none">
                        04
                    </span>
                    :
                    <span className="aspect-square bg-white text-[#7D33DC] rounded-full p-4 text-2xl leading-none">
                        04
                    </span>
                </p>
                <p className="text-[128px] leading-none font-extrabold">
                    Portafolio Andrés
                </p>
                <p className="font-medium">
                    Recuerda hacer críticas constructivas :)
                </p>
                <div>
                    <Button text={"Ver proyecto"} bgColor="#2C282E" />
                </div>
            </div>
            <div className="px-40 flex flex-col gap-8">
                {/* <InputStart />
                <div className="rounded-xl bg-white relative overflow-hidden">
                    <textarea
                        rows={4}
                        placeholder="Escribe tu feedback"
                        className="text-black w-full p-4 outline-none resize-none"
                    />
                    <div className="bg-[linear-gradient(151.79deg,_#4A47D8_8.44%,_#7632CC_89.1%)] absolute bottom-4 right-4 rounded-full p-2">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.8807 5.60656L8.38973 7.77022L8.38972 7.77022C6.75626 8.31471 5.93953 8.58695 5.61422 8.89956C4.79526 9.68655 4.79526 10.9968 5.61422 11.7837C5.93953 12.0963 6.75626 12.3686 8.38972 12.9131L8.38973 12.9131C8.71883 13.0228 8.88338 13.0776 9.02932 13.1548C9.3843 13.3425 9.67455 13.6328 9.86229 13.9878C9.93947 14.1337 9.99432 14.2983 10.104 14.6274C10.6485 16.2608 10.9207 17.0776 11.2334 17.4029C12.0203 18.2218 13.3305 18.2218 14.1175 17.4029C14.4301 17.0776 14.7024 16.2608 15.2469 14.6274L15.2469 14.6274L17.4105 8.13638C17.9625 6.48059 18.2384 5.6527 17.8014 5.21568C17.3644 4.77866 16.5365 5.05463 14.8807 5.60656Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div> */}
                <div className="mt-8 flex flex-col gap-8">
                    <div className="flex gap-4">
                        <div>
                            <figure className="border-2 border-[#7D33DC] rounded-full p-1 w-[42px] h-[42px]">
                                <Image
                                    src={
                                        "https://ik.imagekit.io/noj6wnuqy/webPortfolioOnTrial/Avatar.png"
                                    }
                                    alt={""}
                                    width={42}
                                    height={42}
                                />
                            </figure>
                        </div>
                        <div className="">
                            <p>13:45</p>
                            <div className="bg-[#2C314F] rounded-2xl rounded-tl-none p-8">
                                <p className="text-white">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nulla interdum non metus et
                                    commodo. Aliquam egestas magna quis odio
                                    varius, a pharetra dolor facilisis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <figure className="border-2 border-[#7D33DC] rounded-full p-1 w-[42px] h-[42px]">
                                <Image
                                    src={
                                        "https://ik.imagekit.io/noj6wnuqy/webPortfolioOnTrial/Avatar.png"
                                    }
                                    alt={""}
                                    width={42}
                                    height={42}
                                />
                            </figure>
                        </div>
                        <div className="">
                            <p>13:45</p>
                            <div className="bg-[#2C314F] rounded-2xl rounded-tl-none p-8">
                                <p className="text-white">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nulla interdum non metus et
                                    commodo. Aliquam egestas magna quis odio
                                    varius, a pharetra dolor facilisis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
