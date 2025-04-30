import { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const updatePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updatePosition);
        return () => {
            window.removeEventListener("mousemove", updatePosition);
        };
    }, []);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    useEffect(() => {
        document.querySelectorAll("a, button").forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });
        return () => {
            document.querySelectorAll("a, button").forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 pointer-events-none z-50"
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}
        >
            <div className="relative hidden md:block">
                {/* Outer Ring */}
                <div
                    className={`w-7 h-7 border-2 border-orange-400 rounded-full transition-transform duration-300 ${isHovering ? "scale-150 opacity-75" : "scale-100 opacity-50"
                        }`}
                ></div>
                {/* Inner Dot */}
                <div
                    className="w-3 h-3 bg-orange-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                ></div>
            </div>
        </div>
    );
};

export default CustomCursor;
