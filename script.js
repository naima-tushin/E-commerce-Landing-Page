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
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;

    fetch('reviews.json')
        .then(response => response.json())
        .then(reviews => {
            renderReviews(reviews);
        })
        .catch(error => console.error('Error loading reviews:', error));

    function renderReviews(reviews) {
        carouselContent.innerHTML = reviews.map(review => {
            const ratingStars = '⭐'.repeat(review.rating);
            return `
                    <div class="carousel-item">
                        <div class="card">
                            <img src="${review.image}" alt="${review.name}" class="testimonial-image">
                            <p class="testimonial-name">${review.name}</p>
                            <div class="rating">${ratingStars}</div>
                            <p class="testimonial-feedback">${review.feedback}</p>
                        </div>
                    </div>
                `;
        }).join('');
        updateCarousel();
    }

    function updateCarousel() {
        const offset = currentIndex * -100;
        carouselContent.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselContent.children.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < carouselContent.children.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});

//Newsletter Signup Section
document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('newsletter-email');
    const emailValue = emailInput.value.trim();

    if (validateEmail(emailValue)) {
        alert('Thank you for subscribing!');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

