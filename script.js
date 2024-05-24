let modal = document.getElementById('fullscreenModal');
let modalImg = document.getElementById('fullscreenImage');
let images = document.getElementsByClassName('gallery-item');
let currentIndex = 0;

for (let i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
        currentIndex = i;
    };
}

let closeModal = document.getElementsByClassName('close')[0];
closeModal.onclick = function () {
    modal.style.display = 'none';
};

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
});

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    modalImg.src = images[currentIndex].src;
}

