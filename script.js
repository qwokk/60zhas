function celebrate() {
    // 1. Запуск музыки
    const audio = document.getElementById('bgMusic');
    if(audio) audio.play();

    // 2. Твой салют (улучшенный - летит снизу вверх)
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = [];
    const colors = ['#bf953f', '#fcf6ba', '#b38728', '#ffd700'];

    for (let i = 0; i < 150; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height,
            size: Math.random() * 4 + 1,
            speedX: Math.random() * 6 - 3,
            speedY: Math.random() * -15 - 5,
            gravity: 0.2,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.speedY += p.gravity;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(update);
    }
    update();

    // 3. WhatsApp подтверждение (Шок-контент для гостей)
    setTimeout(() => {
        const text = encodeURIComponent("Сәлеметсіз бе! Мейрамбек ағаның 60 жас тойына шақыртуыңызды алдым. Алла бұйырса, барамын!");
        window.open(`https://wa.me{text}`, '_blank'); // ЗАМЕНИ 77XXXXXXXXX на свой номер
    }, 2000);
}
