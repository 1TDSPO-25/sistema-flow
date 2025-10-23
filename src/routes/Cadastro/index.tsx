export default function Cadastro() {
    return(
        <main>
            <div className="w-200 my-10 mx-auto p-4 rounded-3xl shadow-2xl text-center bg-gray-100">
                <h1 className="text-3xl mb-3 text-orange-500">Cadastro</h1>
                <div className="flex flex-col justify-center w-100 gap-7 mx-auto p-2 mb-5">
                    <input type="text" placeholder="Nome" className="bg-gray-200 py-2 px-3 rounded-full shadow-2xs focus:outline-orange-400"/>
                    <input type="email" placeholder="Email" className="bg-gray-200 py-2 px-3 rounded-full shadow-2xs focus:outline-orange-400"/>
                    <input type="password" placeholder="Senha" className="bg-gray-200 py-2 px-3 rounded-full shadow-2xs focus:outline-orange-400"/>
                </div>
                <div className="flex justify-center">
                    <button className="text-lg p-2 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-400 transition-all">Cadastrar-se</button>
                </div>
            </div>
        </main>
    )
}