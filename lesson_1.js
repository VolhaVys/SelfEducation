var cardsData = [
    {
        inStock: true,
        imgUrl: 'gllacy/choco.jpg',
        text: 'Сливочно-кофейное с кусочками шоколада',
        price: 310,
        isHit: true,
        specialOffer: 'Двойная порция сиропа бесплатно!'
    },
    {
        inStock: false,
        imgUrl: 'gllacy/lemon.jpg',
        text: 'Сливочно-лимонное с карамельной присыпкой',
        price: 125,
        isHit: false
    },
    {
        inStock: true,
        imgUrl: 'gllacy/cowberry.jpg',
        text: 'Сливочное с брусничным джемом',
        price: 170,
        isHit: false
    },
    {
        inStock: true,
        imgUrl: 'gllacy/cookie.jpg',
        text: 'Сливочное с кусочками печенья',
        price: 250,
        isHit: false
    },
    {
        inStock: true,
        imgUrl: 'gllacy/creme-brulee.jpg',
        text: 'Сливочное крем-брюле',
        price: 190,
        isHit: false
    }
];

let list = document.querySelector('.goods');

let renderCards = function (cards) {
    for (var i = 0; i < cards.length; i++){
        renderCard(cards[i]);
    }
};

let renderCard = function (card, list) {
    let cardEl = createCardEl();
    list.appendChild(cardEl);

    let cardTitleEl = createCardTitle(card.text);
    cardEl.appendChild(cardTitleEl);

    let cardImageEl = createCardImage(card.text, card.imgUrl);
    cardEl.appendChild(cardImageEl);

    let cardPriceEl = createCardPrice(card.price);
    cardEl.appendChild(cardImageEl);

    if (card.inStock){
        cardEl.classList.add('good--available');
    }
    else {
        cardEl.classList.add('good--unavailable');
    }

    if (card.isHit) {
        cardEl.classList.add('good--hit');
        var hit = document.createElement('p');
        hit.classList.add('good__special-offer');
        hit.textContent = card.specialOffer;
        cardEl.appendChild(hit);
    }
};

function createCardEl() {
    let cardEl = document.createElement('li');
    cardEl.classList.add('good');
    return cardEl;
}

function createCardTitle(titleText) {
    let title = document.createElement('h2');
    title.classList.add('good__description');
    title.textContent = titleText;
    return title;
}

function createCardImage(imageText, imageUrl) {
    let image = document.createElement('img');
    image.classList.add('good__image');
    image.src = imageUrl;
    image.alt = imageText;
    return image;
}

function createCardPrice(priceText) {
    let price = document.createElement('p');
    price.classList.add('good__price');
    price.textContent = priceText + '₽/кг';
    return price;
}


renderCards(cardsData, list);

/* Техническое задание

Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.

Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:

- inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
- imgUrl — ссылка на изображение товара.
- text — название продукта.
- price — цена.
- isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
- specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.

Вот пример вёрстки одной карточки в каталоге:

<ul class="goods">
  <li class="good">
    <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
    <img class="good__image" src="gllacy/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
    <p class="good__price">110₽/кг</p>
  </li>
  ...
</ul>

Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.

Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.

*/
