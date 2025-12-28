document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') { AOS.init({ duration: 1000, once: true }); }

    const openBtns = [document.getElementById('open-contact'), document.querySelector('.open-contact-footer')];
    const closeBtn = document.getElementById('close-contact');
    const overlay = document.getElementById('contact-overlay');

    // Açma Fonksiyonu
    const openOverlay = () => {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Ana sayfa kaymasın
    };

    // Kapatma Fonksiyonu
    const closeOverlay = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Kaydırmayı geri aç
    };

    openBtns.forEach(btn => {
        if(btn) btn.addEventListener('click', openOverlay);
    });

    if(closeBtn) closeBtn.addEventListener('click', closeOverlay);

    // ESC tuşuyla kapatma desteği
    window.addEventListener('keydown', (e) => {
        if(e.key === "Escape") closeOverlay();
    });

    // Sosyal Medya İkonları
    const socialBox = document.getElementById('footer-socials');
    const socials = [
        { icon: "fab fa-linkedin", link: "https://www.linkedin.com/company/aquateam-aku/" },
        { icon: "fab fa-instagram", link: "https://www.instagram.com/aquateam.aku" },
        { icon: "fab fa-youtube", link: "https://www.youtube.com/..." }
    ];

    if (socialBox) {
        socials.forEach(s => {
            const a = document.createElement('a');
            a.href = s.link;
            a.target = "_blank";
            a.innerHTML = `<i class="${s.icon}"></i>`;
            socialBox.appendChild(a);
        });
    }
});
