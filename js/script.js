function clickInput() {
    document.getElementById('fileInput').click();
}

function printVideos() {
    const body = document.querySelector('.body');
    body.innerHTML = ''; // Clear previous content

    const fileInput = document.getElementById('fileInput');
    const videoFiles = Array.from(fileInput.files).filter(file => file.type.startsWith('video/'));
    if (videoFiles.length === 0) {
        body.innerHTML = '<p>&nbsp;No videos found.</p>';
        return;
    }

    const videosPerPage = 6;
    const totalPages = Math.ceil(videoFiles.length / videosPerPage);
    let currentPage = 1;

    // Container to slide pages horizontally
    const episodeDiv = document.createElement('div');
    episodeDiv.className = 'body__episode';
    episodeDiv.style.display = 'flex';
    episodeDiv.style.transition = 'transform 0.5s ease';
    episodeDiv.style.width = `${totalPages * 100}%`;

    // Render each page with thumbnails
    for (let page = 1; page <= totalPages; page++) {
        const containerDiv = document.createElement('div');
        containerDiv.className = 'body__episode__container';
        containerDiv.id = page;
        containerDiv.style.flex = `0 0 ${100 / totalPages}%`;

        const start = (page - 1) * videosPerPage;
        const end = Math.min(start + videosPerPage, videoFiles.length);

        for (let i = start; i < end; i++) {
            const episodeWrapper = document.createElement('a');
            episodeWrapper.href = '#';

            const p = document.createElement('p');
            p.textContent = `Episode ${String(i + 1).padStart(2, '0')}`;
            episodeWrapper.appendChild(p);

            const img = document.createElement('img');
            img.className = 'thumbnail';
            img.src = 'assets/thumbnail.png'; // Static placeholder
            img.alt = videoFiles[i].name;
            episodeWrapper.appendChild(img);

            containerDiv.appendChild(episodeWrapper);
        }

        episodeDiv.appendChild(containerDiv);
    }

    body.appendChild(episodeDiv);

    // Pagination
    const pagingDiv = document.createElement('div');
    pagingDiv.className = 'paging';

    const prevLink = document.createElement('div');
    prevLink.className = 'prevPage';
    prevLink.innerHTML = `<img src="assets/previous-arrow.png" alt="">Previous Page`;
    prevLink.style.visibility = 'hidden';
    pagingDiv.appendChild(prevLink);

    const nextLink = document.createElement('div');
    nextLink.className = 'nextPage';
    nextLink.innerHTML = `Next Page<img src="assets/next-arrow.png" alt="">`;
    pagingDiv.appendChild(nextLink);

    body.appendChild(pagingDiv);

    function updatePage(newPage) {
        currentPage = newPage;
        const offset = -(currentPage - 1) * (100 / totalPages);
        episodeDiv.style.transform = `translateX(${offset}%)`;

        prevLink.style.visibility = currentPage === 1 ? 'hidden' : 'visible'
        nextLink.style.visibility = currentPage === totalPages ? 'hidden' : 'visible'
    }

    prevLink.addEventListener('click', e => {
        e.preventDefault();
        if (currentPage > 1) updatePage(currentPage - 1);
    });

    nextLink.addEventListener('click', e => {
        e.preventDefault();
        if (currentPage < totalPages) updatePage(currentPage + 1);
    });

    updatePage(1); // Initial render
}