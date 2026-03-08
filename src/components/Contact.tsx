import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="mailto:rr6785481@gmail.com"
              className="bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-700 hover:border-blue-500 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={28} />
                </div>
                <h3 className="text-xl font-bold">Email</h3>
              </div>
              <p className="text-slate-300 group-hover:text-blue-300 transition-colors duration-300">
                rr6785481@gmail.com
              </p>
            </a>

            <a
              href="tel:+918951272028"
              className="bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-700 hover:border-green-500 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone size={28} />
                </div>
                <h3 className="text-xl font-bold">Phone</h3>
              </div>
              <p className="text-slate-300 group-hover:text-green-300 transition-colors duration-300">
                +91-8951272028
              </p>
            </a>

            <a
              href="https://linkedin.com/in/Rakesh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-700 hover:border-cyan-500 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Linkedin size={28} />
                </div>
                <h3 className="text-xl font-bold">LinkedIn</h3>
              </div>
              <p className="text-slate-300 group-hover:text-cyan-300 transition-colors duration-300">
                linkedin.com/in/Rakesh
              </p>
            </a>

            <div className="bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-orange-600 flex items-center justify-center">
                  <MapPin size={28} />
                </div>
                <h3 className="text-xl font-bold">Location</h3>
              </div>
              <p className="text-slate-300">
                Raichur, Karnataka, India
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 text-lg">
              Open to opportunities in software development and data-related fields
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
