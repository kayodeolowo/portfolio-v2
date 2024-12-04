import Hero from "./pages/Hero";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header/>
     <Hero/>
    </div>
  );
}
