/* =====================================================
   PORTFOLIO FINAL
   ===================================================== */


/* LOAD DATA */

function loadPortfolio() {

    const saved =
        localStorage.getItem("portfolioData");

    if (!saved) return;

    const data =
        JSON.parse(saved);


    // PROFILE

    const name =
        document.getElementById("portfolioName");

    const headline =
        document.getElementById("portfolioHeadline");

    const about =
        document.getElementById("portfolioAbout");


    if (name) {

        name.textContent =
            data.name || "Nama Kamu";

    }


    if (headline) {

        headline.textContent =
            data.headline ||
            "Information System Graduate";

    }


    if (about) {

        about.textContent =
            data.about ||
            "Ceritakan tentang dirimu.";

    }


    // ABOUT DETAIL

    const aboutDetail =
        document.getElementById(
            "portfolioAboutDetail"
        );

    if (aboutDetail) {

        aboutDetail.textContent =
            data.about ||
            "Ceritakan tentang dirimu.";

    }


    // EDUCATION

    if (data.education) {

        const institution =
            document.getElementById(
                "portfolioEducationInstitution"
            );

        const major =
            document.getElementById(
                "portfolioEducationMajor"
            );

        const year =
            document.getElementById(
                "portfolioEducationYear"
            );


        if (institution) {

            institution.textContent =
                data.education.institution ||
                "Universitas Kamu";

        }


        if (major) {

            major.textContent =
                data.education.major ||
                "Sistem Informasi";

        }


        if (year) {

            year.textContent =
                `${data.education.start || "2021"} — ${data.education.end || "2025"}`;

        }

    }


    // EXPERIENCE

    if (data.experience) {

        const position =
            document.getElementById(
                "portfolioExperiencePosition"
            );

        const company =
            document.getElementById(
                "portfolioExperienceCompany"
            );

        const description =
            document.getElementById(
                "portfolioExperienceDescription"
            );


        if (position) {

            position.textContent =
                data.experience.position ||
                "Posisi Kamu";

        }


        if (company) {

            company.textContent =
                data.experience.company ||
                "Perusahaan / Organisasi";

        }


        if (description) {

            description.textContent =
                data.experience.description ||
                "Deskripsi pengalaman kamu.";

        }

    }


    // PROJECT

    if (data.project) {

        const projectName =
            document.getElementById(
                "portfolioProjectName"
            );

        const projectTools =
            document.getElementById(
                "portfolioProjectTools"
            );

        const projectDescription =
            document.getElementById(
                "portfolioProjectDescription"
            );


        if (projectName) {

            projectName.textContent =
                data.project.name ||
                "Project Kamu";

        }


        if (projectTools) {

            projectTools.textContent =
                data.project.tools ||
                "Tools / Teknologi";

        }


        if (projectDescription) {

            projectDescription.textContent =
                data.project.description ||
                "Deskripsi project kamu.";

        }

    }


    loadPortfolioSkills(data);

    loadPortfolioCertificates(data);

    loadPortfolioContact(data);

    loadPortfolioPhoto();

}

    // =========================
    // PENDIDIKAN
    // =========================

    if (data.education) {

        const institution =
            document.getElementById(
                "portfolioEducationInstitution"
            );
        const major =
            document.getElementById(
                "portfolioEducationMajor"
            );
        const year =
            document.getElementById(
                "portfolioEducationYear"
            );
        if (institution) {
            institution.textContent =
                data.education.institution ||
                "Universitas Kamu";
        }
        if (major) {
            major.textContent =
                data.education.major ||
                "Program Studi";
        }
        if (year) {
            year.textContent =
                `${data.education.start || "2021"} — ${data.education.end || "2025"}`;
        }
    }


    // =========================
    // PENGALAMAN
    // =========================
    if (data.experience) { 
        const position =
            document.getElementById(
                "portfolioExperiencePosition"
            );
        const company =
            document.getElementById(
                "portfolioExperienceCompany"
            );

        const description =
            document.getElementById(
                "portfolioExperienceDescription"
            );


        if (position) {
            position.textContent =
                data.experience.position ||
                "Posisi Kamu";
        }

        if (company) {
            company.textContent =
                data.experience.company ||
                "Perusahaan / Organisasi";
        }

        if (description) {
            description.textContent =
                data.experience.description ||
                "Deskripsi pengalaman kamu.";
        }

    }


    // =========================
    // PROJECT
    // =========================

    if (data.project) {

        const projectName =
            document.getElementById(
                "portfolioProjectName"
            );

        const projectTools =
            document.getElementById(
                "portfolioProjectTools"
            );

        const projectDescription =
            document.getElementById(
                "portfolioProjectDescription"
            );


        if (projectName) {
            projectName.textContent =
                data.project.name ||
                "Project Kamu";
        }

        if (projectTools) {
            projectTools.textContent =
                data.project.tools ||
                "Tools / Teknologi";
        }

        if (projectDescription) {
            projectDescription.textContent =
                data.project.description ||
                "Deskripsi project kamu.";
        }

    }


    // =========================
    // SKILLS
    // =========================

    tfolioSkills(data);
    loadPortfolioCertificates(data);

    // =========================
    // CONTACT
    // =========================

    loadPortfolioContact(data);\
    


    // =========================
    // FOTO
    // =========================

    loadPortfolioPhoto();

}


