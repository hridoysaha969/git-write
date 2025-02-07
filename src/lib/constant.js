import {
  ENTERPRICE_PLAN,
  FREE_PLAN,
  PREMIUM_PLAN,
  STANDARD_PLAN,
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
    title: "Starter",
    price: STANDARD_PLAN,
    description: "Perfect for small projects and personal use.",
    features: [
      "100 AI-generated README files",
      "Basic formatting",
      "Limited customization options",
    ],
  },
  {
    title: "Pro",
    price: PREMIUM_PLAN,
    description: "Great for developers managing multiple repositories.",
    features: [
      "500 AI-generated README files",
      "Advanced formatting",
      "Custom sections",
      "Priority email support",
    ],
  },
  {
    title: "Enterprise",
    price: ENTERPRICE_PLAN,
    description: "Best for agencies and large teams.",
    features: [
      "1000 AI-generated README files",
      "Full customization",
      "Collaboration features",
      "Dedicated support",
    ],
  },
];

const data = [
  {
    slug: "get-started",
    title: "Get Started",
    description: "This is Get Started description.",
  },
  {
    slug: "my-docs",
    title: "My Docs",
    description: "This is My Docs description.",
  },
  {
    slug: "project-overview",
    title: "Project Overview",
    description: "This is Project Overview description.",
  },
];
