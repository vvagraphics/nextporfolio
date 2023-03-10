// import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import DarkModeBtn from '@/DarkModeBtn'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className="box theme-b adaptive">
     <h1>SGMUSIC</h1></div>
     <DarkModeBtn/>
   
      </div>
    </main>
  )
}
