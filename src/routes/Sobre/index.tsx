import React from 'react';
import { FaHeart, FaShieldAlt, FaLightbulb } from 'react-icons/fa';

export default function Sobre(){
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

  return (
    <main className="bg-slate-50 text-slate-800">
        <section className="bg-slate-100 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Construído com Paixão por Pets
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-600">
            Conheça a história e os valores que nos tornam a segunda casa do seu melhor amigo.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://via.placeholder.com/600x400.png?text=Nossa+Equipe+Aqui" 
                alt="Nossa clínica ou equipe" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Como tudo começou</h2>
              <p className="text-slate-600 mb-4 text-lg">
                Nossa jornada começou em 2015, não como um negócio, mas como uma missão. Vimos a necessidade de um lugar que não apenas cuidasse da saúde, mas que também entendesse a alma de cada animal.
              </p>
              <p className="text-slate-600 text-lg">
                Começamos com um pequeno consultório e um grande sonho. Hoje, somos uma equipe completa de veterinários, tosadores e cuidadores dedicados, mas aquele carinho inicial ainda é o coração de tudo que fazemos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}