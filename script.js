const footerConfig = {
    email: "aquateam0303@gmail.com",
    socials: [
        { icon: "fab fa-instagram", link: "https://www.instagram.com/aquateam.aku" },
        { icon: "fab fa-linkedin", link: "https://www.linkedin.com/company/aquateam-aku" },
        { icon: "fab fa-youtube", link: "https://www.youtube.com/channel/UCU6G6FHqeZ5yLgDRqANEMMQ" }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const socialBox = document.getElementById('footer-socials');
    if(socialBox) {
        footerConfig.socials.forEach(s => {
            const a = document.createElement('a');
            a.href = s.link;
            a.target = "_blank";
            a.innerHTML = `<i class="${s.icon}"></i>`;
            socialBox.appendChild(a);
        });
    }
});
