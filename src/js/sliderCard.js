import {MONTH_ARRAY} from './constants.js';


export class SliderCard {
  constructor(name, email, date, message, avatar_url) {
      this._name = name;
      this._email = email;
      this._date = date;
      this._message = message;
      this._avatar_url = avatar_url;
  }

  create() {
      const list = 
      `<div class="swiper-slide card">
      <div class="card-data"></div>
      <img class="card-photo" src= '' alt="github-photo">
      <div class="main-name"></div>
      <div class="main-email"></div>         
      <div class="content-text"></div>`;

      const template = document.createElement("div");
      template.insertAdjacentHTML('afterbegin', list);
      const newCard = template.firstElementChild;
      newCard.querySelector(".card-data").textContent = this._date;
      newCard.querySelector(".card-photo").src = `${this._avatar_url}`;
      newCard.querySelector(".main-name").textContent = this._name;
      newCard.querySelector(".main-email").textContent = this._email;
      newCard.querySelector(".content-text").textContent = this._message;
      this.newCard = newCard;
      
      const cardsDate = newCard.querySelector(".card-data");
      cardsDate.textContent = this._date;
      const dataRender = new Date(this._date);
      cardsDate.textContent = dataRender.getDate() + ' ' + MONTH_ARRAY[dataRender.getMonth()] + ', ' + dataRender.getFullYear();
      return newCard;  
    }
}

  