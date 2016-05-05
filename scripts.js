
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
    var footerSection = document.querySelector('#footer');
    footerSection.innerHTML = 'Loading...'

    $.get({
        url: 'partials/footer.html',
        success: onLoadedFooterPartial
    });

    function onLoadedFooterPartial(data, textStatus, jqXHR) {
        footerSection.innerHTML = data;

    }


    // INTERMEDIATE exercise

    // write your solution here!

    var tabContent = document.querySelector('#tabContent');
    var tabMenuItems = document.querySelectorAll('.tabs-menu ul li');

    for (var i = 0; i < tabMenuItems.length; i++) {
        var tabMenuItem = tabMenuItems[i];

        tabMenuItem.onclick = onMenuItemClick

        if (i === 0) {
            tabMenuItem.click();
        }
    }

    function onMenuItemClick(event) {
        event.preventDefault();

        // get the target url we want o load the content from
        var contentUrl = this.getAttribute('data-content-url');

        // display the 'loading' indicator in the content area
        tabContent.classList.add('loading');

        $.get({
            url: contentUrl,
            success: onContentPartial
        });

        function onContentPartial(data, textStatus, jqXHR) {
            // update the markup in the content area
            tabContent.innerHTML = data;

            // remove the 'loading' indicator from the content area
            tabContent.classList.remove('loading');
        }
    }

}

// EXPERT exercise
$ = {};
$.get = vanillaGet;

function vanillaGet(request) {

    // write your solution here!

    var xhr = new XMLHttpRequest();

    xhr.open('GET', request.url, true);

    xhr.send();

    xhr.onreadystatechange = processRequest;

    function processRequest(e) {

        if (xhr.readyState == 4 && xhr.status == 200) {
            
            request.success(xhr.responseText, xhr.statusText);

        }

    }
}
