import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface AccordionText {
  src?: ImageWidget;
  alt?: string;
  title?: string;
  description?: string;
}

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Question {
  src?: ImageWidget;
  alt?: string;
  title: string;
  answer: string;
  cta?: CTA;
}

export interface Props {
  accordionText?: AccordionText;
  questions?: Question[];
}

export default function AccordionHero({
  accordionText = {
    title: "Perguntas Frequentes",
    description:
      "Tire suas dúvidas sobre formas de pagamento, prazos de entrega e políticas de devolução. Se não encontrar sua resposta aqui, fale com nosso suporte.",
  },
  questions = [
    {
      title: "Quais são as formas de pagamento aceitas?",
      answer:
        "Aceitamos cartões de crédito, débito, Pix e boleto bancário. Parcelamentos estão disponíveis para cartões de crédito.",
    },
    {
      title: "Qual o prazo de entrega?",
      answer:
        "O prazo varia de acordo com sua região e a forma de envio escolhida. Em média, entregamos em até 7 dias úteis.",
    },
    {
      title: "Posso devolver um produto?",
      answer:
        "Sim. Você pode solicitar a devolução em até 7 dias após o recebimento, conforme o Código de Defesa do Consumidor.",
      cta: {
        href: "/",
        text: "Ver política de troca",
        outline: true,
      },
    },
    {
      title: "Como acompanho meu pedido?",
      answer:
        "Você pode acompanhar pelo painel do cliente ou pelo link enviado por e-mail após a confirmação da compra.",
    },
    {
      title: "O produto tem garantia?",
      answer:
        "Sim, todos os produtos possuem garantia mínima de 90 dias. Verifique as condições específicas na página de cada produto.",
      cta: {
        href: "/",
        text: "Mais sobre garantias",
      },
    },
  ],
}: Props) {
  const middle = Math.ceil(questions.length / 2);
  const leftCol = questions.slice(0, middle);
  const rightCol = questions.slice(middle);

  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28">
      <div class="flex flex-col lg:flex-row gap-10 lg:gap-12 justify-between">
        <div class="flex-none space-y-6 lg:w-2/5 max-w-[360px]">
          {accordionText.src && (
            <Image
              src={accordionText.src}
              width={150}
              height={150}
              alt={accordionText.alt ?? ""}
              class="flex-shrink-0 m-[-50px]"
              decoding="async"
              loading="lazy"
            />
          )}
          <p class="text-4xl leading-snug">{accordionText?.title}</p>
          <p class="text-lg text-base-300">{accordionText?.description}</p>
        </div>

        <div class="flex flex-col lg:flex-row gap-0 lg:gap-4 flex-auto">
          <div class="accordion-column flex flex-col w-full lg:w-1/2">
            {leftCol.map((question) => (
              <details
                class="accordion-item border-base-200 border-b group bg-accent text-accent-content"
                key={question.title}
              >
                <summary class="text-lg cursor-pointer py-6 flex items-center px-4 gap-4">
                  {question.src && (
                    <Image
                      src={question.src}
                      width={28}
                      height={28}
                      alt={question.alt ?? ""}
                      class="flex-shrink-0"
                      decoding="async"
                      loading="lazy"
                    />
                  )}
                  <span class="flex-auto text-lg font-semibold">
                    {question.title}
                  </span>
                </summary>
                <div class="leading-relaxed pl-[56px] pr-4 pb-6 group-open:animate-fadeIn">
                  <p class="text-base-300">{question.answer}</p>
                  {question.cta?.text && (
                    <a
                      id={question.cta?.id}
                      href={question.cta?.href}
                      target={question.cta?.href.includes("http")
                        ? "_blank"
                        : "_self"}
                      class={`font-medium btn btn-primary px-6 mt-4 ${
                        question.cta?.outline && "btn-outline"
                      }`}
                    >
                      {question.cta.text}
                    </a>
                  )}
                </div>
              </details>
            ))}
          </div>

          <div class="accordion-column flex flex-col w-full lg:w-1/2">
            {rightCol.map((question) => (
              <details
                class="accordion-item border-base-200 border-b group bg-accent text-accent-content"
                key={question.title}
              >
                <summary class="text-lg cursor-pointer py-6 flex items-center px-4 gap-4">
                  {question.src && (
                    <Image
                      src={question.src}
                      width={28}
                      height={28}
                      alt={question.alt ?? ""}
                      class="flex-shrink-0"
                      decoding="async"
                      loading="lazy"
                    />
                  )}
                  <span class="flex-auto text-lg font-semibold">
                    {question.title}
                  </span>
                </summary>
                <div class="leading-relaxed pl-[56px] pr-4 pb-6 group-open:animate-fadeIn">
                  <p>{question.answer}</p>
                  {question.cta?.text && (
                    <a
                      id={question.cta?.id}
                      href={question.cta?.href}
                      target={question.cta?.href.includes("http")
                        ? "_blank"
                        : "_self"}
                      class={`font-medium btn btn-primary px-6 mt-4 ${
                        question.cta?.outline && "btn-outline"
                      }`}
                    >
                      {question.cta.text}
                    </a>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
