export default function SubArticle({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="flex flex-col">
            <h2 className="font-heading text-lg text-[#017E3F] font-medium lg:text-2xl">
                { title }
            </h2>
            <div className="font-body text-[#333333] text-justify">
                { children }
            </div>
        </div>
    );
}