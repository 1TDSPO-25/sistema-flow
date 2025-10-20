import { FaPaw, FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';

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
        </main>
    );
}