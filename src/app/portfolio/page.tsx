import About from "@/sections/portfolioSection/About";
import Contact from "@/sections/portfolioSection/Contact";
import Features from "@/sections/portfolioSection/Features";
import Footer from "@/sections/portfolioSection/Footer";
import Hero from "@/sections/portfolioSection/Hero";
import NavBar from "@/sections/portfolioSection/NavBar";
import Story from "@/sections/portfolioSection/Story";
import CustomCursor from "@/components/portfolioComponents/CustomCursor";
import React from "react";

const page = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden bg-[#dfdff0] cursor-none">
            <CustomCursor />
            <NavBar />
            <Hero />
            <About />
            <Features />
            <Story />
            <Contact />
            <Footer />
        </main>
    );
};

export default page;
