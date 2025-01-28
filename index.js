function showContent(type) {
    const iframe = document.getElementById('contentFrame');
    if (type === 'diplom') {
        iframe.src = 'files/diploma.pdf';
    } else if (type === 'ielts') {
        iframe.src = 'files/ielts.jpg';
    }
    const modal = document.getElementById('myModal');
    modal.style.display = 'block'; // Show the modal
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none'; // Hide the modal
    const iframe = document.getElementById('contentFrame');
    iframe.src = ''; // Clear the iframe content
}