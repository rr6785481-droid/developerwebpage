import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-4xl font-bold shadow-2xl">
              R
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up">
            Rakesh
          </h1>

          <p className="text-2xl md:text-3xl text-blue-300 mb-8 animate-slide-up animation-delay-200">
            Full Stack Developer
          </p>

          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-400">
            Computer Science Engineering student passionate about building innovative solutions
            with modern web technologies and deep learning
          </p>

          <div className="flex flex-wrap justify-center gap-6 animate-slide-up animation-delay-600">
            <a
              href="mailto:rr6785481@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>

            <a
              href="https://linkedin.com/in/Rakesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a
              href="tel:+918951272028"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Phone size={20} />
              <span>+91-8951272028</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
