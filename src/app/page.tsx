import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Testimonial from "@/components/Testimonials/Testimonial";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import Properties from "@/components/Properties/Properties";

export default function Home() {
  return (
    <main className='min-h-screen min-w-screen w-screen h-auto'>
      <div className='w-full h-full flex flex-col justify-center items-center relative'>
        <Header />
        <Properties />
        <Testimonial />
        <About />
        <Footer />
      </div>
    </main>
  );
}
