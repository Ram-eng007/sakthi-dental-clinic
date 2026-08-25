const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const message =
            document.getElementById("message").value.trim();

        const formMessage =
            document.getElementById("formMessage");


        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please fill in all the fields.";

            formMessage.style.color = "red";

            return;
        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.style.color = "red";

            return;
        }


        const phonePattern =
            /^[0-9]{10}$/;


        if (!phonePattern.test(phone)) {

            formMessage.textContent =
                "Please enter a valid 10 digit phone number.";

            formMessage.style.color = "red";

            return;
        }


        formMessage.textContent =
            "Thank you! Your message has been submitted.";

        formMessage.style.color = "green";

        form.reset();

    });

}


const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(function(question) {

    question.addEventListener("click", function() {

        const currentItem =
            question.parentElement;


        document.querySelectorAll(".faq-item")
            .forEach(function(item) {

                if (item !== currentItem) {
                    item.classList.remove("active");
                }

            });


        currentItem.classList.toggle("active");


        const symbol =
            question.querySelector("span");


        if (currentItem.classList.contains("active")) {

            symbol.textContent = "−";

        } else {

            symbol.textContent = "+";

        }

    });

});