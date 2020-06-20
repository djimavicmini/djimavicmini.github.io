var isshow = localStorage.getItem('isshow');
if (isshow == null) {
    localStorage.setItem('isshow', 1);

    var main = document.getElementById("main");
    var load = document.getElementById("load");
    main.style.visibility = 'hidden';

    setTimeout(function () {

        main.style.visibility = 'visible';
        load.style.visibility = "hidden";


        var snackbar = document.getElementById("snackbar");
        snackbar.className = "show";


        setTimeout(function () {
            snackbar.className = snackbar.className.replace("show", "");
        }, 5000);

    }, 10000);


} else {
    var load = document.getElementById("load");
    load.style.visibility = "hidden";
}




function video(video) {
    window.open("video.html", "_self");
    localStorage.setItem("video", video);
}