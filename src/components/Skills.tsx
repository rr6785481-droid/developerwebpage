import { Code2, Database, Globe, Server } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Languages',
    skills: ['Java', 'JavaScript'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Globe,
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'React.js', 'Node.js'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MySQL', 'MongoDB'],
    color: 'from-orange-500 to-red-500'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
