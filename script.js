
document.addEventListener("DOMContentLoaded", () => {
  const categoryFilter = document.getElementById("category");
  const priceRangeFilter = document.getElementById("price-range");
  const priceValue = document.getElementById("price-value");
  const productCards = document.querySelectorAll(".product-card");

  // Event listener for category filter
  categoryFilter.addEventListener("change", filterProducts);
  
  // Event listener for price range filter
  priceRangeFilter.addEventListener("input", () => {
    priceValue.textContent = `$${priceRangeFilter.value}`;
    filterProducts();
  });

  function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedPrice = parseInt(priceRangeFilter.value, 10);

    productCards.forEach((card) => {
      const productCategory = card.getAttribute("data-category");
      const productPrice = parseInt(card.getAttribute("data-price"), 10);

      // Condition for showing products: match category and within price range
      if ((selectedCategory === "all" || productCategory === selectedCategory) && productPrice <= selectedPrice) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});

//Customer Reviews Section
document.addEventListener('DOMContentLoaded', function () {
    const carouselContent = document.querySelector('.carousel-content');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    let currentIndex = 0;

    function updateCarousel() {
        const offset = currentIndex * -100;
        carouselContent.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});
