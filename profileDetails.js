let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let profileContainerElement = document.getElementById("profileContainer");
profileContainerElement.classList.add("profile-container");
let imageContainerEl = document.getElementById("imgContainer");
let imgEl = document.createElement("img");
imgEl.classList.add("image");
imgEl.setAttribute("src", profileDetails.imgSrc);
imageContainerEl.appendChild(imgEl);

let nameEl = document.createElement("h4");
nameEl.classList.add("heading");
nameEl.textContent = profileDetails.name;
profileContainerElement.appendChild(nameEl);

let ageEl = document.createElement("p");
ageEl.classList.add("paragraph");
ageEl.textContent = profileDetails.age;
profileContainerElement.appendChild(ageEl);