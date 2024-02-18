import { revalidatePath } from "next/cache"
import { env } from "app/config/env"

export async function POST (req: Request) {
    const body = await req.json()
    const { path, token } = body

    if (!path || !token) {
        return Response.json({ error: 'tag o token NO encontrado(s)'}, { status: 400 })
    }

    if (token !== env.CACHE_TOKEN) {
        return Response.json({ error: 'Token invalido'}, { status: 401 })
    }

    revalidatePath(path)

    return Response.json({ success: true })
}