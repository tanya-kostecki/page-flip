import { TOTAL_PAGES} from "../constants/pages";
import type { RefObject} from "react";
import type {BookRef} from "../types/types";

interface NavigationProps {
    currentPage: number
    ref: RefObject<BookRef | null>;
}

export const Navigation = ({ ref, currentPage}: NavigationProps) => {
    const goNext = () => ref.current?.pageFlip()?.flipNext();
    const goPrev = () => ref.current?.pageFlip()?.flipPrev();

    return (
    <div className="flex items-center gap-6 mt-6">
        <button
            onClick={goPrev}
            disabled={currentPage === 0}
            className="px-5 py-2 bg-amber-900/60 hover:bg-amber-800/70 text-amber-100 font-serif rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
            ← Prev
        </button>
        <button
            onClick={goNext}
            disabled={currentPage >= TOTAL_PAGES - 1}
            className="px-5 py-2 bg-amber-900/60 hover:bg-amber-800/70 text-amber-100 font-serif rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
            Next →
        </button>
    </div>
    )
}