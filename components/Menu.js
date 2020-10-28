// This is the data we will be using, study it but don't change anything, yet.

import { menuItems } from './Data.js';

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function getItemElement(e) {
  const item = document.createElement('li');
  item.textContent = e;
  return item;
}

function menuMaker() {
  const menuContainer = document.createElement('div');
  menuContainer.style.transform = 'translate(-350px)';
  menuContainer.classList.add('menu');
  const unorderedList = document.createElement('ul');
  
  menuItems.forEach(e => unorderedList.appendChild(getItemElement(e)));
  menuContainer.appendChild(unorderedList);
  
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', () => {
      menuContainer.classList.toggle('menu--open');
      if(menuContainer.classList.value === 'menu menu--open'){
        gsap.to('.menu', {duration: 1, x: 0});
      }
      else{
        gsap.to('.menu', {duration: 1, x: -350});
      }
  });

  return menuContainer;
}

document.querySelector('.header').appendChild(menuMaker());