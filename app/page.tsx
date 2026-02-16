export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 to-stone-900/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085')] bg-cover bg-center"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Where Coffee Meets <span className="text-amber-300">Conscience</span>
          </h1>
          <p className="text-xl text-amber-50 mb-8">Direct trade specialty coffee roasted with transparency and integrity.</p>
          <a href="https://www.birdhousecoffeeroom.com" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full text-lg">Order Now</a>
        </div>
      </section>
    </main>
  );
}
