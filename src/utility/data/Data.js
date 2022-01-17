import { Bitcoin, Haggle, Tatswap, Whitepapper } from "../index";

export const AboutUs = {
  AboutUs: {
    id: "about",
    title: "About VEFI Network",
    subtitle: "Mission",
    buttonText: "Whitepaper",
    description: [
      "VEFI Network is an ecosystem of blockchain pertinent products and services taking root in Africa with the intent of spreading its influence throughout the globe.",
      "The mission of such grandiose idea is to improve the freedom of money globally through the integration of institutions, people groups and businesses into the blockchain ecosphere. Our intent is to build and deploy innovative, cutting edge and scalable blockchain solutions and as well, become a blockchain infrastructure and solutions provider."
    ],

    img: Bitcoin
  }
};

export const FooterData = {
  id: "footer",
  heading: "Want to know more about Vefi Network?",
  subheading: "Our whitepaper has all the information you need.",
  document: Whitepapper
};
export const Homedata = {
  id: "home",
  heading: "Changing The World's Future Through Blockchain.",
  subheading:
    "An ecosystem of blockchain-intrinsic projects. We're spearheading the mass adoption of the blockchain paradigm.",
  buttonText: "Join Telegram Group",
  brands: [
    {
      name: "Tatswap",
      image: Tatswap
    },
    {
      name: "Haggle",
      image: Haggle
    }
    // {
    //   name: "Pinkswap",
    //   image: Pinkswap
    // }
  ]
};
