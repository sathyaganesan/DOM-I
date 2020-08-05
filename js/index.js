const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Code for MVP DOM 1

const anchorTags = document.getElementsByTagName('a');
Array.from(anchorTags);

anchorTags[0].textContent = siteContent.nav["nav-item-1"];
anchorTags[1].textContent = siteContent.nav["nav-item-2"];
anchorTags[2].textContent = siteContent.nav["nav-item-3"];
anchorTags[3].textContent = siteContent.nav["nav-item-4"];
anchorTags[4].textContent = siteContent.nav["nav-item-5"];
anchorTags[5].textContent = siteContent.nav["nav-item-5"];

// anchorTags[0].textContent = "Services";
// anchorTags[1].textContent = "Product";
// anchorTags[2].textContent = "Vision";
// anchorTags[3].textContent = "Feature";
// anchorTags[4].textContent = "About";
// anchorTags[5].textContent = "Contact";

Array.from(anchorTags).forEach((element) => {
  element.style.color = 'green';
});

const newHomeTag = document.querySelector('nav');
const homeTag = document.createElement('a');
homeTag.href = "#";
homeTag.textContent = "Home";
newHomeTag.prepend(homeTag);
homeTag.style.color = 'green';
const loginTag = document.createElement('a');
loginTag.href = "#";
loginTag.textContent = "Log In";
newHomeTag.appendChild(loginTag);
loginTag.style.color = 'green';


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ctaText = document.querySelector('.cta-text');

const ctaTextH1 = document.querySelector('h1');
ctaTextH1.textContent = siteContent.cta.h1;

const ctaTextButton = document.querySelector('button');
ctaTextButton.textContent = siteContent.cta.button;

const ctaImg = document.querySelector('.cta img');
ctaImg.src = siteContent.cta["img-src"];


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const txtContentH4 = document.querySelectorAll('.text-content h4');

txtContentH4[0].textContent = siteContent["main-content"]["features-h4"];
txtContentH4[1].textContent = siteContent["main-content"]["about-h4"];
txtContentH4[2].textContent = siteContent["main-content"]["services-h4"];
txtContentH4[3].textContent = siteContent["main-content"]["product-h4"];
txtContentH4[4].textContent = siteContent["main-content"]["vision-h4"];

const txtContentP = document.querySelectorAll('.text-content p');

txtContentP[0].textContent = siteContent["main-content"]["features-content"];
txtContentP[1].textContent = siteContent["main-content"]["about-content"];
txtContentP[2].textContent = siteContent["main-content"]["services-content"];
txtContentP[3].textContent = siteContent["main-content"]["product-content"];
txtContentP[4].textContent = siteContent["main-content"]["vision-content"];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact["contact-h4"];


const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;
console.log(contactP);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const footerP = document.querySelector('footer p');
footerP.textContent = siteContent.footer.copyright;
console.log(footerP);