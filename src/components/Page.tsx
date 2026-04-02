import {forwardRef} from "react";

export const Page = forwardRef<HTMLDivElement, { number: number; title: string; content: string }>(
    ({ number, title, content }, ref) => {
        return (
            <div
                ref={ref}
                className="flex flex-col justify-between px-10 py-8 h-full relative overflow-hidden"
            >
                <img
                    src="/freecreativestuff-vintage-2721100_1920.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <div className="flex-1 relative z-10">
                    {title && (
                        <h2 className="text-2xl font-serif font-bold mb-6 text-center" style={{ color: "#5c3d1e" }}>
                            {title}
                        </h2>
                    )}
                    <p className="text-base leading-relaxed font-serif text-justify" style={{ color: "#4a3520" }}>
                        {content}
                    </p>
                </div>
                <div className="text-center text-sm font-serif mt-4 relative z-10" style={{ color: "#b89b6a" }}>
                    {number}
                </div>
            </div>
        );
    }
);

Page.displayName = "Page";