AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "PYTHON",
    cardImage: "python.webp",
    place: "Programming Language", // Add this line
    time: "2025", // Add this line
    desp: "<li>Python is a high-level, versatile programming language.</li> <li>It's widely used in web development, data science, and automation</li> <li>It's widely used in web development, data science, and automation</li>",
  },
  {
    title: "SQL",
    cardImage: "SQL.jpg",
    place: "Database Management", // Add this line
    time: "2025", // Add this line
    desp: "<li>SQL (Structured Query Language) is used to manage and manipulate relational databases.</li><li>It allows users to insert, update, delete, and retrieve data efficiently.</li><li>SQL is essential for backend data operations.</li>",
  },
  {
    title: "WEB DEVELOPMENT",
    cardImage: "web.webp",
    place: "  Enhancing Web Development", // Add this line
    time: "2025", // Add this line
    desp: "<li>Separates content management and front-end, allowing faster, more secure sites.</li><li>Brings VR/AR and real-time 3D graphics to websites</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "TOOLS AND PLATFORMS",
    cardImage: "tools.jpeg",
    description:
      " Visual Studio Code , Git & GitHub , Embedded Systems , Arduino.",
  },
  {
    title: "DESIGN MEDIA",
    cardImage: "MEDIA.jpg",
    description:
      "Canva , Figma , Adobe Photoshop , CapCut.",
  },
 
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Loyola college",
    subtitle: "PROJECT EXPO",
    image: "loyalo.png",
    desp: "Won 3rd price in loyola college in (project expo) competition projrct name: Traffic light.",
    
  },
  {
    title: "Arunai Engineering College",
    subtitle: "Hachthon competition",
    image: "aaruni.jpeg",
    desp: "Won 3rd price in Arunai Engineering College in (hackthon competition) promble statement : Deepfack.",
    
  },
  {
    title: "Manakula Vinayagar Engineering College",
    subtitle: "Tech expo",
    image: "mvit.jpeg",
    desp: "Scmit(participanted) and gainied knowledged ,more infromation .",
    
  },
  {
    title: "Arunai Engineering College",
    subtitle: "Expo competition",
    image: "aaruni.jpeg",
    desp: "Won 1st price in Arunai Engineering College in (Expo competition) project name: Traffic light" ,
    href: "https://elevatetech.codes/",
  },
  {
    title: "Mailam Engineering College",
    subtitle: "Tech expo",
    image: "malam.png",
    desp: "participanted and gainied knowledged ,more infromation .",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "Sri krishna college of Engineering ",
    subtitle: "Paper presentstion",
    image: "1sri.jpeg",
    desp: " Paper presentstion event based of mathematics (Importants of mmathematics in real life).",
  
  },
  
   
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
