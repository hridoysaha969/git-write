import {
  ENTERPRICE_CREDITS,
  ENTERPRICE_PLAN,
  PREMIUM_PLAN,
  PRO_CREDITS,
  STANDARD_PLAN,
  STARTER_CREDITS,
} from "./prices";

export const SECTIONS = [
  {
    tab_id: "license",
    title: "License",
    code: `## License
[License Title](https://your-license-url)`,
  },
  {
    tab_id: "acknowledgement",
    title: "Acknowledgements",
    code: `## Acknowledgements
- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)`,
  },
  {
    tab_id: "badges",
    title: "Badges",
    code: `## Badges
Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)`,
  },
  {
    tab_id: "greetings",
    title: "Greetings",
    code: `### Hi there 👋, I'm [Name](website)

## I'm a [Position] @[Company]
- 🔭 I’m currently working on [Project Name]
- 🌱 I’m currently learning [Technology Name]
- 👯 I’m looking to collaborate on [Project Name]
- 🤔 I’m looking for help with [Something]
- 💬 Ask me about [Something]
- ⚡ Fun fact: I love to [Hobby]`,
  },
  {
    tab_id: "socials",
    title: "Socials",
    code: `## Socials

[![Facebook](https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg)](https://www.facebook.com)  
[![Twitter](https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg)](https://www.twitter.com)  
[![Instagram](https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg)](https://www.instagram.com)  
[![LinkedIn](https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg)](https://www.linkedin.com)  
[![YouTube](https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg)](https://www.youtube.com)`,
  },
  {
    tab_id: "languages",
    title: "Language",
    code: `### Languages

![HTML](https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png)
![CSS](https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png)
![JavaScript](https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png)
![TypeScript](https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png)
![Python](https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png)
![Java](https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png)
![C#](https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/csharp/csharp.png)`,
  },
  {
    tab_id: "frameworks",
    title: "Frameworks",
    code: `## Frameworks

![React](https://skillicons.dev/icons?i=react)
![Angular](https://skillicons.dev/icons?i=angular)
![Vue](https://skillicons.dev/icons?i=vue)
![Svelte](https://skillicons.dev/icons?i=svelte)
![Next.js](https://skillicons.dev/icons?i=nextjs)
![Node.js](https://skillicons.dev/icons?i=nodejs)
![Express](https://skillicons.dev/icons?i=express)
![Spring](https://skillicons.dev/icons?i=spring)
![Django](https://skillicons.dev/icons?i=django)
![Flask](https://skillicons.dev/icons?i=flask)`,
  },
  {
    tab_id: "tools",
    title: "Tools",
    code: `## Tools

![Git](https://skillicons.dev/icons?i=git)
![GitHub](https://skillicons.dev/icons?i=github)
![GitLab](https://skillicons.dev/icons?i=gitlab)
![Docker](https://skillicons.dev/icons?i=docker)
![AWS](https://skillicons.dev/icons?i=aws)
![VS Code](https://skillicons.dev/icons?i=vscode)
![Sublime](https://skillicons.dev/icons?i=sublime)
![Postman](https://skillicons.dev/icons?i=postman)
![Discord](https://skillicons.dev/icons?i=discord)`,
  },
  {
    tab_id: "title-description",
    title: "Title & Description",
    code: `# Project Title

A brief description of what this project does and who it's for`,
  },
  {
    tab_id: "api-reference",
    title: "API Reference",
    code: `## API Reference

#### Get all items

\`\`\`http
  GET /api/items
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Required**. Your API key |`,
  },
  {
    tab_id: "links",
    title: "Links",
    code: `## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://hridoysaha.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sahahridoy/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/b2c_org_bd)`,
  },
  {
    tab_id: "installation",
    title: "Installation",
    code: `## Installation

Install my-app with npm

\`\`\`bash
  npm install my-app
  cd my-app
\`\`\``,
  },
  {
    tab_id: "contributing",
    title: "contributing",
    code: `## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.`,
  },
  {
    tab_id: "usage",
    title: "Usage",
    code: `## Usage

\`\`\`python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
\`\`\``,
  },
  {
    tab_id: "technologies",
    title: "Technologies",
    code: `## Technologies

_Name the technologies used in the project._ 
* [Spring](https://spring.io/) - Framework Used.
* [React](https://reactjs.org/) - UI Library.
* [Hibernate](https://hibernate.org/) - ORM.`,
  },
  {
    tab_id: "logo",
    title: "Logo",
    code: `## Logo

![Logo](https://gitwrite.vercel.app/link-logo.png)`,
  },
  {
    tab_id: "env_variables",
    title: "Environment Variables",
    code: `## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

\`API_KEY\`

\`ANOTHER_API_KEY\``,
  },
];

