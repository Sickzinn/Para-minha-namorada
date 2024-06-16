function openEnvelope() {
    document.querySelector('.envelope').classList.add('open');
    setTimeout(() => {
        document.querySelector('.hearts-animation').classList.add('visible');
    }, 500);
    setTimeout(() => {
        document.getElementById('message-container').classList.add('visible');
        playMusic();
    }, 1500);
}

function playMusic() {
    const music = document.getElementById('music');
    if (music) {
        music.play().catch(error => {
            console.error('Erro ao tentar reproduzir a música:', error);
            alert('Erro ao tentar reproduzir a música');
        });
    } else {
        console.error('Elemento de música não encontrado');
    }
}
