export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            About Me
          </h2>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I'm a motivated and detail-oriented Computer Science Engineering student at
              Navodaya Institute of Technology in Raichur, Karnataka, with a strong CGPA of 7.97/10.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              My passion lies in software development and data-related fields, where I leverage
              my expertise in full stack web development to create efficient, scalable solutions.
              I'm particularly interested in combining modern web technologies with machine learning
              to solve real-world problems.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              With hands-on experience in React.js, Node.js, and databases like MySQL and MongoDB,
              I'm constantly exploring new technologies and methodologies to enhance my skill set
              and contribute to impactful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
