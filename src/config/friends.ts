// friends
export const friendsHeadLine = "Jacky' friends"
export const friendsIntro = "Meet some interesting friends."


// friends
export type FriendItemType = {
  name: string
  description?: string
  link: { href: string, label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = [
  {
    name: 'Jacky Feng',
    link: { href: 'www.jackyDevBit.top' },
  },
]