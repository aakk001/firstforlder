$(document).ready(function () {
    // Theme toggle button functionality
    $('#theme-toggle').on('click', function () {
        $('body').toggleClass('dark-theme');
    });

    // Form repeater functionality
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show: function () {
            $(this).slideDown();
        },
        hide: function (deleteElement) {
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    });
});