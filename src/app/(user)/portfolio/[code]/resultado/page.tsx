import Image from "next/image";
import styles from "./ResultPage.module.css";

export default function ResultPage() {
    return (
        <div className="pt-[84px] max-w-7xl m-auto">
            <div className="w-2/3">
                <div className="bg-[#7D33DC] p-20 rounded-3xl">
                    <p>5 estrellas</p>
                    <p className="font-bold text-4xl my-4">Resumen</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla interdum non metus et commodo. Aliquam egestas
                        magna quis odio varius, a pharetra dolor facilisis.
                    </p>
                </div>
            </div>
        </div>
    );
}
