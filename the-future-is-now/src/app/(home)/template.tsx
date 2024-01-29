'use client'
import { Description } from 'app/components/home/Description'
import { Hero } from 'app/components/home/Hero'


export default function HomeLayout ({ children }: { children: React.ReactNode }) {

    console.log('HoleLayout')
    return (
        <div>
            <Hero /> 

            <Description />

            { children }
        </div>
    )
}