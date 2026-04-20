import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronRight, Image as ImageIcon } from "lucide-react";
import { useMemo, useState } from "react";

export default function TahsinPortfolio() {
  const projects = useMemo(
    () => [
      {
        title: "Undergraduate Thesis",
        year: "2022 – 2023",
        shortBody:
          "Used LoRa as a low-power wide-area networking technology for irrigation-sector applications, with work focused on implementation and encryption.",
        overview:
          "This project explored how LoRa communication can be used in irrigation-related applications where low power consumption and long-range communication are important. The work involved technical implementation, system-level understanding, and encryption considerations.",
        role: "Researcher and implementation contributor",
        tools: ["LoRa", "Embedded communication", "Wireless systems", "Encryption"],
        sections: {
          challenge:
            "Designing a communication framework suitable for low-power agricultural applications while ensuring reliable data transfer and security.",
          approach:
            "Studied LoRa-based communication architecture, worked through implementation details, and examined encryption mechanisms suitable for deployment scenarios.",
          outcome:
            "Produced an undergraduate thesis that connected communication engineering concepts with a practical real-world use case in irrigation technology.",
        },
        galleryPlaceholders: ["System architecture image", "Implementation photo", "Block diagram / result chart"],
      },
      {
        title: "Self-Balancing Drone",
        year: "2022",
        shortBody:
          "Built a self-balancing drone using 3D-printed components and commercially available sensors.",
        overview:
          "This project focused on building a self-balancing drone prototype by combining mechanical assembly, sensor integration, and design iteration using accessible components.",
        role: "Builder and system integrator",
        tools: ["3D printing", "Sensors", "Drone prototyping", "System integration"],
        sections: {
          challenge:
            "Creating a stable drone system required balancing hardware limitations, component selection, and real-world assembly constraints.",
          approach:
            "Used 3D-printed parts for the structure and integrated market-available sensors into the design, then refined the build through testing and adjustment.",
          outcome:
            "Delivered a working prototype that demonstrates hands-on engineering capability and rapid prototyping skills.",
        },
        galleryPlaceholders: ["Prototype photo", "Assembly image", "Component layout / testing image"],
      },
      {
        title: "Detecting Emotions from EEG Signals",
        year: "2021",
        shortBody:
          "Applied machine learning to correlate emotions with specific music genres through EEG signal analysis.",
        overview:
          "This project investigated how EEG signal patterns can be analyzed through machine learning in order to relate emotional response with different genres of music.",
        role: "Project contributor in ML-based signal analysis",
        tools: ["Machine Learning", "EEG analysis", "Signal processing", "Data interpretation"],
        sections: {
          challenge:
            "EEG data is complex and noisy, making it difficult to identify meaningful emotional patterns with consistency.",
          approach:
            "Analyzed EEG signals, applied machine-learning techniques, and studied correlations between signal patterns and emotional response to genre-based music exposure.",
          outcome:
            "Produced a project that combined neuroscience-adjacent signal analysis with computational pattern recognition.",
        },
        galleryPlaceholders: ["EEG setup image", "Signal plot / chart", "Workflow or model diagram"],
      },
    ],
    []
  );

  const [activeProject, setActiveProject] = useState(projects[0].title);

  const selectedProject = projects.find((project) => project.title === activeProject) || projects[0];

  const workExperience = [
    {
      role: "Engineering Executive (EEE)",
      company: "B&F Company Ltd.",
      period: "2025 – Present",
      details: [
        "Design and plan power plants for future projects.",
        "Maintain and plan services for an existing biochar plant.",
        "Work on net-zero carbon solutions for waste processing and fuel production plants.",
      ],
    },
    {
      role: "Editor (Sciences)",
      company: "Joykoly Publications Ltd.",
      period: "2024 – 2025",
      details: [
        "Worked on preparing and checking science books and study materials.",
        "Contributed to publications for job preparation and university admission exams.",
      ],
    },
  ];

  const education = [
    "MBA, Institute of Business Administration, University of Dhaka (2025 – Present)",
    "BSc in Electrical and Electronic Engineering, Bangladesh University of Engineering and Technology (2018 – 2024), Major in Communication, CGPA 2.90",
    "HSC, Notre Dame College (2015 – 2017), Science, GPA 5.00",
    "SSC, Nasirabad Govt High School (2009 – 2015), Science, GPA 5.00",
  ];

  const leadership = [
    "Senior Vice-President, Chittagong Math Circle (2021 – 2022)",
    "Financial Secretary, Chittagong Math Circle (2019 – 2021)",
    "Coordinator, BDPhO (2019)",
    "Member, BUET Debating Club and BUET Charcoal (2018 – 2023)",
    "Guitarist, Junction the band (2025)",
    "Artist, BUET Charcoal Exhibitions (2019 – 2023)",
    "Member, Notre Dame Environment Development Club (2016 – 2017)",
  ];

  const technicalSkills = ["Python", "MySQL", "PostgreSQL", "MATLAB", "C++", "C", "Verilog", "HTML"];
  const softwareSkills = ["Word", "Excel", "PowerPoint", "Canva", "Adobe Photoshop", "Adobe Illustrator", "FL Studio", "Ableton Live"];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6f1e8_0%,#f3ede3_45%,#efe7da_100%)] text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f1e8]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#top" className="text-[22px] tracking-tight text-neutral-900">
            Tahsin Saad Choudhury
          </a>
          <nav className="hidden gap-8 text-[15px] text-neutral-700 md:flex">
            <a href="#about" className="transition hover:text-neutral-950">About</a>
            <a href="#experience" className="transition hover:text-neutral-950">Experience</a>
            <a href="#projects" className="transition hover:text-neutral-950">Projects</a>
            <a href="#resume" className="transition hover:text-neutral-950">Resume</a>
            <a href="#contact" className="transition hover:text-neutral-950">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute left-[8%] top-20 h-56 w-56 rounded-full bg-black/5 blur-3xl" />
            <div className="absolute right-[10%] top-40 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
            <div className="absolute bottom-8 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-white/30 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
                <p className="text-[12px] uppercase tracking-[0.3em] text-neutral-500">Engineering Executive • EEE • Energy Systems</p>
                <h1 className="mt-6 max-w-4xl text-5xl font-normal leading-[1.02] tracking-tight text-neutral-950 md:text-7xl">
                  Building technical systems across energy, biochar, and net-zero innovation.
                </h1>
                <p className="mt-8 max-w-2xl text-[18px] leading-8 text-neutral-700">
                  Engineering Executive with a background in Electrical and Electronic Engineering, current MBA studies at IBA, and experience spanning power-plant planning, biochar operations, scientific publishing, and applied technical research.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-6 py-3 text-sm text-white transition hover:-translate-y-0.5">
                    View Projects <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <div className="flex gap-3">
                  <a href="/Tahsins-CV.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm text-neutral-900 transition hover:-translate-y-0.5 hover:bg-neutral-50">
                    View CV <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a href="/Tahsins-CV.pdf" download className="inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-6 py-3 text-sm text-white transition hover:-translate-y-0.5">
                    Download CV
                  </a>
                </div>
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-6 py-3 text-sm text-neutral-900 transition hover:-translate-y-0.5">
                    Contact
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="justify-self-start md:justify-self-end"
              >
                <div className="relative h-[360px] w-[280px] overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.05),transparent_45%)]" />
                  <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.25em] text-neutral-400">
                    Portrait
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 flex items-center gap-3 text-sm text-neutral-500">
              <ChevronDown className="h-4 w-4" />
              Scroll to explore
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="grid gap-8 rounded-[2rem] border border-black/10 bg-white/55 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] md:grid-cols-[160px_1fr] md:p-10"
          >
            <div>
              <p className="text-[12px] uppercase tracking-[0.3em] text-neutral-500">About</p>
            </div>
            <div>
              <h2 className="text-[32px] leading-tight tracking-tight text-neutral-950 md:text-[42px]">
                A multidisciplinary profile shaped by engineering, research, publishing, and creative work.
              </h2>
              <p className="mt-6 text-[16px] leading-8 text-neutral-700">
                Tahsin Saad Choudhury is an Engineering Executive with a background in Electrical and Electronic Engineering and ongoing MBA studies at the Institute of Business Administration, University of Dhaka. His work combines engineering fundamentals, technical planning, energy systems thinking, and an interest in business strategy and innovation.
              </p>
              <p className="mt-5 text-[16px] leading-8 text-neutral-700">
                He is currently involved in power-plant planning, biochar plant support, and net-zero carbon solutions related to waste processing and fuel production. His academic and project work includes communication systems, LoRa implementation, embedded hardware, machine learning, and EEG-based signal analysis.
              </p>
              <p className="mt-5 text-[16px] leading-8 text-neutral-700">
                Alongside technical work, he has experience in educational publishing, mathematics-community leadership, debate, art, and music production.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ duration: 0.55 }}>
            <p className="text-[12px] uppercase tracking-[0.3em] text-neutral-500">Experience</p>
            <h2 className="mt-3 text-[34px] tracking-tight text-neutral-950 md:text-[46px]">Professional Experience</h2>
          </motion.div>
          <div className="mt-10 grid gap-6">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.role + job.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="grid gap-5 rounded-[2rem] border border-black/10 bg-white/70 p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)] md:grid-cols-[190px_1fr]"
              >
                <div>
                  <p className="text-sm text-neutral-500">{job.period}</p>
                </div>
                <div>
                  <h3 className="text-[22px] leading-8 text-neutral-950">{job.role}</h3>
                  <p className="mt-1 text-[16px] text-neutral-700">{job.company}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-8 text-neutral-700">
                    {job.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ duration: 0.55 }}>
            <p className="text-[12px] uppercase tracking-[0.3em] text-neutral-500">Projects</p>
            <h2 className="mt-3 text-[34px] tracking-tight text-neutral-950 md:text-[46px]">Selected Technical Work</h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-8 text-neutral-700">
              Click a project to open a detailed panel. You can later replace the placeholders with final images, diagrams, and expanded technical content.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {projects.map((project, index) => {
                const isActive = activeProject === project.title;
                return (
                  <motion.button
                    type="button"
                    key={project.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    onClick={() => setActiveProject(project.title)}
                    className={`w-full rounded-[1.75rem] border p-6 text-left transition ${
                      isActive
                        ? "border-neutral-900 bg-neutral-950 text-white shadow-[0_18px_50px_rgba(0,0,0,0.14)]"
                        : "border-black/10 bg-white/70 text-neutral-900 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:-translate-y-0.5"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={`text-sm ${isActive ? "text-white/55" : "text-neutral-500"}`}>{project.year}</p>
                        <h3 className="mt-3 text-[22px] leading-8">{project.title}</h3>
                        <p className={`mt-3 text-[15px] leading-7 ${isActive ? "text-white/75" : "text-neutral-700"}`}>
                          {project.shortBody}
                        </p>
                      </div>
                      <ChevronRight className={`mt-1 h-5 w-5 shrink-0 transition ${isActive ? "rotate-90 text-white/80" : "text-neutral-500"}`} />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              key={selectedProject.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-[2rem] border border-black/10 bg-white/80 p-7 shadow-[0_14px_40px_rgba(0,0,0,0.06)] md:p-8"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">Project Detail</p>
              <h3 className="mt-3 text-[30px] leading-tight tracking-tight text-neutral-950">{selectedProject.title}</h3>
              <p className="mt-2 text-[15px] text-neutral-500">{selectedProject.year}</p>

              <div className="mt-8 grid gap-6 rounded-[1.5rem] border border-dashed border-black/15 bg-[#f8f5ef] p-5 md:grid-cols-3">
                {selectedProject.galleryPlaceholders.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[150px] items-center justify-center rounded-[1.25rem] border border-black/10 bg-white text-center text-sm leading-6 text-neutral-400"
                  >
                    <div>
                      <ImageIcon className="mx-auto mb-3 h-5 w-5" />
                      {item}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="text-[18px] text-neutral-950">Overview</h4>
                  <p className="mt-3 text-[16px] leading-8 text-neutral-700">{selectedProject.overview}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="text-[18px] text-neutral-950">My Role</h4>
                    <p className="mt-3 text-[16px] leading-8 text-neutral-700">{selectedProject.role}</p>
                  </div>
                  <div>
                    <h4 className="text-[18px] text-neutral-950">Tools / Focus Areas</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool) => (
                        <span key={tool} className="rounded-full border border-black/10 bg-white px-3 py-2 text-sm text-neutral-700">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[18px] text-neutral-950">Challenge</h4>
                  <p className="mt-3 text-[16px] leading-8 text-neutral-700">{selectedProject.sections.challenge}</p>
                </div>

                <div>
                  <h4 className="text-[18px] text-neutral-950">Approach</h4>
                  <p className="mt-3 text-[16px] leading-8 text-neutral-700">{selectedProject.sections.approach}</p>
                </div>

                <div>
                  <h4 className="text-[18px] text-neutral-950">Outcome</h4>
                  <p className="mt-3 text-[16px] leading-8 text-neutral-700">{selectedProject.sections.outcome}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="resume" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-black/10 bg-white/70 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] md:p-10"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[12px] uppercase tracking-[0.3em] text-neutral-500">Resume</p>
                <h2 className="mt-3 text-[34px] tracking-tight text-neutral-950 md:text-[46px]">Education, Skills, and Activities</h2>
              </div>
              <div className="flex gap-3">
              <a href="/Tahsins-CV.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-neutral-900 transition hover:-translate-y-0.5">
                View CV <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="/Tahsins-CV.pdf" download className="inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm text-white transition hover:-translate-y-0.5">
                Download CV
              </a>
            </div>
            </div>

            <div className="mt-10 grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="text-[20px] text-neutral-950">Education</h3>
                <ul className="mt-5 space-y-4 text-[16px] leading-8 text-neutral-700">
                  {education.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[20px] text-neutral-950">Leadership & Activities</h3>
                <ul className="mt-5 space-y-4 text-[16px] leading-8 text-neutral-700">
                  {leadership.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-14 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-[20px] text-neutral-950">Technical Skills</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {technicalSkills.map((item) => (
                    <span key={item} className="rounded-full border border-black/10 bg-[#f8f5ef] px-4 py-2 text-sm text-neutral-700 transition hover:-translate-y-0.5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[20px] text-neutral-950">Software</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {softwareSkills.map((item) => (
                    <span key={item} className="rounded-full border border-black/10 bg-[#f8f5ef] px-4 py-2 text-sm text-neutral-700 transition hover:-translate-y-0.5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="grid gap-8 rounded-[2rem] border border-black/10 bg-neutral-950 p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.16)] md:grid-cols-[1fr_auto] md:items-end md:p-10"
          >
            <div>
              <p className="text-[12px] uppercase tracking-[0.3em] text-white/45">Contact</p>
              <h2 className="mt-3 text-[34px] tracking-tight md:text-[46px]">Let’s build something meaningful.</h2>
              <p className="mt-5 max-w-2xl text-[16px] leading-8 text-white/75">
                Open to conversations around engineering, energy systems, waste-to-resource projects, technical research, and interdisciplinary work connecting technology with business and innovation.
              </p>
            </div>
            <div className="space-y-3 text-[16px] leading-8 text-white/80">
              <p><a href="mailto:tsaadc@gmail.com" className="underline underline-offset-4">tsaadc@gmail.com</a></p>
              <p><a href="tel:+8801521528686" className="underline underline-offset-4">+88 0152-1528686</a></p>
              <p>Greenleaf Hilltop, Foys’ Lake, Chattogram</p>
              <p><a href="https://www.facebook.com/sadcritter/" target="_blank" rel="noreferrer" className="underline underline-offset-4">Facebook Profile</a></p>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
