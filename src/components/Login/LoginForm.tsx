export function LoginForm() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}