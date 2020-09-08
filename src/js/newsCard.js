export class NewsCard {
    constructor(urlToImage, publishedAt, description, title, name) {
      this.urlToImage = urlToImage;
      this.publishedAt = publishedAt;
      this.description = description;
      this.title = title;
      this.name = name;
    }
    remove() {
      this.newCard.remove();
    }
 
  
    create() {
      const list = `<div class="preloader__cards">
        <div class="preloader__cards-image" style="background-image: url(https://kamchatka.jpg) alt="cards"></div>
        <div class="preloader__cards-date"></div>
        <div class="preloader__cards-content">
          <a class="preloader__cards-content-header" href="https://lenta.ru"></a>
          <div class="preloader__cards-content-text"></div>
        </div>
        <div class="preloader__cards-origin"></div>
      </div>`;
  
      const template = document.createElement("div");
      template.insertAdjacentHTML('afterbegin', list);
      const newCard = template.firstElementChild;
      newCard.querySelector(".preloader__cards-image").style.backgroundImage = `url(${this.urlToImage})`;
      //newCard.querySelector(".preloader__cards-image").style.backgroundImage = src="<%=require('`${this.urlToImage}`')%>";
      newCard.querySelector(".preloader__cards-date").textContent = this.publishedAt;
      newCard.querySelector(".preloader__cards-content-header").textContent = this.description;
      newCard.querySelector(".preloader__cards-content-text").textContent = this.title;
      newCard.querySelector(".preloader__cards-origin").textContent = this.name;
      this.newCard = newCard;
      return newCard;
  
  
  
  
    }
    setNews = (title) => {
      this.title = title;
    }
  }
  