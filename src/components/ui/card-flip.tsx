import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardAnimation, CardDescription, CardTerm } from "./card"

export default function CardFlip({ isFlipped, setIsFlipped, term, definition }: {isFlipped: boolean; setIsFlipped: (value: boolean) => void; term: string; definition: string }) {
    const [isAnimating, setIsAnimating] = useState(false)

    
    const handleFlip = () => {
        if (!isAnimating) {
            setIsAnimating(true)
            setIsFlipped(!isFlipped)
        }
    }
    return (
        <Card>
            <CardAnimation onClick={handleFlip}>
                <motion.div
                    className="flip-card-inner w-full h-full"
                    initial={false}
                    animate={{ rotateX: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.1 }}
                    onAnimationComplete={() => setIsAnimating(false)}
                >
                    <CardTerm>
                       {term}
                    </CardTerm>
                    <CardDescription>
                        {definition}
                    </CardDescription>
                </motion.div>
            </CardAnimation>
        </Card>
    )
}