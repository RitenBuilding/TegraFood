import PizzaImage from "../assets/images/products/Pizza.png";
import NinhoImage from "../assets/images/products/Ninho.png";
import AcaiFrutasImage from "../assets/images/products/AcaiFrutas.png";
import AcaiBarcaImage from "../assets/images/products/AcaiBarca.png";
import CocaImage from "../assets/images/products/Coca.png";
import CocaZeroImage from "../assets/images/products/CocaZero.png";
import LancheChurrasco from "../assets/images/products/LancheChurrasco.png";
import PizzaStrogofe from "../assets/images/products/PizzaStrogofe.png";
import LancheXTudo from "../assets/images/products/LancheXTudo.png";
import SonhoValsa from "../assets/images/products/SonhoValsa.png";

export const productsMock = [
  {
    id: 0,
    name: "Pizza de Marguerita",
    description: "(Muçarela, tomate, manjericão, orégano)",
    price: 60,
    image: PizzaImage,
    category: ["pizza", "todos"],
  },
  {
    id: 1,
    name: "Torta de Leite Ninho",
    description:
      "(Massa de baunilha, creme de ninho tradicional, morango, chantily)",
    price: 70,
    image: NinhoImage,
    category: ["sobremesa", "todos"],
  },
  {
    id: 2,
    name: "Lanche X-Burguer",
    description:
      "(Pão, hamburguer, alface, tomate, queijo cheddar, cebola e picles)",
    price: 22,
    image: LancheXTudo,
    category: ["todos"],
  },

  {
    id: 3,
    name: "Pizza de Strogonofe",
    description: "(strogonofe, muçarela e orégano)",
    price: 65,
    image: PizzaStrogofe,
    category: ["pizza", "todos"],
  },

  {
    id: 4,
    name: "Açai com Frutas",
    description:
      "(Açai, banana, morango, uva, leite ninho em pó e leite condensado)",
    price: 18,
    image: AcaiFrutasImage,
    category: ["açaí", "todos"],
  },

  {
    id: 5,
    name: "Refrigerante Coca-Cola 350ml",
    description: "Refrigerante Coca-Cola 350ml",
    price: 6,
    image: CocaImage,
    category: ["bebidas", "todos"],
  },

  {
    id: 6,
    name: "Taça de sonho de valsa",
    description:
      "(chocolate branco e preto, sonho de valsa, morango e leite condensado)",
    price: 15,
    image: SonhoValsa,
    category: ["sobremesa", "todos"],
  },

  {
    id: 7,
    name: "Barca de açaí",
    description:
      "(Açai, banana, morango, uva, leite ninho em pó e leite condensado)",
    price: 22,
    image: AcaiBarcaImage,
    category: ["açaí", "todos"],
  },

  {
    id: 8,
    name: "Refrigerante Coca-Cola zero 350ml",
    description: "Refrigerante Coca-Cola zero 350ml",
    price: 5,
    image: CocaZeroImage,
    category: ["bebidas", "todos"],
  },

  {
    id: 9,
    name: "Lanche de Churrasco",
    description:
      "(Pão, hamburguer, calabresa, iescar de carne, muçarela, cebola e picles)",
    price: 30,
    image: LancheChurrasco,
    category: ["todos"],
  },
];
