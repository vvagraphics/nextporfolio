// import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import DarkModeBtn from '@/DarkModeBtn'
import HeroVideo from '@/HeroVideo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className="box theme-b adaptive">
     <HeroVideo/></div>
     <DarkModeBtn/>
   
      </div>
    </main>
  )
}
