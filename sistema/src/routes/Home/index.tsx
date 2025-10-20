import { FaPaw, FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';

const servicos = [
    { nome: 'Banho & Tosa', icone: <FaPaw size={32} />, descricao: 'Higiene e estilo para deixar seu pet impecável e cheiroso.' },
    { nome: 'Consultas', icone: <FaHeart size={32} />, descricao: 'Veterinários dedicados para cuidar da saúde do seu amigo.' },
    { nome: 'Produtos', icone: <FaShoppingCart size={32} />, descricao: 'As melhores marcas de rações, brinquedos e acessórios.' },
];

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <section
        className="relative flex items-center justify-center h-[80vh] bg-cover bg-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/img/foto_golden_retriever.jpg')` }}
      >
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            O melhor para quem você mais ama
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Tudo que seu pet precisa em um só lugar. Qualidade, carinho e confiança para sua família.
          </p>
          <a href="/produtos" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
            Ver Produtos
          </a>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
          <p className="max-w-2xl mx-auto mb-12 text-slate-600">Cuidado completo com o amor e a atenção que seu pet merece.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicos.map((servico) => (
              <div key={servico.nome} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-orange-500 inline-block mb-4">{servico.icone}</div>
                <h3 className="text-xl font-bold mb-2">{servico.nome}</h3>
                <p className="text-slate-600">{servico.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}