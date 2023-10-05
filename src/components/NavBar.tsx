import { motion } from "framer-motion";
import { Logo } from "../assets/Logo";
import { animationStart, reveal } from "../utils/animation";
import { ArrowRight } from "phosphor-react";

export function NavBar() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: animationStart }}
            >
                <motion.div
                    variants={reveal}
                    initial="hiddenVariant"
                    animate="revealedVariant"
                    transition={{
                        ease: 'easeIn',
                        type: "tween",
                        staggerChildren: 0.1,
                        duration: 0.5,
                        delayChildren: animationStart + 0.5,
                    }}
                    className="w-full flex items-center justify-around h-[80px] fixed top-0 bg-white z-100"
                >
                    <motion.div
                        variants={reveal}
                    >
                        <Logo />
                    </motion.div>
                    <div className="hidden md:flex">
                        <ul className="flex gap-5 items-center">
                            <motion.li variants={reveal} className="cursor-pointer hover:text-cyan-500 transition-colors">soluções.</motion.li>
                            <motion.li variants={reveal} className="cursor-pointer hover:text-cyan-500 transition-colors">cursos.</motion.li>
                            <motion.li variants={reveal} className="cursor-pointer hover:text-cyan-500 transition-colors">recursos.</motion.li>
                            <motion.li variants={reveal} className="cursor-pointer hover:text-cyan-500 transition-colors">sobre.</motion.li>
                        </ul>
                    </div>
                    <motion.div variants={reveal} className="flex gap-[5px] items-center cursor-pointer hover:text-cyan-500 transition-colors group">
                        <span className="mb-[3px]">entrar</span>
                        <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}