export default function Article({ title, children, flex=true }: { title?: string, children?: React.ReactNode, flex?: boolean }) {
    return (
        <article className="flex flex-col gap-1 lg:gap-5 lg:mx-12 max-w-full">
            <h1 className="text-2xl font-semibold font-heading text-[#00582C] lg:text-4xl lg:font-bold lg:mb-1">
                { title }
            </h1>
            <div className={`text-sm font-body text-[#333333] text-justify ${flex ? "flex" : ""} flex-col gap-1.5 lg:text-lg lg:gap-4`}>
                { children }
            </div>
        </article>
    );
}


