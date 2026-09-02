'use client'

export const WhyUs = () => {
  return (
    <section className="py-16 bg-dark-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white">Dlaczego my?</h2>
        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          {['Doświadczenie', 'Jakość', 'Terminowość'].map((item) => (
            <div key={item} className="glass-effect rounded-xl p-6">
              <h3 className="text-white font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
