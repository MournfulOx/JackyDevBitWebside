import { University } from "lucide-react"

// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const careerList: Array<CareerItemType> = [
    {
      company: "Freelance",
      title: 'An Indie Developer',
      logo: 'bank',
      start: '2024',
      end: 'Present'
    },
  ]