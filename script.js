// Dynamic Reviews (example of loading reviews dynamically)
const reviews = [
    { text: "Great quality!", author: "Jane Doe" },
    { text: "Fast shipping, love it!", author: "Emily Smith" },
    { text: "Customer service was fantastic!", author: "Michael Johnson" },
];

const reviewSlider = document.querySelector('.review-slider');

function loadReviews() {
    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card');
        reviewCard.innerHTML = `<p>"${review.text}"</p><h4>${review.author}</h4>`;
        reviewSlider.appendChild(reviewCard);
    });
}

window.onload = loadReviews;
