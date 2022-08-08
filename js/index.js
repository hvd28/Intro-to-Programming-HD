
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

const messageForm = document.getElementsByName("leave_message")[0];

messageForm.addEventListener("submit", messageSubmit);

function messageSubmit(event) {
    event.preventDefault()

    const { name, email, message } = event.target;

    console.log("name", name.value)
    console.log("email", email.value)
    console.log("message", message.value)

    const messageSection = getElementById("messages");
    const messageList = querySelector("ul");
    const newMessage = document.createElement("li");
    console.log(messageList);

    newMessage.innerHTML = '<a href="mailto:' + email.value + '">';
    newMessage.innerHTML = <span>message.value</span>;

    const removeButton = document.createElement("button")
    removeButton.innerText = "remove"
    removeButton.type = "button"

    removeButton.addEventListener("click", messageRemove);



    document.getElementsByName("leave_message")[0].reset()
}