import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section - Emotional Connection + Clear CTA */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 to-stone-900/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070')] bg-cover bg-center"></div>

        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Where Coffee Meets <span className="text-amber-300">Conscience</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-50 mb-8 max-w-2xl mx-auto">
            Specialty coffee roasted in Serenbe. A place to gather, connect, and discover—featuring curated teas, rotating art, and ethically sourced single-origin coffees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#order" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl">
              Order Now
            </a>
            <a href="#story" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full text-lg transition-all border-2 border-white">
              Our Story
            </a>
          </div>

          {/* Social Proof - Trust Signal */}
          <div className="mt-12 text-amber-100 text-sm">
            <p className="mb-2">Trusted by 1,000+ coffee lovers in Atlanta</p>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-stone-900 mb-16">
            Coffee That Makes a Difference
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Direct Trade */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Direct Trade</h3>
              <p className="text-stone-600 leading-relaxed">
                We work directly with farmers, ensuring fair prices and sustainable practices. Every cup supports real people.
              </p>
            </div>

            {/* Curated Tea Program */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Curated Tea Selection</h3>
              <p className="text-stone-600 leading-relaxed">
                Partnered with Herbs & Kettles for a diverse program of herbal infusions and black tea varieties crafted with care.
              </p>
            </div>

            {/* Art & Community */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Art & Community</h3>
              <p className="text-stone-600 leading-relaxed">
                Ever-changing exhibitions featuring local artists. A space to gather, connect, and discover creativity alongside great coffee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet - Newsletter with Incentive */}
      <section id="newsletter" className="py-20 px-4 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get 15% Off Your First Order
          </h2>
          <p className="text-xl text-amber-50 mb-8">
            Join our community and get exclusive access to new roasts, brewing tips, and special offers.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-amber-300"
              required
            />
            <button
              type="submit"
              className="bg-stone-900 hover:bg-stone-800 text-white font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Claim Offer
            </button>
          </form>

          <p className="text-amber-100 text-sm mt-4">
            🔒 We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-stone-900 mb-16">
            What Our Community Says
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", role: "Coffee Enthusiast", text: "The best coffee in Atlanta, hands down. Love knowing my purchase supports farmers directly." },
              { name: "James T.", role: "Restaurant Owner", text: "We switched to Birdhouse for our wholesale needs. Quality is consistently exceptional." },
              { name: "Emma R.", role: "Sustainability Advocate", text: "Finally, a coffee brand that aligns with my values. Transparency at every step!" }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-stone-600 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="font-bold text-stone-900">{testimonial.name}</p>
                  <p className="text-stone-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scarcity + Urgency - Limited Roasts */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-12 text-center text-white">
            <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              LIMITED BATCH AVAILABLE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fresh Roasted This Week
            </h2>
            <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
              Our small-batch roasts sell out fast. Order now to secure your bag of ethically sourced, perfectly roasted coffee.
            </p>
            <a href="#order" className="inline-block bg-white text-amber-600 hover:bg-amber-50 font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl">
              Shop Fresh Roasts →
            </a>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-20 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-stone-900 mb-12">
            Our Story
          </h2>
          <div className="prose prose-lg mx-auto text-stone-600">
            <p className="text-xl leading-relaxed mb-6">
              Birdhouse Coffee Room is more than a café—it's a place to gather, connect, and discover in the heart of Serenbe's wellness community.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We're roasters, partners with farmers, and believers in the power of transparency. Our single-origin coffees and signature blends reflect our passion for quality and craftsmanship. Every bean we source comes from direct trade relationships built on trust, fair compensation, and shared values.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Beyond great coffee, we feature curated tea offerings from Herbs & Kettles and rotating art exhibitions from local artists. We believe coffee shops should nourish both body and spirit.
            </p>
            <p className="text-lg leading-relaxed">
              When you choose Birdhouse, you're choosing coffee that supports biodiversity, empowers communities, and delivers exceptional taste in every cup. From seed to cup, we're committed to practices that benefit both people and planet.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Locations */}
      <section id="order" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-stone-900 mb-16">
            Visit Us in Serenbe
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Online Ordering */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-stone-900 mb-6">Visit Us</h3>
              <div className="mb-6">
                <p className="font-semibold text-stone-900 mb-2">Location</p>
                <p className="text-stone-600 mb-1">10625 Serenbe Lane, Unit A</p>
                <p className="text-stone-600 mb-4">Chattahoochee Hills, GA 30268</p>

                <p className="font-semibold text-stone-900 mb-2">Hours</p>
                <p className="text-stone-600 mb-1">Monday-Friday: 7:30 AM - 2:00 PM</p>
                <p className="text-stone-600 mb-6">Saturday-Sunday: 8:00 AM - 2:00 PM</p>
              </div>
              <ul className="space-y-4 mb-8 text-stone-600">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dine-in & Takeout
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Rotating Art Exhibitions
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Community Gathering Space
                </li>
              </ul>
              <a href="https://www.birdhousecoffeeroom.com" target="_blank" rel="noopener noreferrer" className="block w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full text-center text-lg transition-all transform hover:scale-105 shadow-lg">
                Order Now
              </a>
            </div>

            {/* Contact & Wholesale */}
            <div className="bg-gradient-to-br from-stone-50 to-stone-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-stone-900 mb-6">Get In Touch</h3>
              <div className="space-y-4 mb-8 text-stone-600">
                <p className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:470-756-5894" className="hover:text-amber-600">470-756-5894</a>
                </p>
                <p className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:source@birdhousemarket.info" className="hover:text-amber-600">source@birdhousemarket.info</a>
                </p>
                <p className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <a href="https://instagram.com/birdhouse.market" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600">@birdhouse.market</a>
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-amber-200">
                <h4 className="font-bold text-stone-900 mb-2">Wholesale Inquiries</h4>
                <p className="text-stone-600 text-sm mb-4">
                  Partner with us for your café, restaurant, or business. Premium quality, ethical sourcing, and dedicated support.
                </p>
                <a href="mailto:source@birdhousemarket.info?subject=Wholesale%20Inquiry" className="text-amber-600 hover:text-amber-700 font-semibold">
                  Contact Us →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Birdhouse Coffee Room</h3>
          <p className="text-stone-400 mb-2">Specialty Coffee • Art • Community</p>
          <p className="text-stone-500 text-sm mb-8">10625 Serenbe Lane, Unit A • Chattahoochee Hills, GA 30268</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://instagram.com/birdhouse.market" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-amber-400 transition-colors">
              Instagram
            </a>
            <a href="mailto:source@birdhousemarket.info" className="text-stone-400 hover:text-amber-400 transition-colors">
              Email
            </a>
            <a href="tel:470-756-5894" className="text-stone-400 hover:text-amber-400 transition-colors">
              Call Us
            </a>
          </div>
          <p className="text-stone-500 text-sm">
            © 2026 Birdhouse Market. Built with ❤️ for people and planet.
          </p>
        </div>
      </footer>
    </main>
  );
}
