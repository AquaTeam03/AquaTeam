document.addEventListener('DOMContentLoaded', function() {
    // AOS Animasyonlarını çalıştır
    if (typeof AOS !== 'undefined') { AOS.init({ duration: 1000, once: true }); }

    // İletişim Buton Kontrolleri
    const openBtn = document.getElementById('open-contact');
    const closeBtn = document.getElementById('close-contact');
    const contactOverlay = document.getElementById('contact-overlay');

    if (openBtn && contactOverlay) {
        openBtn.onclick = function() {
            contactOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Arka planı kilitle
        };
    }

    if (closeBtn && contactOverlay) {
        closeBtn.onclick = function() {
            contactOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Kilidi aç
        };
    }

    // ESC tuşu ile kapatma
    window.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && contactOverlay.classList.contains('active')) {
            contactOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
