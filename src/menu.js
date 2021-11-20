function createMenu () {
  const menuSection = document.createElement('section');
  menuSection.classList.add('menu-section');

  const foodCol = document.createElement('div');
  foodCol.classList.add('food-col');

  foodCol.appendChild(food("./images/snacks1.png", "CLASSIC", "Lettuce, tomato, red onion, pickles, mustard, ketchup, mayo"));
  foodCol.appendChild(food("./images/snacks2.png", "DOUBLE CLASSIC", "Two flame-grilled beef patties, lettuce, tomato, red onion, pickles, mustard, ketchup, mayo"));
  foodCol.appendChild(food("./images/snacks3.png", "BLACK JACK", "Blackened beef, pepper jack cheese, lettuce, tomato, creole mayo"));
  foodCol.appendChild(food("./images/snacks4.png", "MUSHROOM SWISS", "Sautéed mushrooms, swiss cheese, lettuce, tomato, mayo"));
  foodCol.appendChild(food("./images/snacks5.png", "BACON CHEDDAR", "Cheddar cheese, bacon, lettuce, tomato, red onion, pickles, mustard, ketchup, mayo"));
  foodCol.appendChild(food("./images/snacks6.png", "SOUTHWEST BBQ", "Cheddar cheese, bacon, onion straws, BBQ sauce, chipotle mayo, lettuce, tomato, pickles"));
  foodCol.appendChild(food("./images/snacks7.png", "BLACK & BLEU", "Blackened beef, crumbled blue cheese, bacon, lettuce, tomato, red onion, mayo"));
  
  menuSection.appendChild(foodCategories("FLAME-GRILLED 13LB BURGER COMBOS", "Includes an order of regular seasoned fries and a 20oz drink"));
  
  menuSection.appendChild(foodCol)

  return menuSection
}

function foodCategories(categorieshead, categoriesdetails) {
  const category = document.createElement('div');
  category.classList.add('category')

  const categoryHead = document.createElement('h1');
  categoryHead.classList.add('category-head');
  categoryHead.textContent = categorieshead;

  const categoryDetails = document.createElement('h5');
  categoryDetails.classList.add('category-details');
  categoryDetails.textContent = categoriesdetails;

  category.appendChild(categoryHead);
  category.appendChild(categoryDetails);

  return category
}

function food(picture, foodtitle, fooddetails) {
  const foodContainer = document.createElement('div');
  foodContainer.classList.add('food-container')
  const foodImage = document.createElement('img');
  foodImage.src = picture;
  const foodTitle = document.createElement('h2');
  foodTitle.classList.add('food-title');
  foodTitle.textContent = foodtitle;
  const foodDetails = document.createElement('h5');
  foodDetails.classList.add('food-details');
  foodDetails.textContent = fooddetails;
  foodContainer.appendChild(foodImage)
  foodContainer.appendChild(foodTitle)
  foodContainer.appendChild(foodDetails)

  return foodContainer
}

function loadMenu() {
  const main = document.getElementById('main')
  main.textContent = "";
  main.appendChild(createMenu())
}

export default loadMenu