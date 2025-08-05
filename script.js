const video = document.getElementById("loveVideo");
const bgMusic = document.getElementById("background-music");
video.addEventListener("play", () => { if (!bgMusic.paused) bgMusic.pause(); });
video.addEventListener("pause", () => { if (bgMusic.paused) bgMusic.play(); });
const galleryImages = document.querySelectorAll(".gallery img");
const colors = ['#ff4d6d', '#ff7f50', '#ffb347', '#f9c74f', '#90be6d', '#4d96ff', '#c77dff'];

galleryImages.forEach(img => {
  img.addEventListener("mouseenter", (e) => {
    const rect = img.getBoundingClientRect();

    for (let i = 0; i < 8; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.textContent = "❤️";
      heart.style.left = Math.random() * img.clientWidth + "px";
      heart.style.top = Math.random() * img.clientHeight + "px";
      heart.style.color = colors[Math.floor(Math.random() * colors.length)];
      heart.style.position = "absolute";

      img.style.position = "relative";
      img.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 1200);
    }
  });
});
<!-- Şafak Sayar Butonu -->
<button id="safakBtn" style="position: fixed; bottom: 20px; right: 20px; padding: 10px 15px; background: #ff69b4; color: white; border: none; border-radius: 10px; cursor: pointer; box-shadow: 0 0 10px rgba(0,0,0,0.2); z-index: 999;">
  Şafak Sayar
</button>

<script>
  // Şafak Sayar Hesaplama
  const safakBtn = document.getElementById("safakBtn");
  safakBtn.addEventListener("click", () => {
    const cikisTarihi = new Date("2025-12-12");
    const bugun = new Date();
    const farkMs = cikisTarihi - bugun;
    const gun = Math.ceil(farkMs / (1000 * 60 * 60 * 24));
    alert("Şafak: " + gun + " gün kaldı 💂‍♂️");
  });

  // Sevgililik Gün Sayacı
  const sevgiliTarihi = new Date("2024-10-18");
  const simdi = new Date();
  const farkMs = simdi - sevgiliTarihi;
  const gunSayisi = Math.floor(farkMs / (1000 * 60 * 60 * 24));
  document.getElementById("sevgiliGunSayisi").textContent = "Bugünle birlikte " + gunSayisi + " gün oldu! 💖";
// Animasyonlu Sevgi Yazıları
const yazilar = [
  "Seni çok seviyorum...",
  "Kalbim hep seninle 💖",
  "Birlikte nice yıllara 🥰",
  "Seninle her an çok özel ❤️",
  "Rıza ❤️ Şule sonsuza dek 💍"
];

let index = 0;
setInterval(() => {
  document.getElementById("animatedText").textContent = yazilar[index];
  index = (index + 1) % yazilar.length;
}, 3000);


// Kalp Yağmuru Efekti
function createHeartRain() {
  const heart = document.createElement("div");
  heart.className = "heart-rain";
  heart.textContent = "💖";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = (20 + Math.random() * 20) + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
}

setInterval(createHeartRain, 300); // Her 300ms'de bir kalp eklenir

</script>


