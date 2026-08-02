/* =========================================================
   SAHIL JIRAPURE - PORTFOLIO JAVASCRIPT
   ========================================================= */

"use strict";


/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = [

    {
        title: "AI-Powered Interview Prep Platform",

        category: "Full Stack + AI",

        description:
            "A full-stack job tracking and interview preparation platform with secure authentication, role-based access and AI-assisted features.",

        stack: [
            "Java",
            "Spring Boot",
            "React",
            "MySQL",
            "Docker",
            "Groq API",
            "JWT"
        ],

        features: [
            "Built 30+ REST APIs for applications, interviews and dashboard analytics",
            "Implemented JWT authentication and role-based access control",
            "Integrated Groq API for resume analysis and job recommendations",
            "Containerized the complete application using Docker"
        ],

        github:
            "https://github.com/sahil7751/interview-prep-api",

        demo: ""
    },


    {
        title: "AI-Powered Employee Attrition Prediction",

        category: "Machine Learning",

        description:
            "A machine-learning system for predicting employee attrition and identifying the major factors influencing employee retention.",

        stack: [
            "Python",
            "XGBoost",
            "Scikit-learn",
            "Pandas",
            "NumPy",
            "Matplotlib"
        ],

        features: [
            "Trained an XGBoost classifier using 1,470 IBM HR records",
            "Improved prediction accuracy from 78% baseline to 87%",
            "Built an end-to-end data preprocessing pipeline",
            "Identified 10 key attrition drivers using feature importance"
        ],

        github:
            "https://github.com/sahil7751/AI-Powered-Employee-Attrition-Prediction-System-for-B2B-HR-Analytics",

        demo: ""
    },


    {
        title: "Fake News Detection System",

        category: "NLP + Machine Learning",

        description:
            "An NLP-based fake news classification system with a Flask REST API and Supabase authentication.",

        stack: [
            "Python",
            "Flask",
            "NLP",
            "TF-IDF",
            "Scikit-learn",
            "Supabase"
        ],

        features: [
            "Trained the NLP classifier on 20,800+ news articles",
            "Achieved 97% classification accuracy",
            "Used TF-IDF for text feature extraction",
            "Built a Flask REST API with Supabase authentication"
        ],

        github:
            "https://github.com/sahil7751/Fake-News-Detection-System",

        demo: ""
    },


    {
        title: "Student Management System",

        category: "Full Stack CRUD",

        description:
            "A full-stack student management application for managing student records through a Spring Boot backend and web interface.",

        stack: [
            "Java",
            "Spring Boot",
            "React",
            "MySQL"
        ],

        features: [
            "Create and manage student records",
            "Implemented complete CRUD functionality",
            "Spring Boot REST backend",
            "Database-backed student management"
        ],

        github:
            "https://github.com/sahil7751/Student-management-system",

        demo: ""
    },


    {
        title: "Digital Marketing Agency Website",

        category: "Web Development",

        description:
            "A responsive digital marketing agency website built with a modern frontend stack and deployed publicly on Vercel.",

        stack: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS"
        ],

        features: [
            "Responsive desktop and mobile interface",
            "Modern reusable UI components",
            "SEO-oriented website structure",
            "Deployed publicly using Vercel"
        ],

        github:
            "https://github.com/sahil7751/Digital-Marketing-Agency-Website",

        demo:
            "https://digital-marketing-agency-gilt.vercel.app"
    }

];



/* =========================================================
   CERTIFICATION DATA
   ========================================================= */

const certifications = [

    {
        title:
            "Design and Analysis of Algorithms",

        issuer:
            "NPTEL",

        date:
            "Jul – Sep 2025",

        icon:
            "fa-solid fa-code",

        credential:
            ""
    },


    {
        title:
            "Computational Thinking for Problem Solving",

        issuer:
            "Coursera",

        date:
            "December 2023",

        icon:
            "fa-solid fa-brain",

        credential:
            ""
    },


    {
        title:
            "Introduction to Computers, OS & Security",

        issuer:
            "Coursera",

        date:
            "December 2023",

        icon:
            "fa-solid fa-shield-halved",

        credential:
            ""
    }

];



/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const projectGrid =
    document.getElementById("projectGrid");

