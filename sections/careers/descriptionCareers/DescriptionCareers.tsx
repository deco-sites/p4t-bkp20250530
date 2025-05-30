import Icon from "site/components/ui/Icon.tsx";

interface Job {
    title?: string;
    location?: string;
    about?: string;
    responsibilities?: string[];
    requiredSkills?: string[];
    niceToHave?: string[];
}

interface VacancyTitle {
    apply: string;
    challenge: string;
    yourRole: string;
    requiredSkills: string;
    requiredSkillsPrerequisites: string;
    niceToHave: string;
}

interface Props {
    vacancyTitle?: VacancyTitle;
    vacancy: Job;
}

export default function DescriptionCareers({ vacancy, vacancyTitle }: Props) {
    const {
        title = "Analytics Engineer Sênior",
        location = "São Paulo, Brasil",
        about =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisl consectetur nisl, eu consectetur nisl nisl euismod nisi.",
        responsibilities = [],
        requiredSkills = [],
        niceToHave = [],
    } = vacancy;

    return (
        <div class="overflow-hidden max-w-[940px] mx-auto">
            <div class="p-4 md:p-8">
                <div class="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-11">
                    <div>
                        <h1 class="text-3xl md:text-[45px] font-normal text-secondary mb-6">
                            {title}
                        </h1>
                        <p class="text-primary gap-2 font-medium flex items-center">
                            <Icon size={20} id="MapPin" strokeWidth={3} />
                            {location}
                        </p>
                    </div>

                    <a
                        href="#form-careers"
                        class="w-full sm:max-w-[119px] font-medium btn btn-primary px-6 mt-4 md:mt-0 md:ml-4"
                    >
                        {vacancyTitle?.apply}
                    </a>
                </div>

                <Section
                    title={vacancyTitle?.challenge || ""}
                    content={about}
                />

                {responsibilities.length > 0 && (
                    <Section
                        title={vacancyTitle?.yourRole || ""}
                        list={responsibilities}
                    />
                )}

                {(requiredSkills.length > 0 || niceToHave.length > 0) && (
                    <section class="mb-8">
                        <h2 class="text-[27px] text-secondary font-medium text-sec mb-4">
                            {vacancyTitle?.requiredSkills}
                        </h2>

                        {requiredSkills.length > 0 && (
                            <div class="mb-6">
                                <h3 class="text-[19px] text-secondary font-semibold mb-2">
                                    {vacancyTitle?.requiredSkillsPrerequisites}
                                </h3>
                                <ul class="list-disc list-inside space-y-2 text-base-300">
                                    {requiredSkills.map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {niceToHave.length > 0 && (
                            <div id="form-careers">
                                <h3 class="text-[19px] text-secondary font-semibold mb-2">
                                    {vacancyTitle?.niceToHave}
                                </h3>
                                <ul class="list-disc list-inside space-y-2 text-base-300">
                                    {niceToHave.map((item) => <li>{item}</li>)}
                                </ul>
                            </div>
                        )}
                    </section>
                )}
            </div>
        </div>
    );
}

function Section({
    title,
    content,
    list,
}: {
    title: string;
    content?: string;
    list?: string[];
}) {
    return (
        <section class="mb-8">
            <h2 class="text-[27px] text-secondary font-medium mb-4">{title}</h2>
            {content && <p class="text-base-300">{content}</p>}
            {list && (
                <ul class="list-disc list-inside space-y-2 text-base-300">
                    {list.map((item) => <li>{item}</li>)}
                </ul>
            )}
        </section>
    );
}
