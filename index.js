function showContent(type) {
    console.log('document type:', type);
    const iframe = document.getElementById('contentFrame');
    if (type === 'tatu') {
        iframe.src = 'files/diploma.pdf';
    } else if (type === 'ielts') {
        iframe.src = 'files/IELTS.jpg';
    }else if (type === 'pdp') {
        //https://online.pdp.uz/checkCertificateQr/b0c63d91-a441-481c-8f7b-ba4fe0413be2
        iframe.src = 'files/pdp.png';
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