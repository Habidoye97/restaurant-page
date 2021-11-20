import loadHome from "./home";

function createHeader () {
  const header = document.createElement("header");
  header.classList.add("header");
  
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');

  const logo = document.createElement('img')
  logo.classList.add('logo')
  logo.src = "./images/automacy.png"
  logo.alt = "logo"
  
  logoContainer.appendChild(logo);
  header.appendChild(logoContainer);
  header.appendChild(createNav());

  return header
}

function createNav () {
  const navigation = document.createElement('nav')
  const ul = document.createElement('ul')
  
  const home = document.createElement('li')
  home.classList.add('home');
  home.classList.add('nav-link');
  home.textContent = "HOME"

  const menu = document.createElement('li')
  menu.classList.add('menu');
  menu.classList.add('nav-link');
  menu.textContent = "MENU"

  const ourStory = document.createElement('li')
  ourStory.classList.add('our-story');
  ourStory.classList.add('nav-link');
  ourStory.textContent = "OUR STORY"

  const contact = document.createElement('li')
  contact.classList.add('contact');
  contact.classList.add('nav-link');
  contact.textContent = "CONTACT"

  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(ourStory);
  ul.appendChild(contact);
  navigation.appendChild(ul);
  
  return navigation
}

function createMain () {
  const main = document.createElement('main')
  main.classList.add('main')
  main.setAttribute('id', 'main')
  
  return main
}




function restaurantPage () {
  const content = document.getElementById('content');
  
  content.appendChild(createHeader());
  content.appendChild(createMain());

  loadHome()
};

export default restaurantPage;