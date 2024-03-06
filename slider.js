document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        slider.addEventListener('mousedown', function(e) {
            e.preventDefault();

            let startX = e.clientX;
            const afterImage = slider.previousElementSibling; // Изображение "После" для этого слайдера
            const container = slider.parentElement;

            let moveAt = (e) => {
                let shiftX = startX - e.clientX;
                let newLeft = Math.min(
                    container.offsetWidth - slider.offsetWidth,
                    Math.max(0, slider.offsetLeft - shiftX)
                );

                slider.style.left = newLeft + 'px';
                afterImage.style.width = newLeft + 'px';
                startX = e.clientX;
            };

            document.addEventListener('mousemove', moveAt);

            document.addEventListener('mouseup', function() {
                document.removeEventListener('mousemove', moveAt);
            }, {once: true});
        });
    });
});
