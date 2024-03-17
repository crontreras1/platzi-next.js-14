'use client'

import { useEffect } from "react"

interface ErrorProps {
    error: Error
    reset: () => void
}

export default function Error ({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div style={{
            padding: '10rem'
        }}>
            <h1>😒 Ha ocurrido un error </h1>

            <p>Ha ocurrido un error</p>
    
            <button onClick={ reset }>Intenar de nuevo</button>
        </div>
    )
}