'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import LoadingSpinner from './LoadingSpinner'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true),[]);

  const toggleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(resolvedTheme === "dark") {
      setTheme("light");
    }else {
      setTheme("dark");
    }
  }
  return (
  <>
    {!mounted && (
      <div className="px-2">
        <LoadingSpinner />
      </div>
    )}
    {mounted && (
      <button onClick={toggleClick} className={`w-11 bg-primary/80 dark:bg-d_netral rounded-full p-[3px]`}>
       <div className={`w-[45%] aspect-square rounded-full bg-white ${resolvedTheme === "dark" ? "translate-x-[120%]":"translate-x-0"} toggle-transition`} /> 
      </button>
    )}
  </>
  )
}

export default ThemeSwitch
