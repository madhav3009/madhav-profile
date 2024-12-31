import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section className="animate-fade-up">
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap className="text-secondary" size={24} />
        <h2 className="text-2xl font-semibold">Education</h2>
      </div>
      <div className="p-6 bg-accent rounded-lg">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <h3 className="text-xl font-semibold text-secondary">
              Bachelor of Technology
            </h3>
            <p className="text-primary">
              Guru Gobind Singh Indraprastha University, New Delhi
            </p>
          </div>
          <div className="text-right">
            <p className="text-primary">Sep. 2017 – May 2021</p>
            <p className="text-secondary font-semibold">88 Percentage</p>
          </div>
        </div>
      </div>
    </section>
  );
};