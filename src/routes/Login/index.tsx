export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-4 sm:p-6">
      <section className="bg-white shadow-lg rounded-2xl w-full max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-orange-500 mb-6 sm:mb-8">
          Login
        </h1>

        <form className="flex flex-col gap-4 sm:gap-6">
          <input
            type="email"
            placeholder="Email"
            aria-label="Email"
            autoComplete="email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          />
          <input
            type="password"
            placeholder="Senha"
            aria-label="Senha"
            autoComplete="current-password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Ainda não tem conta?{" "}
          <a href="#" className="text-blue-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded">
            Cadastre-se
          </a>
        </p>
      </section>
    </main>
  );
}
