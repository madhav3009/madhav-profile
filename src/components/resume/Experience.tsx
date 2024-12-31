import { Building2 } from "lucide-react";

const experiences = [
  {
    company: "GoKwik",
    title: "Software Engineer - Backend — Payments",
    period: "October 2021 – Present",
    highlights: [
      "Built logging middleware to mask PII data and added alerting on New Relic for monitoring 100Mn+ Userbase",
      "Integrated Lazypay BNPL payments, enabling the onboarding of 50+ merchants and boosting transaction volume",
    ],
  },
  {
    company: "ZETWERK",
    title: "SDE-2 — SDE-1",
    period: "March 2021 - October 2021",
    highlights: [
      "Developed a Bank Integration Service for payouts, eliminating reliance on payment gateways and their associated fees and integrated major banks ICICI and SBI with 100Cr+ transactions",
      "Built scalable rate-limiter with a queuing mechanism to optimize transactions during high-traffic periods",
      "Developed Configurable micro-service WorkflowZ, slashed 50% TAT and processed 20K+ requests",
      "Designed and Developed Field Productivity Management Product for real-time progress tracking with Google Maps used by L&T",
      "Enhanced performance by identifying and optimizing high-response queries through indexing, plan analysis, and projection, resulting in a 10-second reduction in QRT",
      "Implemented Contextual Replication for an in-house Data Replication Service, utilizing Mongoose Change Streams to enable SaaS integration",
      "Developed a robust Notification Alert System, promptly detecting automatic restarts of PM2",
      "Profiled and optimized legacy angular application, achieving a 40% bundle size reduction providing better CX",
    ],
  },
  {
    company: "Mfine",
    title: "Software Engineer — Software Engineer Intern",
    period: "March 2021 - October 2021",
    highlights: [
      "Mitigated 40% Landing Screen drop-offs by introducing OTP login, bolstering security with an Account Lock feature using Loopback, MongoDB, Twilio (Backend), and React (UI)",
      "Developed a Location Selector Module with geocoding from MapMyIndia and linked with the web-order service, resulting in a 20% increase in serviceability for a 5M+ user base",
    ],
  },
  {
    company: "GeeksforGeeks",
    title: "Teaching Assistant",
    period: "August 2020 - March 2021",
    highlights: [
      "Helped 1000+ Students to mentor and help with computer science related courses on the platform",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="animate-fade-up space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Building2 className="text-primary" size={24} />
        <h2 className="text-xl font-semibold">Experience</h2>
      </div>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="p-6 bg-accent/10 rounded-sm hover:bg-accent/20 transition-all duration-300 border border-accent/20"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-primary">{exp.company}</h3>
                <p className="text-gray-300 font-medium">{exp.title}</p>
              </div>
              <p className="text-sm text-gray-400">{exp.period}</p>
            </div>
            <ul className="list-disc list-inside space-y-2">
              {exp.highlights.map((highlight, index) => (
                <li key={index} className="text-sm leading-relaxed text-gray-200">
                  {highlight.split(/(\d+[\d,]*[+%]?)/).map((part, i) => (
                    <span
                      key={i}
                      className={
                        /\d+[\d,]*[+%]?/.test(part)
                          ? "text-primary font-semibold"
                          : ""
                      }
                    >
                      {part}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};