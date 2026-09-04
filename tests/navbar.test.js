const fs = require("fs");
const path = require("path");

const navbarScript = fs.readFileSync(
    path.join(__dirname, "../js/navbar.js"),
    "utf8"
);

function setupNavbar() {
    document.body.innerHTML = `
        <nav class="navbar"></nav>
        <button
            class="menu-toggle"
            aria-expanded="false"
        >☰</button>
    `;

    window.innerWidth = 500;

    eval(navbarScript);

    document.dispatchEvent(
        new Event("DOMContentLoaded")
    );

    return {
        navbar: document.querySelector(".navbar"),
        menuToggle: document.querySelector(".menu-toggle")
    };
}


describe("Mobile navbar", () => {

    beforeEach(() => {
        document.body.innerHTML = "";
    });


    test("opens the navbar when menu toggle is clicked", () => {

        const { navbar, menuToggle } = setupNavbar();

        menuToggle.click();

        expect(
            navbar.classList.contains("nav-open")
        ).toBe(true);

        expect(
            menuToggle.getAttribute("aria-expanded")
        ).toBe("true");

        expect(menuToggle.textContent).toBe("✕");

    });


    test("closes the navbar when menu toggle is clicked again", () => {

        const { navbar, menuToggle } = setupNavbar();

        menuToggle.click();
        menuToggle.click();

        expect(
            navbar.classList.contains("nav-open")
        ).toBe(false);

        expect(
            menuToggle.getAttribute("aria-expanded")
        ).toBe("false");

        expect(menuToggle.textContent).toBe("☰");

    });


    test("closes an open navbar on desktop resize", () => {

        const { navbar, menuToggle } = setupNavbar();

        menuToggle.click();

        Object.defineProperty(window, "innerWidth", {
            writable: true,
            configurable: true,
            value: 1000
        });

        window.dispatchEvent(new Event("resize"));

        expect(
            navbar.classList.contains("nav-open")
        ).toBe(false);

        expect(
            menuToggle.getAttribute("aria-expanded")
        ).toBe("false");

        expect(menuToggle.textContent).toBe("☰");

    });

});