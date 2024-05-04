export type GroupContextProps = {
    group ?: GroupProps,
    setGroup : Dispatch<SetStateAction<GroupProps>>,
    setName : (name : string) => void,
    setIsJoin : (condition:boolean) => void,
    isJoin : () => boolean
}
export type GroupProps = {
    id : string,
    name : string,
    group_picture : string,
    description : string,
    memberTotal : number,
    isAdmin?: boolean
    isJoin : boolean,
}
export type GroupCardProps = {
    id : string,
    name : string,
    group_picture : string,
    memberTotal : number,
    isJoin : boolean
    className ?: string
}
export type GroupErrorsProps = {
    name : array,
    description : array,
    group_picture : array,
}
export type UpdateGroupProps = {
    groupId: string,
    defaultPicture:string,
    defaultName:string,
    defaultDesc:string
}
