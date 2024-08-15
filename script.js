// Product Filtering Section
document.addEventListener("DOMContentLoaded", () => {
    const categoryFilter = document.getElementById("category");
    const priceRangeFilter = document.getElementById("price-range");
    const priceValue = document.getElementById("price-value");
    const productCards = document.querySelectorAll(".product-card");

    categoryFilter.addEventListener("change", filterProducts);

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

//Newsletter Signup Section
document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const emailInput = document.getElementById('newsletter-email');
    const emailValue = emailInput.value.trim();

    if (validateEmail(emailValue)) {
        alert('Thank you for subscribing!');
        emailInput.value = ''; // Clear the input field
        // Here you would typically send the email to your server or email service
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

