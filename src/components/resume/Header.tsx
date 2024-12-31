import { Mail, Phone, Linkedin, Github } from "lucide-react";

export const Header = () => {
  return (
    <header className="animate-fade-up space-y-4">
      <h2 className="text-3xl font-bold">MADHAV</h2>
      <h3 className="text-2xl font-semibold">
        Software Engineer - Backend 
      </h3>
      <div className="flex flex-col space-y-2">
        <a href="tel:+919910936527" className="flex items-center gap-2 hover:text-secondary transition-colors w-fit">
          <Phone size={18} />
          <span>(+91) 9910936527</span>
        </a>
        <a href="mailto:madhav.work07@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors w-fit">
          <Mail size={18} />
          <span>madhav.work07@gmail.com</span>
        </a>
        <a href="https://linkedin.com/in/madhav" className="flex items-center gap-2 hover:text-secondary transition-colors w-fit">
          <Linkedin size={18} />
          <span>linkedin.com/in/madhav</span>
        </a>
        <a href="https://g.dev/madhav" className="flex items-center gap-2 hover:text-secondary transition-colors w-fit">
          <Github size={18} />
          <span>g.dev/madhav</span>
        </a>
      </div>
    </header>
  );
};