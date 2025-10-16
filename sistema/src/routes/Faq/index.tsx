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
    answer:
      "Atendemos de segunda a sábado, das 8h às 19h.",
  },
];

export default function Faq() {
  return (
    <main>
      <h1>Perguntas Frequentes</h1>
      <ul>
        {faqData.map((item, i) => (
          <FaqItem
            key={i}
            index={i + 1}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </ul>
    </main>
  );
}
