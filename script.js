document.addEventListener('DOMContentLoaded', function() {
    // AOS Başlatma
    AOS.init({ duration: 1000, once: true });

    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Navbar Kaydırma Efekti
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // Mobil Menü
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

    // Footer Verileri
    const config = {
        email: "aquateam@aku.edu.tr",
        socials: [
            { icon: "fab fa-instagram", link: "https://instagram.com/aquateam.aku" },
            { icon: "fab fa-linkedin", link: "https://linkedin.com/company/aquateam-aku" },
            { icon: "fab fa-youtube", link: "https://youtube.com/..." }
        ]
    };

    document.getElementById('footer-email').innerText = config.email;
    const socialContainer = document.getElementById('footer-socials');
    config.socials.forEach(s => {
        const a = document.createElement('a');
        a.href = s.link;
        a.innerHTML = `<i class="${s.icon}"></i>`;
        socialContainer.appendChild(a);
    });
});
