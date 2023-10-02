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
  