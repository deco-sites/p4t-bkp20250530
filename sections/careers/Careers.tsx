import CareersIsland from "site/islands/CareersIsland.tsx";

interface Searchtext {
    title?: string;
    subtitle?: string;
    placeholder?: string;
}

interface GreenBox {
    title?: string;
    subtitle?: string;
    ulrLabel?: string;
}

interface Job {
    title: string;
    location: string;
    about?: string;
    responsibilities?: string[];
    requiredSkills?: string[];
    niceToHave?: string[];
}

interface VacancyTitle {
    return: string;
    apply: string;
    challenge: string;
    yourRole: string;
    requiredSkills: string;
    requiredSkillsPrerequisites: string;
    niceToHave: string;
}

interface Field {
    label: string;
    type: "text" | "email" | "tel";
    placeholder: string;
}

interface FieldProps {
    title?: string;
    attachText?: string;
    submitText?: string;
    inputValue?: Field[];
}

interface Props {
    searchText: Searchtext;
    greenBox: GreenBox;
    title: string;
    /**
     * @description
     */
    jobs: Job[];
    vacancyTitle?: VacancyTitle;
    formCareers?: FieldProps;
}

export default function Careers(
    { searchText, greenBox, title, jobs, vacancyTitle, formCareers }: Props,
) {
    return (
        <section class="py-12">
            <CareersIsland
                searchText={searchText}
                greenBox={greenBox}
                title={title}
                jobs={jobs}
                vacancyTitle={vacancyTitle}
                formCareers={formCareers}
            />
        </section>
    );
}
