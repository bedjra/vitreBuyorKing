// Gestion du menu hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Gestion du sélecteur de langue
const languageSelector = document.getElementById("languageSelector");
const languageButton = document.getElementById("languageButton");
const currentFlag = document.getElementById("currentFlag");
const currentLang = document.getElementById("currentLang");
const languageOptions = document.querySelectorAll(".language-option");

languageButton.addEventListener("click", (e) => {
  e.stopPropagation();
  languageSelector.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!languageSelector.contains(e.target)) {
    languageSelector.classList.remove("active");
  }
});

// Traductions
const translations = {
  fr: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    contact: "Contact",
    heroTitle: `Envoyez,<br>épargnez, gagnez.<br><span style="color: #2563eb;">Facilement</span>`,
    heroDescription:
      "Envoyez de l'argent à vos proches, mettez de côté quand vous le souhaitez, ou faites grandir votre argent avec des intérêts. Rapide et sécurisé!",
    ctaButton: "Nos Services",
    testimonialText: `<span class="testimonial-number">+200</span> clients <br> satisfaits`,

    // Services
    servicesTitle: "NOS SERVICES",
    servicesIntro: "Découvrez nos services",
    service1Title: "Transferts d'argent",
    service1Desc:
      "Transferts rapides et sécurisés à Aflao (bientôt Accra), avec offres et tarifs compétitifs.",
    service1More: "Lire Plus ↗",
    service2Title: "Épargne & Investissement",
    service2Desc:
      "Épargne sécurisée : comptes à intérêts, dépôts à terme (4-7%), microfinance.",
    service2More: "Lire Plus ↗",
    service3Title: "Location & Hébergement",
    service3Desc:
      "Location de voitures, villas et appartements meublés à Accra (prochainement ailleurs au Ghana).",
    service3More: "Lire Plus ↗",

    // Contact
    contactTitle: "CONTACTEZ - NOUS",
    contactSubtitle: "Envoyez-nous un message",
    contactButton: "Envoyer le message",
    addressText: "123 Aflao Ghana",
    emailText: "Email : zaglagoakuyoerika@gmail.com",
    phoneText: "(+228) 98 19 95 73",

    contactNamePlaceholder: "Entrez votre nom...",
    contactPhonePlaceholder: "Entrez votre numéro...",
    contactMessagePlaceholder: "Entrez votre message...",

    // Footer
    footerText:
      "Envoyez de l’argent à vos proches, mettez de côté quand vous le souhaitez, ou faites grandir votre argent avec des intérêts. Rapide et sécurisé !",
    opening1: "Lundi - Vendredi : 9h00 - 17h00",
    opening2: "Samedi : 10h00 - 15h00",
    opening3: "Dimanche : Fermé",
    copyright: "Copyright 2025. Tous droits réservés",
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    heroTitle: `Send,<br>save, earn.<br><span style="color: #2563eb;">Easily</span>`,
    heroDescription:
      "Send money to your loved ones, save anytime, or grow your money with interest. Fast and secure!",
    ctaButton: "Our Services",
    testimonialText: `<span class="testimonial-number">+200</span> satisfied <br> clients`,

    // Services
    servicesTitle: "OUR SERVICES",
    servicesIntro: "Discover our services",
    service1Title: "Money Transfers",
    service1Desc:
      "Fast and secure transfers in Aflao (soon Accra), with competitive offers and rates.",
    service1More: "Read More ↗",
    service2Title: "Savings & Investment",
    service2Desc:
      "Secure savings: interest accounts, term deposits (4-7%), microfinance.",
    service2More: "Read More ↗",
    service3Title: "Rentals & Accommodation",
    service3Desc:
      "Car, villa, and furnished apartment rentals in Accra (soon in other parts of Ghana).",
    service3More: "Read More ↗",

    // Contact
    contactTitle: "CONTACT US",
    contactSubtitle: "Send us a message",
    contactButton: "Send Message",
    addressText: "123 Aflao Ghana",
    emailText: "Email: zaglagoakuyoerika@gmail.com",
    phoneText: "(+228) 98 19 95 73",

    contactNamePlaceholder: "Enter your name...",
    contactPhonePlaceholder: "Enter your phone number...",
    contactMessagePlaceholder: "Enter your message...",

    // Footer
    footerText:
      "Send money to your loved ones, save anytime, or grow your money with interest. Fast and secure!",
    opening1: "Monday - Friday: 9:00am - 5:00pm",
    opening2: "Saturday: 10:00am - 3:00pm",
    opening3: "Sunday: Closed",
    copyright: "Copyright 2025. All rights reserved",
  },
};

