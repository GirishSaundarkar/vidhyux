import Image from 'next/image';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Director & Cinematographer',
    image: '/photo-1507003211169-0a1dd7228f2d.jpeg',
    bio: '10+ years experience in storytelling through visuals.',
  },
  {
    name: 'Jane Smith',
    role: 'Producer',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    bio: 'Bringing projects to life with creative vision.',
  },
  {
    name: 'Mike Johnson',
    role: 'Editor',
    image: '/photo-1472099645785-5658abf4ff4e.jpeg',
    bio: 'Master of post-production magic.',
  },
];


export const metadata = {
  title: 'About Vidhyux - Professional Video Production',
  description: 'Learn about our team and passion for creating stunning videos.',
};

export default function About() {
  return (
    <main className="flex flex-col min-h-[calc(100vh-160px)] bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Vidhyux
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 opacity-90">
            We craft cinematic experiences that captivate and inspire. 
            From concept to final cut, we&apos;re your creative partners.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-4xl mb-12">
            <div className="flex flex-col items-center space-y-2 p-4 bg-white/20 rounded-xl backdrop-blur-sm">
              <span className="text-5xl font-black">📸</span>
              <span className="text-3xl font-bold">50+</span>
              <span className="text-lg">Projects</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-white/20 rounded-xl backdrop-blur-sm">
              <span className="text-5xl font-black">👥</span>
              <span className="text-3xl font-bold">100+</span>
              <span className="text-lg">Clients</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-white/20 rounded-xl backdrop-blur-sm">
              <span className="text-5xl font-black">⏳</span>
              <span className="text-3xl font-bold">5+</span>
              <span className="text-lg">Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded in 2020, Vidhyux started with a simple mission: 
                to tell stories that matter. From weddings to corporate 
                campaigns, we blend technical excellence with artistic passion.
              </p>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Today we&apos;re a team of creatives who live and breathe 
                visual storytelling. Every project is an opportunity to 
                push creative boundaries.
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
                View Our Work
              </button>
            </div>
            <div className="relative">
              <Image                src="/photo-1517486808906-6ca8b3f04846.jpeg"                alt="Vidhyux team collaborating in studio"                width={600}                height={400}                className="rounded-2xl shadow-2xl"                priority              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Meet The Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate creators who bring your vision to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 text-center">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold text-lg mb-4 text-center">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed text-center">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Let&apos;s discuss your next project
          </p>
          <a
            href="/book-us"
            className="inline-block bg-white text-blue-600 px-12 py-6 rounded-full text-xl font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-2xl"
          >
            Book Us Now
          </a>
        </div>
      </section>
    </main>
  );
}
