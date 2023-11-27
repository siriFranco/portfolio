// Jquery to load navbar and footer
$(document).ready(function(){
    $.get("/assets/html/navbar.html", data => {
        $("nav").replaceWith(data);
    });

    $.get("/assets/html/footer.html", data => {
        $("footer").replaceWith(data);

        // Enabling tooltips
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    });
});