export const VERSION = ["free", "pro"];

export const PLANS = [
  // {
  //   title: "Free",
  //   price: FREE_PLAN,
  //   description: "Get started with AI-generated README files.",
  //   features: [
  //     "5 AI-generated README files",
  //     "Basic formatting",
  //     "No customization options",
  //   ],
  // },
  {
    id: "gitwrite_starter_01",
    title: "Starter",
    price: STANDARD_PLAN,
    credits: STARTER_CREDITS,
    description:
      "Ideal for personal projects and continuous professional development.",
    features: [
      "100 AI-generated README files",
      "Basic formatting",
      "Limited customization options",
    ],
  },
  {
    id: "gitwrite_pro_02",
    title: "Pro",
    price: PREMIUM_PLAN,
    credits: PRO_CREDITS,
    description: "Great for developers managing multiple repositories.",
    features: [
      "500 AI-generated README files",
      "Advanced formatting",
      "Custom sections",
      "Priority email support",
    ],
  },
  {
    id: "gitwrite_enterprise_03",
    title: "Enterprise",
    price: ENTERPRICE_PLAN,
    credits: ENTERPRICE_CREDITS,
    description: "Best for agencies and large teams.",
    features: [
      "1000 AI-generated README files",
      "Full customization",
      "Collaboration features",
      "Dedicated support",
    ],
  },
];

export const PROFILE = `# Hi there! 👋 I'm [Your Name]

🚀 Passionate Developer | 💻 Full-Stack Enthusiast | 🌍 Open-Source Contributor  

![GitHub Banner](https://source.unsplash.com/1600x400/?technology,coding)  

## 🚀 About Me  
- 🔭 I’m currently working on **[Your Latest Project](https://github.com/yourusername/yourproject)**
- 🌱 I’m learning **[Technology or Framework]**
- 👯 I’m looking to collaborate on **Open Source Projects**
- 💬 Ask me about **Web Development, JavaScript, React, Next.js**
- 📫 Reach me at **[your.email@example.com](mailto:your.email@example.com)**
- ⚡ Fun fact: **I love solving coding challenges and exploring new tech!**  

---

## 🛠️ Tech Stack  
💻 **Languages:** JavaScript, TypeScript, Python  
🛠️ **Frameworks & Libraries:** React, Next.js, Node.js, Express.js  
📦 **Databases:** MongoDB, Firebase, PostgreSQL  
🚀 **Tools & Platforms:** Git, GitHub, VS Code, Docker, Postman  
🎨 **Design:** Tailwind CSS, Figma  

---

## 📈 GitHub Stats  

[Add your github states here]

---

## 📫 Let's Connect!  
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white)](https://linkedin.com/in/yourprofile)  
[![Twitter](https://img.shields.io/badge/-Twitter-blue?style=flat&logo=Twitter&logoColor=white)](https://twitter.com/yourusername)  
[![Portfolio](https://img.shields.io/badge/-Portfolio-black?style=flat&logo=web&logoColor=white)](https://yourportfolio.com)  

---

⭐ **Feel free to check out my repositories and contribute!** 🚀
`;
export const PROJECT = `# [your-project-title] ✨

[Provide a concise summary of your project, highlighting its purpose and key features]

## Features 🧙‍♂️

- 🚀 [Add your project feature here]
- 🎨 [Add your project feature here]
- 🛡️ [Add your project feature here]

## Tech Stack 🛠️

- [Language]
- [Library]
- [Framework]
- [NPM]

## Installation Guide 🛠️

\`\`\`bash
# Install dependencies
cd your-app
npm install

# Run the application
npm start
\`\`\`

## Usage 📋

1. [Add-your-project-usage-here]
2. [Add-your-project-usage-here]
3. [Add-your-project-usage-here]

## Contributing 🙌

We welcome contributions to improve this project. Please refer to the [contributing guidelines](CONTRIBUTING.md) for details.

## License 🛡️

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.


`;
