function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.backgroundColor = "#f8f8f8";
        });

        card.addEventListener("mouseout", () => {
            card.style.backgroundColor = "white";
        });
    });
});