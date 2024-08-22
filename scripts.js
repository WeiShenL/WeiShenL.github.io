// Image Gallery Popup (Optional)
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('#gallery img');

    images.forEach(img => {
        img.addEventListener('click', function () {
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `<img src="${this.src}" alt="${this.alt}">
                               <span class="close">&times;</span>`;
            document.body.appendChild(modal);

            modal.querySelector('.close').addEventListener('click', function () {
                modal.remove();
            });
        });
    });
});
