"use strict";
window.addEventListener("DOMContentLoaded", setApp);
function setApp() {
    const galleryList = document.querySelector(".gallery");
    const clickImgHandler = (e)=>{
        e.preventDefault();
        const largeImg = document.getElementById("largeImg");
        const link = e.target.closest(".list-item__link").href;
        if (!link) return;
        largeImg.src = link;
    };
    galleryList.addEventListener("click", clickImgHandler);
}

//# sourceMappingURL=index.f75de5e1.js.map
