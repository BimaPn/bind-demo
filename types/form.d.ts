export type InputImagesProps = {
    value : string[]
    onChange:(files:string[]) => void
    children : React.ReactNode,
    className?:string,
}
export type ImagesInputContextProps = {
    value:string [],
    onChange:(files:string[]) => void,
    removeImage:(index:number) => void,
}
