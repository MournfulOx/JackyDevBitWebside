// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro = "I've worked on a variety of projects, from simple websites to complex web applications. And many of them are open-source. Here are a few of my favorites."

export type ProjectItemType = {
    name: string
    description: string
    link: { href: string, label: string }
    date?: string
    logo?: string,
    category?: string[],
    tags?: string[],
    image?: string,
    techStack?: string[],
    gitStars?: number,
    gitForks?: number
  }
  
  // projects 
  export const projects: Array<ProjectItemType> = [
    {
      name: "Jacky's Design Studio",
      description:
        "Jacky's Design Studio's blog site",
      link: { href: 'furikura07.blogspot.com', label: 'JDS' },
      category: ['Site'],
      techStack: ['NEXT.js'],
      tags: ['Site', 'Blog'],
      logo: '/images/icon/blogger.png',
    },
    {
      name: "Code: Graduate",
      description:
        "48-Hour University Student Game Development Project",
      link: { href: 'github.com/FurikuriSama/Code_Graduate-48-Hour-Game-Development-Training-Project.git', label: 'game' },
      category: ['Game'],
      techStack: ['Unity3D', 'C#'],
      tags: ['Game', 'Unity3D'],
      logo: '/images/icon/unity.png',
    },
    

  ]
  
  export const githubProjects: Array<ProjectItemType> = [
    {
      name: 'Devtoolset',
      description: 'Open-source & database-free developer tools navigator / 开源无数据库配置的开发者工具导航站',
      link: { href: 'github.com/iAmCorey/devtoolset', label: 'Devtoolset' },
      gitStars: 203,
      gitForks: 67
    },
    {
      name: 'Awesome Indie Hacker Tools',
      description:
        '独立开发/出海开发相关技术栈及工具收录 / Find the best tools for indie hackers here',
      link: { href: 'github.com/iAmCorey/awesome-indie-hacker-tools', label: 'Awesome Indie Hacker Tools' },
      gitStars: 815,
      gitForks: 69
    },
    {
      name: 'Awesome AI Directory',
      description:
        'AI资源工具导航站收录 / Find all the best AI directories',
      link: { href: 'github.com/iAmCorey/awesome-ai-directory', label: 'Awesome AI Directory' },
      gitStars: 40,
      gitForks: 7
    }
  ]
  