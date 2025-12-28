document.addEventListener('DOMContentLoaded', function() {
    // AOS Başlat
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true });
    }

    // Footer Sosyal Medya
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

    // Smooth Scroll (Yumuşak Kaydırma)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});
