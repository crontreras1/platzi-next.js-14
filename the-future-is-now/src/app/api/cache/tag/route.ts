import { revalidateTag } from "next/cache"
import { env } from "app/config/env"

export async function POST (req: Request) {
    const body = await req.json()
    const { tag, token } = body

    if (!tag || !token) {
        return Response.json({ error: 'tag o token NO encontrado(s)'}, { status: 400 })
    }

    if (token !== env.CACHE_TOKEN) {
        return Response.json({ error: 'Token invalido'}, { status: 401 })
    }

    revalidateTag(tag)

    return Response.json({ success: true })
}