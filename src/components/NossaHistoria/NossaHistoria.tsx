import ImgEquipe from '../../assets/foto-equipe.png';

export function NossaHistoria(){
    return(
        <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={ImgEquipe} 
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
    )
}