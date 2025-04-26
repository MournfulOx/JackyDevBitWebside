export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = 'Jacky Feng'
export const headline = 'Software Engineer, Artificial Intelligence, and Indie Game Developer'
export const introduction = 'I’m Jacky, a CS student at Taylor’s University, Malaysia. I’m into coding and crafting game worlds.'
export const email = 'furikuriox@163.com'
export const githubUsername = 'FurikuriSama'

// about page
export const aboutMeHeadline = "I’m Jacky Feng, from Chengdu, China."
export const aboutParagraphs = [
  "A second-year Computer Science student at Taylor’s University, Malaysia, and a passionate indie game developer.",
  "This blog is my digital workbench, where I log my thoughts and projects in game design, software engineering, and artificial intelligence.",
  "Beyond code, I share reflections on literature, art, film, music, and comics, believing a developer’s tools can craft warm, meaningful experiences."
]


// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = "A Developer’s Thoughts on Games, Code, and Artistry."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/furikuriri?s=21',
    external: true
  },
  {
    name: 'Facebook',
    icon: 'facebook',
    href: 'https://www.facebook.com/share/1FjTzgJQMq/?mibextid=wwXIfr'},
  {
    name: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/jacky_feng77?igsh=Y3djYWV1amwycHN2&utm_source=qr',
    external: true
  },
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://v.douyin.com/0rQPCcopYWo/',
    external: true
  },
  {
    name: 'Bilibili',
    icon: 'television',
    href: 'https://b23.tv/HM4S9Q4',
    external: true
  },
  {
    name: 'Linkedin',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/jiaqi-feng-9a1a92340/',
    external: true
  }

]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "linux",
  "intel",
  "google",
  "facebook",
  "openai",
  "nvidia",
  "huawei",
  "python",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "oracle",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "unity",
  "unrealengine",
  "apple",
  "wechat"
];