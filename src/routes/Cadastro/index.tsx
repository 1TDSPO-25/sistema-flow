export default function Cadastro() {
    return(
        <main>
            <div className="w-200 my-5 mx-auto p-4 rounded-3xl shadow-2xl text-center">
                <h1 className="text-2xl">Cadastro</h1>
                <div className="flex flex-col justify-center w-100 gap-5 mx-auto p-2">
                    <input type="text" placeholder="Nome" className="bg-gray-200 py-2 px-3 rounded-full shadow-2xs"/>
                    <input type="email" placeholder="Nome" className="bg-gray-200 py-2 px-3 rounded-full shadow-2xs"/>
                    
                </div>
                <div className="flex justify-center">
                    <button className="text-lg p-2 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-400 transition-all">Cadastrar-se</button>
                </div>
            </div>
        </main>
    )
}