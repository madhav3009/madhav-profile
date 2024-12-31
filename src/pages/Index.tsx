import { Header } from "@/components/resume/Header";
import { Skills } from "@/components/resume/Skills";
import { Experience } from "@/components/resume/Experience";
import { Projects } from "@/components/resume/Projects";
import { Education } from "@/components/resume/Education";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/4 flex flex-col items-center space-y-4">
            <Avatar className="w-48 h-48 border-4 border-primary/20">
              <AvatarImage src="https://ca.slack-edge.com/T01MC3460BT-U07PRC2Q6ER-b77b22feb51b-512" alt="Madhav" />
              <AvatarFallback>
                <User className="w-24 h-24 text-primary" />
              </AvatarFallback>
            </Avatar>
            <Skills />
          </div>
          <div className="w-full md:w-3/4 space-y-12">
            <Header />
            <Experience />
            <Projects />
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;