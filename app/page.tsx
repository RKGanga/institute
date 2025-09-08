import { createClientServer } from '@/lib/supabase/serverClient'
import HomeHeroAnimated from '@/components/HomeHeroAnimated'
import CoursesStaticGrid from '@/components/CoursesStaticGrid'
import DemoClassesCarousel from '@/components/DemoClassesCarousel'

export default async function HomePage() {
  const supabase = createClientServer()
  // Fetch published demo classes
  const { data: demoClasses } = await supabase
    .from('demo_classes')
    .select('*')
    .eq('is_published', true)
    .order('created_at', { ascending: false })
  // Fetch statistics (single row)
  const { data: statsRow } = await supabase
    .from('statistics')
    .select('*')
    .single()
  const stats = statsRow || { years: 0, courses: 0, students: 0, placements: 0 }

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Global header is rendered from app/layout.tsx via <SiteHeader /> */}

      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center w-full px-0 py-24 md:py-32" style={{ background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)' }}>
        {/* animated blobs */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-indigo-500 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-1/2 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-72 md:w-96 h-72 md:h-96 bg-pink-500 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">Master SAP - Transform your career with elite training</h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">Unlock your potential with our comprehensive SAP training programs. Gain in-demand skills and achieve career success.</p>
          <div className="mt-10">
            <a href="/#courses" className="inline-flex items-center justify-center rounded-full h-12 px-8 bg-[--primary-color] text-white text-base font-bold hover:bg-indigo-500 transition-colors">Explore Courses</a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28" id="how-it-works">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
  <HomeHeroAnimated />
</div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { n: 1, title: 'Enroll in a Course', desc: 'Choose from our wide range of SAP courses designed for all skill levels.' },
              { n: 2, title: 'Attend Live Classes', desc: 'Participate in interactive live sessions with expert instructors and get hands-on experience.' },
              { n: 3, title: 'Achieve Certification', desc: 'Earn industry-recognized certifications to validate your skills and boost your career.' }
            ].map((s, i) => (
              <div key={i} className={`flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-800 border-2 border-[--primary-color] flex items-center justify-center text-[--primary-color] text-2xl font-bold">{s.n}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-gray-950" id="testimonials">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0MqoZdI4AQqhtV4XSXvQ_pjN2fCZdwpZrkDXTlsAQORHcrmR6DNnf4HT5Sg8UeAr9GeySbC4V5H0VoREiZDGpmjFDptXXAaTHMbZPFzaQZifiqoqa8iLQ7uJAl6-l05HLLTeMqCY2z6UQ3SeF59AdPugA-yCgUREDUhTxM3pMCQ4g1jbkAQddW2a1OsNIjHumU4vYGbelH0gWFPOz-80I7Lm_KDNmuhoUkvSJBXQOumTVp30kAkVMNItgp7yF0Us8wiXN5qHCNWGK',
              q: 'The SAP training at Ram Tech Solutions was exceptional. The instructors were knowledgeable and supportive, and the course content was comprehensive. I highly recommend it!',
              n: 'Alex Turner', r: 'SAP Consultant'
            },{
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmq2Tq7hfbKV8O0BvCsirTz48at9Dw5MGUr0sQmzCiHBMSsEvQxLf5nt_d-rfKBUKvuUpMAlkHEt7CiYp535rjluN1gI6j7egpxqPJKBcfALa_H3EnE-5xheN8M2nOTSEdrsXls4mSTnroDMKPPuVs6V4-4hDMUuS7d3w0G14q0A8RuJV_aCQKvc0JgMRCKN4ZODKopHQ7ySeoZj1nGBwdnqA0ds8HB5NggEI2HTd7QYMbS2zMcfoWrmxjP8hxQYiBb6MP9NZ_Pfe0',
              q: "I was able to switch my career to SAP with the help of Ram Tech Solutions. The training was practical and focused on real-world scenarios.",
              n: 'Sarah Chen', r: 'SAP Analyst'
            },{
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv1rGxY3g5J07YStaftm99FhzJltd8HygMXM5oHBGvz1ufebShdxx7GOCCq8yoQ7AERIz0g-7_cyKUi9nOhdSQkibmQ_Y-ptebBC5wvFrk-64ZteqT5tZmRu6WjSSzNiNg0Z57Rno7I1II4anrtUoSdCL_QFg4lndECanx1z4g5FB-enSrKGKRRXnXMAXlmckxT56VOxmBUVJ9wlTulKOXaxOCx5oFKrCoi4zY_xUyTqSYomQdwp4DkLn2plhSE58ehwCk1x7Ik-RQ',
              q: "The support from Ram Tech Solutions didn't end with the training. They provided excellent career guidance and helped me land my dream job.",
              n: 'David Lee', r: 'SAP Project Manager'
            }].map((t, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-2xl flex flex-col items-center text-center">
                <img alt={t.n} src={t.img} className="w-24 h-24 rounded-full mb-6 object-cover" />
                <p className="text-gray-300 mb-4">“{t.q}”</p>
                <p className="font-bold text-white">- {t.n}</p>
                <p className="text-sm text-gray-400">{t.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28" id="why-choose-us">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">We are committed to providing the best SAP training and support to help you achieve your career goals.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              { icon: 'school', title: 'Expert Instructors', desc: 'Learn from experienced SAP professionals with extensive industry knowledge.' },
              { icon: 'person_search', title: 'Personalized Learning', desc: 'Benefit from tailored learning paths and one-on-one mentorship.' },
              { icon: 'verified', title: 'Industry-Recognized Certification', desc: 'Gain certifications that are highly valued by employers.' },
              { icon: 'work', title: 'Career Support', desc: 'Receive comprehensive career guidance and placement assistance.' },
            ].map((c, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-2xl text-center hover:bg-gray-700/50 transition-all transform hover:-translate-y-2">
                <span className="material-symbols-outlined text-4xl text-[--primary-color] mb-4">{c.icon}</span>
                <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                <p className="text-gray-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo spotlight carousel */}
      <section className="py-20 sm:py-28 bg-gray-950" id="demo-classes">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Upcoming Demo Classes</h2>
          <DemoClassesCarousel items={(demoClasses ?? []) as any[]} />
        </div>
      </section>

      {/* Available Courses (static cards with Register modal) */}
      <section className="py-20 sm:py-28" id="courses">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Available Courses</h2>
          <CoursesStaticGrid embedded />
        </div>
      </section>

      {/* Request Info */}
      <section className="py-20 sm:py-28" id="request-info">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Information</h2>
          <p className="text-lg text-gray-400 mb-8">Get more details about our courses, fees, and schedules. Contact us today!</p>
          <form className="flex flex-col sm:flex-row gap-4" action={async (formData) => {
  'use server'
  const supabase = createClientServer()
  const email = formData.get('email') as string
  if (email && email.includes('@')) {
    await supabase.from('student_requests').insert({
      name: 'Website Request',
      email,
      phone: '',
      course: 'General',
      message: 'Homepage request info form',
    })
  }
}}>
            <input name="email" className="flex-grow h-14 px-6 rounded-full bg-gray-800 border-2 border-gray-700 focus:border-[--primary-color] focus:ring-0 text-white placeholder-gray-500" placeholder="Your Email" type="email" required />
            <button className="flex-shrink-0 inline-flex items-center justify-center rounded-full h-14 px-8 bg-[--primary-color] text-white text-base font-bold hover:bg-indigo-500 transition-colors" type="button">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-400">
          <nav className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
            <a className="hover:text-white transition-colors" href="/">Home</a>
            <a className="hover:text-white transition-colors" href="/#courses">Courses</a>
            <a className="hover:text-white transition-colors" href="/#demo-classes">Demo Classes</a>
            <a className="hover:text-white transition-colors" href="/trainers-register">Trainers</a>
            <a className="hover:text-white transition-colors" href="/contact">Contact</a>
          </nav>
          <div className="flex justify-center gap-6 mb-4 text-sm">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
          </div>
          <p>© {new Date().getFullYear()} Ram Tech Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
