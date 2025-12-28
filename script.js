document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Navbar Kaydırma Efekti
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // Mobil Menü Aç/Kapat
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Sosyal Medya Verileri ve Footer Oluşturma
    const socialConfig = [
        { icon: "fab fa-linkedin", link: "https://www.linkedin.com/company/aquateam-aku/" },
        { icon: "fab fa-instagram", link: "https://www.instagram.com/aquateam.aku" },
        { icon: "fab fa-youtube", link: "https://www.youtube.com/channel/UCU6G6FHqeZ5yLgDRqANEMMQ" }
    ];

    const socialBox = document.getElementById('footer-socials');
    if (socialBox) {
        socialConfig.forEach(item => {
            const a = document.createElement('a');
            a.href = item.link;
            a.target = "_blank";
            a.innerHTML = `<i class="${item.icon}"></i>`;
            socialBox.appendChild(a);
        });
    }

    // Mobil Menüden Bir Linke Tıklandığında Kapat
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});
