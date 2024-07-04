document.addEventListener('DOMContentLoaded', function () {
    // Slider functionality
    function slide(categoryId, direction) {
        const categorySlider = document.getElementById(categoryId).querySelector('.category-slider');
        const slideWidth = categorySlider.querySelector('.category-slide').clientWidth;

        let scrollAmount = direction === 'next' ? slideWidth : -slideWidth;

        categorySlider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    // Attach event listeners to next and prev buttons
    document.querySelectorAll('.next').forEach(button => {
        button.addEventListener('click', function () {
            const sectionId = this.parentElement.parentElement.id;
            slide(sectionId, 'next');
        });
    });

    document.querySelectorAll('.prev').forEach(button => {
        button.addEventListener('click', function () {
            const sectionId = this.parentElement.parentElement.id;
            slide(sectionId, 'prev');
        });
    });

    // Function to handle Buy button click with confirmation
    function handleBuyButtonClick(event) {
        event.preventDefault();
        event.stopPropagation();

        const slide = event.target.closest('.category-slide');
        const productName = slide.getAttribute('data-name');
        const productSize = slide.getAttribute('data-size');
        const productColor = slide.getAttribute('data-color');
        const productBrand = slide.getAttribute('data-brand');
        const productPrice = slide.getAttribute('data-price');
        const paymentLink = slide.getAttribute('data-payment-link');

        const confirmationMessage = `Product: ${productName}\nSize: ${productSize}\nColor: ${productColor}\nPrice: RM${productPrice}\n\nProceed to buy?`;

        if (confirm(confirmationMessage)) {
            window.location.href = paymentLink; // Redirect to payment link if confirmed
        } else {
            console.log('Purchase canceled.');
            window.location.href = 'products.html'; // Redirect to products page if canceled
        }
    }

    // Attach event listener to Buy buttons
    document.querySelectorAll('.buy').forEach(button => {
        button.addEventListener('click', handleBuyButtonClick);
    });
});