import Icon from "site/components/ui/Icon.tsx";

interface Field {
    label: string;
    type: "text" | "email" | "tel";
    placeholder: string;
}

interface Props {
    title?: string;
    submitText?: string;
    attachText?: string;
    formCareers?: Field[];
}

export default function FormCareers({
    title = "Candidatar a esta vaga",
    submitText = "Enviar Inscrição",
    attachText = "Anexar Currículo",
    formCareers,
}: Props) {
    const fields: Field[] = formCareers ?? [
        { label: "Primeiro nome", type: "text", placeholder: "nome" },
        { label: "Sobrenome", type: "text", placeholder: "Sobrenome" },
        { label: "Email", type: "email", placeholder: "Email" },
        { label: "Telefone", type: "tel", placeholder: "(11) 99999-9999" },
        {
            label: "Localização (Cidade)",
            type: "text",
            placeholder: "São Paulo",
        },
    ];

    return (
        <div class="w-full border-t-2 border-accent pt-4">
            <div class="overflow-hidden max-w-[940px] mx-auto">
                <div class="w-full max-w-[600px] rounded-lg shadow-md p-4 md:p-8">
                    <h2 class="text-2xl font-bold mb-6 text-left">{title}</h2>
                    <form class="space-y-6">
                        {fields.map(({ label, type, placeholder }, i) => (
                            <div key={i} class="w-full">
                                <label class="block mb-1 text-sm font-medium text-base-content">
                                    {label}
                                    <span class="text-error-content">*</span>
                                </label>
                                <div class="relative group">
                                    <input
                                        type={type}
                                        placeholder={placeholder}
                                        class="p-3 text-sm w-full h-[56px] bg-secondary-content text-secondary border-secondary/30 focus:outline-none"
                                    />
                                    <span class="absolute bottom-0 left-0 h-[2px] w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left rounded-sm" />
                                </div>
                            </div>
                        ))}

                        <div>
                            <a class="flex justify-center gap-2 w-full font-medium btn btn-accent px-7">
                                {attachText}
                                <Icon
                                    size={20}
                                    id="Paperclip"
                                    strokeWidth={3}
                                />
                            </a>
                        </div>

                        <button
                            type="submit"
                            class="flex justify-center gap-2 w-full font-medium btn btn-primary px-7"
                        >
                            {submitText}
                            <Icon
                                size={20}
                                id="ArrowLeftGreen"
                                strokeWidth={3}
                            />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
