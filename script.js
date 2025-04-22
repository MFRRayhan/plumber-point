// ===============================
// Global Setup
// ===============================
const global = {
    currentPage: window.location.pathname.split('/').pop() || 'index.html',
    videoUrl: 'https://www.youtube.com/embed/YuTGN3HBFCA?autoplay=1&start=3015'
};

// ===============================
// Highlight Active Navigation Link
// ===============================
function highlightActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = global.currentPage === '' ? 'index.html' : global.currentPage;

    navLinks.forEach((navLink) => {
        const href = navLink.getAttribute('href');
        const hrefFile = href.split('/').pop(); // শুধু ফাইল নাম

        if (hrefFile === currentPage) {
            navLink.classList.add('active');
        }
    });
}

// ===============================
// Video Modal Functionality
// ===============================
function initVideoModal() {
    const playButton = document.getElementById('playButton');
    const videoModal = document.getElementById('videoModal');
    const youtubeIframe = document.getElementById('youtubeIframe');
    const closeModal = document.getElementById('closeModal');

    if (!playButton || !videoModal || !youtubeIframe || !closeModal) return;

    playButton.addEventListener('click', () => {
        youtubeIframe.src = global.videoUrl;
        videoModal.classList.remove('hidden');
    });

    closeModal.addEventListener('click', () => {
        youtubeIframe.src = '';
        videoModal.classList.add('hidden');
    });

    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            youtubeIframe.src = '';
            videoModal.classList.add('hidden');
        }
    });
}

// ===============================
// Initialize All
// ===============================
function init() {
    highlightActiveLink();
    initVideoModal();
}

document.addEventListener('DOMContentLoaded', init);