// =================================
// SKILLS
// =================================

function loadPortfolioSkills(data) {

    const container =
        document.getElementById(
            "portfolioSkills"
        );

    if (!container) return;


    container.innerHTML = "";


    const skills = data.skills || [];


    if (skills.length === 0) {

        container.innerHTML =
            '<span class="empty-content">Belum ada skill.</span>';

        return;
    }


    skills.forEach(function(skill) {

        const tag =
            document.createElement("span");

        tag.className = "skill-tag";

        tag.textContent = skill;

        container.appendChild(tag);

    });

}


// =================================
// CONTACT
// =================================

function loadPortfolioContact(data) {

    if (!data.contact) return;


    const email =
        document.getElementById(
            "portfolioContactEmail"
        );

    const linkedin =
        document.getElementById(
            "portfolioContactLinkedIn"
        );

    const whatsapp =
        document.getElementById(
            "portfolioContactWhatsApp"
        );


    // EMAIL

    if (email) {

        const emailValue =
            data.contact.email ||
            "email@email.com";

        email.textContent =
            "📧 " + emailValue;

        email.href =
            "mailto:" + emailValue;

    }


    // LINKEDIN

    if (linkedin) {

        const linkedinValue =
            data.contact.linkedin;

        if (linkedinValue) {

            linkedin.textContent =
                "💼 LinkedIn";

            linkedin.href =
                linkedinValue.startsWith("http")
                    ? linkedinValue
                    : "https://" + linkedinValue;

        }

    }


    // WHATSAPP

    if (whatsapp) {

        const whatsappValue =
            data.contact.whatsapp;

        if (whatsappValue) {

            whatsapp.textContent =
                "📱 WhatsApp";

            let number =
                whatsappValue.replace(/\D/g, "");

            if (number.startsWith("0")) {
                number =
                    "62" + number.substring(1);
            }

            whatsapp.href =
                "https://wa.me/" + number;

        }

    }

}


// =================================
// FOTO PROFILE
// =================================

function loadPortfolioPhoto() {

    const savedPhoto =
        localStorage.getItem("profilePhoto");

    if (!savedPhoto) return;


    const avatar =
        document.getElementById(
            "portfolioAvatar"
        );

    if (!avatar) return;


    avatar.textContent = "";

    avatar.style.backgroundImage =
        `url("${savedPhoto}")`;

    avatar.style.backgroundSize =
        "cover";

    avatar.style.backgroundPosition =
        "center";

}


// =================================
// SHARE
// =================================

function sharePortfolio() {

    const shareData = {

        title: "Portfolio Saya",

        text: "Lihat portfolio saya.",

        url: window.location.href

    };


    if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare(shareData)
    ) {

        navigator.share(shareData);

    } else {

        navigator.clipboard
            .writeText(window.location.href)
            .then(function() {

                alert(
                    "Link portfolio berhasil disalin."
                );

            });

    }

}


// =================================
// LOAD
// =================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadPortfolio();
        applyPortfolioTemplate();

    }
);


/* =====================================================
   PROFILE PHOTO
   ===================================================== */

function loadPortfolioPhoto() {

    const savedPhoto =
        localStorage.getItem("profilePhoto");

    if (!savedPhoto) return;

    const avatar =
        document.getElementById("portfolioAvatar");

    if (!avatar) return;

    avatar.textContent = "";

    avatar.style.backgroundImage =
        `url("${savedPhoto}")`;

    avatar.style.backgroundSize = "cover";

    avatar.style.backgroundPosition = "center";

    avatar.style.backgroundRepeat = "no-repeat";

}



/* =====================================================
   SHARE
   ===================================================== */

function sharePortfolio() {

    const shareData = {

        title: "Portfolio Saya",

        text: "Lihat portfolio saya.",

        url: window.location.href

    };


    if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare(shareData)
    ) {

        navigator.share(shareData);

    } else {

        navigator.clipboard
            .writeText(window.location.href)
            .then(function() {

                alert(
                    "Link portfolio berhasil disalin."
                );

            });

    }

}


/* =====================================================
   START
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadPortfolio();

    }
);

function loadPortfolioCertificates(data) {

    const container =
        document.getElementById(
            "portfolioCertificates"
        );

    if (!container) return;


    container.innerHTML = "";


    const certificates =
        data.certificates || [];


    if (certificates.length === 0) {

        container.innerHTML =
            '<p class="empty-content">Belum ada sertifikat.</p>';

        return;

    }


    certificates.forEach(function(cert) {

        const card =
            document.createElement("div");

        card.className =
            "portfolio-certificate";


        const title =
            document.createElement("h3");

        title.textContent =
            cert.name;


        const issuer =
            document.createElement("p");

        issuer.textContent =
            cert.issuer +
            (
                cert.year
                    ? " · " + cert.year
                    : ""
            );


        card.appendChild(title);

        card.appendChild(issuer);


        if (cert.link) {

            const link =
                document.createElement("a");

            link.href =
                cert.link;

            link.target =
                "_blank";

            link.rel =
                "noopener noreferrer";

            link.textContent =
                "Lihat Sertifikat →";


            card.appendChild(link);

        }


        container.appendChild(card);

    });

}


