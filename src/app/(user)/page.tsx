import { FormSendCode } from "@/components/form";

export default function HomePage() {
    return (
        <div className="flex flex-col justify-center items-center gap-8 h-dvh">
            <div className="flex flex-col items-center gap-4">
                <h1 className="font-medium text-4xl">Ingresa el ID</h1>
                <p>Ingresa el ID que ha mandado el anfitrión.</p>
            </div>
            <FormSendCode />
        </div>
    );
}
