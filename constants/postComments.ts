import { PostCommentProps } from "@/types/post";

export const comments: PostCommentProps[] = [
    {
      id: "1",
      postId: "2",
      user : {
          name : "Cristiano Ronaldo",
          username: "cristiano",
          profile_picture : "/people/cristiano_ronaldo.jpg",
          isVerified : true
      },
      comment : "Anjay mabar ,By one yuk 👌👀",
      isLiked: false,
      created_at : "5h"
    },
    {
      id: "2",
      postId: "998",
      user : {
          name : 'Bima PN',
          username : 'bimapn',
          profile_picture : '/people/bima_pn.jpg',
          isVerified : true
      },
      comment : "I want to go there 👀",
      isLiked: false,
      created_at : "1h"
    },
    {
      id: "3",
      postId: "998",
      user : {
          name : "Olivia Camila",
          username : "oliviacamila",
          profile_picture : '/people/person4.jpg',
          isVerified : false 
      },
      comment : "Very beautiful 😍",
      isLiked: false,
      created_at : "30m"
    },

]

