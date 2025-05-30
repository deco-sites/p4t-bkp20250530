interface Job {
    title?: string;
    location?: string;
    about?: string;
    responsibilities?: string[];
    requiredSkills?: string[];
    niceToHave?: string[];
}

interface Props {
    title?: string;
    /**
     * @description
     */
    jobs?: Job[];
    onJobClick?: (title: string) => void;
}

export default function WaveCareers({
    title,
    jobs = [],
    onJobClick,
}: Props) {
    return (
        <div class="max-w-[1448px] mx-auto w-full md:px-[55px] px-4 pt-8">
            <h2 class="md:text-[38px] text-3xl text-secondary font-normal text-left mb-8">
                {jobs.length} {title}
            </h2>
            <div className="space-y-4">
                {jobs.map((job) => (
                    <div
                        className="p-6 bg-accent transition-all duration-200 hover:bg-accent/60 hover:shadow-md cursor-pointer"
                        onClick={() => onJobClick?.(job.title || "")}
                    >
                        <h3 className="md:text-2xl text-lg text-secondary font-medium mb-2">
                            {job.title}
                        </h3>
                        <p className="md:text-base text-xs font-normal text-base-300">
                            {job.location}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
