zeitJetz();

function zeitJetz() {
    var zeit = new Date();

    var stunden = zeit.getHours();
    var min = zeit.getMinutes();
    var sec = zeit.getSeconds();

    //testen ob Uhrzeit einstellig ist

    if (stunden < 10) {
        stunden = "0" + stunden;
    } else {
        stunden = stunden + "";
    }


    if (min < 10) {
        min = "0" + min;
    } else {
        min = min + "";
    }


    if (sec < 10) {
        sec = "0" + sec;
    } else {
        sec = sec + "";
    }



    document.getElementById('log').innerHTML = stunden + ':' + min + ':' + sec;
}
//Interval zum laufen der Zeit (Update)
setInterval(zeitJetz, 900);