// ======================================================
// PORTOFOLIOKU - JAVASCRIPT
// ======================================================


const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navMenu = document.getElementById("navMenu");

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener("click", function () {
        const isOpen = navMenu.classList.toggle("mobile-open");
        mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("mobile-open");
            mobileMenuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// ======================================================
// 1. SCROLL REVEAL
// ======================================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function(element) {

    revealObserver.observe(element);

});


// ======================================================
// 2. SMOOTH SCROLL
// ======================================================

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ======================================================
// 3. BUTTON "BUAT PORTOFOLIO"
// ======================================================

const createButtons = document.querySelectorAll(".create-portfolio");

createButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        alert(
            "Selamat datang di PortofolioKu! 🚀\n\n" +
            "Kita akan mulai membuat portfolio kamu."
        );

    });

});


// ======================================================
// 4. TEMPLATE SELECTOR
// ======================================================

const templateButtons = document.querySelectorAll(".template-info button");

const templatePreview = document.querySelectorAll(".template-preview");


templateButtons.forEach(function(button, index) {

    button.addEventListener("click", function() {

        templatePreview.forEach(function(preview) {

            preview.classList.remove("selected");

        });


        if (templatePreview[index]) {

            templatePreview[index].classList.add("selected");

        }


        const templateNames = [
            "Professional",
            "Creative",
            "Modern"
        ];

        alert(
            "Template \"" +
            templateNames[index] +
            "\" dipilih! 🎨"
        );

    });

});


// ======================================================
// 5. PORTFOLIO PREVIEW INTERACTION
// ======================================================

const portfolioWindow =
    document.querySelector(".portfolio-window");


if (portfolioWindow) {

    portfolioWindow.addEventListener("mouseenter", function() {

        portfolioWindow.style.transform =
            "rotate(0deg) translateY(-8px)";

    });


    portfolioWindow.addEventListener("mouseleave", function() {

        portfolioWindow.style.transform =
            "rotate(2deg)";

    });

}


// ======================================================
// 6. NAVBAR BERUBAH SAAT SCROLL
// ======================================================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ======================================================
// 7. ANIMASI ANGKA
// ======================================================

const stats = document.querySelectorAll(".hero-info strong");


function animateNumber(element) {

    const text = element.textContent;

    if (text.includes("100%")) {

        let number = 0;

        const interval = setInterval(function() {

            number += 5;

            element.textContent = number + "%";

            if (number >= 100) {

                clearInterval(interval);

                element.textContent = "100%";

            }

        }, 30);

    }

}


const statsObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                animateNumber(entry.target);

                statsObserver.unobserve(entry.target);

            }

        });

    }
);


stats.forEach(function(stat) {

    statsObserver.observe(stat);

});


// ======================================================
// 8. COPY LINK PORTFOLIO
// ======================================================

const copyButtons = document.querySelectorAll(".copy-link");


copyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const link = "portofolioku.id/andihidayat";

        navigator.clipboard.writeText(link)
            .then(function() {

                button.textContent = "✓ Link Disalin";

                setTimeout(function() {

                    button.textContent = "Copy Link";

                }, 2000);

            })
            .catch(function() {

                alert(
                    "Link portfolio kamu:\n" + link
                );

            });

    });

});


// ======================================================
// 9. INTERACTIVE CARD
// ======================================================

const featureCards =
    document.querySelectorAll(".feature-card");


featureCards.forEach(function(card) {

    card.addEventListener("click", function() {

        featureCards.forEach(function(item) {

            item.classList.remove("active");

        });

        card.classList.add("active");

    });

});


// ======================================================
// 10. TEMPLATE HOVER EFFECT
// ======================================================

const templateCards =
    document.querySelectorAll(".template-card");


templateCards.forEach(function(card) {

    card.addEventListener("click", function() {

        templateCards.forEach(function(item) {

            item.classList.remove("active-template");

        });

        card.classList.add("active-template");

    });

});


// ======================================================
// 11. TOMBOL "LIHAT TEMPLATE"
// ======================================================

const templateLink =
    document.querySelector('a[href="#template"]');


if (templateLink) {

    templateLink.addEventListener("click", function(event) {

        event.preventDefault();

        const templateSection =
            document.querySelector("#template");

        if (templateSection) {

            templateSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


// ======================================================
// 12. WELCOME MESSAGE
// ======================================================

console.log(
    "🚀 PortofolioKu berhasil dijalankan!"
);

console.log(
    "HTML + CSS + JavaScript"
);