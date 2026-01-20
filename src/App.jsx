import React from "react";

export default function PremiumPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-100">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 sticky top-0 bg-black/60 backdrop-blur-xl z-20">
        <h1 className="text-2xl font-bold tracking-wide">LENITA MARY VARGHESE</h1>
        <nav className="space-x-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-10 py-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              Software Tester & IT Support Professional
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              B.Sc. Computer Science graduate from the University of Kerala (2024) with hands-on experience in
              customer-facing and administrative operations and currently undergoing professional training in
              Software Testing. Skilled in manual testing, test case preparation, defect tracking, and basic IT
              operations. Seeking an entry-level IT / Software Testing role.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="/Lenita_Mary_Varghese_CV.pdf"
                download
                className="px-6 py-3 rounded-2xl bg-white text-black font-medium"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl border border-slate-600"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-600 blur opacity-70"></div>
              <img
                src="/lenitta.jpeg"
                alt="Lenita Mary Varghese"
                className="relative w-72 h-72 object-cover object-top rounded-3xl border border-white/10"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/300x300?text=Photo";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-10 py-20 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6">About Me</h3>
        <p className="text-slate-400 leading-relaxed">
          I am a motivated and detail-oriented Computer Science graduate with one year of experience as a
          Receptionist at Life Line Multispeciality Hospital, Adoor. In this role, I developed strong
          communication, coordination, and multitasking skills while gaining exposure to hospital management
          software and basic IT operations. I am currently enhancing my technical expertise through
          professional Software Testing training and am passionate about building a career in IT and quality
          assurance.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="px-10 py-20 bg-white/5">
        <h3 className="text-3xl font-semibold mb-10 text-center">Skills & Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React.js (Basic)",
            "Manual Testing",
            "Test Case Preparation",
            "Bug Tracking",
            "MS Office & Google Workspace",
            "Windows & Linux (Basic)",
            "Customer Handling",
            "Team Coordination"
          ].map((skill) => (
            <div key={skill} className="p-6 rounded-2xl bg-black/40 backdrop-blur border border-white/10 text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects & Training */}
      <section id="projects" className="px-10 py-20 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-10">Training & Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900">
            <h4 className="text-xl font-bold mb-2">Software Testing Training</h4>
            <p className="text-slate-400">
              Luminar Technolab, Kakkanad (Ongoing). Manual Testing, Defect Life Cycle,
              Test Case Design, Basics of Automation Testing.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900">
            <h4 className="text-xl font-bold mb-2">Automated Network Security Testing Tool</h4>
            <p className="text-slate-400">
              Open-source security testing project based on Infection Monkey to identify network
              vulnerabilities and simulate attack propagation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-10 py-20 text-center bg-white/5">
        <h3 className="text-3xl font-semibold mb-6">Contact</h3>
        <p className="text-slate-400">📍 Kochi, Kerala</p>
        <p className="text-slate-400">📧 lenitavarghese@gmail.com</p>
        <p className="text-slate-400 mb-6">📞 8921029004</p>
        <div className="flex justify-center gap-6 text-sm">
          <a
            href="https://linkedin.com/in/lenita-mary-varghese-121512308"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-slate-500">
        ©️ {new Date().getFullYear()} Lenita Mary Varghese | Premium Portfolio
      </footer>
    </div>
  );
}