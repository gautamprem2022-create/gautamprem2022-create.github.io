document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;

    alert(`Thank you, ${name}! We have received your enquiry about ${interest}. We will contact you at ${email} shortly.`);
    
    // Reset the form
    this.reset();
});
