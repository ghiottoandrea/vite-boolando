export const products = [
    {
        "id": 1,
        "frontImage": "/images/1.webp",
        "backImage": "/images/1b.webp",
        "brand": "Levi's",
        "name": "Relaxed Fit",
        "price": 29.99,
        "isInFavorites": true,
        "discount": "50",
        "sostenibility": true,
        "priceDiscounted": ``
    },
    {
        "id": 2,
        "frontImage": "/images/2.webp",
        "backImage": "/images/2b.webp",
        "brand": "Guess",
        "name": "Roses Tee",
        "price": 29.99,
        "isInFavorites": true,
        "discount": "30",
        "sostenibility": false,
        "priceDiscounted": ``, 
    },
    {
        "id": 3,
        "frontImage": "/images/3.webp",
        "backImage": "/images/3b.webp",
        "brand": "Come Zucchero Filato",
        "name": "Voglia di colori pastello",
        "price": 129.99,
        "isInFavorites": false,
        "discount": "30",
        "sostenibility": false,
        "priceDiscounted": ``, 
    },
    {
        "id": 4,
        "frontImage": "/images/4.webp",
        "backImage": "/images/4b.webp",
        "brand": "Levi's",
        "name": "Tee Unisex",
        "price": 29.99,
        "isInFavorites": false,
        "discount": "50",
        "sostenibility": true,
        "priceDiscounted": ``
    },
    {
        "id": 5,
        "frontImage": "/images/5.webp",
        "backImage": "/images/5b.webp",
        "brand": "Maya Deluxe",
        "name": "Stripe Bodice",
        "price": 99.99,
        "isInFavorites": true,
        "discount": "50",
        "sostenibility": true,
        "priceDiscounted": ``
    },
    {
        "id": 6,
        "frontImage": "/images/6.webp",
        "backImage": "/images/6b.webp",
        "brand": "Esprit",
        "name": "Maglione - Black",
        "price": 29.99,
        "isInFavorites": true,
        "discount": null,
        "sostenibility": true,
        "priceDiscounted": ``
    }
]

products.forEach(product => {
    product.priceDiscounted = (product.price - (product.price * product.discount/100)).toFixed(2)
    console.log(product.priceDiscounted);
})
