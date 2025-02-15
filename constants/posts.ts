import { PostProps } from "@/types/post"
import { authUser } from "./user"

export const initialPosts: PostProps[] = [
    {
      id : '2',
      user : {
          name : "Cristiano Ronaldo",
          username : 'cristiano',
          profile_picture  : "/people/cristiano_ronaldo.jpg",
          isVerified : true
      },
      caption : `Prepare for the next game.`,
      media : ["/cristiano_post.jpg"],
      likedTotal : 540000,
      commentTotal : 0,
      created_at : "A day ago",
      isLiked : true,
      isSaved : false,
    },
    {
      id : '4',
      user : {
          name : 'Mike Tyson',
          username : 'mike_tyson',
          profile_picture : '/people/tyson.jpg',
          isVerified : true
      },
      caption : `"We've come a long way since the bite fight"`,
      media : ["/post/tyson_post.jpg"],
      likedTotal : 45000,
      commentTotal : 0,
      created_at : "A day ago",
      isLiked : false,
      isSaved : false,
    },
    {
      id : '3',
      user : {
          name : "Richard Dawkins",
          username : 'richard_dawkins',
          profile_picture : '/people/dawkins.jpg',
          isVerified : true
      },
      caption : `A Practical Demonstration of the time scale of life itself compared to the time scale of recorded history.`,
      media : ["/videos/dawkins_post.mp4"],
      likedTotal : 14000,
      commentTotal : 0,
      created_at : "A day ago",
      isLiked : false,
      isSaved : false,
    },
    {
      id : '5',
      user : {
          name : 'Marshall Mathers',
          username : 'eminem',
          profile_picture : '/people/eminem.jpg',
          isVerified : true
      },
      caption : `Everybody is a doctor on DRE DAY. 💉`,
      media : ["/post/eminem_post.jpg"],
      likedTotal : 212000,
      commentTotal : 0,
      created_at : "A day ago",
      isLiked : false,
      isSaved : false,
    },
    {
      id : '11',
      user : {
        name : 'Caroline Konstnar',
        username : 'caroline_konstnar',
        profile_picture : '/people/caroline.webp',
        isVerified : true
      },
      caption : `A tutorial.`,
      media : ["/videos/caroline_post.mp4"],
      likedTotal : 7600,
      commentTotal : 0,
      created_at : "A day ago",
      isLiked : false,
      isSaved : false,
    },
    {
      id : '998',
      user : {
          name : authUser.name,
          username : authUser.username,
          profile_picture : authUser.profile_picture,
          isVerified : false 
      },
      caption : `👀📸`,
      media : ["/post/auth_post.jpg"],
      likedTotal : 4300,
      commentTotal : 2,
      created_at : "A day ago",
      isLiked : true,
      isSaved : false,
    },

]

    // {
    //     id : '1',
    //     user : {
    //         name : "Lolita Angelina",
    //         username : 'lolitaangel',
    //         image : "/people/person4.jpg",
    //         verified : false
    //     },
    //     caption : `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    //                Rerum error ullam vero, deserunt in cumque, quasi magnam eius eligendi nam 
    //                temporibus possimus est delectus explicabo?`,
    //     image : "/people/person4.jpg",
    //     likeCount : 434,
    //     commentCount : 5,
    //     created_at : "An hour ago",
    //     comments : [{
    //         user : {
    //           name : `babanv`,
    //           image : `/person.jpg`,
    //           verified : false
    //         },
    //         comment : `comment`,
    //         created_at : '1m ago'
    //       }],
    //     isLiked : false,
    //     isSaved : false,
    // },
