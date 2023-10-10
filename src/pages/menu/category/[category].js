import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  // Renderize a página apropriada com base na categoria
  if (category === "todos") {
    return <h1>Todos</h1>;
  } else if (category === "pizza") {
    // Renderize a página da categoria "Pizza" aqui
  } else if (category === "sobremesa") {
    // Renderize a página da categoria "Sobremesa" aqui
  }

  // Você pode adicionar mais verificações para outras categorias

  // Caso a categoria não seja encontrada, você pode renderizar uma página de erro ou redirecionar para a página principal, por exemplo.
  return <p>Categoria não encontrada</p>;
}
