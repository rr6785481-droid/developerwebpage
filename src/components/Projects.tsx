import { Brain, Car, ExternalLink } from 'lucide-react';

const projects = [
  {
    icon: Brain,
    title: 'Camouflaged Object Detection (COD)',
    type: 'Final Year Major Project',
    year: '2025',
    description: 'Developed a Camouflaged Object Detection system using deep learning techniques to identify objects hidden in complex backgrounds with high precision.',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'Deep Learning'],
    highlights: [
      'Leveraged deep learning-based segmentation models',
      'Accurately detects hidden objects in complex environments',
      'High precision object identification system'
    ],
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    icon: Car,
    title: 'Vehicle Record System (VRS)',
    type: 'Mini Project',
    year: '2024',
    description: 'A comprehensive vehicle management system developed in Core PHP with MySQL database for maintaining and managing vehicle records.',
    technologies: ['PHP 5.62', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'XAMPP'],
    highlights: [
      'Add and manage vehicle records',
      'Track vehicle details: number, model, type, owner',
      'Store engine and chassis numbers',
      'Complete CRUD operations'
    ],
    gradient: 'from-orange-600 to-red-500'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            Featured Projects
          </h2>

          <div className="space-y-12">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                          <Icon size={40} className="text-white" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <h3 className="text-3xl font-bold text-slate-900">
                            {project.title}
                          </h3>
                          <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">
                            {project.year}
                          </span>
                        </div>

                        <p className="text-blue-600 font-medium mb-4">
                          {project.type}
                        </p>

                        <p className="text-slate-700 text-lg leading-relaxed mb-6">
                          {project.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                            Key Highlights
                          </h4>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-slate-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
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