// Appliquer les traductions lors du clic
languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedLang = option.dataset.lang;

    languageOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");

    currentFlag.className =
      selectedLang === "fr" ? "flag-icon flag-fr" : "flag-icon flag-en";
    currentLang.textContent = selectedLang === "fr" ? "Français" : "English";

    updatePageContent(selectedLang);
    languageSelector.classList.remove("active");
  });
});

// Mise à jour dynamique
function updatePageContent(lang) {
  const t = translations[lang];

  // Header & Hero
  document.getElementById("welcomeText").textContent = "";
  document.getElementById("descriptionText").textContent = "";
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks[0].textContent = t.home;
  navLinks[1].textContent = t.about;
  navLinks[2].textContent = t.services;
  navLinks[3].textContent = t.contact;
  document.querySelector(".hero-title").innerHTML = t.heroTitle;
  document.querySelector(".hero-description").textContent = t.heroDescription;
  document.querySelector(".cta-button").textContent = t.ctaButton;
  document.querySelector(".testimonial-text").innerHTML = t.testimonialText;

  // Services
  document.getElementById("servicesTitle").textContent = t.servicesTitle;
  document.getElementById("servicesIntro").textContent = t.servicesIntro;
  document.getElementById("service1Title").textContent = t.service1Title;
  document.getElementById("service1Desc").textContent = t.service1Desc;
  document.getElementById("service1More").textContent = t.service1More;
  document.getElementById("service2Title").textContent = t.service2Title;
  document.getElementById("service2Desc").textContent = t.service2Desc;
  document.getElementById("service2More").textContent = t.service2More;
  document.getElementById("service3Title").textContent = t.service3Title;
  document.getElementById("service3Desc").textContent = t.service3Desc;
  document.getElementById("service3More").textContent = t.service3More;

  // Contact
  document.getElementById("contactTitle").textContent = t.contactTitle;
  document.getElementById("contactSubtitle").textContent = t.contactSubtitle;
  document.getElementById("contactButton").textContent = t.contactButton;
  document.getElementById("addressText").textContent = t.addressText;
  document.getElementById("emailText").textContent = t.emailText;
  document.getElementById("phoneText").textContent = t.phoneText;

  // Placeholders
  document.getElementById("contactName").placeholder = t.contactNamePlaceholder;
  document.getElementById("contactPhone").placeholder =
    t.contactPhonePlaceholder;
  document.getElementById("contactMessage").placeholder =
    t.contactMessagePlaceholder;

  // Footer
  document.getElementById("footerText").textContent = t.footerText;
  document.getElementById("openingHours1").textContent = t.opening1;
  document.getElementById("openingHours2").textContent = t.opening2;
  document.getElementById("openingHours3").textContent = t.opening3;
  document.getElementById("copyright").textContent = t.copyright;

  document.documentElement.lang = lang;
}

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedLang = option.dataset.lang;

    // Mettre à jour l'image et le texte du bouton principal
    if (selectedLang === "fr") {
      currentFlag.src = "images/fr.png";
      currentFlag.alt = "Français";
      currentLang.textContent = "Français";
    } else {
      currentFlag.src = "images/en.png";
      currentFlag.alt = "English";
      currentLang.textContent = "English";
    }

    // Mise à jour visuelle active dans la liste
    languageOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");

    // Cacher la liste des langues si tu as un menu déroulant
    languageSelector.classList.remove("active");

    // Ton code de traduction, etc.
    updatePageContent(selectedLang);
  });
});
