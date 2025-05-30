import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface Description {
  src?: ImageWidget;
  alt?: string;
  title?: string;
  description?: string;
  number?: string;
  hrefNumber?: string;
}

export interface backgroundImage {
  src?: ImageWidget;
  alt?: string;
}

interface Field {
  label: string;
  type: "text" | "email" | "tel";
  placeholder: string;
}

export interface Form {
  title?: string;
  titleContactType?: string;
  contactType?: string[];
  formCareers?: Field[];
  message?: Field;
  privacyPolicyText?: string;
  privacyPolicyTextURLLabel?: string;
  privacyPolicyTextURL?: string;
  submite: string;
  yourdata: string;
}

interface Props {
  background?: backgroundImage;
  description: Description;
  form: Form;
}

export default function ContactForm({
  background,
  description,
  form,
}: Props) {
  return (
    <div class="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden">
      {background?.src && (
        <div class="absolute top-0 left-0 w-screen h-full z-[-1] hidden md:block">
          <Image
            src={background.src}
            alt={background.alt ?? ""}
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="low"
            class="w-full h-full object-cover opacity-25"
          />
        </div>
      )}
      <div class="md:block hidden w-full lg:p-14 p-7">
        <div class="border-t-2 border-base-200 w-full" />
      </div>
      <div class="flex flex-col lg:flex-row items-start justify-around gap-8 p-4 lg:p-8 z-10 max-w-7xl w-full">
        <div class="flex-none space-y-6 lg:w-2/5 max-w-full lg:max-w-[360px] text-left w-full">
          {description.src && (
            <img
              src={description.src}
              alt={description.alt ?? ""}
              class="flex-shrink-0 m-[-50px] md:-mt-[50px] mt-0"
              width={150}
              height={150}
              loading="lazy"
            />
          )}
          <p class="text-4xl leading-snug text-secondary">
            {description?.title}
          </p>
          <p class="text-lg text-base-300">{description?.description}</p>
          {description?.hrefNumber && (
            <a
              href={`tel:+${description.hrefNumber}`}
              target="_blank"
              class="flex items-center text-primary mt-6 text-base font-medium gap-3"
            >
              {description.number}
              <Icon
                size={21}
                id="WhatsAppIcon"
                strokeWidth={3}
              />
            </a>
          )}
        </div>
        <div class="w-full lg:max-w-[520px] bg-accent p-6 border border-base-200">
          <h3 class="text-[27px] font-medium mb-4 text-secondary">
            {form.title ?? "Preencha o formulário"}
          </h3>
          <form>
            {form.contactType && (
              <div class="mb-4">
                <label class="block mb-2 text-secondary">
                  {form.titleContactType}{" "}
                  <span class="text-error-content">*</span>
                </label>
                <div class="flex flex-wrap gap-4">
                  {form.contactType.map((type) => (
                    <label
                      key={type}
                      class="inline-flex items-center text-secondary cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="contactType"
                        value={type}
                        class="appearance-none w-3.5 h-3.5 border border-secondary rounded-full checked:border-primary checked:border-[3px] transition-all"
                      />
                      <span class="ml-2">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            {form.formCareers?.map(({ label, type, placeholder }) => (
              <div class="mb-4" key={label}>
                <label class="block mb-2 text-secondary">
                  {label} <span class="text-error-content">*</span>
                </label>
                <div class="relative group">
                  <input
                    type={type}
                    placeholder={placeholder}
                    required
                    class="w-full p-5 bg-secondary-content text-secondary border-none focus:outline-none focus:ring-0 focus:border-transparent"
                  />
                  <span class="absolute bottom-0 left-0 h-[2px] w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left rounded-sm" />
                </div>
              </div>
            ))}
            {form.message && (
              <div class="mb-4">
                <label class="block mb-2 text-secondary">
                  {form.message.label} <span class="text-error-content">*</span>
                </label>
                <div class="relative group">
                  <textarea
                    rows={4}
                    placeholder={form.message.placeholder}
                    required
                    class="w-full p-5 bg-secondary-content text-secondary border-none focus:outline-none focus:ring-0 focus:border-transparent"
                  />
                  <span class="absolute bottom-0 left-0 h-[2px] w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left rounded-sm" />
                </div>
              </div>
            )}

            <p class="text-sm mb-4 text-base-300">
              {form.privacyPolicyText}{" "}
              <a
                href={form.privacyPolicyTextURL}
                target="_blank"
                class="text-primary underline"
              >
                {form.privacyPolicyTextURLLabel}
              </a>
            </p>

            <button
              type="submit"
              class="flex justify-center gap-2 w-full font-medium btn btn-primary px-7"
            >
              {form.submite}
              <Icon
                size={20}
                id="ArrowLeftGreen"
                strokeWidth={3}
              />
            </button>
          </form>

          <div class="flex items-center justify-center text-base-300 gap-2 border-t-2 border-base-200 md:pt-6 md:mt-6 pt-4 mt-4">
            <Icon
              size={18}
              id="Protection"
              strokeWidth={3}
            />
            <span class="text-sm">{form.yourdata}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
