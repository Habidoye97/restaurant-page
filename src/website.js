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

function createFooter () {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  
  const socialContainer = document.createElement('div');  
  socialContainer.classList.add('social-container');

  const facebook = document.createElement('a')
  facebook.href = "www.facebook.com"
  const facebookIcon = document.createElement('i');
  facebookIcon.classList.add('fab');
  facebookIcon.classList.add('fa-facebook');
  facebook.appendChild(facebookIcon);

  const twitter = document.createElement('a')
  const twitterIcon = document.createElement('i');
  twitterIcon.classList.add('fab');
  twitterIcon.classList.add('fa-twitter');
  twitter.appendChild(twitterIcon);

  const instagram = document.createElement('a')
  const instagramIcon = document.createElement('i');
  instagramIcon.classList.add('fab');
  instagramIcon.classList.add('fa-instagram');
  instagram.appendChild(instagramIcon)

  const gitHub = document.createElement('a')
  const gitHubIcon = document.createElement('i');
  gitHubIcon.classList.add('fab');
  gitHubIcon.classList.add('fa-github');
  gitHub.appendChild(gitHubIcon);

  socialContainer.appendChild(facebook);
  socialContainer.appendChild(twitter);
  socialContainer.appendChild(instagram);
  socialContainer.appendChild(gitHub);

  const copyrightContainer = document.createElement('div');
  copyrightContainer.classList.add("copy-container")

  const copyright = document.createElement('p');
  copyright.classList.add('copyright');
  copyright.textContent ="Copyright © 2021 habidoye";
  copyrightContainer.appendChild(copyright);

  footer.appendChild(socialContainer);
  footer.appendChild(copyrightContainer);

  return footer
}


function restaurantPage () {
  const content = document.getElementById('content');
  
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter())

  loadHome()
};

export default restaurantPage;