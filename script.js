'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// let cordinata = [lat, lang];
let latitude;
let longitude;
navigator.geolocation.getCurrentPosition(function (e) {
  (latitude = e.coords.latitude), (longitude = e.coords.longitude);

  let map = L.map('map').setView([latitude, longitude], 19);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  // L.marker([51.5, -0.09])
  //   .addTo(map)
  //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
  //   .openPopup();
});
setTimeout(function () {
  console.log(latitude, longitude);
}, 3000);
