// ========================================
// LODGY PORTFOLIO - MAIN JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // ELEMENTS
    // ========================================

    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    const designGallery = document.querySelector("#designGallery");
    const designCards = document.querySelectorAll(".design-card");

    const lightbox = document.querySelector("#lightbox");
    const lightboxImage = document.querySelector("#lightboxImage");
    const lightboxTitle = document.querySelector("#lightboxTitle");
    const lightboxCategory = document.querySelector("#lightboxCategory");
    const lightboxDescription = document.querySelector("#lightboxDescription");
    const lightboxNumber = document.querySelector("#lightboxNumber");

    const lightboxClose = document.querySelector("#lightboxClose");
    const lightboxPrev = document.querySelector("#lightboxPrev");
    const lightboxNext = document.querySelector("#lightboxNext");


    // ========================================
    // DESIGNS DATA
    // ========================================

    const designs = [
        {
            image: "images/design-1.jpg",
            title: "Butterfly Lipstick – Beauty & Glow",
            category: "Cosmetic Product Design",
            description: "A sleek cosmetic product manipulation highlighting the \"Butterfly\" lipstick. Focuses on strong bottom perspective reflection, soft pastel cloud backgrounds, and high-end metallic lighting techniques."
        },
        {
            image: "images/design-2.jpg",
            title: "Loki – Glorious Purpose Poster Concept",
            category: "Cinematic Character Poster",
            description: "A cinematic character poster for Loki featuring striking green neon atmospheres. Highlights strong rim-lighting, background manipulation with a glowing green moon, and atmospheric landscape blending."
        },
        {
            image: "images/design-3.jpg",
            title: "Amazing Products",
            category: "E-commerce Social Media Post",
            description: "An engaging e-commerce social media graphic capturing real customer emotion. Features custom glowing Arabic typography, vibrant purple backdrop, and playful doodle elements to draw immediate attention"
        },
        {
            image: "images/design-4.jpg",
            title: "Sweet Donuts",
            category: "Bakery Poster",
            description: "A colorful and appetizing commercial ad for a donut shop. Utilizes warm sunburst background vectors, floating 3D product placement, and fun bakery typography designed to boost sales and conversions."
        },
        {
            image: "images/design-5.jpg",
            title: "The Joker",
            category: "Cinematic Poster",
            description: "A balanced editorial composition focused on readability and visual hierarchy."
        },
        {
            image: "images/design-6.jpg",
            title: "Creative Poster",
            category: "Poster Design",
            description: "A creative poster using typography, imagery and composition."
        },
        {
            image: "images/design-7.jpg",
            title: "Nescafe Gold – Premium Coffee Poster",
            category: "Product Advertising",
            description: "A commercial poster design for Nescafe Gold highlighting luxury and premium quality. Features dynamic floating coffee beans, warm golden lighting effects, and precise product reflections to convey a rich, smooth coffee experience."
        },
        {
            image: "images/design-8.jpg",
            title: "Cadbury Silk Oreo",
            category: "Food & Beverage Advertising",
            description: "An energetic social media ad for Cadbury Silk Oreo. Utilizes bold liquid splash manipulation, vibrant color contrast (Purple & Blue gradient), and playful typography to emphasize freshness and indulgence."
        },
        {
            image: "images/design-9.jpg",
            title: "Guerlain Perfume – Elegance & Softness",
            category: "Luxury Product Visual / Beauty Poster",
            description: "A luxury beauty advertisement for Guerlain Perfume designed with a soft, elegant aesthetic. Incorporates delicate floating flower petals, pearl accents, and subtle sparkling highlights to accentuate the premium glass bottle."
        },
        {
            image: "images/design-10.jpg",
            title: "Voldemort – Dark Magic Movie Concept Poster",
            category: "Movie Poster Design",
            description: "A dark fantasy movie poster concept centered around Voldemort. Features creative silhouette composition, character montage framing, and a moody emerald-green color palette to evoke magic and suspense."
        },
        {
            image: "images/design-11.jpg",
            title: "Travel Promotional Flyer",
            category: "Travel Ad",
            description: "A vibrant promotional travel banner utilizing a page-curl visual technique to reveal a breathtaking destination. Combines clean typography, discount badges, and a fresh ocean-blue color scheme"
        },
        {
            image: "images/design-12.jpg",
            title: "Lucifer Morningstar – Dark Drama Poster",
            category: "Entertainment Poster / Movie Art",
            description: "A dramatic fan-art poster for the TV series Lucifer. Built with stark black-and-white character portrait contrast mixed with bold crimson highlights, texture overlays, and dramatic quote typography."
        }
    ];


    // ========================================
    // TYPING EFFECT
    // ========================================

    const typingElement = document.querySelector("#typingText");

    if (typingElement) {

        const words = [
            "GRAPHIC DESIGNER",
            "MEDICAL STUDENT",
            "VISUAL CREATIVE"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentWord.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1800);
                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex++;

                    if (wordIndex >= words.length) {
                        wordIndex = 0;
                    }
                }
            }

            setTimeout(
                typeEffect,
                deleting ? 55 : 100
            );
        }

        typeEffect();
    }


    // ========================================
    // NAVBAR
    // ========================================

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    // ========================================
    // MOBILE MENU
    // ========================================

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("active");
            navLinks.classList.toggle("active");

        });

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                menuToggle.classList.remove("active");
                navLinks.classList.remove("active");

            });

        });
    }


    // ========================================
    // SCROLL REVEAL
    // ========================================

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            observer.unobserve(entry.target);
                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    // ========================================
    // ACTIVE NAV LINK
    // ========================================

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });

        navigationLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    });


    // ========================================
    // LIGHTBOX
    // ========================================

    let currentDesign = 0;


    function openLightbox(index) {

        if (!designs[index]) return;

        currentDesign = index;

        const design = designs[currentDesign];

        lightboxImage.src = design.image;
        lightboxImage.alt = design.title;

        lightboxTitle.textContent = design.title;
        lightboxCategory.textContent = design.category;
        lightboxDescription.textContent = design.description;

        lightboxNumber.textContent =
            `${String(currentDesign + 1).padStart(2, "0")} / 12`;

        lightbox.classList.add("open");

        document.body.classList.add("lightbox-open");

        // Prevent background scrolling
        document.body.style.overflow = "hidden";

    }


    function closeLightbox() {

        lightbox.classList.remove("open");

        document.body.classList.remove("lightbox-open");

        document.body.style.overflow = "";

    }


    function nextDesign() {

        currentDesign++;

        if (currentDesign >= designs.length) {
            currentDesign = 0;
        }

        openLightbox(currentDesign);

    }


    function previousDesign() {

        currentDesign--;

        if (currentDesign < 0) {
            currentDesign = designs.length - 1;
        }

        openLightbox(currentDesign);

    }


    // ========================================
    // ⭐ DESIGN CLICK - IMPORTANT FIX
    // ========================================

    if (designGallery) {

        designGallery.addEventListener("click", (event) => {

            const card =
                event.target.closest(".design-card");

            if (!card) return;

            const index =
                Number(card.getAttribute("data-index"));

            if (
                Number.isInteger(index) &&
                designs[index]
            ) {

                openLightbox(index);

            }

        });

    }


    // ========================================
    // CREATE MARQUEE CLONES
    // ========================================

    if (designGallery) {

        designCards.forEach(card => {

            const clone =
                card.cloneNode(true);

            clone.setAttribute(
                "aria-hidden",
                "true"
            );

            clone.classList.add(
                "marquee-clone"
            );

            designGallery.appendChild(clone);

        });

    }


    // ========================================
    // LIGHTBOX BUTTONS
    // ========================================

    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );

    }


    if (lightboxNext) {

        lightboxNext.addEventListener(
            "click",
            nextDesign
        );

    }


    if (lightboxPrev) {

        lightboxPrev.addEventListener(
            "click",
            previousDesign
        );

    }


    // ========================================
    // CLICK OUTSIDE LIGHTBOX
    // ========================================

    if (lightbox) {

        lightbox.addEventListener("click", (event) => {

            if (event.target === lightbox) {
                closeLightbox();
            }

        });

    }


    // ========================================
    // KEYBOARD CONTROLS
    // ========================================

    document.addEventListener("keydown", (event) => {

        if (!lightbox.classList.contains("open")) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowRight") {
            nextDesign();
        }

        if (event.key === "ArrowLeft") {
            previousDesign();
        }

    });


    // ========================================
    // SMOOTH SCROLL
    // ========================================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(event) {

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    // ========================================
    // IMAGE FALLBACK
    // ========================================

    if (lightboxImage) {

        lightboxImage.addEventListener(
            "error",
            () => {

                lightboxImage.style.display = "none";

            }
        );

        lightboxImage.addEventListener(
            "load",
            () => {

                lightboxImage.style.display = "block";

            }
        );

    }


    // ========================================
    // PREVENT IMAGE DRAGGING
    // ========================================

    document
        .querySelectorAll("img")
        .forEach(image => {

            image.addEventListener(
                "dragstart",
                event => event.preventDefault()
            );

        });


    // ========================================
    // CUSTOM CURSOR EFFECT
    // ========================================

    const cursor =
        document.querySelector(".cursor");

    const cursorDot =
        document.querySelector(".cursor-dot");

    if (
        cursor &&
        cursorDot &&
        window.innerWidth > 900
    ) {

        document.addEventListener("mousemove", event => {

            cursor.style.transform =
                `translate(${event.clientX}px, ${event.clientY}px)`;

            cursorDot.style.transform =
                `translate(${event.clientX}px, ${event.clientY}px)`;

        });

    }


    console.log(
        "✨ Lodgy Portfolio loaded successfully."
    );

});