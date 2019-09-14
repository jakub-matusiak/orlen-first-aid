"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const caseList = document.querySelector('.case-list');

caseList.addEventListener('click', (e) => {
  const button = e.target.id;

  if (e.target.id === (`${button}`)) {
    e.target.parentNode.classList.toggle('case--active');
  }
});


