'use client'

export const SocialMedia = () => {
  return (
    <section className="py-20 bg-dark-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Znajdz nas</h2>
        <p className="text-gray-400 mb-8">Badz na biezasco z nasza muzyka</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="px-6 py-3 bg-white/5 rounded-xl text-gray-300 hover:text-purple-400 hover:bg-white/10 transition-all">Instagram</a>
          <a href="#" className="px-6 py-3 bg-white/5 rounded-xl text-gray-300 hover:text-purple-400 hover:bg-white/10 transition-all">YouTube</a>
          <a href="#" className="px-6 py-3 bg-white/5 rounded-xl text-gray-300 hover:text-purple-400 hover:bg-white/10 transition-all">Spotify</a>
          <a href="#" className="px-6 py-3 bg-white/5 rounded-xl text-gray-300 hover:text-purple-400 hover:bg-white/10 transition-all">TikTok</a>
          <a href="#" className="px-6 py-3 bg-white/5 rounded-xl text-gray-300 hover:text-purple-400 hover:bg-white/10 transition-all">Apple Music</a>
        </div>
      </div>
    </section>
  )
}