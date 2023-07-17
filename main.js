let maintext = document.querySelector("h1")

window.addEventListener("scroll",function () {
    let value = this.window.scrollY;
    console.log("scrollY",value);

    if(value > 100){
        maintext.style.animation="disappear 0.5s ease-out forwards";
    } else {
        maintext.style.animation="slidefade 0.5s ease-out";
    }
});

let mainimg = document.querySelector(".globe")

window.addEventListener("scroll",function () {
    let value = this.window.scrollY;
    console.log("scrollY",value);

    if(value > 200){
        mainimg.style.animation="fadeup 0.5s ease-out forwards";
    } else {
        mainimg.style.animation="fadedown 0.5s ease-out";
    }
});

let todo = document.querySelector(".Todo")

window.addEventListener("scroll",function () {
    let value = this.window.scrollY;
    console.log("scrollY",value);

    if(value > 900){
        todo.style.animation="fade1 0.8s ease-out forwards";
    } else {
        todo.style.animation="fade0 0.8s ease-out";
    }
});

let box1 = document.querySelector(".hacking")

window.addEventListener("scroll",function () {
    let value = this.window.scrollY;
    console.log("scrollY",value);

    if(value > 900){
        box1.style.animation="fade1 0.8s ease-out forwards";
    } else {
        box1.style.animation="fade0 0.8s ease-out";
    }
});

let mac = document.querySelector(".mac")

window.addEventListener("scroll",function () {
    let value = this.window.scrollY;
    console.log("scrollY",value);

    if(value > 900){
        mac.style.animation="macin 1s ease-out forwards";
    } else {
        mac.style.animation="macout 1s ease-out";
    }
});

let knowledge = document.querySelector(".Knowledge")

window.addEventListener("scroll",function () {
    let value = this.window.scrollY;
    console.log("scrollY",value);

    if(value > 1400){
        knowledge.style.animation="fade1 0.8s ease-out forwards";
    } else {
        knowledge.style.animation="fade0 0.8s ease-out";
    }
});

let box2 = document.querySelector(".locking1")

window.addEventListener("scroll",function () {
    let value = this.window.scrollY;
    console.log("scrollY",value);

    if(value > 1400){
        box2.style.animation="fade1 0.8s ease-out forwards";
    } else {
        box2.style.animation="fade0 0.8s ease-out";
    }
});

let box3 = document.querySelector(".locking2")

window.addEventListener("scroll",function () {
    let value = this.window.scrollY;
    console.log("scrollY",value);

    if(value > 1600){
        box3.style.animation="fade1 0.8s ease-out forwards";
    } else {
        box3.style.animation="fade0 0.8s ease-out";
    }
});

let ability = document.querySelector(".Ability")

window.addEventListener("scroll",function () {
    let value = this.window.scrollY;
    console.log("scrollY",value);

    if(value > 2000){
        ability.style.animation="fade1 0.8s ease-out forwards";
    } else {
        ability.style.animation="fade0 0.8s ease-out";
    }
});

let job1 = document.querySelector(".Future_1")

window.addEventListener("scroll",function () {
    let value = this.window.scrollY;
    console.log("scrollY",value);

    if(value > 2700){
        job1.style.animation="leftin 0.8s ease-out forwards";
    } else {
        job1.style.animation="leftout 0.8s ease-out";
    }
});

let job2 = document.querySelector(".Future_2")

window.addEventListener("scroll",function () {
    let value = this.window.scrollY;
    console.log("scrollY",value);

    if(value > 3000){
        job2.style.animation="leftin 0.8s ease-out forwards";
    } else {
        job2.style.animation="leftout 0.8s ease-out";
    }
});

let job3 = document.querySelector(".Future_3")

window.addEventListener("scroll",function () {
    let value = this.window.scrollY;
    console.log("scrollY",value);

    if(value > 3200){
        job3.style.animation="leftin 0.8s ease-out forwards";
    } else {
        job3.style.animation="leftout 0.8s ease-out";
    }
});

let box4 = document.querySelector(".locking3")

window.addEventListener("scroll",function () {
    let value = this.window.scrollY;
    console.log("scrollY",value);

    if(value > 2800){
        box4.style.animation="fade1 0.8s ease-out forwards";
    } else {
        box4.style.animation="fade0 0.8s ease-out";
    }
});

let desc = document.querySelector(".frontdesc")

window.addEventListener("scroll",function () {
    let value = this.window.scrollY;
    console.log("scrollY",value);

    if(value > 600){
        desc.style.animation="descup 0.7s ease-out forwards";
    } else {
        desc.style.animation="descdown 0.7s ease-out";
    }
});

let gradient = document.querySelector("span")

window.addEventListener("scroll",function () {
    let value = this.window.scrollY;
    console.log("scrollY",value);

    if(value > 550){
        gradient.style.animation="gradientup 2s ease-out forwards";
    } else {
        gradient.style.animation="gradientdown 2s ease-out";
    }
});
