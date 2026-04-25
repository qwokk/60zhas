function celebrate() {
    // 1. Музыка
    const audio = document.getElementById('bgMusic');
    audio.volume = 0; // Начинаем с тишины
    audio.play();
    
    // Плавное нарастание громкости за 2 секунды
    let vol = 0;
    const interval = setInterval(() => {
        if (vol < 1) {
            vol += 0.1;
            audio.volume = vol.toFixed(1);
        } else {
            clearInterval(interval);
        }
    }, 200);

    // 2. Салют (твой код)
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = [];
    const colors = ['#bf953f', '#fcf6ba', '#b38728'];
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.y += p.speed;
        if (p.y > canvas.height) p.y = -10;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(update);
    }
    update();

    // 3. Фишка с WhatsApp (через 2 секунды после нажатия)
    setTimeout(() => {
        const phone = "77059502266"; // ВПИШИ СВОЙ НОМЕР
        const msg = encodeURIComponent("Сәлеметсіз бе! Мейрамбек ағаның тойына шақырту алдым. Аллаh бұйырса, барамыз!");
        window.location.href = `https://wa.me/${phone}?text=${msg}`;
    }, 2500);
}
