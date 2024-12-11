"use client";

import { useEffect } from "react";

const CustomCursor = () => {
    useEffect(() => {
        const cursorDot = document.querySelector(".cursor-dot");
        const cursorOutline = document.querySelector(".cursor-outline");

        let mouseX = 0;
        let mouseY = 0;
        let lastX = 0;
        let lastY = 0;
        let isHovered = false;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const updateCursor = () => {
            // Smooth the cursor movement
            lastX += (mouseX - lastX) * 0.1; // Adjust the multiplier for smoother movement
            lastY += (mouseY - lastY) * 0.1;

            if (cursorDot && cursorOutline) {
                cursorDot.style.transform = `translate(-50%, -50%) translate(${lastX}px, ${lastY}px)`;
                cursorOutline.style.transform = `translate(-50%, -50%) translate(${lastX}px, ${lastY}px)`;
            }

            requestAnimationFrame(updateCursor);
        };

        const onMouseEnter = () => {
            isHovered = true;
            if (cursorDot && cursorOutline) {
                cursorDot.style.width = "12px";
                cursorDot.style.height = "12px";
                cursorOutline.style.width = "30px";
                cursorOutline.style.height = "30px";
            }
        };

        const onMouseLeave = () => {
            isHovered = false;
            if (cursorDot && cursorOutline) {
                cursorDot.style.width = "8px";
                cursorDot.style.height = "8px";
                cursorOutline.style.width = "20px";
                cursorOutline.style.height = "20px";
            }
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);

        updateCursor(); // Start the animation loop

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    return (
        <>
            <div className="cursor-dot"></div>
            <div className="cursor-outline"></div>
        </>
    );
};

export default CustomCursor;
