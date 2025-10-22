import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };


  return (
    <section className="py-20 flex flex-col items-center">
    <div className="container mx-70 px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Login</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"></div>
    <div className="bg-white p-8  rounded-lg shadow-lg" >
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6 w-full max-w-sm mx-auto" >
        <input
          
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          
          type="password"
          placeholder="Digite sua Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button 
          
          type="submit">Entrar na conta
        </button>
      </form>
    </div>
    </div>
    </section>
  );
}
