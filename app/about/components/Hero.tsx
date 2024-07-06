export default function Hero({ title }: { title: string }) {
    return (
        <section className="relative w-full">
            <div className="text-white flex justify-center items-center bg-center h-64 bg-cover bg-hero lg:h-[440px]">
                <div className="flex flex-col gap-4">
                    <h1 className="font-heading font-bold text-3xl text-center lg:text-[48px]">
                        { title }
                    </h1>
                </div>
            </div>
        </section>
    );
}
