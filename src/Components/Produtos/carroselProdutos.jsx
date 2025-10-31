import React, { useState } from 'react';
 
const Carrossel = () => {
  const products = [
    { id: 1, nome: 'Cama de cachorro', imgSrc: '../../img/cama.png' },
    { id: 2, nome: 'Ração Premium', imgSrc: '../../img/raçao.jpg' },
    { id: 3, nome: 'Escova de pelos', imgSrc: '../../img/Escova_Pet.jpg' },
    { id: 4, nome: 'Bolinha de borracha', imgSrc: '../../img/Bolinha_Cachorro.jpg' },
    { id: 5, nome: 'Coleira para pets', imgSrc: '../../img/Coleira.jpg' },
    { id: 6, nome: 'Caixa transportadora de gatos', imgSrc: '../../img/Caixa_Transportadora_Gatos.jpg' },
    { id: 7, nome: 'Arranhador para gatos simples', imgSrc: '../../img/Arranhador_Gatos.jpg' },
    { id: 8, nome: 'Arranhador para gatos premium', imgSrc: '../../img/Brinquedo_Gatos_premium.jpg' }
  ];}

  const [currentIndex, setCurrentIndex] = useState(0);
 
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };
 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };
 
  const currentProduct = products[currentIndex];
 
  return (
    <div className="carrossel-container" style={{ textAlign: 'center' }}>
      <button onClick={prevSlide}>←</button>
 
      <div className="carrossel-item" style={{ display: 'inline-block', margin: '0 20px' }}>
        <img
          src={currentProduct.imgSrc}
          alt={currentProduct.nome}
          style={{ width: '300px', height: 'auto', borderRadius: '10px' }}
        />
        <p>{currentProduct.nome}</p>
      </div>
 
      <button onClick={nextSlide}>→</button>
    </div>
  );
 
export default Carrosel;
 