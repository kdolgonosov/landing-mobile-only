window.onload = function () {
    const timerElement = document.querySelector('.promo__time_time');
    let time = (4 * 60 * 60 + 51 * 60 + 4) * 1000;
    const productCurrent = document.querySelector('.product__image');
    const productCarouselItems = document.querySelectorAll('.product__carousel_item');
    const timer = setInterval(() => {
        let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((time % (1000 * 60)) / 1000);
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        time -= 1000;
        if (time <= 0) {
            clearInterval(timer);
        }
        timerElement.textContent = hours + ':' + minutes + ':' + seconds;
    }, 1000);

    productCarouselItems.forEach((item) => {
        item.addEventListener('click', () => {
            productCarouselItems.forEach((item) => {
                item.classList.remove('product__carousel_item_type_selected');
            });
            item.classList.add('product__carousel_item_type_selected');
            productCurrent.src = item.querySelector('img').src;
            console.log(imgUrl);
        });
    });
};
