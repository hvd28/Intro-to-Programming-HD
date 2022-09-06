
/* FOOTER COPYRIGHT */
let today = new Date();
let thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `<span>Hannah Donnelly ${thisYear}</span>`;
footer.appendChild(copyright);
console.log(thisYear);

/* SKILLS SECTION */
const skills = ["HTML", "JavaScript", "CSS", "Git", "Fetch API"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li")
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

/* MESSAGE FORM */
const messageForm = document.getElementsByName("leave_message")[0];

messageForm.addEventListener("submit", messageSubmit);

function messageSubmit(event) {
    event.preventDefault()

    const { name, email, message } = event.target;

    console.log("name", name.value)
    console.log("email", email.value)
    console.log("message", message.value)

    /* MESSAGE LIST */
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    console.log(messageList);

    newMessage.innerHTML = `<span>${message.value} - ${name.value} @ <a href="mailto:${email.value}">${email.value} <br></a></span>`;
    messageList.appendChild(newMessage);

    /* MESSAGE REMOVAL BUTTON */
    const removeButton = document.createElement("button")
    removeButton.innerText = "remove"
    removeButton.type = "button"    
    newMessage.appendChild(removeButton)

    removeButton.addEventListener("click", event => event.target.parentNode.remove())

    document.getElementsByName("leave_message")[0].reset()
}

fetch("https://api.github.com/users/hvd28/repos")
    .then(function(response) {
        return response.json()
    })
    
    .then(function(response){
            const repositories = response
            console.log(repositories)
        
            const projectSection = document.getElementById("projects")
        const projectList = projectSection.querySelector("ul")
        
        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement("li")
            project.innerText = repositories[i].name
            projectList.appendChild(project)
        }
    })

    .catch((error) => {
        console.error(error)
    })
