import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <GraduationCap size={32} className="text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Bachelor of Engineering
                  </h3>
                  <p className="text-lg text-blue-600 font-medium mb-3">
                    Computer Science
                  </p>
                  <p className="text-slate-600 mb-2">
                    Navodaya Institute of Technology
                  </p>
                  <p className="text-slate-500 mb-4">
                    Raichur, Karnataka
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <span className="text-slate-600 font-medium">
                      2022 – Present
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-bold shadow-md">
                      CGPA: 7.97/10
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Award size={32} className="text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Full Stack Web Development
                  </h3>
                  <p className="text-lg text-green-600 font-medium mb-3">
                    Professional Certification
                  </p>
                  <p className="text-slate-600 mb-4">
                    Udemy
                  </p>
                  <div className="pt-4 border-t border-slate-200">
                    <span className="text-slate-600 font-medium">
                      Completed 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['English', 'Kannada', 'Hindi', 'Lambani'].map((language, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 rounded-lg p-4 text-center font-medium hover:bg-slate-700 transition-colors duration-200"
                >
                  {language}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
