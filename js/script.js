//  const swiperWrapper = document.querySelector('.swiper-wrapper');
//   const prevBtn = document.getElementById('prev-btn');
//   const nextBtn = document.getElementById('next-btn');
//   let currentIndex = 0;
//   const slideWidth = document.querySelector('.swiper-slide').offsetWidth;

//   prevBtn.addEventListener('click', () => {
//     if (currentIndex > 0) {
//       currentIndex--;
//       swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//     }
//   });

//   nextBtn.addEventListener('click', () => {
//     if (currentIndex < swiperWrapper.children.length - 1) {
//       currentIndex++;
//       swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//     }
//   });