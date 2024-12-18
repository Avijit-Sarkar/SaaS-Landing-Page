import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define the props interface for the AnimatedTitle component
interface AnimatedTitleProps {
    title: string; // The title string passed as a prop
    containerClass?: string; // Optional class for the container
    className?: string; // Optional class for the root element
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
    title,
    containerClass,
    className,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null); // Ref to the container

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "100 bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse",
                },
            });

            titleAnimation.to(
                ".animated-word",
                {
                    opacity: 1,
                    transform:
                        "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
                    ease: "power2.inOut",
                    stagger: 0.02,
                },
                0
            );
        }, containerRef);

        return () => ctx.revert(); // Clean up GSAP context on unmount
    }, []);

    return (
        <div
            ref={containerRef}
            className={clsx("animated-title", containerClass, className)}
        >
            {title.split("<br />").map((line, index) => (
                <div
                    key={index}
                    className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
                >
                    {line.split(" ").map((word, idx) => (
                        <span
                            key={idx}
                            className="animated-word"
                            dangerouslySetInnerHTML={{ __html: word }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default AnimatedTitle;