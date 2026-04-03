const projectsArray = [
    {
        name : "Do-to-Doo",
        description: "This is a to-do-app , to manage tasks in the form of projects.",
        imageUrl:"https://github.com/Shubham277353/Do-to-Dooo/raw/main/Images/Screenshot.png"
    },
    {
        name : "Do-to-Doo",
        description: "This is a to-do-app , to manage tasks in the form of projects.",
        imageUrl:"https://github.com/Shubham277353/Do-to-Dooo/raw/main/Images/Screenshot.png"
    },
    {
        name : "Do-to-Doo",
        description: "This is a to-do-app , to manage tasks in the form of projects.",
        imageUrl:"https://github.com/Shubham277353/Do-to-Dooo/raw/main/Images/Screenshot.png"
    },
    {
        name : "Do-to-Doo",
        description: "This is a to-do-app , to manage tasks in the form of projects.",
        imageUrl:"https://github.com/Shubham277353/Do-to-Dooo/raw/main/Images/Screenshot.png"
    },
    {
        name : "Do-to-Doo",
        description: "This is a to-do-app , to manage tasks in the form of projects.",
        imageUrl:"https://github.com/Shubham277353/Do-to-Dooo/raw/main/Images/Screenshot.png"
    },
    {
        name : "Do-to-Doo",
        description: "This is a to-do-app , to manage tasks in the form of projects.",
        imageUrl:"https://github.com/Shubham277353/Do-to-Dooo/raw/main/Images/Screenshot.png"
    },
]

const container = document.getElementById("projects-conatiner");

projectsArray.forEach((project)=>{
    const projectCard = document.createElement("div")
    projectCard.classList.add("project-card");

    const imageContainer = document.createElement("img");
    imageContainer.src = project.imageUrl;

    const Heading = document.createElement("h3");
    Heading.textContent = project.name;

    const description = document.createElement("p");
    description.textContent = project.description;

    projectCard.append(imageContainer,Heading,description);
    container.append(projectCard);


})



