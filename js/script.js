function clickInput () {
    document.getElementById('fileInput').click()
}

function printVideos () {
    // const folderInput = document.getElementById('fileInput');
    // const videoOutput = document.querySelector('.body');
    // folderInput.addEventListener('change', () => {
    //   const files = Array.from(folderInput.files);
    //   const videoFiles = files.filter(file => file.type.startsWith('video/'));

    //   videoOutput.innerHTML = ''; // Clear any previously displayed videos

    //   videoFiles.forEach(file => {
    //     const video = document.createElement('video');
    //     video.src = URL.createObjectURL(file);
    //     video.controls = true;

    //     videoOutput.appendChild(video);
    //   });
    // });
    const body = document.querySelector('.body')
    body.innerHTML = '' // Clear previous content
    const fileInput = document.getElementById('fileInput')
    const videoFiles = Array.from(fileInput.files).filter(file => file.type.startsWith('video/'))
    if (videoFiles.length === 0) {
        body.innerHTML = '<p>&nbsp;No videos found.</p>';
        return; // Exit if no video files are found
    }
    const page = Math.ceil(videoFiles.length/6)
    const video = 0;

    for (let i = 0; i <= page; i++) {
        body.innerHTML = ''
        for (let j = 0; j <= 5; j++) {
            const videoElement = document.createElement('video')
            const videoURL = URL.createObjectURL(videoFiles[video]);
            videoElement.src = videoURL;
            videoElement.controls = true;
            body.appendChild(videoElement);
            video++
            if (video >= videoFiles.length) {
                break; // Exit the loop if there are no more videos
            }
        }
    }
}