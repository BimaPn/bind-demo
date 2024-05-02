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
]

