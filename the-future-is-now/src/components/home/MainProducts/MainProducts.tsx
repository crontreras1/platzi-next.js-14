import Image from "next/image"
import styles from './MainProducts.module.sass'
import { getProducts } from "app/services/shopify/products"

export const MainProducts = async () => {   
    const products = await getProducts()

    return (
        <section className={ styles.MainProducts }>
            <h3>✨ New products released!</h3>

            <div className={ styles.MainProducts__grid }>
                { products?.map((product: {
                    id: string
                    title: string
                    image: {
                        src: string
                    }
                }) => {
                    const imageSrc = product.image.src

                    return (
                        <article key={ product.id }>
                            <p>{ product.title }</p>
                            <Image 
                                src={ imageSrc } 
                                alt={ product.title } 
                                fill
                                loading='eager' 
                            />
                        </article>
                    )
                }) }
            </div>
        </section>
    )
}