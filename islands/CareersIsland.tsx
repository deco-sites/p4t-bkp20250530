import { useState } from "preact/hooks";
import WaveCareers from "../sections/careers/waveCareers/WaveCareers.tsx";
import SearchCareers from "site/sections/careers/searchCareers/SearchCareers.tsx";
import DescriptionCareers from "../sections/careers/descriptionCareers/DescriptionCareers.tsx";
import FormCareers from "../sections/careers/formCareers/FormCareers.tsx";

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

interface Field {
    label: string;
    type: "text" | "email" | "tel";
    placeholder: string;
}

interface FieldProps {
    title?: string;
    submitText?: string;
    attachText?: string;
    inputValue?: Field[];
}

interface Job {
    title?: string;
    location?: string;
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

export default function CareersIsland(
    { searchText, greenBox, title, jobs, vacancyTitle, formCareers }: Props,
) {
    const [search, setSearch] = useState("");
    const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    const handleInputChange = (e: Event) => {
        const input = e.currentTarget as HTMLInputElement;
        const value = input.value;

        setSearch(value);

        if (value.length > 2) {
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (jobTitle: string) => {
        setSearch(jobTitle);
        setFilteredJobs(
            jobs.filter((job) =>
                job.title?.toLowerCase().includes(jobTitle.toLowerCase())
            ),
        );
        setShowSuggestions(false);
    };

    const handleJobClick = (jobTitle: string) => {
        const job = jobs.find((j) =>
            j.title?.toLowerCase().includes(jobTitle.toLowerCase())
        );
        if (job) {
            setSelectedJob(job);
        }
    };

    const handleBack = () => {
        setSelectedJob(null);
        setSearch("");
        setFilteredJobs(jobs);
    };

    if (selectedJob) {
        return (
            <section class="pb-12 pt-16">
                <div class="max-w-[940px] mx-auto">
                    <button
                        class="text-primary font-medium md:ml-8 ml-4"
                        onClick={handleBack}
                    >
                        {vacancyTitle?.return}
                    </button>
                </div>
                <DescriptionCareers
                    vacancy={selectedJob}
                    vacancyTitle={vacancyTitle}
                />

                <FormCareers
                    title={formCareers?.title ?? "Candidatar a esta vaga"}
                    submitText={formCareers?.submitText ?? "Enviar Inscrição"}
                    attachText={formCareers?.attachText ?? "Anexar Currículo"}
                    formCareers={formCareers?.inputValue}
                />
            </section>
        );
    }

    return (
        <>
            <SearchCareers
                searchText={searchText}
                greenBox={greenBox}
                jobs={filteredJobs}
                search={search}
                showSuggestions={showSuggestions}
                onSearchChange={handleInputChange}
                onJobClick={handleSuggestionClick}
            />
            <WaveCareers
                title={title}
                jobs={filteredJobs}
                onJobClick={handleJobClick}
            />
        </>
    );
}
