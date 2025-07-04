function randomizeImages() {
    const images = document.querySelectorAll('.random-image');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    images.forEach(img => {
      const randomX = Math.random() * (windowWidth - 100); // Kurangi ukuran gambar
      const randomY = Math.random() * (windowHeight - 100);
      img.style.left = `${randomX}px`;
      img.style.top = `${randomY}px`;
    });
  }

  // Random posisi saat halaman load
  window.onload = randomizeImages;

  // Optional: Ulangi setiap 3 detik (animasi)
  setInterval(randomizeImages, 3000);

  function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';

    // Warna acak
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Posisi acak
    balloon.style.left = Math.random() * window.innerWidth + 'px';

    // Tambahkan tali
    const string = document.createElement('div');
    string.className = 'string';
    balloon.appendChild(string);

    document.body.appendChild(balloon);

    // Hapus balon setelah selesai animasi
    setTimeout(() => {
      balloon.remove();
    }, 8000);
  }

  // Buat balon baru setiap 500ms
  setInterval(createBalloon, 500);