// İletişim Ekranı Kontrolleri
const openBtn = document.getElementById('open-contact');
const closeBtn = document.getElementById('close-contact');
const overlay = document.getElementById('contact-overlay');

if(openBtn) {
    openBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Arka plan kaymasın
    });
}

if(closeBtn) {
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Kaydırmayı geri aç
    });
}

// ESC tuşuyla kapatma
window.addEventListener('keydown', (e) => {
    if(e.key === "Escape") {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
