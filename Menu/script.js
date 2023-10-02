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
  