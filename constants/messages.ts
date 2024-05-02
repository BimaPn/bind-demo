import { authUser } from "./user";

export const chatList = [
  {
    user: {
      name: "Bima PN",
      username: "bimapn",
      profile_picture: '/people/bima_pn.jpg',
      isVerified: true
    },
    message: "the fuck ?",
    created_at: "12.05 PM",
    isRead: true
  }
]
export const messages = [
  {
    username: authUser.username,
    message: "Hi admin !",
    created_at: "12.05 PM",
  },
  {
    username: 'bimapn',
    message: 'Watsupp',
    created_at: "12.05 PM",
  },
  {
    username: authUser.username,
    message: 'Damnn cool',
    created_at: "12.05 PM",
  },
  {
    username: "bimapn",
    message: 'the fuck ?',
    created_at: "12.05 PM",
  },
]
