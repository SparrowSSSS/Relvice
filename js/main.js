let btnVideoPlayer = document.querySelector(".video-whoweare__btn")
let videoPlayer = document.querySelector(".video-whoweare__file")

let videoAct = () => {
    videoPlayer.play();
    videoPlayer.setAttribute("controls", "");
    btnVideoPlayer.style.display = "none";
};