const certGrid =
    document.getElementById("certGrid");

const menuToggle =
    document.querySelector(".menu-toggle");

const navMenu =
    document.getElementById("navMenu");

const navLinks =
    document.querySelectorAll(".nav-link");

const scrollProgress =
    document.getElementById("scrollProgress");

const contactForm =
    document.getElementById("contactForm");

const formFeedback =
    document.getElementById("formFeedback");



/* =========================================================
   PAGE LOADER
   ========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add("is-loaded");

});



/* =========================================================
   PROJECT FALLBACK IMAGE
   ========================================================= */

const projectPlaceholder = `
    data:image/svg+xml;charset=UTF-8,
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="900"
        height="500"
        viewBox="0 0 900 500">

        <defs>

            <linearGradient
                id="gradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1">

                <stop
                    offset="0%"
                    stop-color="%23eaf1ff"/>

                <stop
                    offset="100%"
                    stop-color="%23fbe8d3"/>

            </linearGradient>

        </defs>

        <rect
            width="900"
            height="500"
            fill="url(%23gradient)"/>

        <circle
            cx="450"
            cy="205"
            r="65"
            fill="%232a6ef3"
            opacity="0.12"/>

        <text
            x="450"
            y="225"
            text-anchor="middle"
            font-family="Arial"
            font-size="54"
            font-weight="700"
            fill="%232a6ef3">
            &lt;/&gt;
        </text>

        <text
            x="450"
            y="320"
            text-anchor="middle"
            font-family="Arial"
            font-size="26"
            font-weight="600"
            fill="%23101c38">
            Project Preview
        </text>

    </svg>
`.replace(/\n/g, "");



/* =========================================================
   CREATE PROJECT CARD
   ========================================================= */

function createProjectCard(project, index) {

    const stackHTML = project.stack
        .map(technology => `<li>${technology}</li>`)
        .join("");


    const featuresHTML = project.features
        .map(feature => `<li>${feature}</li>`)
        .join("");


    const demoButton = project.demo
        ? `
            <a
                class="btn btn-primary"
                href="${project.demo}"
                target="_blank"
                rel="noopener noreferrer">

                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                Live Demo

            </a>
        `
        : "";


    return `

        <article
            class="project-card glass reveal"
            style="transition-delay:${Math.min(index * 0.05, 0.2)}s">


            <div class="project-placeholder">

                <div class="project-placeholder-icon">
                    <i class="fa-solid fa-code"></i>
                </div>

                <span>${project.category}</span>

            </div>


            <div class="project-body">

                <h3>${project.title}</h3>


                <p class="project-problem">
                    ${project.description}
                </p>


                <ul class="stack-tags">
                    ${stackHTML}
                </ul>


                <ul class="project-features">
                    ${featuresHTML}
                </ul>


                <div class="project-actions">

                    <a
                        class="btn btn-ghost"
                        href="${project.github}"
                        target="_blank"
                        rel="noopener noreferrer">

                        <i class="fa-brands fa-github"></i>
                        Source Code

                    </a>

                    ${demoButton}

                </div>

            </div>

        </article>

    `;
}


/* =========================================================
   RENDER PROJECTS
   ========================================================= */

function renderProjects() {

    if (!projectGrid) {
        return;
    }


    projectGrid.innerHTML =
        projects
            .map(createProjectCard)
            .join("");

}



/* =========================================================
   CREATE CERTIFICATION CARD
   ========================================================= */

function createCertificationCard(cert, index) {

    const credentialButton =
        cert.credential
            ? `
                <a
                    class="btn btn-ghost cert-btn"
                    href="${cert.credential}"
                    target="_blank"
                    rel="noopener noreferrer">

                    <i class="fa-solid fa-arrow-up-right-from-square"></i>

                    View Credential

                </a>
            `
            : `
                <span
                    class="btn btn-ghost cert-btn is-disabled">

                    Certificate

                </span>
            `;


    return `

        <article
            class="cert-card glass reveal"
            style="transition-delay: ${Math.min(index * 0.08, 0.2)
        }s">


            <p class="cert-issuer">

                <i class="${cert.icon}"></i>

                ${cert.issuer}

            </p>


            <h3>
                ${cert.title}
            </h3>


            <p class="cert-date">

                <i class="fa-regular fa-calendar"></i>

                ${cert.date}

            </p>


            ${credentialButton}

        </article>

    `;

}



