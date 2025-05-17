"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ThreeDMarquee = ({
    images,
    className,
}: {
    images: string[];
    className?: string;
}) => {
    const chunkSize = Math.ceil(images.length / 5);
    const chunks = Array.from({ length: 4 }, (_, colIndex) => {
        const start = colIndex * chunkSize;
        return images.slice(start, start + chunkSize);
    });

    return (
        <div
            className={cn(
                "mx-auto block max-h-[100vh] overflow-hidden rounded-2xl",
                className
            )}
            style={{ backgroundColor: "#2b2d31" }}
        >
            <div className="flex w-full items-center justify-center">
                <div className="w-full max-w-7xl px-4 sm:px-8">
                    <div
                        style={{
                            transform: "rotateX(50deg) rotateY(0deg) rotateZ(-45deg) scale(1.7)",
                        }}
                        className="relative top-0 right-[40%] grid size-full origin-top grid-cols-5 gap-8 transform-3d"
                    >
                        {chunks.map((subarray, colIndex) => (
                            <motion.div
                                animate={{ y: colIndex % 2 === 0 ? 60 : -60 }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: colIndex % 2 === 0 ? 20 : 25,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                }}
                                key={colIndex + "marquee"}
                                className="flex flex-col items-start gap-8"
                            >
                                <GridLineVertical className="-left-4" offset="80px" />
                                {subarray.map((image, imageIndex) => (
                                    <div className="relative" key={imageIndex + image}>
                                        <GridLineHorizontal className="-top-4" offset="20px" />
                                        <motion.img
                                            
                                            whileHover={{ y: -10 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            src={image}
                                            alt={`Image ${imageIndex + 1}`}
                                            className="w-full max-w-[300px] aspect-[600/1000] rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
                                            draggable={false}
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const GridLineHorizontal = ({
    className,
    offset,
}: {
    className?: string;
    offset?: string;
}) => {
    return (
        <div
            style={
                {
                    "--background": "#ffffff",
                    "--color": "transparent",
                    "--height": "1px",
                    "--width": "5px",
                    "--fade-stop": "90%",
                    "--offset": offset || "200px",
                    "--color-dark": "transparent",
                    maskComposite: "exclude",
                } as React.CSSProperties
            }
            className={cn(
                "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
                "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
                "[background-size:var(--width)_var(--height)]",
                "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
                "[mask-composite:exclude]",
                "z-30",
                "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
                className
            )}
        ></div>
    );
};

const GridLineVertical = ({
    className,
    offset,
}: {
    className?: string;
    offset?: string;
}) => {
    return (
        <div
            style={
                {
                    "--background": "#ffffff",
                    "--color": "transparent",
                    "--height": "5px",
                    "--width": "1px",
                    "--fade-stop": "90%",
                    "--offset": offset || "150px",
                    "--color-dark": "transparent",
                    maskComposite: "exclude",
                } as React.CSSProperties
            }
            className={cn(
                "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
                "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
                "[background-size:var(--width)_var(--height)]",
                "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
                "[mask-composite:exclude]",
                "z-30",
                "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
                className
            )}
        ></div>
    );
};
