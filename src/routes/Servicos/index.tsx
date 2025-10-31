import { FaPaw, FaHeart, FaCut, FaBone } from "react-icons/fa";

const servicos = [
  {
    nome: "Banho & Tosa",
    icone: <FaCut size={32} />,
    descricao: "Cuidamos da higiene e beleza do seu pet com todo carinho.",
  },
  {
    nome: "Consultas Veterinárias",
    icone: <FaHeart size={32} />,
    descricao: "Profissionais qualificados para manter a saúde do seu amigo em dia.",
  },
  {
    nome: "Creche & Hospedagem",
    icone: <FaBone size={32} />,
    descricao: "Ambiente seguro e acolhedor para o conforto do seu pet.",
  },
  {
    nome: "Adestramento",
    icone: <FaPaw size={32} />,
    descricao: "Treinamentos personalizados para um comportamento equilibrado.",
  },
];

export default function Servicos() {
  return (
    <main className="bg-slate-50 text-slate-800 min-h-screen py-20">
      <section className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-6">
          Nossos Serviços
        </h1>
        <p className="max-w-2xl mx-auto text-lg mb-12 text-slate-600">
          Cuidamos do seu pet com carinho, qualidade e segurança. Conheça nossos principais serviços
          e proporcione o melhor para quem você mais ama!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicos.map((servico) => (
            <div
              key={servico.nome}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-orange-500 mb-4 flex justify-center">
                {servico.icone}
              </div>
              <h3 className="text-xl font-bold mb-2">{servico.nome}</h3>
              <p className="text-slate-600">{servico.descricao}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
