export default function SubArticle({ title, children }: { title?: string, children: React.ReactNode }) {
    return (
        <div className="flex flex-col lg:gap-2">
            <h2 className="font-heading text-lg text-[#017E3F] font-medium lg:text-2xl text-start">
                { title }
            </h2>
            <div className="font-body text-[#333333] text-justify">
                { children }
            </div>
        </div>
    );
}