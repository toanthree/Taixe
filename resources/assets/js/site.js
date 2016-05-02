// Reset Ckeditor for form reset event
function onResetButton() {
    $('iframe').contents().find('body').empty();
}

// Hot post side of tin tức
function animateCloud() {
    $('#cloud').animate({left: '+=78%'}, {duration: 20000, easing: "linear"})
        .animate({left: '-=78%'}, {duration: 20000, easing: "linear", complete: animateCloud});
}

$(function () {
    animateCloud();

    // slide for information message
    $('div.alert').not('.alert-important').delay(2000).slideUp(300);
});