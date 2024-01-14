import styles from './Description.module.sass'
import Image from 'next/image'


export const Description = () => {
    return (
        <section className={ styles.Description }>
            <Image 
                src="/images/description.jpeg" 
                alt="Products marketplace" 
                width={ 500 } 
                height={ 300 }
            />
            
            <div className={ styles.Description__text }>
                <h2>Desription</h2>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, ducimus. Sed voluptas esse tempore accusantium nam rerum provident deserunt quidem, labore corrupti, nihil quae illo, placeat perferendis saepe quas dicta?</p>
            </div>
        </section>
    )
}