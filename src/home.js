function createHome () {
  const homeSection = document.createElement("section");
  homeSection.classList.add("home-container");

  const homeWelcome = document.createElement('h1');
  homeWelcome.classList.add('home-welcome');
  homeWelcome.textContent = "Automacy is a Nigeria-raised, New York City-based chef, author, restaurateur, social entrepreneur & culinary ambassador. He welcomes you to his table.";

  const perceptionCol = document.createElement('div');
  perceptionCol.classList.add('perception-col');

  const perceptionHead = document.createElement('h3');
  perceptionHead.classList.add('perception-head')
  perceptionHead.textContent = "Our perception of ourselves starts with the food we eat."

  const perceptiondetails = document.createElement('div');
  perceptiondetails.classList.add('perception-details');
  
  const ourMission = document.createElement('div')
  ourMission.classList.add('mission-col')

  const missionHead = document.createElement('h5');
  missionHead.classList.add('mission-head');
  missionHead.textContent= "MISSION";

  const missionDetails = document.createElement('h1');
  missionDetails.classList.add('mission-details');
  missionDetails.textContent = "To promote diverse, healthy, conscious food cultures where eating and sharing food is an act of love—for yourself, your community, and for the environment."
  
  ourMission.appendChild(missionHead);
  ourMission.appendChild(missionDetails);
  perceptiondetails.appendChild(perceptionPara("Pierre Thiam is a chef, author, and social activist best known for bringing West African cuisine to the global fine dining world. He is the Executive Chef of the award-winning restaurant Nok by Alara in Lagos, Nigeria and the Signature Chef of the five-star Pullman Hotel in Dakar, Senegal. He is also the executive chef and co-owner of Teranga, a fast-casual food chain from New York City. His foods company Yolélé advocates for smallholder farmers in the Sahel by opening new markets for crops grown in Africa; its signature product, Yolélé Fonio, is found in Whole Foods, Amazon, Target, Thrive Market, and other retailers across America."))
  perceptiondetails.appendChild(perceptionPara("Born and raised in Dakar, Senegal, Thiam’s cooking style is at once modern and eclectic, rooted in the rich culinary traditions of West Africa. His newest cookbook, The Fonio Cookbook, was published in October 2019. His first two cookbooks, Yolélé! Recipes From the Heart of Senegal and Senegal: Modern Senegalese Recipes from the Source to the Bowl were finalists for several awards including the Julia Child Cookbook Award, the Gourmand Award in Paris, and the James Beard Award for Best International Cookbook."));
  perceptiondetails.appendChild(perceptionPara("Thiam has cooked for the King of Morocco, French President Emmanuel Macron, and Former UN Secretary General Ban Ki Moon. Through his advocacy and many media appearances, he has become known as a culinary ambassador, dedicated to promoting West African cooking throughout the world. His TEDTalk, given at TEDGlobal 2017 in Arusha, Tanzania, has been viewed over one million times. Thiam sits on the board of directors of IDEO.org, SOS Sahel, Culinary Institute of America's African Cuisines Advisory Board and CorpsAfrica. He lives in El Cerrito, California with his wife Lisa,  their daughter Na’ia, and dog Malcolm. "))
  perceptionCol.appendChild(perceptionHead);
  
  perceptionCol.appendChild(perceptiondetails);

  homeSection.appendChild(homeWelcome);
  homeSection.appendChild(perceptionCol);
  homeSection.appendChild(ourMission);

  return homeSection
}

function perceptionPara(text) {
  const perceptionPara = document.createElement("p");
  perceptionPara.textContent = text;
  return perceptionPara;
}
function loadHome () {
  const main = document.getElementById('main');
  main.textContent = "";
  main.appendChild(createHome())
}

export default loadHome;