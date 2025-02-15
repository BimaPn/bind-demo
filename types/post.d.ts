export type PostsContextProps = {
    posts : PostProps[],
    setPosts: Dispatch<SetStateAction<PostProps[]>>
    addPost : (posts:PostProps) => void,
    deletePost : (postId:string | number) => void,
    updatePost : (post:PostProps) => void,
    updatePostLikes : (postId : string | number,isLiked : boolean) => void,
    updatePostSave : (postId : string | number,isSaved : boolean) => void
    setPostComments : (postId : string | number,comments : PostCommentProps[],commentTotal : number) => void,
} 
export type CreatePostFormProps = {
    caption : string,
    media ?: string[]
}
export type PostUpdateProps = {
    caption?: string,
    media?: string[]
}
export type NewPostProps = {
    user : {
        name : string,
        username : string,
        image : string,
        verified : boolean
    },
    caption : string,
    created_at : string
}
export type PostMediaProps = {
    path : string,
}
export type PostProps = {
    id : string | number,
    groupId?: string
    user : {
        name : string,
        username : string,
        profile_picture : string,
        isVerified : boolean
    },
    caption : string,
    media ?: string[],
    likedTotal : number,
    commentTotal : number,
    isLiked : boolean,
    isSaved : boolean,
    created_at : string
}
export type PostEditProps = {
    profile_picture : string,
    caption : string,
    media ?: PostMediaProps[]
}
export type PostCommentProps = {
    id: string
    postId : string | number,
    user : {
        name : string,
        username: string
        profile_picture : string,
        isVerified : boolean
    },
    isLiked: boolean
    comment : string,
    created_at : string
}
export type PostEditContextProps = {
    postId : string | number | null,
    setPostId: Dispatch<SetStateAction<string | number | null>>
}
