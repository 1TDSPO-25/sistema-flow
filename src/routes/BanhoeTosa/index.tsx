import { useState } from "react";
import { AgendamentoForm } from "../../components/AgendentoForm/AgendamentoForm";
import type { Agendamento } from "../../types/agendamento";
import {
  FaClock,
  FaUserCheck,
  FaStar,
  FaShieldAlt,
  FaCalendarAlt,
} from "react-icons/fa";

export default function BanhoETosa() {
  const [, setAgendamentos] = useState<Agendamento[]>([]);

  const handleAgendamentoSubmit = (
    novoAgendamento: Omit<Agendamento, "id">
  ) => {
    const agendamentoComId: Agendamento = {
      ...novoAgendamento,
      id: Date.now(),
    };
    setAgendamentos((prev) => [...prev, agendamentoComId]);
    alert(
      `Agendamento confirmado para ${
        novoAgendamento.nomePet
      } no dia ${novoAgendamento.data.toLocaleDateString()} às ${
        novoAgendamento.horario
      }:00!`
    );
  };

  const servicos = [
    {
      nome: "Banho Completo",
      descricao:
        "Shampoo especial, condicionador, secagem e escovação para deixar seu pet limpo e cheiroso.",
      preco: "A partir de R$ 45,00",
    },
    {
      nome: "Banho e Tosa Higiênica",
      descricao:
        "Banho completo + tosa nas áreas íntimas, patas e rosto para maior higiene e conforto.",
      preco: "A partir de R$ 60,00",
    },
    {
      nome: "Tosa na Tesoura",
      descricao:
        "Tosa personalizada com tesoura para maior precisão e acabamento perfeito.",
      preco: "A partir de R$ 80,00",
    },
    {
      nome: "Spa Day",
      descricao:
        "Experiência completa com banho relaxante, hidratação, limpeza facial e massageamento.",
      preco: "A partir de R$ 120,00",
    },
  ];

  const beneficios = [
    {
      icone: <FaUserCheck className="text-2xl" />,
      titulo: "Profissionais Qualificados",
      descricao: "Nossa equipe é treinada e experiente no cuidado animal",
    },
    {
      icone: <FaStar className="text-2xl" />,
      titulo: "Produtos Premium",
      descricao: "Utilizamos apenas marcas de alta qualidade e hipoalergênicas",
    },
    {
      icone: <FaShieldAlt className="text-2xl" />,
      titulo: "Ambiente Seguro",
      descricao: "Espaço climatizado e equipado para o conforto do seu pet",
    },
    {
      icone: <FaCalendarAlt className="text-2xl" />,
      titulo: "Horários Flexíveis",
      descricao: "Agendamento facilitado para sua conveniência",
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[60vh] bg-orange-500 bg-center text-white">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Banho & Tosa
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Cuidamos do seu pet com carinho, profissionalismo e produtos de
            qualidade
          </p>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
          <p className="max-w-2xl mx-auto mb-12 text-slate-600">
            Oferecemos uma variedade completa de serviços para deixar seu pet
            limpo, saudável e feliz
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicos.map((servico) => (
              <div
                key={servico.nome}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{servico.nome}</h3>
                <p className="text-slate-600 mb-4">{servico.descricao}</p>
                <div className="text-orange-500 font-semibold">
                  {servico.preco}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="bg-orange-500 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para deixar seu pet ainda mais feliz?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agende agora mesmo o banho e tosa do seu companheiro
          </p>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Porque Escolher Nossos Serviços?
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600">
              Comprometidos com o bem-estar e a satisfação do seu pet
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {beneficio.icone}
                </div>
                <h3 className="text-xl font-bold mb-2">{beneficio.titulo}</h3>
                <p className="text-slate-600">{beneficio.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
