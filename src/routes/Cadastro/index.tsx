export default function Cadastro() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-300 p-4 sm:p-6">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl my-8 sm:my-10 mx-auto p-6 sm:p-8 rounded-3xl shadow-xl text-center bg-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-orange-500">
          Cadastro
        </h1>

        <div className="flex flex-col justify-center w-full gap-4 sm:gap-6 mx-auto">
          <input
            type="text"
            placeholder="Nome"
            aria-label="Nome"
            className="w-full bg-gray-100 py-3 px-4 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-800"
          />
          <input
            type="email"
            placeholder="Email"
            aria-label="Email"
            autoComplete="email"
            className="w-full bg-gray-100 py-3 px-4 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-800"
          />
          <input
            type="password"
            placeholder="Senha"
            aria-label="Senha"
            autoComplete="new-password"
            className="w-full bg-gray-100 py-3 px-4 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-800"
          />
        </div>

        <div className="flex justify-center">
          <button
            className="mt-6 w-full sm:w-auto px-6 sm:px-8 py-3 text-lg bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 active:bg-orange-700 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
          >
            Cadastrar-se
          </button>
        </div>
      </div>
    </main>
  );
}
