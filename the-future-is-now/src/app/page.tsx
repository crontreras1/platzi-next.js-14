import { Hero } from 'app/components/home/Hero'
import { Description } from 'app/components/home/Description'
import { MainProducts } from 'app/components/home/MainProducts'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainProducts />
    </main>
  )
}
