// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for navbar height
                behavior: "smooth"
            });
        }
    });
});

// Highlight active section in navbar
window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY + 60; // Adjust for navbar offset
    document.querySelectorAll("section").forEach(section => {
        if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            document.querySelectorAll("nav a").forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href").substring(1) === section.id) {
                    link.classList.add("active");
                }
            });
        }
    });
});

// Back to top button
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.id = "backToTop";
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px 15px";
backToTop.style.fontSize = "18px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.border = "none";
backToTop.style.borderRadius = "5px";
backToTop.style.background = "#333";
backToTop.style.color = "#fff";
document.body.appendChild(backToTop);

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});
