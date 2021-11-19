function createHeader () {
  const header = document.createElement("header");
  header.classList.add("header");
  
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');

  const logo = document.createElement('img')
  logo.classList.add('logo')
  logo.src = "./images/automacy.png"
  logo.alt = "logo"
  
  logoContainer.appendChild(logo)
  header.appendChild(logoContainer)

  return header
}

function restaurantPage () {
  const content = document.getElementById('content');
  content.appendChild(createHeader())
};

export default restaurantPage;