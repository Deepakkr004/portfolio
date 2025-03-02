document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Create an object to store the data
        const formData = {
            fullName: fullName,
            email: email,
            phoneNumber: phoneNumber,
            subject: subject,
            message: message
        };

        // Store the data in localStorage
        localStorage.setItem('contactFormData', JSON.stringify(formData));

        // Log the data (for debugging purposes)
        console.log('Form Data Saved:', formData);

        // Optionally, show a confirmation message
        alert('Your message has been saved.');

        // Optionally, clear the form
        contactForm.reset();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("MLwCPmDYR_ohWWGFm"); // Replace with your actual EmailJS Public Key

    document.getElementById('contact-form').addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        try {
            await emailjs.send("service_wcm3agr", "template_i4n32ts", formData);
            alert('Your message has been sent successfully!');
            document.getElementById('contact-form').reset(); // Clear the form after submission
        } catch (error) {
            console.error("EmailJS Error:", error);
            alert('Oops... Something went wrong. Please try again.');
        }
    });
});
