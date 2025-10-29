import { useEffect } from "react";
import FaqItem from "../../components/Faq/FaqItem";

type FaqItemType = {
  question: string;
  answer: string;
};

const faqData: FaqItemType[] = [
  {
    question: "1. O PetShop oferece banho e tosa?",
    answer:
      "Sim! Oferecemos serviços de banho e tosa com produtos hipoalergênicos e equipe especializada.",
  },
  {
    question: "2. Preciso agendar horário?",
    answer:
      "Sim, recomendamos o agendamento para garantir o melhor atendimento para o seu pet.",
  },
  {
    question: "3. Vocês vendem rações e acessórios?",
    answer:
      "Sim! Temos uma loja completa com rações, petiscos, brinquedos e acessórios para todas as raças.",
  },
  {
    question: "4. Há serviço veterinário disponível?",
    answer:
      "Sim, contamos com atendimento veterinário presencial e por teleconsulta.",
  },
  {
    question: "5. Qual o horário de funcionamento?",
    answer: "Atendemos de segunda a sábado, das 8h às 19h.",
  },
];

export default function Faq() {
  useEffect(() => {
    document.title = "FAQ — Pet Shop";
  }, []);

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gray-100 flex justify-center px-3 py-4 sm:px-6 md:px-8 lg:px-10">
      <section
        className="w-full mx-auto max-w-screen-sm sm:max-w-screen-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-1 sm:px-0"
        aria-labelledby="faq-heading"
        role="region"
      >
        <h1
          id="faq-heading"
          className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#005b96] leading-snug break-words whitespace-normal"
        >
          Perguntas Frequentes — Pet Shop
        </h1>

        <ul
          className="space-y-4 sm:space-y-5 md:space-y-6"
          role="list"
          aria-label="Lista de perguntas frequentes sobre o Pet Shop"
        >
          {faqData.map((item, i) => (
            <FaqItem
              key={i}
              index={i + 1}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
