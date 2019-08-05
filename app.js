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
    id: "a82daa25-69e2-4b97-b961-24a757aee326",
    image: "https://robohash.org/odit.png?size=300x300",
    name: "Dam-sail",
    price: 1801,
    quantity: 971,
    size: "L",
    status: "in-progress"
}, {
    id: "908d10fc-b695-481c-92a3-c5db30cc5e1a",
    image: "https://robohash.org/parent.png?size=300x300",
    name: "Light-zen",
    price: 29564,
    quantity: 211,
    size: "S",
    status: "completed",
}, {
    id: "f4e927ae-acd5-469a-b36e-371f16755802",
    image: "https://robohash.org/scale.png?size=300x300",
    name: "Danfind",
    price: 90747,
    quantity: 500,
    size: "M",
    status: "started"
}, {
    id: "42b3d47c-9f41-4ccd-b914-8b35ffd4365f",
    image: "https://robohash.org/thin.png?size=300x300",
    name: "Onto-quo",
    price: 42106,
    quantity: 73,
    size: "3XL",
    status: "cancelled"
}, {
    id: "dcf9c9a9-8389-4b58-b4e6-d252264808df",
    image: "https://robohash.org/design.png?size=300x300",
    name: "Tamlight",
    price: 88334,
    quantity: 585,
    size: "2XL",
    status: "in-progress"
}, {
    id: "c8bc79dd-d664-4e06-8b5c-13075bb3dd0e",
    image: "https://robohash.org/death.png?size=300x300",
    name: "Greenstatstock",
    price: 48527,
    quantity: 619,
    size: "XS",
    status: "completed"
}, {
    id: "22bdd38e-2fdf-4015-a453-feb02e158c0d",
    image: "https://robohash.org/dad.png?size=300x300",
    name: "True-don",
    price: 43240,
    quantity: 967,
    size: "2XS",
    status: "started",
}, {
    id: "f49a3148-6fb1-4fbb-a163-0b2ba7e41e53",
    image: "https://robohash.org/original.png?size=300x300",
    name: "Stim-mat",
    price: 27234,
    quantity: 59,
    size: "XL",
    status: "cancelled",
}, {
    id: "5ddce6fa-7193-4cef-a08b-997b9c6c32cd",
    image: "https://robohash.org/log.png?size=300x300",
    name: "Dinglambam",
    price: 17522,
    quantity: 458,
    size: "3XL",
    status: "completed"
}, {
    id: "be35bc16-808b-44d8-9e74-4d64b357bceb",
    image: "https://robohash.org/qui.png?size=300x300",
    name: "Quotehothold",
    price: 65614,
    quantity: 185,
    size: "M",
    status: "in-progress"
}]


// function getImg(obj) {
//     cardImgTop.innerHTML =
// }


let myFuntion = arr.forEach(myArr);

function myArr(element) {
    let divElement = document.createElement('div')
    divElement.className = 'card'
    let mycards = document.querySelector('.card-columns')
    mycards.appendChild(divElement)

    let getImg = document.createElement('img')
    getImg.src = element.image
    divElement.appendChild(getImg)

    let cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    divElement.appendChild(cardBody)

    let tagH5 = document.createElement('h5')
    tagH5.className = 'card-title'
    tagH5.innerHTML = element.name
    cardBody.appendChild(tagH5)

    let tagP = document.createElement('p')
    tagP.className = 'card-text'
    tagP.innerHTML = `Precio ${element.price}`
    cardBody.appendChild(tagP)

    let createabtn = document.createElement('a')
    createabtn.href = '#'
    createabtn.className = 'btn btn-danger'
    createabtn.innerHTML = 'Comprar'
    cardBody.appendChild(createabtn)
}