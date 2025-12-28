document.addEventListener('DOMContentLoaded', function() {
    // AOS Başlatma
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true });
    }

    // İletişim Sayfası Kontrolü
    const contactOverlay = document.getElementById('contact-overlay');
    const openBtn = document.getElementById('open-contact'); // Navbardaki buton
    const footerLink = document.querySelector('.open-contact-link'); // Footer linki
    const closeBtn = document.getElementById('close-contact');

    function toggleContact(show) {
        if (show) {
            contactOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Arka plan kaymasın
        } else {
            contactOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Kaydırmayı geri aç
        }
    }

    if (openBtn) openBtn.onclick = () => toggleContact(true);
    if (footerLink) footerLink.onclick = () => toggleContact(true);
    if (closeBtn) closeBtn.onclick = () => toggleContact(false);

    // ESC tuşuyla kapatma
    window.onkeydown = (e) => {
        if (e.key === "Escape") toggleContact(false);
    };

    // Sosyal Medya İkonları Yükleme
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
