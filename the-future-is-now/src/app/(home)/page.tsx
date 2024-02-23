import { MainProducts } from 'app/components/home/MainProducts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'future world',
  description: 'wellcome to the future world, and e-commerce from the other century'
}

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  )
}
