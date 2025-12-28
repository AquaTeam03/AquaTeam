document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-contact');
    const closeBtn = document.getElementById('close-contact');
    const overlay = document.getElementById('contact-overlay');

    // Aç
    openBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Arka plan kaymasın
    });

    // Kapat
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Kaydırmayı geri aç
    });

    // ESC tuşu ile kapat
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
