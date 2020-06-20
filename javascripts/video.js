var video = window.localStorage.getItem('video');

document.getElementById("video").setAttribute("src", "footage/videos/" + video + "/video.mp4");