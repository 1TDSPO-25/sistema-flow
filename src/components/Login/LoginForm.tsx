import { useState } from "react";

import ImgCaoGato from '../../assets/cao-gato.jpg';

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };
    
    const validEmail = "1tdspo@fiap.com.br";
    
  return (
    <section className="flex min-h-screen max-[800px]:flex-col">
      <div
        className="w-1/2 bg-cover bg-center max-[800px]:w-full max-[800px]:h-48"
        style={{ backgroundImage: ` url(${ImgCaoGato})` }}
      ></div>

    <section className="flex w-1/2 items-center justify-center bg-white min-h-screen max-[800px]:w-full max-[800px]:min-h-[calc(100vh-12rem)] max-[800px]:py-10">
    <div className="w-3/4 max-w-lg shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Login</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"></div>
    <div className="bg-white p-8  rounded-lg shadow-lg " >
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6 w-full" >
        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Digite sua Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button 
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
          type="submit">Entrar na conta
        </button>
      </form>
    </div>
    </div>
    </section>
  </section>
  );
}
