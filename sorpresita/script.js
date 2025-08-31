document.addEventListener('DOMContentLoaded', () => {

    const loginModal = document.getElementById('login-modal');
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const carouselTrack = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    const correctUsername = 'siemprejuntos';
    const correctPassword = '30052025';

    // Lista de fotos y videos. ¡Puedes agregar tantos como quieras!
    const media = [
        { type: 'image', url: 'fotos/foto.jpg', text: 'Tú y yo, siempre.' },
        { type: 'image', url: 'fotos/foto2.jpg', text: 'Mi lugar favorito es a tu lado.' },
        { type: 'image', url: 'fotos/foto3.jpg', text: 'Cada risa contigo es un tesoro.' },
        { type: 'image', url: 'fotos/image.png', text: 'Contigo, mi futuro es brillante.' },
        // Agrega más fotos o videos aquí
        { type: 'video', url: 'videos/num1.mp4', text: 'Nuestros momentos más divertidos.' },
        { type: 'image', url: 'fotos/bonito.jpg', text: 'Un recuerdo inolvidable.' },
        { type: 'image', url: 'fotos/bonito2.jpg', text: 'Nuestra aventura recién comienza.' },
        { type: 'video', url: 'videos/num2.mp4', text: 'El mejor equipo.' },
    ];

    let currentIndex = 0;
    const cardsToShow = 4; // Cambia esto si quieres mostrar más o menos fotos a la vez

    const populateCarousel = () => {
        carouselTrack.innerHTML = '';
        media.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('movie-card');
            
            let mediaElement;
            if (item.type === 'video') {
                mediaElement = `<video src="${item.url}" muted autoplay loop playsinline></video>`;
            } else {
                mediaElement = `<img src="${item.url}" alt="${item.text}">`;
            }

            card.innerHTML = `
                ${mediaElement}
                <div class="movie-info">
                    <h4>${item.text}</h4>
                    <span class="platform netflix">3 Meses</span>
                </div>
            `;
            carouselTrack.appendChild(card);
        });
        updateCarousel();
    };

    const updateCarousel = () => {
        const cardWidth = document.querySelector('.movie-card').offsetWidth;
        carouselTrack.style.transform = `translateX(-${currentIndex * (cardWidth + 20)}px)`;

        // Lógica para deshabilitar/habilitar los botones
        if (currentIndex === 0) {
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.classList.remove('disabled');
        }

        if (currentIndex >= media.length - cardsToShow) {
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.classList.remove('disabled');
        }
    };

    const handleNext = () => {
        if (currentIndex < media.length - cardsToShow) {
            currentIndex++;
        }
        updateCarousel();
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            currentIndex--;
        }
        updateCarousel();
    };

    prevBtn.addEventListener('click', handlePrev);
    nextBtn.addEventListener('click', handleNext);

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === correctUsername && password === correctPassword) {
            loginModal.classList.add('modal-hidden'); 
            populateCarousel();
        } else {
            errorMessage.classList.remove('hidden');
        }
    });
});