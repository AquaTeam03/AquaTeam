document.addEventListener('DOMContentLoaded', function() {
    // AOS Başlat
    AOS.init({ duration: 1000, once: true });

    // Elemanları Seç
    const openBtn = document.getElementById('open-contact');
    const closeBtn = document.getElementById('close-contact');
    const overlay = document.getElementById('contact-overlay');

    // İletişim Sayfasını Aç
    if (openBtn) {
        openBtn.addEventListener('click', function() {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Arka planı kilitle
        });
    }

    // İletişim Sayfasını Kapat
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Kaydırmayı geri aç
        });
    }

    // ESC Tuşuyla Kapat
    window.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Sosyal Medya İkonları (Footer)
    const socialBox = document.getElementById('footer-socials');
    const socials = [
        { icon: "fab fa-linkedin", link: "https://www.linkedin.com/company/aquateam-aku/" },
        { icon: "fab fa-instagram", link: "https://www.instagram.com/aquateam.aku" },
        { icon: "fab fa-youtube", link: "https://www.youtube.com/channel/UCU6G6FHqeZ5yLgDRqANEMMQ" }
    ];

    if (socialBox) {
        socials.forEach(s => {
            const a = document.createElement('a');
            a.href = s.link;
            a.target = "_blank";
            a.innerHTML = `<i class="${s.icon}" style="color:white; margin-right:15px; font-size:1.5rem;"></i>`;
            socialBox.appendChild(a);
        });
    }
});
