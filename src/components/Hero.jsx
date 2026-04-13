import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Hi, I'm Shraddha 👋
            </motion.h1>

            <p>Frontend Developer | React Enthusiast</p>
        </section>
    );
};

export default Hero;
