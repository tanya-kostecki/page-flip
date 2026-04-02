import HTMLFlipBook from "react-pageflip";
import { forwardRef } from "react";


const pages = [
    {
        title: "Chapter 1",
        content: 'https://hid.zone/content/44.jpg'
    },
    {
        title: "",
        content:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
        title: "Chapter 2",
        content:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
        title: "",
        content:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    {
        title: "Chapter 3",
        content:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    },
    {
        title: "",
        content:
            "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",
    },
    {
        title: "Chapter 4",
        content:
            "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.",
    },
    {
        title: "",
        content:
            "Est enim velit egestas dui id ornare arcu odio ut sem. Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel.",
    },
];

const Page = forwardRef<HTMLDivElement, { number: number; title: string; content: string }>(
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

export function PageFlip() {
    return (
        <div className="min-h-screen bg-stone-800 flex flex-col items-center justify-center py-12 px-4">
            <h1 className="text-4xl font-serif text-amber-100 mb-8">My Book</h1>

            <div className="mb-4 text-amber-300/70 text-sm font-serif">
                Click or drag to turn pages
            </div>

            <HTMLFlipBook
                width={400}
                height={550}
                size="stretch"
                minWidth={300}
                maxWidth={500}
                minHeight={420}
                maxHeight={600}
                showCover={true}
                maxShadowOpacity={0.5}
                mobileScrollSupport={true}
                className="shadow-2xl"
                style={{}}
                startPage={0}
                drawShadow={true}
                flippingTime={800}
                usePortrait={true}
                startZIndex={0}
                autoSize={true}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={30}
                showPageCorners={true}
                disableFlipByClick={false}
            >
                {/* Cover */}
                <div
                    className="flex flex-col items-center justify-center h-full rounded-r-md relative overflow-hidden"
                    style={{
                        backgroundColor: "#6b3a2a",
                        backgroundImage:
                            "radial-gradient(ellipse at 30% 70%, rgba(0,0,0,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(0,0,0,0.1) 0%, transparent 40%)",
                        boxShadow: "inset 0 0 60px rgba(0,0,0,0.3)",
                    }}
                >
                    <div className="border-2 border-amber-400/30 px-10 py-16 rounded" style={{ boxShadow: "0 0 20px rgba(0,0,0,0.2)" }}>
                        <h2 className="text-3xl font-serif font-bold text-amber-100/90 text-center mb-4">
                            Lorem Ipsum
                        </h2>
                        <p className="text-amber-300/60 font-serif text-center text-sm">
                            A Collection of Pages
                        </p>
                    </div>
                </div>

                {/* Inner pages */}
                {pages.map((page, i) => (
                    <Page key={i} number={i + 1} title={page.title} content={page.content} />
                ))}

                {/* Back cover */}
                <div
                    className="flex items-center justify-center h-full rounded-l-md"
                    style={{
                        backgroundColor: "#6b3a2a",
                        backgroundImage:
                            "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.1) 0%, transparent 60%)",
                        boxShadow: "inset 0 0 60px rgba(0,0,0,0.3)",
                    }}
                >
                    <p className="text-amber-300/50 font-serif text-sm">The End</p>
                </div>
            </HTMLFlipBook>
        </div>
    );
}