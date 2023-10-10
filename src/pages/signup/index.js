import Link from "next/link";

export default function SignupPage() {
  return (
    <div>
      <h1>Página de Cadastro</h1>
      <Link href="/menu">
        <button>Cadastrar</button>
      </Link>
      <p>
        Já tem uma conta? <Link href="/menu">Ir para o Menu</Link>
      </p>
    </div>
  );
}
