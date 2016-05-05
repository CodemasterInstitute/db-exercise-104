
window.onload = function() {
    
    // RESOURCES
    // https://api.jquery.com/jquery.get/
    // Expert - https://www.kirupa.com/html5/making_http_requests_js.htm


    // BEGINNER exercises

    // load welcome
    var welcomeSection = document.querySelector('#welcome');
    welcomeSection.innerHTML = 'Loading...'

    $.get({
        url: 'partials/welcome.html',
        success: onLoadedWelcomePartial
    });

    function onLoadedWelcomePartial(data, textStatus, jqXHR) {
        welcomeSection.innerHTML = data;

    }


    // load footer



    // INTERMEDIATE exercise

    // write your solution here!

}

// EXPERT exercise
// $ = {};
// $.get = vanillaGet;

// function vanillaGet(request) {

//     // write your solution here!

// }
