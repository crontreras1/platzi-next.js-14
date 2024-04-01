import { Chat } from "app/components/chat/Chat"
import { getProducts } from "app/services/shopify/products"
import { createAgent } from "app/utils/openai/createAgent"

export default async function chatPage () {
    const products = await getProducts()
    const productTitle = products.map((item: any) => item.title )
    const flatProductTitle = productTitle.join('\n')
    const agent = createAgent(flatProductTitle)

    return (
        <>
            <h1>Chatbot</h1>
            
            <Chat agent={ agent }/>
        </>
    )
}