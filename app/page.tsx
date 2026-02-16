import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">Birdhouse</div>
              <div className="text-sm text-white/60">Market</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#coffee" className="text-white/80 hover:text-white transition-colors">Coffee</a>
              <a href="#tea" className="text-white/80 hover:text-white transition-colors">Tea</a>
              <a href="#art" className="text-white/80 hover:text-white transition-colors">Art</a>
              <a href="#visit" className="text-white/80 hover:text-white transition-colors">Visit</a>
              <a href="#wholesale" className="text-white/80 hover:text-white transition-colors">Wholesale</a>
            </div>
            <a href="#order" className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-all">
              Order Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2787"
            alt="Coffee brewing"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl">
          <div className="mb-6 inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
            ✨ Clean fuel for frequent flyers
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight">
            Coffee with<br />
            <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent">
              Conscience
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Direct trade specialty coffee roasted in Serenbe. Ethically sourced, traditionally farmed,
            supporting biodiversity and empowering growers at every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#order" className="bg-white text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-white/90 transition-all transform hover:scale-105 shadow-2xl">
              Order Coffee
            </a>
            <a href="#visit" className="bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all border border-white/20">
              Visit Serenbe
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <span>1,000+ happy customers</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/20"></div>
            <div className="hidden md:block">Direct Trade Certified</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-black to-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            From Source to Cup
          </h2>
          <p className="text-xl text-white/60 leading-relaxed mb-16">
            We believe great coffee begins at the source. Every bean we roast comes from direct trade
            relationships built on trust, transparency, and fair compensation. Traditional farming
            methods that protect biodiversity. Growers empowered to thrive.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌍</div>
              <h3 className="text-xl font-bold mb-3">Direct Trade</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We work directly with farmers, ensuring fair prices and sustainable practices.
                Every cup supports real people and real communities.
              </p>
            </div>
            <div className="group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔬</div>
              <h3 className="text-xl font-bold mb-3">Micro-Roasted</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Small-batch roasting ensures peak flavor and freshness. Each batch is carefully
                crafted to highlight the unique characteristics of every origin.
              </p>
            </div>
            <div className="group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">♻️</div>
              <h3 className="text-xl font-bold mb-3">Regenerative</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Traditional farming methods that protect biodiversity and regenerate soil health.
                Coffee that's good for the planet and tastes exceptional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Offerings */}
      <section id="coffee" className="py-32 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold mb-6">
              ☕ Fresh Roasted Weekly
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Current Offerings
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Our rotating selection of single-origin coffees and signature blends
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ethiopia Yirgacheffe",
                notes: "Floral, Bergamot, Stone Fruit",
                process: "Washed",
                roast: "Light-Medium"
              },
              {
                name: "Colombia Huila",
                notes: "Chocolate, Caramel, Citrus",
                process: "Natural",
                roast: "Medium"
              },
              {
                name: "House Blend",
                notes: "Balanced, Sweet, Nutty",
                process: "Blended",
                roast: "Medium-Dark"
              }
            ].map((coffee, i) => (
              <div key={i} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-amber-500/50 transition-all hover:bg-white/10">
                <div className="aspect-square bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-6xl opacity-50">☕</div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{coffee.name}</h3>
                <p className="text-white/60 mb-4 text-sm">{coffee.notes}</p>
                <div className="flex gap-2 mb-6">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs">{coffee.process}</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs">{coffee.roast}</span>
                </div>
                <button className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-white/90 transition-all">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tea & Art Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-neutral-950 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Tea */}
            <div id="tea" className="text-center md:text-left">
              <div className="text-5xl mb-6">🍃</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Curated Tea Selection
              </h2>
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                Partnered with Herbs & Kettles to bring you a diverse program of herbal infusions
                and black tea varieties, each crafted with the same care and attention we bring to our coffee.
              </p>
              <a href="#visit" className="inline-block text-amber-400 hover:text-amber-300 font-semibold">
                Explore Tea Menu →
              </a>
            </div>

            {/* Art */}
            <div id="art" className="text-center md:text-left">
              <div className="text-5xl mb-6">🎨</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Rotating Art Gallery
              </h2>
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                More than just a café—we're a gathering space featuring ever-changing exhibitions
                from local Atlanta artists. Coffee for the body, art for the soul.
              </p>
              <a href="#visit" className="inline-block text-amber-400 hover:text-amber-300 font-semibold">
                Current Exhibition →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Join the Flock
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Get 15% off your first order plus exclusive access to new roasts and brewing tips
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 rounded-full bg-black/10 backdrop-blur-sm border border-black/20 text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <button
              type="submit"
              className="bg-black text-white font-bold px-10 py-4 rounded-full hover:bg-black/90 transition-all whitespace-nowrap"
            >
              Get 15% Off
            </button>
          </form>
          <p className="text-black/60 text-sm mt-4">
            🔒 Unsubscribe anytime. We respect your inbox.
          </p>
        </div>
      </section>

      {/* Visit Section */}
      <section id="visit" className="py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Visit Us in Serenbe
            </h2>
            <p className="text-xl text-white/60">
              Located in Georgia's wellness community, 30 minutes south of Atlanta
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Location Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
              <h3 className="text-3xl font-bold mb-8">Hours & Location</h3>

              <div className="space-y-6 mb-10">
                <div>
                  <div className="text-white/60 text-sm mb-2">ADDRESS</div>
                  <div className="text-lg">
                    10625 Serenbe Lane, Unit A<br />
                    Chattahoochee Hills, GA 30268
                  </div>
                </div>

                <div>
                  <div className="text-white/60 text-sm mb-2">HOURS</div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-white/60">7:30 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span className="text-white/60">8:00 AM - 2:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a href="tel:470-756-5894" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  470-756-5894
                </a>
                <a href="mailto:source@birdhousemarket.info" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  source@birdhousemarket.info
                </a>
                <a href="https://instagram.com/birdhouse.market" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @birdhouse.market
                </a>
              </div>
            </div>

            {/* Wholesale */}
            <div id="wholesale" className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-2xl p-10 border border-amber-500/20">
              <h3 className="text-3xl font-bold mb-6">Wholesale Partnerships</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Partner with Birdhouse for your café, restaurant, or business. We provide premium
                quality coffee, ethical sourcing transparency, and dedicated support for wholesale partners.
              </p>

              <div className="space-y-3 mb-8 text-sm">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Competitive wholesale pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Flexible delivery schedules</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom roasting profiles</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Training and support</span>
                </div>
              </div>

              <a href="mailto:source@birdhousemarket.info?subject=Wholesale%20Inquiry" className="block w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 rounded-full text-center transition-all">
                Request Wholesale Info
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              What People Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "The best coffee in Atlanta. Period. Love knowing my purchase supports farmers directly.",
                author: "Sarah M.",
                role: "Coffee Enthusiast"
              },
              {
                text: "We switched to Birdhouse for our restaurant's wholesale needs. The quality is consistently exceptional.",
                author: "James T.",
                role: "Restaurant Owner"
              },
              {
                text: "Finally, a coffee brand that aligns with my values. Full transparency at every step.",
                author: "Emma R.",
                role: "Sustainability Advocate"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-white/50 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">Birdhouse Market</div>
              <p className="text-white/60 text-sm mb-6">
                Direct trade specialty coffee roasted in Serenbe, Georgia.
                Ethical sourcing, traditional farming, exceptional taste.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/birdhouse.market" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <div className="font-bold mb-4">Quick Links</div>
              <div className="space-y-2 text-sm">
                <a href="#coffee" className="block text-white/60 hover:text-white transition-colors">Coffee</a>
                <a href="#tea" className="block text-white/60 hover:text-white transition-colors">Tea Selection</a>
                <a href="#art" className="block text-white/60 hover:text-white transition-colors">Art Gallery</a>
                <a href="#wholesale" className="block text-white/60 hover:text-white transition-colors">Wholesale</a>
              </div>
            </div>

            <div>
              <div className="font-bold mb-4">Contact</div>
              <div className="space-y-2 text-sm text-white/60">
                <div>10625 Serenbe Lane, Unit A</div>
                <div>Chattahoochee Hills, GA 30268</div>
                <a href="tel:470-756-5894" className="block hover:text-white transition-colors">470-756-5894</a>
                <a href="mailto:source@birdhousemarket.info" className="block hover:text-white transition-colors">source@birdhousemarket.info</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <div>© 2026 Birdhouse Market. All rights reserved.</div>
            <div>Built with ❤️ for people and planet</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
