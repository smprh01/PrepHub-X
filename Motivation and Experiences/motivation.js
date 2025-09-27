// Motivational Image Slider
const motivationImages = [
  "motiImage/img1.jpg",
  "motiImage/im2.jpg",
  "motiImage/img3.jpg",
  "motiImage/im4.jpg",
  "motiImage/im5.jpg",
  "motiImage/im6.jpg",
  "motiImage/im7.jpg",
  "motiImage/im8.jpg",
  "motiImage/im9.jpg",
  "motiImage/im10.jpg",
  "motiImage/im11.jpg",
  "motiImage/im12.jpg",
  "motiImage/im13.jpg",
  "motiImage/im14.jpg",
  "motiImage/im15.jpg",
  "motiImage/im16.jpg",
  "motiImage/im17.jpg",
];


let currentMotivation = 0;
const motivationImage = document.getElementById("motivationImage");

document.getElementById("nextMotivation").addEventListener("click", () => {
  currentMotivation = (currentMotivation + 1) % motivationImages.length;
  motivationImage.src = motivationImages[currentMotivation];
});

document.getElementById("prevMotivation").addEventListener("click", () => {
  currentMotivation = (currentMotivation - 1 + motivationImages.length) % motivationImages.length;
  motivationImage.src = motivationImages[currentMotivation];
});

// Interview Video Slider - All Your Playlists
const videoLinks = [
  "https://www.youtube.com/embed/4dwYr7jPcjQ", "https://www.youtube.com/embed/2a48A5ZUUac",
  "https://www.youtube.com/embed/z1ouJ6ImOdk", "https://www.youtube.com/embed/xuhZWtCchTI",
  "https://www.youtube.com/embed/pK-ZDOgMbew", "https://www.youtube.com/embed/fljngIQUIX0",
  "https://www.youtube.com/embed/4n-4hlNrnGs", "https://www.youtube.com/embed/jTXxQZH4sFs",
  "https://www.youtube.com/embed/7VR39eJZEtA", "https://www.youtube.com/embed/HmNjZDdNaO4",
  "https://www.youtube.com/embed/mnQr9nTvg-w", "https://www.youtube.com/embed/CoKi-KgkYxc",
  "https://www.youtube.com/embed/HbdafB5HMv0", "https://www.youtube.com/embed/g94P6V13Wog",
  "https://www.youtube.com/embed/dlfo9cR1Z7E", "https://www.youtube.com/embed/B647TLMBM8A",
  "https://www.youtube.com/embed/Z42TwAFJUuw", "https://www.youtube.com/embed/ab3IQtBUWP8",
  "https://www.youtube.com/embed/g_PHWY4zsf8", "https://www.youtube.com/embed/KOxUfCiUb7Y",
  "https://www.youtube.com/embed/pn3KdTWaCK0"
];

const videoContainer = document.getElementById("videoContainer");

// Dynamically add videos
videoLinks.forEach(link => {
  const div = document.createElement("div");
  div.classList.add("video-card");
  div.innerHTML = `<iframe src="${link}" frameborder="0" allowfullscreen></iframe>`;
  videoContainer.appendChild(div);
});

// Slider Logic
let scrollAmount = 0;

document.getElementById("nextVideo").addEventListener("click", () => {
  if (scrollAmount < videoContainer.scrollWidth - videoContainer.clientWidth) {
    scrollAmount += videoContainer.clientWidth / 2;
    videoContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }
});

document.getElementById("prevVideo").addEventListener("click", () => {
  if (scrollAmount > 0) {
    scrollAmount -= videoContainer.clientWidth / 2;
    videoContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }
});
