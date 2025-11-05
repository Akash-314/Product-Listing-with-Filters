const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product");
const searchInput = document.getElementById("searchInput");
const pro = document.getElementById("pro")

// Filter by category
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.filter;

    products.forEach((product) => {
      if (category === "all" || product.classList.contains(category)) {
        product.style.display = "block";
      } else {
        pro.style.display = "none"
        product.style.display = "none";
      }
    });
  });
});

// Search by name
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  products.forEach((product) => {
    const name = product.dataset.name.toLowerCase();
    if (name.includes(searchValue)) {
      product.style.display = "block";
    } else {
      pro.style.display = "none"
      product.style.display = "none";
    }
  });
});
