//Clond Menu and Info Elements
const menu = document.querySelector('.navi');
const info = document.querySelector('.info');
const newMenuBox = document.querySelector('.new-mobile-menu');
const newMenu = menu.cloneNode(true);
const newInfo = info.cloneNode(true);

newMenuBox.insertAdjacentElement('beforeend', newMenu);
newMenuBox.insertAdjacentElement('beforeend', newInfo);

//Mobile Menu Toggle Function
const mobileMenuIcon = document.querySelector('.mobile-icon');
// console.log(mobileMenuIcon);

mobileMenuIcon.addEventListener('click', (e) => {
  const target = e.currentTarget;

  target.classList.toggle('active');
  const MenuHeight = document.querySelector('.new-mobile-menu').scrollHeight; // 요소가 펼쳐졌을 때의 높이

  if (target.classList.contains('active')) {
    target.classList.remove('not-active');
    newMenuBox.style.height = `${MenuHeight}px`;
  } else {
    target.classList.add('not-active');
  }
});

// Fixed Header Style Change and meet Section start animation when Schroll Down
const header = document.querySelector('.header');
const meetSection = document.querySelector('.meet-section');
const meetSectionTop = meetSection.offsetTop;

const scrCtrl = () => {
  const scry = window.scrollY; // 화면 최상단이 위치한 스크롤 위치값
  if (scry > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

  if (scry > meetSectionTop - 500) {
    meetSection.classList.add('on');
  }
};

window.addEventListener('scroll', scrCtrl);

// Features Section Data
const features = [
  {
    image: '/soaply/images/about-icon-1.svg',
    title: 'For All Skin Types',
    text: '훈저어 레알즢도 곤자믕이, 좌눈밨가. 총오다 싀놈에, 르운도 보계와 콘을 러사. 거게오뭐며 암스분을 일놊이셌 자게왼송의 주나마모도 혔앤빤와를 노닝가치만 수한새데에서 흥션작따다.',
  },
  {
    image: '/soaply/images/about-icon-2.svg',
    title: '100% Organic',
    text: '훈저어 레알즢도 곤자믕이, 좌눈밨가. 총오다 싀놈에, 르운도 보계와 콘을 러사. 거게오뭐며 암스분을 일놊이셌 자게왼송의 주나마모도 혔앤빤와를 노닝가치만 수한새데에서 흥션작따다.',
  },
  {
    image: '/soaply/images/about-icon-3.svg',
    title: 'Cuetly Free',
    text: '훈저어 레알즢도 곤자믕이, 좌눈밨가. 총오다 싀놈에, 르운도 보계와 콘을 러사. 거게오뭐며 암스분을 일놊이셌 자게왼송의 주나마모도 혔앤빤와를 노닝가치만 수한새데에서 흥션작따다.',
  },
];

const featuresWrapper = document.querySelector('.features');

features.forEach((feature) => {
  const featureElm = `
  <div class="feature">
    <div class="feature-icon">
      <img src="${feature.image}" alt="" />
    </div>
    <h4>${feature.title}</h4>
    <p>${feature.text}</p>
  </div>
  `;
  featuresWrapper.insertAdjacentHTML('beforeend', featureElm);
});

// Swiper Slider Codes
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true, // 반복 여부

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
