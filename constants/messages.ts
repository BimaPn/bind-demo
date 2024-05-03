import { authUser } from "./user";

export const chatList = [
  {
    user: {
      name: "Bima PN",
      username: "bimapn",
      profile_picture: '/people/bima_pn.jpg',
      isVerified: true
    },
    message: "Nooo bro.",
    created_at: "2024-05-03T11:10:00",
    isRead: false 
  },
  {
    user: {
      name: "Cristiano Ronaldo",
      username: "cristiano",
      profile_picture: '/people/cristiano_ronaldo.jpg',
      isVerified: true
    },
    message: "Will you back to real madrid ?",
    created_at: "2024-05-03T10:30:00",
    isRead: true
  },
  {
    user: {
      name: "Olivia Camila",
      username: "oliviacamila",
      profile_picture : '/people/person4.jpg',
      isVerified: false 
    },
    message: "Ok, I'll be there",
    created_at: "2024-04-23T11:10:00",
    isRead: true
  },
]
export const messages = [
  {
    sender: authUser.username,
    receiver: "cristiano",
    message: "Hola !",
    created_at: "2024-05-03T10:24:00",
  },
  {
    sender: authUser.username,
    receiver: "cristiano",
    message: "Will you back to real madrid ?",
    created_at: "2024-05-03T10:30:00",
  },
  {
    sender: authUser.username,
    receiver: "bimapn",
    message: "Hi admin !",
    created_at: "2024-05-01T04:01:00",
  },
  {
    sender: 'bimapn',
    receiver: authUser.username,
    message: 'Watsupp',
    created_at: "2024-05-01T13:06:00",
  },
  {
    sender: authUser.username,
    receiver: "bimapn",
    message: 'Can u send me money ?',
    created_at: "2024-05-01T18:14:00",
  },
  {
    sender: 'bimapn',
    receiver: authUser.username,
    message: 'Nooo bro.',
    created_at: "2024-05-03T11:10:00",
  },
  {
    sender: authUser.username,
    receiver: "oliviacamila",
    message: 'Hi',
    created_at: "2024-04-23T09:22:00",
  },
  {
    sender: "oliviacamila",
    receiver: authUser.username,
    message: 'Hi',
    created_at: "2024-04-23T09:29:00",
  },
  {
    sender: authUser.username,
    receiver: "oliviacamila",
    message: 'Are you free tonight ?',
    created_at: "2024-04-23T09:30:00",
  },
  {
    sender: "oliviacamila",
    receiver: authUser.username,
    message: "I'm free tonight, what's up ?",
    created_at: "2024-04-23T10:01:00",
  },
  {
    sender: authUser.username,
    receiver: "oliviacamila",
    message: 'I have a party, do you wanna come ?',
    created_at: "2024-04-23T10:05:00",
  },
  {
    sender: "oliviacamila",
    receiver: authUser.username,
    message: 'Yeah sure',
    created_at: "2024-04-23T10:06:00",
  },
  {
    sender: authUser.username,
    receiver: "oliviacamila",
    message: "That's great, come to my house at 9",
    created_at: "2024-04-23T10:06:00",
  },
  {
    sender: "oliviacamila",
    receiver: authUser.username,
    message: "Ok, I'll be there",
    created_at: "2024-04-23T11:10:00",
  },
]


