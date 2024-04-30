
const EmojiIcon = ({width = 20,className}:{width?:number,active?:boolean,className?:string}) => {
    return (
    <svg width={width} className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M79.7335 0C35.5421 0 0 35.8086 0 80C0 124.191 35.8086 160 80 160C124.191 160 160 124.191 160 80C160 35.8086 123.925 0 79.7335 0ZM38.2071 56.1841C38.2071 47.8982 44.9182 41.1629 53.2283 41.1629C61.5142 41.1629 68.2495 47.874 68.2495 56.1841C68.2495 64.47 61.5385 71.2053 53.2283 71.2053C44.9425 71.1811 38.2071 64.47 38.2071 56.1841ZM80.4603 131.605C59.7941 131.605 42.98 114.791 42.98 94.1248C42.98 90.7813 45.6935 88.0678 49.0369 88.0678H111.908C115.251 88.0678 117.965 90.7813 117.965 94.1248C117.941 114.791 101.127 131.605 80.4603 131.605ZM106.675 71.1811C98.3888 71.1811 91.6535 64.47 91.6535 56.1599C91.6535 47.874 98.3646 41.1387 106.675 41.1387C114.961 41.1387 121.696 47.8498 121.696 56.1599C121.672 64.47 114.961 71.1811 106.675 71.1811Z" className="fill-dark dark:fill-light"/>
    </svg>
    )
  }
  
  export default EmojiIcon