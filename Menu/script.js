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
  
    element.forEach((el) => {
      if (el.firstElementChild === element[position].firstElementChild) {
        return;
      }
      el.firstElementChild.style.backgroundColor = "#6a0000";
    });
  }
  
  function fillProductBox(product, productBox) {
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
    productPrice.textContent = `R$ ${product.value.toFixed(2)}`;
  
    const buyButton = document.createElement("button");
    buyButton.classList.add("orange-button");
    buyButton.textContent = "Comprar";
  
    productPriceDiv.appendChild(productPrice);
    productPriceDiv.appendChild(buyButton);
  
    productBox.appendChild(productImageDiv);
    productBox.appendChild(productInfoDiv);
    productBox.appendChild(productPriceDiv);
  }
  
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      const productsContainer = document.querySelector(".products");
  
      data.forEach((product) => {
        const productBox = document.createElement("div");
        productBox.classList.add("product-box");
        fillProductBox(product, productBox);
        productsContainer.appendChild(productBox);
      });
    })
    .catch((error) => {
      console.log("Erro ao carregar o arquivo JSON:", error);
    });

   