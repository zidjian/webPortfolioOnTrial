interface Props {
    name: string;
    type?: "text" | "password";
    label: string;
    placeholder: string;
}

export function InputText({ name, type = "text", label, placeholder }: Props) {
    return (
        <div className="flex flex-col w-full">
            <label htmlFor={name} className="text-white">
                {label}
            </label>
            <input
                type={type}
                name={name}
                className="border border-[#5E5B5F] bg-transparent rounded-lg focus:border-[#7D33DC] hover:border-[#7D33DC] px-5 py-3 outline-none"
                placeholder={placeholder}
            />
            <p className="text-red-600">Este campo es obligatorio.</p>
        </div>
    );
}
