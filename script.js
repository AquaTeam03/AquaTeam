document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    // Navbar Scroll Efekti
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // Sosyal Medya Verileri
    const socials = [
        { icon: "fab fa-linkedin", link: "https://www.linkedin.com/company/aquateam-aku/" },
        { icon: "fab fa-instagram", link: "https://www.instagram.com/aquateam.aku" },
        { icon: "fab fa-youtube", link: "https://www.youtube.com/..." }
    ];

    const container = document.getElementById('footer-socials');
    socials.forEach(s => {
        const a = document.createElement('a');
        a.href = s.link;
        a.target = "_blank";
        a.innerHTML = `<i class="${s.icon}"></i>`;
        container.appendChild(a);
    });
});
