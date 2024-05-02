import { PostProps } from "@/types/post"

export const initialPosts: PostProps[] = [
    {
      id : '2',
      user : {
          name : "Cristiano Ronaldo",
          username : 'cristiano',
          profile_picture  : "/people/cristiano_ronaldo.jpg",
          isVerified : true
      },
      caption : `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Rerum error ullam vero, deserunt in cumque.`,
      media : ["/cristiano_post.jpg"],
      likedTotal : 443,
      commentTotal : 0,
      created_at : "A day ago",
      isLiked : true,
      isSaved : true,
    },
    {
      id : '3',
      user : {
          name : "Cristiano Ronaldo",
          username : 'cristiano',
          profile_picture  : "/people/cristiano_ronaldo.jpg",
          isVerified : true
      },
      caption : `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Rerum error ullam vero, deserunt in cumque.`,
      media : ["/cristiano_post.jpg"],
      likedTotal : 443,
      commentTotal : 0,
      created_at : "A day ago",
      isLiked : true,
      isSaved : true,
    },
    {
      id : '4',
      user : {
          name : "Cristiano Ronaldo",
          username : 'cristiano',
          profile_picture  : "/people/cristiano_ronaldo.jpg",
          isVerified : true
      },
      caption : `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Rerum error ullam vero, deserunt in cumque.`,
      media : ["/cristiano_post.jpg"],
      likedTotal : 443,
      commentTotal : 0,
      created_at : "A day ago",
      isLiked : true,
      isSaved : true,
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
