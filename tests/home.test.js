const { initializeHome } = require("../js/home.js");

let observerCallback;
let observeMock;
let unobserveMock;


describe("Homepage reveal animations", () => {

    beforeEach(() => {

        document.body.innerHTML = `
            <div class="feature-card"></div>
            <div class="account-card"></div>
            <div class="manage-item"></div>
            <div class="testimonial"></div>
        `;

        observerCallback = null;

        observeMock = jest.fn();
        unobserveMock = jest.fn();

        window.matchMedia = jest.fn().mockReturnValue({
            matches: false
        });

        global.IntersectionObserver = jest.fn(
            function (callback) {

                observerCallback = callback;

                return {
                    observe: observeMock,
                    unobserve: unobserveMock
                };

            }
        );

    });


    test("adds reveal class to all target elements", () => {

        initializeHome();

        const targets = document.querySelectorAll(
            ".feature-card, .account-card, .manage-item, .testimonial"
        );

        targets.forEach((element) => {

            expect(
                element.classList.contains("reveal")
            ).toBe(true);

        });

    });


    test("observes all target elements", () => {

        initializeHome();

        expect(observeMock).toHaveBeenCalledTimes(4);

    });


    test("adds in-view class when an element becomes visible", () => {

        initializeHome();

        const target = document.querySelector(".feature-card");

        observerCallback([
            {
                isIntersecting: true,
                target
            }
        ]);

        expect(
            target.classList.contains("in-view")
        ).toBe(true);

    });


    test("stops observing an element after it becomes visible", () => {

        initializeHome();

        const target = document.querySelector(".feature-card");

        observerCallback([
            {
                isIntersecting: true,
                target
            }
        ]);

        expect(unobserveMock).toHaveBeenCalledWith(target);

    });

});