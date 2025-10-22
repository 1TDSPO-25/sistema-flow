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