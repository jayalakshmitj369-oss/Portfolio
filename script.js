/* ================= MOBILE MENU ================= */

const menuButton = document.querySelector(".menu-btn");

const navigation = document.querySelector(".nav-links");


menuButton.addEventListener("click", function () {

    navigation.classList.toggle("open");

});


/* ================= CLOSE MENU ================= */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("open");

    });

});


/* ================= CURRENT YEAR ================= */

const year =
    document.getElementById("year");

year.textContent =
    new Date().getFullYear();


/* ================= SCROLL ANIMATION ================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .project-introduction, .case-study, .website-case"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

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


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});