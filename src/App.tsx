import HTMLFlipBook from "react-pageflip";
import { pages } from "./constants/pages";
import { Page } from "./components/Page";
import { useState, useRef } from "react";
import { TOTAL_PAGES} from "./constants/pages";
import {Navigation} from "./components/Navigation";
import type {BookRef} from "./types/types";

export function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    /*we use the minimal interface as the library does not expose the types*/
    const bookRef = useRef<BookRef | null>(null);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
            {/* Book container */}
            <div className={`relative transition-all duration-500 ${isOpen ? "scale-100" : "scale-95"}`}>
                <div
                    className="p-4 rounded-xl shadow-2xl"
                >
                    {/* Spine shadow — visible when open */}
                    {isOpen && (
                        <div
                            className="absolute pointer-events-none z-10"
                            style={{
                                left: "50%",
                                top: "1rem",
                                bottom: "1rem",
                                width: "28px",
                                transform: "translateX(-50%)",
                                background: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.1) 65%, rgba(0,0,0,0.5) 100%)",
                            }}
                        />
                    )}

                    <div className="relative">
                    <HTMLFlipBook
                        ref={bookRef}
                        width={400}
                        height={550}
                        size="fixed"
                        minWidth={300}
                        maxWidth={800}
                        minHeight={420}
                        maxHeight={600}
                        style={{}}
                        usePortrait={false}
                        showCover={true}
                        maxShadowOpacity={0.6}
                        mobileScrollSupport={true}
                        className="shadow-2xl"
                        startPage={0}
                        drawShadow={true}
                        flippingTime={800}
                        startZIndex={0}
                        autoSize={false}
                        clickEventForward={true}
                        useMouseEvents={true}
                        swipeDistance={30}
                        showPageCorners={true}
                        disableFlipByClick={false}
                        onFlip={(e) => {
                            const page = e.data;
                            setCurrentPage(page);
                            setIsOpen(page > 0 && page < TOTAL_PAGES - 1);
                        }}
                    >
                        <div
                            data-density="hard"
                            className="relative flex flex-col items-center justify-center h-full rounded-r-xl overflow-hidden bg-[#6b3a2a]"
                        >
                            <div className="absolute left-0 top-0 h-full w-5 bg-gradient-to-r from-[#2e1209] via-[#4a1e0e] to-[#6b3a2a]" />
                            <div className="px-10 py-16 rounded mx-8">
                                <h2 className="text-3xl font-serif font-bold text-amber-100/90 text-center mb-4">
                                    Lorem Ipsum
                                </h2>
                                <div className="w-16 h-px bg-amber-400/40 mx-auto mb-4" />
                                <p className="text-amber-300/60 font-serif text-center text-sm">
                                    A Collection of Pages
                                </p>
                            </div>
                        </div>

                        {pages.map((page, i) => (
                            <Page
                                key={i}
                                number={i + 1}
                                title={page.title}
                                content={page.content}
                            />
                        ))}

                        <div
                            data-density="hard"
                            className="relative flex items-center justify-center h-full rounded-l-xl bg-[#6b3a2a]"
                        >
                            <div className="absolute right-0 top-0 h-full w-5 bg-gradient-to-l from-[#2e1209] via-[#4a1e0e] to-[#6b3a2a]" />
                        </div>
                    </HTMLFlipBook>
                    </div>
                </div>
            </div>

            <Navigation currentPage={currentPage} ref={bookRef} />
        </div>
    );
}

