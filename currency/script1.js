document.getElementById('rainButton').addEventListener('click', function() {
    const song = document.getElementById('song');
    song.play();
    document.body.style.background = 'linear-gradient(to bottom, #4CAF50, #FFD700)';
    for (let i = 0; i < 20; i++) {
        const money = document.createElement('img');
        money.src = 'paisa.jpeg';
        money.className = 'falling-money';
        money.style.left = Math.random() * 100 + '%';
        document.body.appendChild(money);
        setTimeout(() => {
            document.body.removeChild(money);
        }, 3000);
    }
    setTimeout(() => {
        document.body.style.background = '#bed0dd';
    }, 3000);
});
