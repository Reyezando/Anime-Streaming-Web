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

    for (let i = 1; i <= page; i++) {
        if (i = 2) {
            body.innerHTML += '<div class="paging"><a class="nextPage">Next Page<img src="assets/next-arrow.png" alt=""></a></div>'
            var paging = document.querySelector('.paging')
            paging.justifyContent = 'end'
        }
        
        body.innerHTML = '<div class="body__episode"><div class="body__episode__container"></div></div>'
        document.querySelector('.body__episode__container').id = i

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
        if (2 <= i < page) {
            paging.innerHTML = '<a class="prevPage" href=""><img src="assets/previous-arrow.png" alt="">Previous Page</a><a class="nextPage">Next Page<img src="assets/next-arrow.png" alt=""></a>'
            paging.justifyContent = 'space-between'
        } else if (i = page) {
            paging.innerHTML = '<a class="prevPage" href=""><img src="assets/previous-arrow.png" alt="">Previous Page</a>'
        }
    }
}