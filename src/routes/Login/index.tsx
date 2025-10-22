export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-4">
      <section className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-8">
          Login
        </h1>

        <form className="flex flex-col gap-6">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
          <input
            type="password"
            placeholder="Senha"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-200 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Entrar
          </button>
        </form>

        
        <p className="text-center text-sm text-gray-600 mt-6">
                Ainda não tem conta?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                    Cadastre-se
                </a>
                </p>

      </section>
    </main>
  );
}
