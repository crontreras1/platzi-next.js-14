'use client'

interface ErrorProps {
    error: Error
    reset: () => void
}

export default function Error ({ error, reset }: ErrorProps) {
    return (
        <div>
            <h1>😒 Ha ocurrido un error </h1>
    
            <button onClick={ reset }>Intenar de nuevo</button>
        </div>
    )
}