import { useState } from "react";
import ImgGatoCao from "../../assets/img-cao-gato.png";

interface User {
  name: string;
  email: string;
  password: string;
  id: string;
}

export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const getUsers = (): User[] => {
    const users = localStorage.getItem("usuario");
    return users ? (JSON.parse(users) as User[]) : [];
  };

  const saveUser = (userData: User): boolean => {
    const users = getUsers();
    const emailExists = users.some((user) => user.email === userData.email);

    if (emailExists) {
      setMessage("Email já cadastrado!");
      return false;
    }

    users.push(userData);
    localStorage.setItem("usuario", JSON.stringify(users));
    return true;
  };

  if (!name || !email || !password || !confirmPassword) {
  setErrorMessage("❌ Todos os campos são obrigatórios!");
  return;
}

if (password !== confirmPassword) {
  setErrorMessage("❌ As senhas não coincidem!");
  return;
}

if (password.length < 6) {
  setErrorMessage("❌ A senha deve ter pelo menos 6 caracteres!");
  return;
}


    const userData: User = {
      name,
      email,
      password,
      id: Date.now().toString(),
    };

    if (saveUser(userData)) {
  setMessage("✅ Cadastro realizado com sucesso!");
  setName("");
  setEmail("");
  setPassword("");
  setConfirmPassword("");
  };
}
  return (
    <div>
      
      <section className="flex min-h-screen max-[800px]:flex-col">
        <section className="flex w-1/2 items-center justify-center bg-white min-h-screen max-[800px]:w-full max-[800px]:min-h-[calc(100vh-12rem)] max-[800px]:py-10">
          <div className="w-3/4 max-w-lg shadow-lg rounded-lg bg-white p-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Cadastro
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Digite seu Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

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

              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="Confirme sua Senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
                type="submit"
              >
                Criar Conta
              </button>
            </form>
          </div>
        </section>

        <div
          className="
            w-1/2 bg-cover bg-center
            max-[800px]:w-full max-[800px]:h-48
            min-h-screen
            max-[800px]:min-h-0
          "
          style={{ backgroundImage: `url(${ImgGatoCao})` }}
        ></div>

      </section>

      {message && (
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: message.includes("sucesso")
              ? "#d4edda"
              : "#f8d7da",
            color: message.includes("sucesso") ? "#155724" : "#721c24",
            border: `1px solid ${
              message.includes("sucesso") ? "#c3e6cb" : "#f5c6cb"
            }`,
          }}
        >
          {message}
        </div>
      )}

      <div style={{ marginTop: "20px", fontSize: "12px", color: "#666" }}>
        <button
          type="button"
          onClick={() => console.log("Usuários:", getUsers())}
          style={{ fontSize: "10px", padding: "5px" }}
        >
          Ver Usuários no Console
        </button>
      </div>
    </div>
  );
}
