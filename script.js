$(document).ready(function () {
    $('#registrationForm').submit(function (e) {
        e.preventDefault(); // Prevent default form submission

        let formData = $(this).serialize(); // Get form data

        // Show success message with form data
        $('#result').fadeIn();
        $('#resultContent').html(`
            <p><strong>Full Name:</strong> ${$('#name').val()}</p>
            <p><strong>Email:</strong> ${$('#email').val()}</p>
            <p><strong>Phone Number:</strong> ${$('#phone').val()}</p>
            <p><strong>Gender:</strong> ${$('#gender').val()}</p>
            <p><strong>Address:</strong> ${$('#address').val()}</p>
        `);

        // Clear the form
        $('#registrationForm')[0].reset();
        $('.form-container').hide();
    });

    // Allow new entry
    $('#newEntryBtn').click(function () {
        $('#result').fadeOut();
        $('.form-container').fadeIn();
    });
});
