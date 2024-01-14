import styles from './Description.module.sass'
import Image from 'next/image'

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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'

export const Description = () => {
    return (
        <section className={ styles.Description }>
            <div className={ styles.Description__imageContainer }>
                <Image 
                    src="/images/description.jpeg" 
                    alt="Products marketplace" 
                    fill
                    placeholder='blur'
                    blurDataURL={ PLACEHOLDER_IMAGE }
                />
            </div>
            
            <div className={ styles.Description__text }>
                <h2>Desription</h2>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, ducimus. Sed voluptas esse tempore accusantium nam rerum provident deserunt quidem, labore corrupti, nihil quae illo, placeat perferendis saepe quas dicta?</p>
            </div>
        </section>
    )
}