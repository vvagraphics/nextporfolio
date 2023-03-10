import './globals.css'
import ChangeColorButton  from './ChangeColorButton/page'
import Providers from './Providers'


export const metadata = {
  title: 'SGMUSIC',
  description: 'SGMUSIC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>

        <div className=''>
        <h1 className='text-3xl font-bold text-red-900 leading-tight'>Create Next App</h1></div>
        <ChangeColorButton/>
        {children}</body>
    </html>
  )
}
