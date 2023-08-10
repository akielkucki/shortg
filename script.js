

const videoContainer = document.getElementById('video-container');
const videoElement = document.getElementById('resizable-video');
var audio = document.getElementById("audio");
document.body.addEventListener("mousemove", function () {
    audio.play()
    videoElement.play();
})
function resizeVideo() {
    const containerWidth = videoContainer.clientWidth;
    const containerHeight = videoContainer.clientHeight;
    const originalAspectRatio = videoElement.videoWidth / videoElement.videoHeight;

    // Calculate new height to maintain the original aspect ratio
    const newHeight = containerWidth / originalAspectRatio;
    const newWidth = containerHeight / originalAspectRatio;

    videoElement.style.height = `${newHeight}px`;
    if (window.innerWidth <= 800) {
   
        videoElement.style.height = `100vh`;
    }
}

// Initial resize and attach the event listener
resizeVideo();
window.addEventListener('resize', resizeVideo);

  
