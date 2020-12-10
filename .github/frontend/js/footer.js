const footer = document.createElement("footer");
const copyright = document.createElement("p");
copyright.classList.add("copyright");
copyright.innerHTML = '&#169' + 'Syren'

const socialStack = document.createElement("div");
socialStack.classList.add("social-stack");

const fblogo = document.createElement("img");
fblogo.classList.add("fb-logo");
fblogo.setAttribute("src", "./imgs/fblogo.png");
fblogo.setAttribute("alt", "unavailable");

const twitterlogo = document.createElement("img");
twitterlogo.classList.add("twitter-logo");
twitterlogo.setAttribute("src", "./imgs/twitterlogo.png");
twitterlogo.setAttribute("alt", "unavailable");

const githublogo = document.createElement("img");
githublogo.classList.add("github-logo");
githublogo.setAttribute("src", "./imgs/github.png");
githublogo.setAttribute("alt", "unavailable");

const linkedinlogo = document.createElement("img");
linkedinlogo.classList.add("linkedin-logo");
linkedinlogo.setAttribute("src", "./imgs/linkedin.png");
linkedinlogo.setAttribute("alt", "unavailable");

socialStack.appendChild(fblogo);
socialStack.appendChild(twitterlogo);
socialStack.appendChild(githublogo);
socialStack.appendChild(linkedinlogo);

footer.appendChild(copyright);
footer.appendChild(socialStack);





export{
    footer
}