const navigationBar = document.querySelector('.navigation-bar');
const listItems = document.querySelectorAll('.list-item');
const hamburger = document.querySelector('.hamburger');
const crossmark = document.querySelector('.fa-times');
const bars = document.querySelector('.fa-bars');

function toggleHamburger() {
  if (navigationBar.classList.contains('show-menu')) {
    navigationBar.classList.remove('show-menu');
    crossmark.style.display = 'none';
    bars.style.display = 'block';
  } else {
    navigationBar.classList.add('show-menu');
    crossmark.style.display = 'block';
    bars.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleHamburger);

listItems.forEach(
  (listItem) => {
    listItem.addEventListener('click', toggleHamburger);
  },
);

// Work Section

const portfolioCards = [
  {
    title: 'Tonic',
    title1: 'Tonic',
    image: 'images/snapshot1.svg',
    image1: 'images/tonic.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'JavaScript'],
    liveLink: 'https://graycemuthui.github.io/Microverse-Portfolio/',
    github: 'https://github.com/Graycemuthui/Microverse-Portfolio',
  },
  {
    title: 'Multi-Post Stories',
    title1: 'Multi-Post Stories',
    image: 'images/availability.svg',
    image1: 'images/multidesktop.svg',
    description: 'Experimental content creation feature that allows users to add to anexisting story over the course of a day without spamming their friends.',
    languages: ['html', 'css', 'JavaScript'],
    liveLink: 'https://graycemuthui.github.io/Microverse-Portfolio/',
    github: 'https://github.com/Graycemuthui/Microverse-Portfolio',
  },
  {
    title: 'Tonic',
    title1: 'Facebook 360',
    image: 'images/snapshot3.svg',
    image1: 'images/tonicdesktop.svg',
    description: "Exploring the future of media in Facebook's first Virtual Realityapp; a place to discover and enjoy 360 photos and videos on Gear VR.",
    languages: ['html', 'css', 'JavaScript'],
    liveLink: 'https://graycemuthui.github.io/Microverse-Portfolio/',
    github: 'https://github.com/Graycemuthui/Microverse-Portfolio',
  },
  {
    title: 'Multi-Post Stories',
    title1: 'Uber Navigation',
    image: 'images/snapshot4.svg',
    image1: 'images/availability.svg',
    description: 'A smart assistant to make driving more safe, efficient, and fun byunlocking your most expensive computer: your car.',
    languages: ['html', 'css', 'JavaScript'],
    liveLink: 'https://graycemuthui.github.io/Microverse-Portfolio/',
    github: 'https://github.com/Graycemuthui/Microverse-Portfolio',
  },
];

const demo = document.getElementById('portfolio');
demo.innerHTML = portfolioCards.reduce((output, portfolio) => (
  `${output
  }
    <article class="card large-card">
        <img
          class="card-image"
          src="${portfolio.image}"
          alt="A guy with an article beside his picture"
        />
        <img
          class="large-image"
          src="${portfolio.image1}"
          alt="Some diagrams and a menu"
        />
        <div class="card-body">
          <h2 class="small-heading">${portfolio.title}</h2>
          <div class="card-specs">
            <span class="text-normal">CANOPY</span>
            <span class="large-text">CANOPY</span>
            <img src="./images/Counter.svg" alt="" class="counter" />
            <span class="text-light">Back End Dev</span>
            <span class="large-text__light">Back End Dev</span>
            <img src="./images/Counter.svg" alt="" class="counter" />
            <span class="text-light">2015</span>
            <span class="large-text__light">2015</span>
          </div>
          <p class="small-para">
            ${portfolio.description}
          </p>
          <p class="large-para">
            ${portfolio.description}
          </p>
          <ul class="categories">
          ${portfolio.languages.map((x) => `<li>${x}</li>`).join('')}
          </ul>
          <button class="btn card-button" data-open="modal11">See Project</button>
        </div>
      </article>
  `
), '');

// Modal popup

const closeButton = document.querySelector('#modal-close');
const btn = document.querySelectorAll('[data-open]');
const overlay = document.querySelector('.popup-overlay');
const modal1 = document.querySelector('#modal1');
btn.forEach((btnx) => {
  btnx.addEventListener('click', () => {
    modal1.style.display = 'block';
    overlay.style.display = 'block';
  });
});

closeButton.addEventListener('click', () => {
  modal1.style.display = 'none';
  overlay.style.display = 'none';
});

// Forms
const formInput = document.getElementById('forms');
const email = document.querySelector('#email');
const errorElement = document.getElementById('error');
errorElement.style.color = 'red';

formInput.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    formInput.submit();
  } else {
    errorElement.innerText = 'Please type your e-mail in lowercase';
  }
});

// Local Storage
