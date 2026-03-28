document.addEventListener("DOMContentLoaded", () => {
    const certifications = [
        {
            title: "Backend Development and API Creation",
            issuer: "Packt (Coursera)",
            issuerIcon: "fa-solid fa-book-open",
            date: "Date: Available on certificate",
            verifyUrl: "https://coursera.org/verify/AMYIRT7V9DNG"
        },
        {
            title: "Introduction to Data Analytics",
            issuer: "IBM (Coursera)",
            issuerIcon: "fa-brands fa-ibm",
            date: "Date: Available on certificate",
            verifyUrl: "https://coursera.org/verify/G3O4VEW5RT68"
        },
        {
            title: "Crash Course on Python",
            issuer: "Google (Coursera)",
            issuerIcon: "fa-brands fa-google",
            date: "Date: Available on certificate",
            verifyUrl: "https://coursera.org/verify/1EUZVA394Z6R"
        },
        {
            title: "Create Your First Automation Script Using Selenium and Java",
            issuer: "Coursera",
            issuerIcon: "fa-solid fa-award",
            date: "Date: Available on certificate",
            verifyUrl: "https://coursera.org/verify/HCRDDIAT2LPP"
        },
        {
            title: "Developing Back-End Apps with Node.js and Express",
            issuer: "IBM (Coursera)",
            issuerIcon: "fa-brands fa-ibm",
            date: "Date: Available on certificate",
            verifyUrl: "https://coursera.org/verify/GRFUB51NMEWA"
        },
        {
            title: "DevOps Prerequisite Course",
            issuer: "KodeKloud (Coursera)",
            issuerIcon: "fa-solid fa-cloud",
            date: "Date: Available on certificate",
            verifyUrl: "https://coursera.org/verify/PAW51S39JW65"
        },
        {
            title: "Introduction to Selenium",
            issuer: "Coursera",
            issuerIcon: "fa-solid fa-vial-circle-check",
            date: "Date: Available on certificate",
            verifyUrl: "https://coursera.org/verify/TJ3C4D05YQJR"
        },
        {
            title: "JavaScript Full Stack Capstone Project",
            issuer: "IBM (Coursera)",
            issuerIcon: "fa-brands fa-ibm",
            date: "Date: Available on certificate",
            verifyUrl: "https://coursera.org/verify/A6NLIV7EAO0F"
        },
        {
            title: "Node.js & MongoDB: Developing Backend Database Applications",
            issuer: "IBM (Coursera)",
            issuerIcon: "fa-brands fa-ibm",
            date: "Date: Available on certificate",
            verifyUrl: "https://coursera.org/verify/PW3NM3XTG5CD"
        }
    ];

    const projects = [
        {
            title: "FitSync - Fitness & Diet Recommendation Platform",
            problem: "Individuals struggle to align workout routines with nutrition plans, causing inconsistent results and poor adherence. FitSync unifies activity tracking and dietary planning into one recommendation engine.",
            stack: [
                { name: "MongoDB", icon: "fa-solid fa-database" },
                { name: "Express", icon: "fa-solid fa-server" },
                { name: "React", icon: "fa-brands fa-react" },
                { name: "Node.js", icon: "fa-brands fa-node-js" },
                { name: "REST APIs", icon: "fa-solid fa-cloud" }
            ],
            features: [
                "Personalized workout and calorie recommendations based on user goals and history",
                "Nutrition logging with macro-level progress analytics and trend visualization",
                "Secure profile system with goal tracking and adherence reminders",
                "Responsive dashboard optimized for mobile-first usage"
            ],
            demoUrl: "#",
            repoUrl: "https://github.com/sahil7751/FitSync",
            themeClass: "theme-a",
            previewTag: "MERN Full Stack",
            imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=60"
        },
        {
            title: "bit-chats (Decentralized Messaging App)",
            problem: "Traditional messaging relies on centralized servers and persistent internet access. bit-chats enables private communication in constrained environments with decentralized, offline-capable networking.",
            stack: [
                { name: "Rust", icon: "fa-solid fa-code" },
                { name: "Bluetooth Mesh", icon: "fa-brands fa-bluetooth-b" },
                { name: "Tor (Arti)", icon: "fa-solid fa-user-secret" },
                { name: "E2E Encryption", icon: "fa-solid fa-lock" }
            ],
            features: [
                "Peer-to-peer message relay without centralized message brokers",
                "Offline-first message propagation over BLE mesh networks",
                "Anonymity route support with Tor (Arti) integration",
                "End-to-end encrypted communication pipeline with secure key handling"
            ],
            demoUrl: "#",
            repoUrl: "https://github.com/sahil7751/Bit-chats",
            themeClass: "theme-b",
            previewTag: "Decentralized Communication",
            imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=60"
        },
        {
            title: "Fake News Detection System",
            problem: "Misinformation spreads faster than manual fact-checking workflows. This system assists users by classifying suspicious content into REAL, FAKE, or UNCERTAIN categories using machine learning.",
            stack: [
                { name: "Python", icon: "fa-brands fa-python" },
                { name: "Scikit-learn", icon: "fa-solid fa-brain" },
                { name: "NLP", icon: "fa-solid fa-language" },
                { name: "Model Evaluation", icon: "fa-solid fa-chart-line" }
            ],
            features: [
                "Text preprocessing and feature extraction pipeline for robust classification",
                "Multi-class confidence output: REAL / FAKE / UNCERTAIN",
                "Comparative model evaluation with precision, recall, and F1 insights",
                "Prediction-ready interface for fast newsroom and research workflows"
            ],
            demoUrl: "#",
            repoUrl: "https://github.com/sahil7751/Fake-News-Detection-System",
            themeClass: "theme-c",
            previewTag: "AI Classification",
            imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=60"
        },
        {
            title: "AI-Powered Employee Attrition Prediction System",
            problem: "HR teams often react too late to employee churn patterns. This B2B analytics solution predicts attrition risk early, enabling proactive retention strategies.",
            stack: [
                { name: "Python", icon: "fa-brands fa-python" },
                { name: "Pandas", icon: "fa-solid fa-table" },
                { name: "XGBoost", icon: "fa-solid fa-diagram-project" },
                { name: "Data Visualization", icon: "fa-solid fa-chart-pie" }
            ],
            features: [
                "Attrition risk scoring with interpretable feature importance",
                "Cohort-level analytics for department and tenure-based insights",
                "Actionable retention recommendations driven by model outputs",
                "Dashboard-ready data export for HR and leadership reporting"
            ],
            demoUrl: "#",
            repoUrl: "https://github.com/sahil7751",
            themeClass: "theme-d",
            previewTag: "HR Analytics",
            imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=60"
        },
        {
            title: "EduStake - College Resource Sharing Platform",
            problem: "Students lose time searching scattered notes, assignments, and references. EduStake centralizes academic resources with structured discovery and controlled sharing.",
            stack: [
                { name: "JavaScript", icon: "fa-brands fa-js" },
                { name: "Node.js", icon: "fa-brands fa-node-js" },
                { name: "Express", icon: "fa-solid fa-server" },
                { name: "MongoDB", icon: "fa-solid fa-database" }
            ],
            features: [
                "Upload and approval workflow for high-quality learning resources",
                "Course, semester, and topic tagging for fast retrieval",
                "Role-based permissions for contributors and moderators",
                "Usage metrics to identify high-value content for students"
            ],
            demoUrl: "#",
            repoUrl: "https://github.com/sahil7751",
            themeClass: "theme-e",
            previewTag: "Academic Platform",
            imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=60"
        }
    ];

    const projectGrid = document.getElementById("projectGrid");
    const certGrid = document.getElementById("certGrid");
    const scrollProgress = document.getElementById("scrollProgress");
    const pageLoader = document.getElementById("pageLoader");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("main section[id], header[id]");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.getElementById("navMenu");
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    function renderProjects() {
        if (!projectGrid) {
            return;
        }

        const cardsMarkup = projects.map((project) => {
            const stackMarkup = project.stack
                .map((item) => `<li><i class="${item.icon}" aria-hidden="true"></i>${item.name}</li>`)
                .join("");
            const featureMarkup = project.features.map((item) => `<li>${item}</li>`).join("");

            const demoLabel = project.demoUrl === "#" ? "Live Demo (Soon)" : "Live Demo";
            const demoAttrs = project.demoUrl === "#" ? "aria-disabled=\"true\"" : "";

            return `
                <article class="project-card glass reveal">
                    <div class="project-media ${project.themeClass}">
                        <img class="project-image" src="${project.imageUrl}" alt="${project.title} preview" loading="lazy" decoding="async" width="1200" height="800">
                        <div class="project-preview-frame" aria-hidden="true">
                            <div class="preview-dot-row">
                                <span></span><span></span><span></span>
                            </div>
                            <div class="preview-lines">
                                <em></em><em></em><em></em>
                            </div>
                        </div>
                        <span>${project.previewTag}</span>
                    </div>
                    <div class="project-body">
                        <h3>${project.title}</h3>
                        <p class="project-problem">${project.problem}</p>

                        <ul class="stack-tags" aria-label="Tech stack for ${project.title}">
                            ${stackMarkup}
                        </ul>

                        <ul class="project-features">
                            ${featureMarkup}
                        </ul>

                        <div class="project-actions">
                            <a class="btn btn-primary${project.demoUrl === "#" ? " is-disabled" : ""}" href="${project.demoUrl}" ${demoAttrs} target="_blank" rel="noopener noreferrer">${demoLabel}</a>
                            <a class="btn btn-ghost" href="${project.repoUrl}" target="_blank" rel="noopener noreferrer">View GitHub</a>
                        </div>
                    </div>
                </article>
            `;
        }).join("");

        projectGrid.innerHTML = cardsMarkup;
    }

    function renderCertifications() {
        if (!certGrid) {
            return;
        }

        const certCardsMarkup = certifications.map((cert) => `
            <article class="cert-card glass reveal">
                <div class="cert-issuer">
                    <i class="${cert.issuerIcon}" aria-hidden="true"></i>
                    <span>${cert.issuer}</span>
                </div>
                <h3>${cert.title}</h3>
                <p class="cert-date"><i class="fa-regular fa-calendar" aria-hidden="true"></i>${cert.date}</p>
                <a class="btn btn-primary cert-btn" href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer">View Certificate</a>
            </article>
        `).join("");

        certGrid.innerHTML = certCardsMarkup;
    }

    function setupMobileNav() {
        if (!menuToggle || !navMenu) {
            return;
        }

        menuToggle.addEventListener("click", () => {
            const expanded = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", String(!expanded));
            navMenu.classList.toggle("open", !expanded);
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                menuToggle.setAttribute("aria-expanded", "false");
                navMenu.classList.remove("open");
            });
        });
    }

    function setActiveNavLink() {
        let currentId = "home";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentId = section.id;
            }
        });

        navLinks.forEach((link) => {
            const linkTarget = link.getAttribute("href") || "";
            link.classList.toggle("active", linkTarget === `#${currentId}`);
        });
    }

    function setupEfficientActiveNav() {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) {
                return;
            }

            window.requestAnimationFrame(() => {
                setActiveNavLink();
                updateScrollProgress();
                ticking = false;
            });

            ticking = true;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
    }

    function updateScrollProgress() {
        if (!scrollProgress) {
            return;
        }

        const scrollTop = window.scrollY;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
        scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

    function setupScrollReveal() {
        const revealItems = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver(
            (entries, entryObserver) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        entryObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.18,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        revealItems.forEach((item) => observer.observe(item));
    }

    function setupContactForm() {
        if (!contactForm || !formFeedback) {
            return;
        }

        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                formFeedback.textContent = "Please complete all required fields before submitting.";
                return;
            }

            formFeedback.textContent = "Thanks for your message. I will get back to you soon.";
            contactForm.reset();
        });
    }

    function setupPageLoader() {
        if (!pageLoader) {
            return;
        }

        const finishLoading = () => {
            document.body.classList.add("is-loaded");
        };

        if (document.readyState === "complete") {
            finishLoading();
            return;
        }

        window.addEventListener("load", finishLoading, { once: true });

        window.setTimeout(finishLoading, 1600);
    }

    renderProjects();
    renderCertifications();
    setupMobileNav();
    setupScrollReveal();
    setupContactForm();
    setActiveNavLink();
    updateScrollProgress();
    setupEfficientActiveNav();
    setupPageLoader();
});