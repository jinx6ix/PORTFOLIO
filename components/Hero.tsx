"use client"

import Image from "next/image"
import profilepic from "@/assets/profilepic.png"
import obj from "@/assets/obj1.png"
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { useEffect } from "react"
import { FiArrowRight } from "react-icons/fi"

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

    // Function to handle CV download
    const handleDownloadCV = () => {
        // Create a temporary anchor element
        const link = document.createElement('a')
        // Assuming your CV is in the public folder named 'Ian_Iraya_CV.pdf'
        link.href = '/Ian_Iraya_CV.pdf'
        // This makes the download attribute with the desired filename
        link.download = 'Ian_Iraya_CV.pdf'
        // Append to body (required for Firefox)
        document.body.appendChild(link)
        // Trigger the click
        link.click()
        // Clean up
        document.body.removeChild(link)
    }

    return (
        <motion.section 
        style={{
            backgroundImage
        }}
        className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
        >
            <div className="z-10 flex-col items-center">
                <span className="mb-1.5  inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                    Open for work
                </span>
                <h1 className="text-white/40 text-5xl md:text-7xl font-black">Hi, I am</h1>
                <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black loading-tight text-transparent text-5xl md:text-7xl">Ian Iraya</h1>
                    <Image 
                        src={profilepic}
                        alt="profile pic"
                        width={250}
                    />

                    <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4">
                        <Image 
                            src={obj}
                            alt="object"
                            width={30}
                            className="rounded-2xl mx-auto"
                        />
                        <Image 
                            src={obj}
                            alt="object"
                            width={30}
                            className="rounded-2xl mx-auto"
                        />
                        <Image 
                            src={obj}
                            alt="object"
                            width={30}
                            className="rounded-2xl mx-auto"
                        />
                        <p className="font-medium">80+ Happy Clients</p>                   
                    </div>
                    <p className="my-6 max-w-xl text-center">Fullstack Developer based in Kenya, with over 3 years experience</p>

                    <motion.button
                        aria-label="Download Ian Iraya's CV"
                        style={{
                            border,
                            boxShadow
                        }}
                        whileHover={{
                            scale: 1.015
                        }}
                        whileTap={{
                            scale: 0.985
                        }}
                        className="flex w-fit items-center gap-2 rounded-full px-4 py-2 "
                        onClick={handleDownloadCV} // Add the click handler here
                    >
                        Download CV
                        <FiArrowRight className=""/>
                    </motion.button>
            </div>
            <div className="bg-circle-container">
                <div className="bg-circle-background"></div>
                <div className="bg-circle"></div>
            </div>
        </motion.section>
    )
}