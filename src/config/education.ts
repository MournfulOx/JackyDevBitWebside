
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: "Taylor's University",
      major: 'Bachelor Of Computer Science',
      logo: 'college',
      start: '2024',
      end: 'prensent'
    },
    {
      school: "University of the West of England",
      major: 'Bachelor Of Computer Science(Dual Degree)',
      logo: 'college',
      start: '2024',
      end: 'prensent'
    },
  ]