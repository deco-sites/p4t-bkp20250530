import { useEffect, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";
import Icon from "site/components/ui/Icon.tsx";

export default function LanguageSelector() {
    const [open, setOpen] = useState(false);
    const selectedLang = useSignal("Português");

    const [dropdownPosition, setDropdownPosition] = useState<
        { top: string; left: string }
    >({
        top: "calc(100% + 10px)",
        left: "50%",
    });

    useEffect(() => {
        const handleResize = () => {
            const isLargeScreen = window.innerWidth >= 1024;

            if (!open) return;

            if (!isLargeScreen) {
                setDropdownPosition((prev) => ({
                    ...prev,
                    top: "",
                }));
            } else {
                setDropdownPosition((prev) => ({
                    ...prev,
                    top: "9%",
                }));
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [open]);

    return (
        <div class="relative m-auto w-full lg:w-auto lg:m-0">
            <button
                onClick={() => setOpen(!open)}
                class="btn btn-sm btn-accent font-medium border-none bg-transparent text-secondary hover:bg-accent w-full lg:w-[158px] lg:h-[48px] min-h-12"
            >
                <Icon id="EarthLine" size={24} strokeWidth={0.1} />
                <span class="text-sm">{selectedLang.value}</span>{" "}
                <Icon id="DropDownArrows" size={24} strokeWidth={0.1} />
            </button>

            {open && (
                <ul
                    class="absolute z-50 bg-accent shadow-lg rounded overflow-hidden w-full max-[1024px]:max-w-[288px] min-[1025px]:max-w-[158px] mx-auto left-0 right-0 max-[1024px]:mx-auto min-[1025px]:mx-auto min-[1025px]:left-[unset] min-[1025px]:right-[unset]"
                    style={{
                        top: dropdownPosition.top,
                        position: "fixed",
                        zIndex: 9999,
                    }}
                >
                    {["Português", "English"].map((lang) => (
                        <li key={lang}>
                            <button
                                onClick={() => {
                                    selectedLang.value = lang;
                                    setOpen(false);
                                }}
                                class="block w-full lg:text-left text-center px-4 py-2 text-sm text-white hover:bg-secondary hover:text-neutral"
                            >
                                {lang}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
