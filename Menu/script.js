function buttonClick() {
  const element = document.querySelector("li.product-link");

  if (element.firstElementChild) {
    element.firstElementChild.addEventListener("click", () => {
      element.firstElementChild.style.color = "#dc9000";
      element.firstElementChild.style.textDecoration = "underline";

      element.lastElementChild.style.color = "#223263";
      element.lastElementChild.style.textDecoration = "none";
    });
  }
  element.lastElementChild.addEventListener("click", () => {
    element.lastElementChild.style.color = "#dc9000";
    element.lastElementChild.style.textDecoration = "underline";

    element.firstElementChild.style.color = "#223263";
    element.firstElementChild.style.textDecoration = "none";
  });
}

function menuClick(position) {
  const element = document.querySelectorAll("table.menu-list tbody tr");

  element[position].firstElementChild.style.backgroundColor = "#dc9000";

  element.forEach(async (el) => {
    if (el.firstElementChild === element[position].firstElementChild) {
      const filteredProducts = await filterProducts(
        el.firstElementChild.firstChild.textContent
      );
      clearProductList();
      return fillProductBox("asc", filteredProducts);
    }
    el.firstElementChild.style.backgroundColor = "#6a0000";
  });
}

async function getProducts(orderBy) {
  try {
    const response = await fetch("products.json");
    const data = await response.json();

    if (orderBy) {
      data.sort((a, b) => {
        if (orderBy === "asc") {
          return a.name.localeCompare(b.name);
        }
        return 0;
      });
    }

    return data;
  } catch (error) {
    console.log("Erro ao carregar o arquivo JSON:", error);
    throw error;
  }
}

async function fillProductBox(orderBy, filteredProducts) {
  const productsContainer = document.querySelector(".products");

  try {
    let products;

    if (!filteredProducts) {
      products = await getProducts(orderBy);
    } else {
      products = filteredProducts;
    }

    products.forEach((product) => {
      const productBox = document.createElement("div");
      productBox.classList.add("product-box");

      const productImageDiv = document.createElement("div");
      productImageDiv.classList.add("product-image");

      const productImage = document.createElement("img");
      productImage.src = product.imagePath;
      productImage.alt = "Foto do produto";

      productImageDiv.appendChild(productImage);

      const productInfoDiv = document.createElement("div");
      productInfoDiv.classList.add("product-info");

      const productName = document.createElement("p");
      productName.classList.add("product-name");
      productName.textContent = product.name;

      const productDescription = document.createElement("p");
      productDescription.classList.add("product-description");
      productDescription.textContent = product.description;

      productInfoDiv.appendChild(productName);
      productInfoDiv.appendChild(productDescription);

      const productPriceDiv = document.createElement("div");
      productPriceDiv.classList.add("price");

      const productPrice = document.createElement("p");
      productPrice.textContent = `R$ ${product.value},00`;

      const buyButton = document.createElement("button");
      buyButton.classList.add("orange-button");
      buyButton.textContent = "Comprar";

      productPriceDiv.appendChild(productPrice);
      productPriceDiv.appendChild(buyButton);

      productBox.appendChild(productImageDiv);
      productBox.appendChild(productInfoDiv);
      productBox.appendChild(productPriceDiv);

      productsContainer.appendChild(productBox);
    });
  } catch (error) {
    console.log("Erro ao preencher a caixa de produtos:", error);
  }
}

fillProductBox();

function clearProductList() {
  const productsContainer = document.querySelector(".products");

  while (productsContainer.firstChild) {
    productsContainer.removeChild(productsContainer.firstChild);
  }

  const modal = document.querySelector(".modal");
  if (modal && modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }
}

document.getElementById("sortAZ").addEventListener("click", function (event) {
  event.preventDefault();
  clearProductList();
  fillProductBox("asc");

  const modalContainer = document.querySelector(".modal");
  modalContainer.style.display = "block";

  const modalContent = document.createElement("ul");
  modalContainer.classList.add("modal-content");

  const modalTextContainer = document.createElement("li");
  const modalText = document.createElement("p");
  modalText.innerHTML = "Ítens organizados de A à Z";
  modalTextContainer.appendChild(modalText);

  const modalButtonContainer = document.createElement("li");
  const modalCancel = document.createElement("button");
  modalCancel.classList.add("cancel-button");
  modalCancel.setAttribute("onclick", "closeModal()");
  modalCancel.innerHTML = "Cancelar";
  modalButtonContainer.appendChild(modalCancel);

  modalContent.append(modalTextContainer);
  modalContent.append(modalButtonContainer);

  modalContainer.append(modalContent);
});

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

async function filterProducts(category) {
  try {
    if (category.toLowerCase().trim() === "todos") {
      return;
    }
    const products = await getProducts();

    return products.filter((product) => {
      return product.category === category.toLowerCase().trim();
    });
  } catch (error) {
    console.log("Erro ao filtrar produtos:", error);
  }
}

document
  .getElementById("price-filter")
  .addEventListener("click", async function (event) {
    event.preventDefault();

    const filterPriceContainer = document.querySelector(".price-filter");
    filterPriceContainer.style.display = "block";

    const filterPriceTitle = document.createElement("p");
    filterPriceTitle.classList.add("filter-title");
    filterPriceTitle.innerHTML = "Filtrar por preço:";

    const filterPriceContent = document.createElement("ul");
    filterPriceContainer.classList.add("filterPrice-content");

    const filterPriceTextContainer1 = document.createElement("li");
    const filterPriceText1 = document.createElement("button");
    filterPriceText1.innerHTML = "R$5 à R$25";
    filterPriceTextContainer1.appendChild(filterPriceText1);

    const filterPriceTextContainer2 = document.createElement("li");
    const filterPriceText2 = document.createElement("button");
    filterPriceText2.innerHTML = "R$26 à R$45";
    filterPriceTextContainer2.appendChild(filterPriceText2);

    const filterPriceTextContainer3 = document.createElement("li");
    const filterPriceText3 = document.createElement("button");
    filterPriceText3.innerHTML = "R$46 ou mais";
    filterPriceTextContainer3.appendChild(filterPriceText3);

    filterPriceContent.append(
      filterPriceTextContainer1,
      filterPriceTextContainer2,
      filterPriceTextContainer3
    );

    filterPriceContainer.append(filterPriceTitle, filterPriceContent);
  });
