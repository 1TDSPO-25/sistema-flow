import { FaHeart, FaShieldAlt, FaLightbulb } from 'react-icons/fa';

const nossosValores = [
    { 
      nome: 'Amor aos Animais', 
      icone: <FaHeart size={32} />, 
      desc: 'Nossa paixão é a força motriz de tudo que fazemos, tratando cada pet como se fosse nosso.' 
    },
    { 
      nome: 'Confiança e Transparência', 
      icone: <FaShieldAlt size={32} />, 
      desc: 'Transparência total em nossos diagnósticos e serviços. Sua confiança é nosso bem mais precioso.' 
    },
    { 
      nome: 'Excelência', 
      icone: <FaLightbulb size={32} />, 
      desc: 'Buscamos sempre as melhores práticas, tecnologias e produtos para oferecer um serviço de ponta.' 
    },
  ];

export function NossosValores(){
    return(
        <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Nossos Pilares</h2>
          <p className="max-w-2xl mx-auto mb-12 text-slate-600">
            O que nos guia todos os dias para oferecer o melhor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nossosValores.map((valor) => (
              
              <div key={valor.nome} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-orange-500 inline-block mb-4">
                  {valor.icone}
                </div>
                <h3 className="text-xl font-bold mb-2">{valor.nome}</h3>
                <p className="text-slate-600">{valor.desc}</p>
              </div>

            ))}
          </div>
        </div>
      </section>
    )
}

