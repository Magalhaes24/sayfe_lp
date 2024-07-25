function submitToGoogleForm(event) {
    event.preventDefault();
    const form = event.target;

    const fullName = form.fullName.value;
    const email = form.email.value;
    const comments = form.comments.value;

    const googleFormActionURL = 'https://docs.google.com/forms/d/e/1FAIpQLSedc5qVQOGIcf9jmkFQnmHKoQ-PQxG54NIZUCe5QKfw-9QtkQ/formResponse';

    const formData = new FormData();
    formData.append('entry.1045781291', fullName); // Replace with the correct entry ID for "Full Name"
    formData.append('entry.1166974658', email); // Replace with the correct entry ID for "Email"
    formData.append('entry.839337160', comments); // Replace with the correct entry ID for "Comments"

    fetch(googleFormActionURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
    }).then(() => {
        alert('Thank you for submitting your information!');
        form.reset();
    }).catch(error => {
        console.error('Error!', error.message);
    });
}