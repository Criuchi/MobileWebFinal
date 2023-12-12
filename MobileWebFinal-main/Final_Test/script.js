$(document).ready(function () {
    $('#articleForm').validate({
        messages: {
            headline: {
                required: "Please enter a headline.",
                minlength: "Headline must be at least 3 characters long."
            },
            file: {
                required: "Please select a file.",
                accept: "Please upload a file with a .doc or .pdf extension."
            },
            author: {
                required: "Please enter the author's name.",
                minlength: "Author's name must be at least 3 characters long."
            },
            date: {
                required: "Please select a date."
            },
            category: {
                required: "Please select a category."
            }
        }
    });
});