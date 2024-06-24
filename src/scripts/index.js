import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', function () {
  drawer.classList.remove('open');
});

main.addEventListener('click', function () {
  drawer.classList.remove('open');
});


document.addEventListener("DOMContentLoaded", () => {
    const restaurantList = document.getElementById("restaurantList");
  
    fetch("./public/data/DATA.json")
      .then(response => response.json())
      .then(data => {
        data.restaurants.forEach(restaurant => {
          const restaurantItem = document.createElement("div");
          restaurantItem.classList.add("restaurant-item");
  
          const name = document.createElement("h2");
          name.textContent = restaurant.name;
          restaurantItem.appendChild(name);
  
          const image = document.createElement("img");
          image.src = restaurant.pictureId;
          image.alt = restaurant.name;
          restaurantItem.appendChild(image);
  
          const city = document.createElement("p");
          city.textContent = `City: ${restaurant.city}`;
          restaurantItem.appendChild(city);
  
          const rating = document.createElement("p");
          rating.textContent = `Rating: ${restaurant.rating}`;
          restaurantItem.appendChild(rating);
  
          const description = document.createElement("p");
          description.textContent = restaurant.description;
          restaurantItem.appendChild(description);
  
          restaurantList.appendChild(restaurantItem);
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const navList = document.querySelector(".nav__list");
  
    menu.addEventListener("click", function() {
      navList.classList.toggle("open");
    });
  
    menu.addEventListener("mouseenter", function() {
      if (window.innerWidth <= 768) {
        navList.classList.add("open");
      }
    });
  
    navList.addEventListener("mouseleave", function(event) {
      if (window.innerWidth <= 768) {
        // Menutup nav__list hanya jika pointer tidak berada di dalam nav__list atau header__menu
        if (!event.relatedTarget || !event.relatedTarget.closest('.nav') || !event.relatedTarget.closest('.header__menu')) {
          navList.classList.remove("open");
        }
      }
    });
  });
  