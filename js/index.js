
let today = new Date();
let thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `<span>Hannah Donnelly ${thisYear}</span>`;
footer.appendChild(copyright);
console.log(thisYear);

const skills = ["Placeholder", "Placeholder2", "Placeholder3", "Placeholder4"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li")
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

/* Adding comments here because I borked my git process and need to get it to register that I have 1 new file and 1 updated file to be committed*/