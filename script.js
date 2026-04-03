const projectsArray = [
  {
    name: "Do-to-Doo",
    description:
      "This is a to-do-app , to manage tasks in the form of projects.",
    imageUrl:
      "https://github.com/Shubham277353/Do-to-Dooo/raw/main/Images/Screenshot.png",
  },
  {
    name: "Do-to-Doo",
    description:
      "This is a to-do-app , to manage tasks in the form of projects.",
    imageUrl:
      "https://github.com/Shubham277353/Do-to-Dooo/raw/main/Images/Screenshot.png",
  },
  {
    name: "Do-to-Doo",
    description:
      "This is a to-do-app , to manage tasks in the form of projects.",
    imageUrl:
      "https://github.com/Shubham277353/Do-to-Dooo/raw/main/Images/Screenshot.png",
  },
  {
    name: "Do-to-Doo",
    description:
      "This is a to-do-app , to manage tasks in the form of projects.",
    imageUrl:
      "https://github.com/Shubham277353/Do-to-Dooo/raw/main/Images/Screenshot.png",
  },
  {
    name: "Do-to-Doo",
    description:
      "This is a to-do-app , to manage tasks in the form of projects.",
    imageUrl:
      "https://github.com/Shubham277353/Do-to-Dooo/raw/main/Images/Screenshot.png",
  },
  {
    name: "Do-to-Doo",
    description:
      "This is a to-do-app , to manage tasks in the form of projects.",
    imageUrl:
      "https://github.com/Shubham277353/Do-to-Dooo/raw/main/Images/Screenshot.png",
  },
];

const container = document.getElementById("projects-conatiner");

projectsArray.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  const imageContainer = document.createElement("img");
  imageContainer.src = project.imageUrl;

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("header-div");

  const Heading = document.createElement("h2");
  Heading.textContent = project.name;

  const iconContainer = document.createElement("div");
  iconContainer.classList.add("icon-container");
  iconContainer.innerHTML = `
  <svg viewBox="0 0 128 128">
  <g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
  </svg> 
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
  <path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z"></path>
  </svg>`;

  cardHeader.append(Heading,iconContainer);

  const description = document.createElement("p");
  description.textContent = project.description;

  projectCard.append(imageContainer,cardHeader, description);
  container.append(projectCard);
});