/* =========================================================
   RENDER CERTIFICATIONS
   ========================================================= */

function renderCertifications() {

    if (!certGrid) {
        return;
    }


    certGrid.innerHTML =
        certifications
            .map(createCertificationCard)
            .join("");

}



/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

function closeMobileMenu() {

    if (!navMenu || !menuToggle) {
        return;
    }


    navMenu.classList.remove("open");


    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

}



if (menuToggle && navMenu) {

    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                navMenu.classList.toggle("open");


            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );

}



/* CLOSE MENU AFTER LINK CLICK */

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        closeMobileMenu
    );

});



/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id], header[id]"
    );


function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 180;


    let currentSection =
        "home";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;


        const sectionHeight =
            section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        const href =
            link.getAttribute("href");


        if (
            href ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}



/* =========================================================
   SCROLL PROGRESS BAR
   ========================================================= */

function updateScrollProgress() {

    if (!scrollProgress) {
        return;
    }


    const scrollTop =
        window.scrollY;


    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;


    if (documentHeight <= 0) {

        scrollProgress.style.width =
            "0%";

        return;

    }


    const progress =
        Math.min(
            100,
            Math.max(
                0,
                (
                    scrollTop /
                    documentHeight
                ) * 100
            )
        );


    scrollProgress.style.width =
        `${progress}%`;

}



/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function setupRevealAnimations() {

    const revealElements =
        document.querySelectorAll(".reveal");


    /*
       Fallback:
       If IntersectionObserver isn't supported,
       show everything.
    */

    if (
        !(
            "IntersectionObserver"
            in window
        )
    ) {

        revealElements.forEach(element => {

            element.classList.add("visible");

        });

        return;

    }


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("visible");


                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.08,

                rootMargin:
                    "0px 0px -30px 0px"
            }

        );


    revealElements.forEach(element => {

        observer.observe(element);

    });

}



/* =========================================================
   CONTACT FORM
   ========================================================= */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();



            /* VALIDATION */

            if (
                !name ||
                !email ||
                !message
            ) {

                if (formFeedback) {

                    formFeedback.textContent =
                        "Please complete all fields.";

                }

                return;

            }



            /* SIMPLE EMAIL CHECK */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(email)
            ) {

                if (formFeedback) {

                    formFeedback.textContent =
                        "Please enter a valid email address.";

                }

                return;

            }



            /*
             * There is currently no backend
             * connected to this form.
             *
             * Instead of pretending the message
             * was sent, open the user's email app.
             */

            const subject =
                encodeURIComponent(
                    `Portfolio enquiry from ${name}`
                );


            const body =
                encodeURIComponent(
                    `Hi Sahil,

My name is ${name}.

${message}

Email: ${email}`
                );


            window.location.href =
                `mailto:sahiljirapure8@gmail.com?subject=${subject}&body=${body}`;



            if (formFeedback) {

                formFeedback.textContent =
                    "Opening your email application...";

            }

        }
    );

}



/* =========================================================
   GLOBAL SCROLL EVENT
   ========================================================= */

let scrollTicking = false;


window.addEventListener(
    "scroll",
    () => {

        if (scrollTicking) {
            return;
        }


        scrollTicking = true;


        window.requestAnimationFrame(
            () => {

                updateScrollProgress();

                updateActiveNavigation();

                scrollTicking = false;

            }
        );

    },
    {
        passive: true
    }
);



/* =========================================================
   ESCAPE CLOSES MOBILE MENU
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeMobileMenu();

        }

    }
);



/* =========================================================
   INITIALIZE WEBSITE
   ========================================================= */

function initializePortfolio() {

    renderProjects();

    renderCertifications();

    /*
     * IMPORTANT:
     * Projects and certificates must
     * render BEFORE reveal observer
     * is initialized.
     */

    setupRevealAnimations();

    updateScrollProgress();

    updateActiveNavigation();

}



document.addEventListener(
    "DOMContentLoaded",
    initializePortfolio
);