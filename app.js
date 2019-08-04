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
    image: "https://robohash.org/thin.png?size=300x300",
    name: "Onto-quo",
    price: 42106,
    quantity: 73,
    size: "3XL",
    status: "cancelled"
}, {
    id: "a82daa25-69e2-4b97-b961-24a757aee326",
    image: "https://robohash.org/odit.png?size=300x300",
    name: "Dam-sail",
    price: 1801,
    quantity: 971,
    size: "L",
    status: "in-progress"
}, {
    id: "dcf9c9a9-8389-4b58-b4e6-d252264808df",
    image: "https://robohash.org/design.png?size=300x300",
    name: "Tamlight",
    price: 88334,
    quantity: 585,
    size: "2XL",
    status: "in-progress"
}]

// const btnPrimary1 = document.querySelector('.btn-primary');
// const carrito = document.querySelector('#carrito');
// const fakePromise = Promise.resolve(data)

const myFuntion = arr.forEach(myArr)

function myArr(value) {
    console.log(value);
}