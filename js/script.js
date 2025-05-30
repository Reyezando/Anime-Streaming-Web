function clickInput () {
    document.getElementById('fileInput').click()
}

function printVideos () {
    const body = document.getElementsByClassName('body')
    body.innerHTML = '' // Clear previous content
    const fileInput = document.getElementById('fileInput').files
    const page = Math.ceil(fileInput.length/6)
    const k = 0;

    for (let i = 0; i <= page; i++) {

        for (let j = 0; j <= 6; j++) {
            fileInput[k]
        }
    }
}