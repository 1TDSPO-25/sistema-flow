import { Link } from "react-router-dom";

export default function Error(){
    return(
        <main>
            <div className="bg-linear-to-r from-gray-800 via-gray-700 to-gray-800 text-white shadow-lg rounded-3xl p-5 w-200 mx-auto text-center mt-50 mb-10">
                <h1 className="border-b-1 border-orange-400 text-3xl p-3 mb-4">Error 404 - Página não encontrada</h1>
                <h3 className="text-xl">A página que você está tentando acessar não foi encontrada!</h3>
            </div>
            <div className="mx-auto p-2 w-60 text-center bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-400 transition-all">
                <Link to="/" className="text-white">Voltar ao início</Link>
            </div>
        </main>
    );
}