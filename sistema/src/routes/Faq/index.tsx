type FaqItemType = {
  question: string;
  answer: string;
};

const faqData: FaqItemType[] = [
  {
    question: "1. O Pet Shop oferece serviços de banho e tosa?",
    answer:
      "Sim! Temos profissionais experientes que realizam banho e tosa com todo cuidado e carinho que seu pet merece.",
  },
  {
    question: "2. É necessário agendar horário para atendimento?",
    answer:
      "Sim. O agendamento garante um atendimento mais rápido e confortável para o seu pet.",
  },
  {
    question: "3. Vocês vendem rações e acessórios?",
    answer:
      "Sim, trabalhamos com diversas marcas de rações, brinquedos e acessórios para cães e gatos.",
  },
  {
    question: "4. O Pet Shop possui atendimento veterinário?",
    answer:
      "Sim, contamos com uma equipe veterinária disponível para consultas e emergências.",
  },
  {
    question: "5. Onde o Pet Shop está localizado?",
    answer:
      "Estamos localizados na Rua das Flores, nº 123, Centro — aberto de segunda a sábado.",
  },
];

export default function Faq() {
  return (
    <main>
      <h1>Perguntas Frequentes</h1>
    </main>
  );
}
