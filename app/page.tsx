import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 to-stone-900/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070')] bg-cover bg-center"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Where Coffee Meets <span className="text-amber-300">Conscience</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-50 mb-8">
            Specialty coffee roasted in Serenbe. A place to gather, connect, and discover—featuring curated teas, rotating art, and ethically sourced single-origin coffees.
          </p>
          <a href="#order" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full text-lg">Visit Us in Serenbe</a>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="order" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-stone-900 mb-8">Visit Us</h2>
          <p className="text-xl text-stone-600 mb-4">10625 Serenbe Lane, Unit A</p>
          <p className="text-xl text-stone-600 mb-8">Chattahoochee Hills, GA 30268</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
            <div>
              <p className="font-bold text-stone-900">Monday-Friday</p>
              <p className="text-stone-600">7:30 AM - 2:00 PM</p>
            </div>
            <div>
              <p className="font-bold text-stone-900">Saturday-Sunday</p>
              <p className="text-stone-600">8:00 AM - 2:00 PM</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:470-756-5894" className="text-amber-600 hover:text-amber-700 font-semibold">470-756-5894</a>
            <a href="mailto:source@birdhousemarket.info" className="text-amber-600 hover:text-amber-700 font-semibold">source@birdhousemarket.info</a>
            <a href="https://instagram.com/birdhouse.market" target="_blank" rel="noopener" className="text-amber-600 hover:text-amber-700 font-semibold">@birdhouse.market</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Birdhouse Coffee Room</h3>
          <p className="text-stone-400 mb-2">Specialty Coffee • Art • Community</p>
          <p className="text-stone-500 text-sm">© 2026 Birdhouse Market</p>
        </div>
      </footer>
    </main>
  );
}
