document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open-contact-btn');
    const closeBtn = document.getElementById('close-contact-btn');
    const overlay = document.getElementById('contact-page-overlay');

    if (openBtn && overlay) {
        openBtn.addEventListener('click', function() {
            overlay.classList.add('is-active');
            document.body.style.overflow = 'hidden'; // Ana sayfanın kaymasını engelle
        });
    }

    if (closeBtn && overlay) {
        closeBtn.addEventListener('click', function() {
            overlay.classList.remove('is-active');
            document.body.style.overflow = 'auto'; // Kaydırmayı geri aç
        });
    }

    // ESC tuşuyla kapatma desteği
    window.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
            overlay.classList.remove('is-active');
            document.body.style.overflow = 'auto';
        }
    });
});
