import Image from "next/image"
import { getMainProducts } from "app/services/shopify/products"
import styles from './MainProducts.module.sass'

export const MainProducts = async () => {   
    const products = await getMainProducts()

    return (
        <section className={ styles.MainProducts }>
            <h3>✨ NUevos productos lanzados!</h3>

            <div className={ styles.MainProducts__grid }>
                { 
                    products?.map((product: {
                        id: string
                        title: string
                        images: {
                            src: string
                        }[]
                    }) => {
                        const imageSrc = product.images[0].src

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
                    })
                }
            </div>
        </section>
    )
}