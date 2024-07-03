import Cta from "./components/Cta";
import Hero from "./components/home/Hero";
import Programs from "./components/home/Programs";
import Content from "./components/home/Content";
import Founder from "./components/home/Founder";
import Gallery from "./components/home/Gallery";
import News from "./components/home/News";

export default function Home() {
	return (
		<>
			{/* Hero */}
			<Hero />

			{/* Programs */}
			<Programs />

			{/* Content */}
			<Content />

			{/* Founder's Message */}
			<Founder />

			{/* Gallery */}
			<Gallery />

      		{/* News */}
			<News />

			<Cta />
		</>
	);
}
