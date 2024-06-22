// step 2
let lookStor = localStorage.getItem("color");

if(lookStor !== null){

    document.documentElement.style.setProperty("--main-color", lookStor);

    document.querySelectorAll(".color-list li").forEach((element) => {
        element.classList.remove("active");

        if(element.dataset.color === lookStor){

            element.classList.add("active");
        }
    })
}

// step 4
let yes = true;
let no;

let span = document.querySelectorAll(".random span").forEach(span => {

    span.addEventListener("click", (e) => {

        e.target.parentElement.querySelectorAll(".active").forEach((element) => {
            element.classList.remove("active");
        })
        e.target.classList.add("active");

        if(e.target.dataset.background === "yes"){

            yes = true;
            start();
        }else{
            clearInterval(no);
        }
    })
})

// step 1
let landing = document.querySelector(".landing-page");

let arrayLand = ["amage/Delivery-Truck.jpg","amage/01.jpg","amage/02.jpg","amage/03.jpg","amage/04.jpg"];

function start(){

    if(yes === true){

        no = setInterval(
    
            function loopArray(){
        
                let landom = Math.floor(Math.random() * arrayLand.length);
            
                landing.style.backgroundImage = "url("+ arrayLand[landom] +")";

            }, 5000);
    }
}

start();

let settingBox = document.querySelector(".system").onclick = function (){

    document.querySelector(".fa-gear").classList.toggle("fa-spin");

    document.querySelector(".setting-box").classList.toggle("open");
}
// step 2 
let settingOption = document.querySelectorAll(".color-list li").forEach(li => {

    li.addEventListener("click", (e) => {

        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

        localStorage.setItem("color", e.target.dataset.color);

        e.target.parentElement.querySelectorAll(".active").forEach((element) => {
            element.classList.remove("active");
        })

        e.target.classList.add("active");
    })
})

// step 3 
// in the function end head function 
// start part skills
let skills = document.querySelector(".skills");

window.onscroll = function (){

    let skillOffSetTop = skills.offsetTop;

    let skillOffSetHeight = skills.offsetHeight;
    
    let windowInerheight = this.innerHeight;

    let windowScroll = this.pageYOffset;

    if(windowScroll > (windowInerheight + skillOffSetHeight - skillOffSetTop)){

        let scrollSkill = document.querySelectorAll(".skills-box .skills-brogress span");

        scrollSkill.forEach(skill => {

            skill.style.width = skill.dataset.brogress;
        })
    }
}
// end skills
// start gallary
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener("click", (e) => {

        let overLay = document.createElement("div");

        overLay.className = "overlay";

        document.body.appendChild(overLay);

        // popup 
        let popup = document.createElement("div");

        popup.className = "popup";

         // createElement h3
        let titleImg = document.createElement("h3");

        let textImg = document.createTextNode(img.alt);

        titleImg.appendChild(textImg);

        popup.appendChild(titleImg);

        // createElement img 
        let popupImg = document.createElement("img");

        popupImg.src = img.src;

        popup.appendChild(popupImg);

        document.body.appendChild(popup);

        // createElement x 
        let closeText = document.createElement("span");

        closeText.className = "close";

        let xclose = document.createTextNode("x");

        closeText.appendChild(xclose);

        popup.appendChild(closeText);
    })
    // close popup
    document.addEventListener("click", (e) => {

        if(e.target.className == "close"){

            e.target.parentNode.remove();

            document.querySelector(".overlay").remove();
        }
    })
})
///buliets
let buliets = document.querySelectorAll(".nav-bullets .bullet p");

// buliets.forEach(buliet => {
//     buliet.addEventListener("click", (e) => {

//         document.querySelector(e.target.dataset.section).scrollIntoView({

//             behavior: 'smooth'

//         });
//     });
// });
//header 
let headerLink = document.querySelectorAll(".links a");

// headerLink.forEach(link => {
//     link.addEventListener("click", (e) => {

//         e.preventDefault();

//         document.querySelector(e.target.dataset.section).scrollIntoView({

//             behavior: 'smooth'

//         });
//     });
// });
function allLink(elements){
    elements.forEach(ele => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

allLink(headerLink);
allLink(buliets);

let controlLink = document.querySelector(".links");
let btnIcon = document.querySelector(".fa-solid").onclick = function (){
    if(controlLink.style.display == "flex"){
        controlLink.style.display = "none";
    }else{
        controlLink.style.display = "flex";
    }
}