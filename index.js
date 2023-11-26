const image_array = [
    {
        'id': 1,
        "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxHfAiwkIrsRo9iDyJz56PNgOXkK01whjQjcyjQacPKSVI2x-_H9YCsYk2F_WqdQYWHeo&usqp=CAU",
        "title": "Cafes and coffee shops",
        "desc": "A cozy spot with good coffee and a relaxed atmosphere can be an ideal place to catch up with friends, work, or simply unwind.",
        "exploreBtn": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxHfAiwkIrsRo9iDyJz56PNgOXkK01whjQjcyjQacPKSVI2x-_H9YCsYk2F_WqdQYWHeo&usqp=CAU"
    },
    {
        'id': 2,
        "img_url": "https://api.time.com/wp-content/uploads/2016/08/gettyimages-535829001.jpg",
        "title": "Parks and Nature Reserves",
        "desc": "Many people enjoy spending time in nature, whether it's a local park, hiking trail, or a beautiful natural setting. It provides a break from urban life and a chance to connect with the outdoors."
    },
    {
        'id': 3,
        "img_url": "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/649611-gettyimages-1283947553-9c4762123f70b04f6135dba5d9a43891.jpg",
        "title": "Bookstores and Libraries",
        "desc": "For those who love reading, bookstores and libraries are great places to explore new books, study, or attend book-related events."
    },
    {
        'id': 4,
        "img_url": "https://srv-1.eden-gallery.com/2021/08/11/6113e0e420cfa-Art-Galleries-vs-Museums--Eden-Gallery.jpeg",
        "title": "Art Galleries and Museums",
        "desc": " If you appreciate art, museums and galleries offer a chance to explore cultural exhibits, paintings, sculptures, and more."
    },
    {
        'id': 5,
        "img_url": "https://i.pinimg.com/736x/76/96/4b/76964be699c35c4ce7de04d4e1693158.jpg",
        "title": "Coffee & Nature Aesthetic",
        "desc": "A cozy spot with good coffee and a relaxed atmosphere can be an ideal place to catch up with friends, work, or simply unwind."
    },
    {
        'id': 6,
        "img_url": "https://www.muchbetteradventures.com/magazine/content/images/2022/04/dolomite.jpg",
        "title": "Mountains and Nature Reserves",
        "desc": "Many people enjoy spending time in nature, whether it's a local park, hiking trail, or a beautiful natural setting. It provides a break from urban life and a chance to connect with the outdoors."
    },
];

let btnClicked = false;

function display() {
    if(btnClicked) {
        return;
    }

    btnClicked = true;

    let theContainer = document.querySelector('#theContainer');
    let ul = document.createElement('ul');

    for(let {img_url, title, desc, exploreBtn} of image_array) {
        let li = document.createElement('li');

        let img = document.createElement('img');
        img.setAttribute('id', 'images');
        img.setAttribute('src', img_url);
        li.append(img);

        let div = document.createElement('div');
        div.classList.add('title_block');

        let titleHeading = document.createElement('h4');
        titleHeading.innerText = title;

        let p =document.createElement('p');
        p.innerText = desc;

        let placeBtn = document.createElement('a');
        placeBtn.classList.add('place_btn');
        placeBtn.innerHTML = "Explore More";
        placeBtn.setAttribute('href', exploreBtn);
        placeBtn.setAttribute('target', '_blank');


        div.append(titleHeading, p, placeBtn);
        li.append(div);

        ul.append(li);

    }
    theContainer.append(ul);

    filterImages();
}

function filterImages() {
    let filterInput = document.querySelector('#filterInput');
    
    filterInput.addEventListener('input', function() {
        let filterText = filterInput.value.toLowerCase();
        let foundItems = false;

        let listItems = document.querySelectorAll('li');

        listItems.forEach(function (item) {
            let title = item.querySelector('h4').innerText.toLowerCase();

            if (title.includes(filterText)) {
                item.style.display = 'flex';
                foundItems = true;
            }
            else {
                item.style.display = 'none';
            }
        });

        let message = document.querySelector('#message');
        message.classList.add('message');
        if(!foundItems) {
            message.innerHTML = `"${filterText}" not found!`;
            message.style.display = 'block';
        }
        else {
            message.style.display = 'none';
        }
    });

}