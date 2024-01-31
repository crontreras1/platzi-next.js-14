import { MainProducts } from 'app/components/home/MainProducts'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Products</h1>
      
      <MainProducts />
    </main>
  )
}
