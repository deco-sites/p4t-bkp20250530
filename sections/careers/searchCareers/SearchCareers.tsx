import Icon from "site/components/ui/Icon.tsx";

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
    title?: string;
    location?: string;
    about?: string;
    responsibilities?: string[];
    requiredSkills?: string[];
    niceToHave?: string[];
}

interface Props {
    searchText: Searchtext;
    greenBox: GreenBox;
    jobs: Job[];
    search: string;
    showSuggestions: boolean;
    onSearchChange: (e: Event) => void;
    onJobClick: (title: string) => void;
}

export default function SearchCareers({
    searchText,
    greenBox,
    jobs = [],
    search = "",
    showSuggestions,
    onSearchChange,
    onJobClick,
}: Props) {
    const filteredJobs = search.length > 2
        ? jobs.filter((job) =>
            job.title?.toLowerCase().includes(search.toLowerCase())
        )
        : [];

    const Suggestions = showSuggestions && filteredJobs.length > 0 && (
        <div class="absolute top-full left-0 right-0 bg-base-100 shadow-lg z-10 mt-2 rounded-lg max-h-60 overflow-y-auto">
            {filteredJobs.map((job) => (
                <div
                    class="p-3 hover:bg-base-200 cursor-pointer"
                    onClick={() => onJobClick(job.title || "")}
                >
                    <div class="font-medium">{job.title}</div>
                </div>
            ))}
        </div>
    );

    return (
        <header class="drawer-content max-w-[1448px] mx-auto w-full h-full md:px-[55px] px-4 pt-20">
            <div class="flex flex-col md:flex-row justify-between gap-6 pb-0 md:pb-2 xl:pb-0">
                <div class="w-full text-left">
                    <h1 class="text-3xl md:text-[65px] leading-normal text-secondary font-normal mb-4">
                        {searchText.title}
                    </h1>
                    <p class="text-sm md:text-xl font-normal md:font-medium text-secondary">
                        {searchText.subtitle}
                    </p>
                </div>

                <div class="relative w-full md:hidden group mt-4">
                    <Icon
                        class="absolute left-3 top-1/2 -translate-y-1/2 text-base-content pointer-events-none"
                        size={24}
                        id="SearchIcon"
                        strokeWidth={3}
                    />
                    <input
                        type="text"
                        placeholder={searchText.placeholder}
                        class="p-3 pl-12 text-sm w-full h-[56px] min-w-[225px] bg-accent text-secondary border-secondary/30 focus:outline-none"
                        onInput={onSearchChange}
                        value={search}
                    />
                    <span class="absolute bottom-0 left-0 h-[2px] w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left" />
                    {Suggestions}
                </div>

                <div class="w-full md:w-auto md:ml-auto">
                    <div class="max-w-[340px] bg-success p-6 m-auto md:m-0">
                        <h2 class="text-2xl mb-4 font-medium text-secondary">
                            {greenBox.title}
                        </h2>
                        <p class="text-base-300">
                            {greenBox.subtitle}
                        </p>
                        <a class="flex items-center gap-3 w-full text-primary font-medium mt-6">
                            {greenBox.ulrLabel}{" "}
                            <Icon
                                size={20}
                                id="ArrowLeftGreenBox"
                                strokeWidth={3}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div class="relative w-full hidden md:block xl:max-w-[800px] group">
                <Icon
                    class="absolute left-3 top-1/2 -translate-y-1/2 text-base-content pointer-events-none"
                    size={24}
                    id="SearchIcon"
                    strokeWidth={3}
                />
                <input
                    type="text"
                    placeholder={searchText.placeholder}
                    class="p-3 pl-12 text-sm w-full h-[56px] min-w-[225px] bg-accent text-secondary border-secondary/30 focus:outline-none"
                    onInput={onSearchChange}
                    value={search}
                />
                <span class="absolute bottom-0 left-0 h-[2px] w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left" />
                {Suggestions}
            </div>
        </header>
    );
}
