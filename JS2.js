/* =====================================================
   PORTOFOLIOKU - JS2.JS
   ===================================================== */


/* =====================================================
   SECTION NAVIGATION
   ===================================================== */

function showSection(sectionId, button) {

    // sembunyikan semua section
    const sections = document.querySelectorAll(".form-section");

    sections.forEach(section => {
        section.classList.remove("active-section");
    });


    // tampilkan section yang dipilih
    const target = document.getElementById(sectionId);

    if (target) {
        target.classList.add("active-section");
    }


    // hapus active dari semua menu
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.classList.remove("active");
    });


    // aktifkan menu yang diklik
    if (button) {
        button.classList.add("active");
    }

    const sidebar = document.querySelector(".sidebar");
    if (window.innerWidth <= 700 && sidebar) {
        sidebar.classList.remove("mobile-open");
        const toggle = document.getElementById("mobileMenuToggle");
        if (toggle) {
            toggle.setAttribute("aria-expanded", "false");
        }
    }
}

function initMobileMenu() {
    const toggle = document.getElementById("mobileMenuToggle");
    const sidebar = document.querySelector(".sidebar");

    if (!toggle || !sidebar) return;

    toggle.addEventListener("click", function () {
        const isOpen = sidebar.classList.toggle("mobile-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });
}

/* =====================================================
   LIVE PREVIEW
   ===================================================== */

function updatePreview() {

    // NAME
    const nameInput =
        document.getElementById("nameInput");

    const previewName =
        document.getElementById("previewName");


    if (nameInput && previewName) {

        previewName.textContent =
            nameInput.value || "Nama Kamu";

    }


    // HEADLINE
    const headlineInput =
        document.getElementById("headlineInput");

    const previewHeadline =
        document.getElementById("previewHeadline");


    if (headlineInput && previewHeadline) {

        previewHeadline.textContent =
            headlineInput.value || "Profesi Kamu";

    }


    // ABOUT
    const aboutInput =
        document.getElementById("aboutInput");

    const previewAbout =
        document.getElementById("previewAbout");


    if (aboutInput && previewAbout) {

        previewAbout.textContent =
            aboutInput.value ||
            "Ceritakan sedikit tentang dirimu.";

    }


    // UPDATE PROGRESS
    updateProgress();
}


/* =====================================================
   SKILL
   ===================================================== */

function addSkill() {

    const input =
        document.getElementById("skillInput");

    const skillList =
        document.getElementById("skillList");


    if (!input || !skillList) {
        return;
    }


    const skill =
        input.value.trim();


    if (skill === "") {

        alert("Masukkan skill terlebih dahulu.");

        return;
    }


    // buat tag di editor
    const skillTag =
        document.createElement("span");

    skillTag.textContent =
        skill;


    skillList.appendChild(
        skillTag
    );


    // buat tag di live preview
    addSkillToPreview(skill);


    // kosongkan input
    input.value = "";


    updateProgress();
}


/* =====================================================
   ADD SKILL TO PREVIEW
   ===================================================== */

function addSkillToPreview(skill) {

    const previewTags =
        document.querySelector(".preview-tags");


    if (!previewTags) {
        return;
    }


    const tag =
        document.createElement("span");


    tag.textContent =
        skill;


    previewTags.appendChild(tag);
}


/* =====================================================
   PROGRESS
   ===================================================== */

function updateProgress() {

    let progress = 20;


    // PROFILE
    const name =
        document.getElementById("nameInput");

    const headline =
        document.getElementById("headlineInput");

    const about =
        document.getElementById("aboutInput");


    if (
        name &&
        headline &&
        about &&
        name.value.trim() !== "" &&
        headline.value.trim() !== "" &&
        about.value.trim() !== ""
    ) {

        progress = 40;

    }


    // SKILL
    const skills =
        document.querySelectorAll(
            "#skillList span"
        );


    if (skills.length > 0) {

        progress += 10;

    }


    // EDUCATION
    const educationInputs =
        document.querySelectorAll(
            "#education input"
        );


    let educationFilled = false;


    educationInputs.forEach(input => {

        if (input.value.trim() !== "") {

            educationFilled = true;

        }

    });


    if (educationFilled) {

        progress += 10;

    }


    // EXPERIENCE
    const experienceInputs =
        document.querySelectorAll(
            "#experience input, #experience textarea"
        );


    let experienceFilled = false;


    experienceInputs.forEach(input => {

        if (input.value.trim() !== "") {

            experienceFilled = true;

        }

    });


    if (experienceFilled) {

        progress += 10;

    }


    // PROJECT
    const projectInputs =
        document.querySelectorAll(
            "#project input, #project textarea"
        );


    let projectFilled = false;


    projectInputs.forEach(input => {

        if (input.value.trim() !== "") {

            projectFilled = true;

        }

    });


    if (projectFilled) {

        progress += 10;

    }


    // BATASI 100%
    if (progress > 100) {

        progress = 100;

    }


    const progressText =
        document.getElementById("progressText");

    const progressBar =
        document.getElementById("progressBar");


    if (progressText) {

        progressText.textContent =
            progress + "%";

    }


    if (progressBar) {

        progressBar.style.width =
            progress + "%";

    }
}


/* =====================================================
   INPUT CHANGE LISTENER
   ===================================================== */

document.addEventListener("input", function () {
    updatePreview();
    updateEducationPreview();
    updateExperiencePreview();
    updateProjectPreview();
    updateContactPreview();

});

/* =====================================================
   SAVE DATA
   ===================================================== */

function saveData() {

    const portfolioData = {

        // PROFIL
        name: document.getElementById("nameInput")?.value || "",
        headline: document.getElementById("headlineInput")?.value || "",
        about: document.getElementById("aboutInput")?.value || "",

        // PENDIDIKAN
        education: {
            institution:
                document.getElementById("educationInstitution")?.value || "",

            major:
                document.getElementById("educationMajor")?.value || "",

            start:
                document.getElementById("educationStart")?.value || "",

            end:
                document.getElementById("educationEnd")?.value || ""
        },

        // PENGALAMAN
        experience: {
            position:
                document.getElementById("experiencePosition")?.value || "",

            company:
                document.getElementById("experienceCompany")?.value || "",

            description:
                document.getElementById("experienceDescription")?.value || ""
        },

        // PROJECT
        project: {
            name:
                document.getElementById("projectName")?.value || "",

            tools:
                document.getElementById("projectTools")?.value || "",

            description:
                document.getElementById("projectDescription")?.value || ""
        },

        // SKILL
        skills:
            Array.from(
                document.querySelectorAll("#skillList span")
            ).map(function(skill) {
                return skill.textContent;
            }),

        // KONTAK
        contact: {
            email:
                document.getElementById("contactEmail")?.value || "",

            linkedin:
                document.getElementById("contactLinkedIn")?.value || "",

            whatsapp:
                document.getElementById("contactWhatsApp")?.value || ""
        },

       // SERTIFIKAT
certificates:
    Array.from(
        document.querySelectorAll(
            "#certificateList .certificate-item"
        )
    ).map(function(item) {

        return {

            name:
                item.dataset.name || "",

            issuer:
                item.dataset.issuer || "",

            year:
                item.dataset.year || "",

            link:
                item.dataset.link || ""

        };

    }),

// TEMPLATE
template:
    localStorage.getItem("selectedTemplate") || "professional"

























    };


    localStorage.setItem(
        "portfolioData",
        JSON.stringify(portfolioData)
    );

    alert("Perubahan berhasil disimpan.");
}


/* =====================================================
   LOAD DATA
   ===================================================== */

function loadData() {

    const saved =
        localStorage.getItem(
            "portfolioData"
        );


    if (!saved) {
        return;
    }


    const data =
        JSON.parse(saved);


    if (data.name) {

        const input =
            document.getElementById("nameInput");

        if (input) {
            input.value =
                data.name;
        }
    }


    if (data.headline) {

        const input =
            document.getElementById("headlineInput");

        if (input) {
            input.value =
                data.headline;
        }
    }


    if (data.about) {

        const input =
            document.getElementById("aboutInput");

        if (input) {
            input.value =
                data.about;
        }
    }


    updatePreview();
}

/* =====================================================
   PREVIEW BUTTON
   ===================================================== */

function previewPortfolio() {

    alert(
        "Preview portfolio akan dibuka di halaman portfolio."
    );

}


/* =====================================================
   PUBLISH
   ===================================================== */

function publishPortfolio() {
    saveData();
    setTimeout(function() {
        window.location.href = "LivePorto.html";
    }, 300);

}


/* =====================================================
   TEMPLATE
   ===================================================== */

function changeTemplate() {

    alert(
        "Fitur pilihan template akan segera tersedia."
    );

}


/* =====================================================
   INITIALIZATION
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {
    loadData();
    loadProfilePhoto();
    loadCertificateImage();
    updatePreview();
    loadCertificates();
    updateCertificatePreview();
    initMobileMenu();

   // Load template yang terakhir dipilih

    const savedTemplate =
        localStorage.getItem("selectedTemplate");

    if (savedTemplate) {

        applyTemplate(savedTemplate);

    }

});


function updateEducationPreview() {

    const institution =
        document.getElementById(
            "educationInstitution"
        )?.value;

    const major =
        document.getElementById(
            "educationMajor"
        )?.value;

    const start =
        document.getElementById(
            "educationStart"
        )?.value;

    const end =
        document.getElementById(
            "educationEnd"
        )?.value;


    const previewInstitution =
        document.getElementById(
            "previewEducationInstitution"
        );

    const previewMajor =
        document.getElementById(
            "previewEducationMajor"
        );

    const previewYear =
        document.getElementById(
            "previewEducationYear"
        );


    if (previewInstitution) {

        previewInstitution.textContent =
            institution || "Universitas Kamu";

    }


    if (previewMajor) {

        previewMajor.textContent =
            major || "Program Studi";

    }

    if (previewYear) {

        previewYear.textContent =
            `${start || "2021"} — ${end || "2025"}`;
    }
}

function updateProjectPreview() {

    const name =
        document.getElementById(
            "projectName"
        )?.value;

    const tools =
        document.getElementById(
            "projectTools"
        )?.value;
    const previewName =
        document.getElementById(
            "previewProjectName"
        );
    const previewTools =
        document.getElementById(
            "previewProjectTools"
        );
    if (previewName) {

        previewName.textContent =
            name || "Project Kamu";

    }
    if (previewTools) {
        previewTools.textContent =
            tools || "Tools / Teknologi";
    }
}

/* =====================================================
   PROFILE PHOTO
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const photoInput =
        document.getElementById("profilePhotoInput");

    const editorPhoto =
        document.getElementById("profilePhotoPreview");

    const previewAvatar =
        document.getElementById("previewAvatar");


    if (!photoInput) {
        return;
    }


    photoInput.addEventListener("change", function (event) {

        const file =
            event.target.files[0];


        if (!file) {
            return;
        }


        // Pastikan file adalah gambar
        if (!file.type.startsWith("image/")) {

            alert("File yang dipilih harus berupa gambar.");

            return;
        }


        const reader =
            new FileReader();


        reader.onload = function (e) {

            const imageUrl =
                e.target.result;


            // FOTO DI EDITOR
            if (editorPhoto) {

                editorPhoto.innerHTML = "";

                editorPhoto.style.backgroundImage =
                    `url("${imageUrl}")`;

                editorPhoto.style.backgroundSize =
                    "cover";

                editorPhoto.style.backgroundPosition =
                    "center";

                editorPhoto.style.backgroundRepeat =
                    "no-repeat";

            }


            // FOTO DI LIVE PREVIEW
            if (previewAvatar) {

                previewAvatar.innerHTML = "";

                previewAvatar.style.backgroundImage =
                    `url("${imageUrl}")`;

                previewAvatar.style.backgroundSize =
                    "cover";

                previewAvatar.style.backgroundPosition =
                    "center";

                previewAvatar.style.backgroundRepeat =
                    "no-repeat";

            }

            // SIMPAN FOTO DI LOCAL STORAGE
            localStorage.setItem(
                "profilePhoto",
                imageUrl
            );
        };
        reader.readAsDataURL(file);
    });

});

/* =====================================================
   LOAD PROFILE PHOTO
   ===================================================== */

function loadProfilePhoto() {
    const savedPhoto =
        localStorage.getItem("profilePhoto");
    if (!savedPhoto) {
        return;
    }


    const editorPhoto =
        document.getElementById(
            "profilePhotoPreview"
        );


    const previewAvatar =
        document.getElementById(
            "previewAvatar"
        );

    if (editorPhoto) {
        editorPhoto.innerHTML = "";
        editorPhoto.style.backgroundImage =
            `url("${savedPhoto}")`;
        editorPhoto.style.backgroundSize =
            "cover";
        editorPhoto.style.backgroundPosition =
            "center";

    }
    if (previewAvatar) {
        previewAvatar.innerHTML = "";
        previewAvatar.style.backgroundImage =
            `url("${savedPhoto}")`;
        previewAvatar.style.backgroundSize =
            "cover";
        previewAvatar.style.backgroundPosition =
            "center";

    }

}

/* =====================================================
   CERTIFICATE IMAGE UPLOAD
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const certificateInput =
        document.getElementById("certificateImageInput");

    const certificateFileName =
        document.getElementById("certificateFileName");

    if (!certificateInput) return;

    certificateInput.addEventListener("change", function (event) {

        const file = event.target.files[0];

        if (!file) return;

        // Pastikan file adalah gambar
        if (!file.type.startsWith("image/")) {

            alert("File sertifikat harus berupa gambar.");

            certificateInput.value = "";

            return;
        }

        // Tampilkan nama file
        if (certificateFileName) {
            certificateFileName.textContent = file.name;
        }

        const reader = new FileReader();

        reader.onload = function (e) {

            const imageUrl = e.target.result;

            // Simpan gambar
            localStorage.setItem(
                "certificateImage",
                imageUrl
            );

            // Tampilkan di preview
            showCertificateImage(imageUrl);
        };

        reader.readAsDataURL(file);

    });

});

function loadCertificateImage() {

    const savedImage =
        localStorage.getItem("certificateImage");

    if (!savedImage) return;

    const previewImage =
        document.querySelector(".preview-certificate-image");

    if (previewImage) {

        previewImage.innerHTML = "";

        previewImage.style.backgroundImage =
            `url("${savedImage}")`;

        previewImage.style.backgroundSize = "cover";

        previewImage.style.backgroundPosition = "center";

        previewImage.style.backgroundRepeat = "no-repeat";
    }

    const certificateFileName =
        document.getElementById("certificateFileName");

    if (certificateFileName) {

        certificateFileName.textContent =
            "Sertifikat tersimpan";
    }
}


///dadadadad/////////////////////


function addCertificate() {

    const name = document.getElementById("certificateName").value.trim();
    const issuer = document.getElementById("certificateIssuer").value.trim();
    const year = document.getElementById("certificateYear").value.trim();
    const link = document.getElementById("certificateLink").value.trim();

    const imageInput = document.getElementById("certificateImageInput");
    const file = imageInput.files[0];

    if (name === "") {
        alert("Nama sertifikat wajib diisi.");
        return;
    }

    if (issuer === "") {
        alert("Penerbit / Lembaga wajib diisi.");
        return;
    }

    if (!file) {
        alert("Silakan upload gambar sertifikat.");
        return;
    }

    if (!file.type.startsWith("image/")) {
        alert("File harus berupa gambar.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {

        const imageUrl = e.target.result;

        const list = document.getElementById("certificateList");

        const item = document.createElement("div");
        item.className = "certificate-item";

        // Simpan data sertifikat
        item.dataset.name = name;
        item.dataset.issuer = issuer;
        item.dataset.year = year;
        item.dataset.link = link;
        item.dataset.image = imageUrl;

        // =========================
        // GAMBAR
        // =========================

        const image = document.createElement("img");

        image.className = "certificate-preview-image";
        image.src = imageUrl;
        image.alt = name;

        // =========================
        // INFORMASI
        // =========================

        const info = document.createElement("div");
        info.className = "certificate-item-info";

        const title = document.createElement("strong");
        title.textContent = name;

        const detail = document.createElement("span");
        detail.textContent =
            issuer + (year ? " · " + year : "");

        info.appendChild(title);
        info.appendChild(detail);

        // =========================
        // LINK
        // =========================

        if (link !== "") {

            const linkElement = document.createElement("a");

            linkElement.href = link;
            linkElement.target = "_blank";
            linkElement.rel = "noopener noreferrer";

            linkElement.className = "certificate-link";

            linkElement.textContent = "Lihat";

            info.appendChild(linkElement);
        }

        // =========================
        // DELETE
        // =========================

        const deleteButton = document.createElement("button");

        deleteButton.type = "button";
        deleteButton.className = "delete-certificate";
        deleteButton.textContent = "×";

        deleteButton.onclick = function () {
            item.remove();
            updatePreviewCertificates();
        };

        // =========================
        // MASUKKAN KE CARD
        // =========================

        item.appendChild(image);
        item.appendChild(info);
        item.appendChild(deleteButton);

        list.appendChild(item);

        // =========================
        // UPDATE PREVIEW
        // =========================

        updatePreviewCertificates();

        // =========================
        // RESET INPUT
        // =========================

        document.getElementById("certificateName").value = "";
        document.getElementById("certificateIssuer").value = "";
        document.getElementById("certificateYear").value = "";
        document.getElementById("certificateLink").value = "";

        imageInput.value = "";

        document.getElementById("certificateFileName").textContent =
            "Belum ada file";
    };

    reader.readAsDataURL(file);
}

/* =====================================================
   TEMPLATE SYSTEM
   ===================================================== */

function openTemplateModal() {

    const modal =
        document.getElementById("templateModal");

    if (modal) {
        modal.classList.add("active");
    }

}


function closeTemplateModal() {

    const modal =
        document.getElementById("templateModal");

    if (modal) {
        modal.classList.remove("active");
    }

}


function selectTemplate(template, card) {

    const cards =
        document.querySelectorAll(".template-card");

    cards.forEach(function(item) {
        item.classList.remove("selected");
    });


    if (card) {
        card.classList.add("selected");
    }


    localStorage.setItem(
        "selectedTemplate",
        template
    );


    applyTemplate(template);


    setTimeout(function() {
        closeTemplateModal();
    }, 300);

}


function applyTemplate(template) {

    const preview =
        document.querySelector(".portfolio-preview");

    if (!preview) return;


    preview.classList.remove(
        "template-professional",
        "template-creative",
        "template-modern"
    );


    preview.classList.add(
        "template-" + template
    );

}

function updateExperiencePreview() {

    const position =
        document.getElementById("experiencePosition")?.value;

    const company =
        document.getElementById("experienceCompany")?.value;

    const description =
        document.getElementById("experienceDescription")?.value;


    const previewPosition =
        document.getElementById("previewExperiencePosition");

    const previewCompany =
        document.getElementById("previewExperienceCompany");

    const previewDescription =
        document.getElementById("previewExperienceDescription");


    if (previewPosition) {
        previewPosition.textContent =
            position || "Posisi Kamu";
    }

    if (previewCompany) {
        previewCompany.textContent =
            company || "Perusahaan / Organisasi";
    }

    if (previewDescription) {
        previewDescription.textContent =
            description ||
            "Deskripsi pengalaman kamu akan muncul di sini.";
    }
}


function updateContactPreview() {

    const email =
        document.getElementById("contactEmail")?.value;

    const linkedin =
        document.getElementById("contactLinkedIn")?.value;

    const whatsapp =
        document.getElementById("contactWhatsApp")?.value;


    const previewEmail =
        document.getElementById("previewContactEmail");

    const previewLinkedIn =
        document.getElementById("previewContactLinkedIn");

    const previewWhatsApp =
        document.getElementById("previewContactWhatsApp");


    if (previewEmail) {
        previewEmail.textContent =
            email || "email@email.com";
    }

    if (previewLinkedIn) {
        previewLinkedIn.textContent =
            linkedin || "LinkedIn";
    }

    if (previewWhatsApp) {
        previewWhatsApp.textContent =
            whatsapp || "WhatsApp";
    }
}

function saveCertificates() {

    const items =
        document.querySelectorAll(
            "#certificateList .certificate-item"
        );


    const certificates =
        Array.from(items).map(function(item) {

            return {

                name:
                    item.dataset.name || "",

                issuer:
                    item.dataset.issuer || "",

                year:
                    item.dataset.year || "",

                link:
                    item.dataset.link || ""

            };

        });


    localStorage.setItem(
        "certificates",
        JSON.stringify(certificates)
    );

}

function loadCertificates() {

    const saved =
        localStorage.getItem("certificates");

    if (!saved) return;


    const certificates =
        JSON.parse(saved);

    const list =
        document.getElementById("certificateList");

    if (!list) return;


    list.innerHTML = "";


    certificates.forEach(function(cert) {

        const item =
            document.createElement("div");

        item.className =
            "certificate-item";


        item.dataset.name =
            cert.name || "";

        item.dataset.issuer =
            cert.issuer || "";

        item.dataset.year =
            cert.year || "";

        item.dataset.link =
            cert.link || "";


        const info =
            document.createElement("div");

        info.className =
            "certificate-item-info";


        const title =
            document.createElement("strong");

        title.textContent =
            cert.name;


        const detail =
            document.createElement("span");

        detail.textContent =
            cert.issuer +
            (cert.year ? " · " + cert.year : "");


        info.appendChild(title);

        info.appendChild(detail);

        item.appendChild(info);


        if (cert.link) {

            const linkElement =
                document.createElement("a");

            linkElement.href =
                cert.link;

            linkElement.target =
                "_blank";

            linkElement.rel =
                "noopener noreferrer";

            linkElement.className =
                "certificate-link";

            linkElement.textContent =
                "Lihat";

            item.appendChild(linkElement);

        }


        const deleteButton =
            document.createElement("button");

        deleteButton.type =
            "button";

        deleteButton.className =
            "delete-certificate";

        deleteButton.textContent =
            "×";


        deleteButton.onclick =
            function() {

                item.remove();

                saveCertificates();

                updateCertificatePreview();

            };


        item.appendChild(deleteButton);


        list.appendChild(item);

    });

    updateCertificatePreview();

}

function updateCertificatePreview() {

    const container =
        document.getElementById(
            "previewCertificates"
        );

    if (!container) return;


    const items =
        document.querySelectorAll(
            "#certificateList .certificate-item"
        );


    container.innerHTML = "";


    if (items.length === 0) {

        container.innerHTML =
            '<p class="empty-content">Belum ada sertifikat.</p>';

        return;

    }


    items.forEach(function(item) {

        const card =
            document.createElement("div");

        card.className =
            "preview-certificate";


        const title =
            document.createElement("strong");

        title.textContent =
            item.dataset.name;


        const issuer =
            document.createElement("span");

        issuer.textContent =
            item.dataset.issuer +
            (
                item.dataset.year
                    ? " · " + item.dataset.year
                    : ""
            );


        card.appendChild(title);

        card.appendChild(issuer);


        if (item.dataset.link) {

            const link =
                document.createElement("a");

            link.href =
                item.dataset.link;

            link.target =
                "_blank";

            link.textContent =
                "Lihat Sertifikat";

            card.appendChild(link);
        }

        container.appendChild(card);

    });

}

function applyPortfolioTemplate() {

    const saved =
        localStorage.getItem("selectedTemplate");

    const template =
        saved || "professional";

    const body =
        document.getElementById("portfolioBody");

    if (!body) return;


    body.classList.remove(
        "template-professional",
        "template-creative",
        "template-modern"
    );


    body.classList.add(
        "template-" + template
    );

}


document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("certificateImageInput");
    const fileName = document.getElementById("certificateFileName");

    if (input) {

        input.addEventListener("change", function () {

            if (this.files.length > 0) {

                fileName.textContent =
                    this.files[0].name;

            } else {

                fileName.textContent =
                    "Belum ada file";

            }

        });

    }

});


function updatePreviewCertificates() {

    const container =
        document.getElementById("previewCertificates");

    const list =
        document.getElementById("certificateList");

    if (!container || !list) return;

    container.innerHTML = "";

    const certificates =
        list.querySelectorAll(".certificate-item");

    if (certificates.length === 0) {

        container.innerHTML = `
            <p class="empty-content">
                Belum ada sertifikat.
            </p>
        `;

        return;
    }

    certificates.forEach(function (item) {

        const image =
            item.dataset.image;

        const name =
            item.dataset.name;

        const issuer =
            item.dataset.issuer;

        const year =
            item.dataset.year;

        const link =
            item.dataset.link;

        const card =
            document.createElement("div");

        card.className =
            "preview-certificate-card";

        // GAMBAR
        const img =
            document.createElement("img");

        img.src = image;
        img.alt = name;

        // INFO
        const info =
            document.createElement("div");

        info.className =
            "preview-certificate-info";

        const title =
            document.createElement("strong");

        title.textContent = name;

        const detail =
            document.createElement("span");

        detail.textContent =
            issuer + (year ? " · " + year : "");

        info.appendChild(title);
        info.appendChild(detail);

        // LINK
        if (link) {

            const linkElement =
                document.createElement("a");

            linkElement.href = link;
            linkElement.target = "_blank";

            linkElement.textContent =
                "Lihat Sertifikat →";

            info.appendChild(linkElement);
        }

        card.appendChild(img);
        card.appendChild(info);

        container.appendChild(card);
    });
}