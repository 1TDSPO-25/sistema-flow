import { useState } from "react";

// Definição da Interface do Usuário para Tipagem Segura
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
  const [message, setMessage] = useState("");

  const getUsers = (): User[] => {
    const users = localStorage.getItem("usuario");
    return users ? (JSON.parse(users) as User[]) : [];
  };

// Função para salvar usuário no localStorage
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!name || !email || !password || !confirmPassword) {
      setMessage("Todos os campos são obrigatórios!");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("As senhas não coincidem!");
      return;
    }

    if (password.length < 6) {
      setMessage("A senha deve ter pelo menos 6 caracteres!");
      return;
    }
     users.push(userData);
    localStorage.setItem("usuario", JSON.stringify(users));
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!name || !email || !password || !confirmPassword) {
      setMessage("Todos os campos são obrigatórios!");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("As senhas não coincidem!");
      return;
    }

    if (password.length < 6) {
      setMessage("A senha deve ter pelo menos 6 caracteres!");
      return;
    }

    const userData: User = {
      name,
      email,
      password,
      id: Date.now().toString(),
    };

    if (saveUser(userData)) {
      setMessage("Cadastro realizado com sucesso!");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      
      setTimeout(() => {
        console.log("Ir para pagina de login");
      }, 2000);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <input
          type="password"
          placeholder="Confirme sua Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Criar Conta</button>
      </form>

      {message && (
        <div style={{ 
          marginTop: "10px", 
          padding: "10px", 
          backgroundColor: message.includes("sucesso") ? "#d4edda" : "#f8d7da",
          color: message.includes("sucesso") ? "#155724" : "#721c24",
          border: `1px solid ${message.includes("sucesso") ? "#c3e6cb" : "#f5c6cb"}`
        }}>
          {message}
        </div>
      )}

      {/* Exemplo de como visualizar usuários cadastrados (apenas para desenvolvimento) */}
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