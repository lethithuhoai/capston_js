let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let closeCard = document.querySelector('.closeCard');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


//Mở giỏ hàng
openShopping.addEventListener('click', () => {
    body.classList.add('active');
})

//Thanh toán giỏ hàng
closeShopping.addEventListener('click', () => {
    listCards = [];
    reloadCard();
    body.classList.remove('active');
    
})

//Đóng gỏ hàng
closeCard.addEventListener('click', () => {
    body.classList.remove('active');
    
})





//hiển thị theo sản phẩm
// var btnList = document.querySelectorAll('#btn1');
// var imageList = document.querySelectorAll('image'); 

// btnList.forEach(btn=>{
//     btn.addEventListener('click',e=> ()=>{
//         console.log(e.currentTarget.getAttribute('type'));
//         // imageList.forEach(image.getAttribute('type'));


//     });
// })


//hàm filter sản phẩm theo id
// function filterProductsById(products, id) {

//     return products.filter(product => product.id === id);

// }

function changeProduct(type, id) {
    this.renderCard(type);
}

let currentProduct = [];

//tạo product
const products = [
    {
        id: 1,
        name: 'GALAXY S22 ULTRA',
        screen: 'Dynamic AMOLED 2X 6.8" Quad HD+ (2K+)',
        backCamera: '12MP',
        frontCamera: '48MP',
        desc: 'Khối lượng của máy 228 g cho cảm giác cầm nắm đầm tay, khi cầm máy trần thì hơi có cảm giác dễ trượt.',
        type: 'samsung',
        image: 'Galaxy-S22-Ultra-Black.jpg',
        price: 900
    },
    {
        id: 2,
        name: 'IPHONE 11 PROMAX',
        screen: 'màn hình Dynamic Island ',
        backCamera: '12MP',
        frontCamera: '48MP',
        desc: 'Sở hữu thiết kế màn hình Dynamic Island ấn tượng cùng màn hình OLED và hiệu năng vượt trội với chip A16 Bionic',
        type: 'iphone',
        image: 'iphone_11_pro_max.jpg',
        price: 800
    },
    {
        id: 3,
        name: 'IPHONE 12 PROMAX ',
        screen: 'màn hình Dynamic Island ',
        backCamera: '12MP',
        frontCamera: '48MP',
        desc: 'Sở hữu thiết kế màn hình Dynamic Island ấn tượng cùng màn hình OLED và hiệu năng vượt trội với chip A16 Bionic',
        type: 'iphone',
        image: 'iphone-12-pro-max-xanh-duong.jpg',
        price: 900
    },
    {
        id: 4,
        name: 'IPHONE 13 PRO',
        screen: 'Màn hình Dynamic Island ',
        backCamera: '12MP',
        frontCamera: '48MP',
        desc: 'Sở hữu thiết kế màn hình Dynamic Island ấn tượng cùng màn hình OLED và hiệu năng vượt trội với chip A16 Bionic',
        type: 'iphone',
        image: 'iphone-13-pro.jpg',
        price: 1000
    },
    {
        id: 5,
        name: 'IPHONE 14  PROMAX',
        screen: 'Màn hình Dynamic Island ',
        backCamera: '12MP',
        frontCamera: '48MP',
        desc: 'Sở hữu thiết kế màn hình Dynamic Island ấn tượng cùng màn hình OLED và hiệu năng vượt trội với chip A16 Bionic',
        type: 'iphone',
        image: 'iphone-14-pro-max-den.jpg',
        price: 1200
    },
    {
        id: 6,
        name: 'SAMSUNG GALAXY A71',
        screen: 'Dynamic AMOLED 2X 6.8" Quad HD+ (2K+)',
        backCamera: '12MP',
        frontCamera: '48MP',
        desc: 'Khối lượng của máy 228 g cho cảm giác cầm nắm đầm tay, khi cầm máy trần thì hơi có cảm giác dễ trượt.',
        type: 'samsung',
        image: 'samsung-galaxy-a71-5g.jpg',
        price: 500
    },
    {
        id: 7,
        name: 'SAMSUNG GALAXY S20 ULTRA',
        screen: 'Dynamic AMOLED 2X 6.8" Quad HD+ (2K+)',
        backCamera: '12MP',
        frontCamera: '48MP',
        desc: 'Khối lượng của máy 228 g cho cảm giác cầm nắm đầm tay, khi cầm máy trần thì hơi có cảm giác dễ trượt.',
        type: 'samsung',
        image: 'samsung-galaxy-s20-ultra.jpg',
        price: 900
    },
    {
        id: 8,
        name: 'SAMSUNG GALAXY S21',
        screen: 'Dynamic AMOLED 2X 6.8" Quad HD+ (2K+)',
        backCamera: '12MP',
        frontCamera: '48MP',
        desc: 'Khối lượng của máy 228 g cho cảm giác cầm nắm đầm tay, khi cầm máy trần thì hơi có cảm giác dễ trượt.',
        type: 'samsung',
        image: 'Samsung-Galaxy-S21-FE.jpg',
        price: 1000
    },
];


// var itemList = document.querySelectorAll('list-item');


//card
let listCards = [];
function renderCard(type) {
    let productFilter = [...products];
    if (type) {
        productFilter = [...productFilter].filter(p => p.type === type);
        currentProduct.forEach(p => {
            document.getElementById('listCard').removeChild(document.getElementById(p.id));
        });
    }

    productFilter.forEach((value, key) => {
        // console.log(value)
        let newDiv = document.createElement('div');
        newDiv.id = value.id;
        newDiv.type = value.type;
        newDiv.classList.add('product-item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="desc">${value.desc}</div>
            <div class="screen">${value.screen}</div>
            <div class="blackCamera">Camera trước : ${value.blackCamera}</div>
            <div class="frontCamera">Camrerasau : ${value.frontCamera}</div>
            <div class="price">${value.price.toLocaleString()} $</div>
            <button class="addCard" onclick="addToCard(${key})">Thêm vào giỏ hàng</button>`;
        list.appendChild(newDiv);
    });
    currentProduct = [...productFilter];
}

renderCard()

const cardOnList = document.querySelector('section');
console.log(cardOnList);

// số trên giỏ hàng
function addToCard(key) {
    alert("Đã thêm vào giỏ hàng");
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

//sp add vào giỏ hàng
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()} $</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                    <div id="con1" onclick="onDeleteItem(${key})">Xóa</div>
                </div>
                <hr>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString() + '$';
    quantity.innerText = count;

    // console.log(listCard)
}

//số lượng sản phẩm chọn
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

function onDeleteItem(key) {
    delete listCards[key];
    reloadCard();
}


// $('body').click(function (event) {
//    if(!$(event.target).closest('#modal').length && !$(event.target).is('#modal')) {
//      $(".card").hide();
//    }     
// });


// $(document).click(function(event) {
//     //if you click on anything except the modal itself or the "open modal" link, close the modal
//     if (!$(event.target).closest(".card,.shopping").length) {
//       $("body").find(".card").removeClass("active");
//     }
//   });