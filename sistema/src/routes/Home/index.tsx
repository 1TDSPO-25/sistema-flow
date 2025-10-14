import { useState, useEffect } from 'react';

import type { Artigo } from "../../types/noticias";
import { CardNoticias } from '../../components/CardNoticiais';
import { Link } from 'react-router-dom';


export default function Home() {
    const [randomArticles, setRandomArticles] = useState<Artigo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;
    const API_URL = `https://gnews.io/api/v4/top-headlines?category=general&lang=pt&country=br&apikey=${API_KEY}`;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`Erro ${response.status}: Falha ao buscar dados da GNews.`);
                }
                const data = await response.json();
                const allArticles: Artigo[] = data.articles;

                const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
                const selected = shuffled.slice(0, 8);
                setRandomArticles(selected);

            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, [API_URL]);

    if (loading) return <div className="text-center mt-20 text-xl font-medium">Carregando notícias...</div>;
    if (error) return <div className="text-center mt-20 text-red-600 text-xl font-medium">Erro: {error}</div>;

    if (randomArticles.length === 0) {
        return <div className="text-center mt-20 text-gray-600 text-xl">Nenhuma notícia encontrada.</div>;
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto">
                <div className=' gap-8 hidden lg:flex flex-wrap text-white px-20 bg-black w-full p-4'>
                    <Link to="/" className="hover:text-gray-400">Esportes</Link>
                    <Link to="/" className="hover:text-gray-400 ">Política</Link>
                    <Link to="/" className="hover:text-gray-400 ">Tecnologia</Link>
                    <Link to="/" className="hover:text-gray-400 ">Saúde</Link>
                    <Link to="/" className="hover:text-gray-400 ">Entretenimento</Link>
                    <Link to="/" className="hover:text-gray-400 ">Ciência</Link>
                    <Link to="/" className="hover:text-gray-400 ">Negócios</Link>
                </div>

                <div className='mx-8'>
                    <h1 className="text-xl md:text-4xl font-extrabold text-center mb-10 pt-8 text-[#242424] leading-tight">
                        Notícias do Momento
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {randomArticles.map((article) => (
                            <CardNoticias key={article.url} article={article} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}