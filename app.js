// fetch('https://app.fakejson.com/q', {
//     method: 'post',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         token: "oBnzdo7RVLm0AiuXnIIwXw",
//         "data": {
//             "_repeat": 50,
//             "id": "cryptoUUID",
//             "image": "personAvatar",
//             "name": "productName",
//             "price": "numberInt|0,100000",
//             "quantity": "numberInt",
//             "size": "productSize",
//             "status": "productOrderStatus"
//         }
//     })
// }).then(r => r.json()).then(console.log)


const arr = [{
    id: "42b3d47c-9f41-4ccd-b914-8b35ffd4365f",
    image: "https://media.istockphoto.com/photos/carrot-picture-id619252960?k=6&m=619252960&s=612x612&w=0&h=XbDTdt5CUVpw2V9RrnPJ9q5Ua-52ie1KpUAOf5EQdMw=",
    name: "Onto-quo",
    price: 42106,
    quantity: 73,
    size: "3XL",
    status: "cancelled"
}, {
    id: "a82daa25-69e2-4b97-b961-24a757aee326",
    image: "https://media.istockphoto.com/photos/close-up-shot-of-tomatoes-picture-id90662933?k=6&m=90662933&s=612x612&w=0&h=3pfhPwyc8tX-IfaypThIM2U4gw7rsKnvpVxNaTscSzI=",
    name: "Dam-sail",
    price: 1801,
    quantity: 971,
    size: "L",
    status: "in-progress"
}, {
    id: "dcf9c9a9-8389-4b58-b4e6-d252264808df",
    image: "https://media.istockphoto.com/photos/red-and-gold-onion-picture-id182504322?k=6&m=182504322&s=612x612&w=0&h=A3WbvXXvuga3qpbtg4UYPHMz5otlmqpsMQA9p0Ye_dY=",
    name: "Tamlight",
    price: 88334,
    quantity: 585,
    size: "2XL",
    status: "in-progress"
}]

const cardImgTop = document.querySelector('#zanahoria');


// function getImg(obj) {
//     cardImgTop.innerHTML =
// }

const myFuntion = arr[0].image;

function myArr(value) {
    const cardImgTop = document.createElement('div');
    const img = document.createElement('img')
    const cardBody = document.createElement('div')
    cardImgTop.src = value.image;

}