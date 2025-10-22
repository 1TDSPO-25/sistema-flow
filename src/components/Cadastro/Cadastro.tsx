import { useState } from "react";

// 1. Definição da Interface do Usuário para Tipagem Segura
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