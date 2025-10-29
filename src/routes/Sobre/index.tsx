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
      {}
    </main>
  );
}