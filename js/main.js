let minLinks = document.querySelectorAll("nav ul.main > li");
let otherLinks = minLinks[minLinks.length - 1];
let otherLinksSction = document.querySelector("nav .mega-menu");

otherLinks.onclick = function () {
    otherLinksSction.classList.toggle("active")
}

console.log(otherLinksSction)
