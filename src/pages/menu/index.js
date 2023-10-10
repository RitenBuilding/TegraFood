import Link from "next/link";

export default function Page(params) {
  return (
    <div class="container">
      <div class="menu">
        {/* <img class="menu-img" src="images/logo.svg" /> */}
        <table class="menu-list">
          <tr onclick="menuClick(0)">
            <Link href="/menu/category/todos">Todos</Link>
          </tr>
          <tr onclick="menuClick(1)">
            <td>Pizza</td>
          </tr>
          <tr onclick="menuClick(2)">
            <td>Sobremesa</td>
          </tr>
          <tr onclick="menuClick(3)">
            <td>Pastel</td>
          </tr>
          <tr onclick="menuClick(4)">
            <td>Açaí</td>
          </tr>
          <tr onclick="menuClick(5)">
            <td>Bebidas</td>
          </tr>
        </table>
      </div>

      {/* <div class="navbar">
        <ul>
          <li>
            <a onclick="showCart()" style="cursor: pointer">
              <img class="navbar-icon" src="images/cart.svg" />
            </a>
          </li>
          <li>
            <img class="navbar-bell" src="images/bell.svg" />
          </li>
          <li>
            <img class="navbar-avatar" src="images/avatar.svg" />
          </li>
        </ul>
      </div> */}

      {/* <div class="content">
        <div class="links">
          <div class="left-links">
            <ul>
              <li class="product-link" onclick="buttonClick()">
                <button href="#">Produtos</button>
                <button href="#" style="margin-left: 5px">
                  Todos
                </button>
              </li>
              <li></li>
            </ul>
          </div>

          <div class="right-links">
            <ul>
              <li class="toplinks">
                <a href="#" class="blue-link" id="price-filter">
                  <img src="images/seta.svg" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="blue-link"
                  style="margin-left: 5px"
                  id="sortAZ"
                >
                  <img src="images/az.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="products"></div>
        <div class="modal" id="myModal"></div>
        <div class="price-filter"></div>
      </div> */}

      <div class="cart-content">
        <div class="cart">
          <p>Meu carrinho</p>
        </div>
      </div>
    </div>
  );
}
