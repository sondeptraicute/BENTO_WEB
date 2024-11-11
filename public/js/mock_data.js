const posts = [
  {
    id: 1,
    user: {
      name: "200lab",
      avatar: "../public/img/logo_200lab.png",
      time: "2h ago",
    },
    content: {
      text: `Full bộ source code: Simple Task Microservices từ 200Lab <a href="https://devops.showcase.200lab.io/">#200labshowcase</a>`,
      image: "../public/img/showcase.png",
    },
    interactions: {
      likes: 72,
      reposts: 22,
      comments: 33,
    },
  },
  {
    id: 2,
    user: {
      name: "200Lab",
      avatar: "../public/img/logo_200lab.png",
      time: "5h ago",
    },
    content: {
      text: `Spent the weekend diving deep into Docker 🐳. It's amazing how containerization can streamline the CI/CD process. Can't wait to use this in my next project! #Docker #DevOps #CICD`,
      image: "../public/img/typescript.png",
    },
    interactions: {
      likes: 89,
      reposts: 30,
      comments: 41,
    },
  },
  {
    id: 3,
    user: {
      name: "200Lab",
      avatar: "../public/img/logo_200lab.png",
      time: "10h ago",
    },
    content: {
      text: `I'm thrilled to announce that I'll be speaking at the upcoming JavaScript Summit! 🎤 Get ready for some exciting insights into the future of web development. #JavaScript #TechTalk`,
      image:
        "https://i.pinimg.com/originals/a4/72/10/a47210899e2f804d4f4aead44adaefe0.jpg",
    },
    interactions: {
      likes: 45,
      reposts: 15,
      comments: 25,
    },
  },
];

const conversatons = [
  {
    id: 1,
    user: {
      name: "Moyo Shiro",
      avatar:
        "https://i.pinimg.com/564x/52/46/49/524649971a55b2f3a0dae1d537c61098.jpg",
      time: "09:00 AM",
    },
    content: `Just launched my new portfolio website! 🚀 Check out these 15 standout examples of creative, sleek, and interactive portfolio designs that inspired me. Which one's your favorite? #WebDesign #PortfolioInspiration`,
    online: true,
  },
  {
    id: 2,
    user: {
      name: "Kenji Tanaka",
      avatar:
        "https://i.pinimg.com/564x/65/50/71/655071e3a405016c9a31799ee45b1316.jpg",
      time: "10:15 AM",
    },
    content: `I'm thrilled to announce that I'll be speaking at the upcoming JavaScript Summit! 🎤 Exciting insights into the future of web development await. #JavaScript #TechTalk`,
    online: false,
  },
  {
    id: 3,
    user: {
      name: "Aiko Matsui",
      avatar:
        "https://i.pinimg.com/564x/4d/9f/32/4d9f3277301e0a2c748f426ce389e844.jpg",
      time: "11:30 AM",
    },
    content: `DevOps tips for faster deployments: automate everything and monitor continuously! 🚀 Learn from my latest blog on building a CI/CD pipeline from scratch. #DevOps #Automation`,
    online: true,
  },
];
