import { motion } from "framer-motion";
import { Compass } from "../assets/Compass";
import { animationStart, reveal } from "../utils/animation";

export function HeroText() {
    return (
        <>
            <motion.div
                layout
                initial={{ height: 0 }}
                animate={{ height: "unset" }}
                transition={{ delay: animationStart, duration: 1 }}
                className="flex flex-col items-center text-center select-none"
            >
                <motion.div
                    variants={reveal}
                    initial="hiddenVariant"
                    animate="revealedVariant"
                    transition={{ delay: animationStart + 1, duration: 0.5 }}
                    className="flex flex-col items-center text-2xl md:text-[3vw] font-bold mb-[30px] pt-[100px]"
                >
                    <span className="flex items-center gap-3">navegando <Compass /> evoluindo</span>
                    <span>construindo os melhores talentos</span>
                </motion.div>
                <motion.span
                    variants={reveal}
                    initial="hiddenVariant"
                    animate="revealedVariant"
                    transition={{ delay: animationStart + 1.2, duration: 0.5 }}
                    className="mb-[30px] w-1/2 md:w-1/3 lg:w-1/4 text-sm leading-tight"
                >
                    Ice Tech constroí profissionais de qualidade para o mercado.
                    utilizamos uma maneira de ensinar bem diferenciada. vamos navegar neste mundo da tecnologia?
                </motion.span>
            </motion.div>
        </>
    )
}