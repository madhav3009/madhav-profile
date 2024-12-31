import { Mail, Phone, Linkedin, Github } from "lucide-react";

export const Header = () => {
  return (
    <header className="animate-fade-up space-y-4 text-center md:text-left">
      <h1 className="text-4xl font-bold tracking-tight">
        Software Engineer - Backend — Payments
      </h1>
      <h2 className="text-3xl font-semibold">MADHAV</h2>
      <div className="flex flex-wrap gap-6 justify-center md:justify-start text-primary">
        <a href="tel:+919910936527" className="flex items-center gap-2 hover:text-secondary transition-colors">
          <Phone size={18} />
          <span>(+91) 9910936527</span>
        </a>
        <a href="mailto:madhav.work07@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
          <Mail size={18} />
          <span>madhav.work07@gmail.com</span>
        </a>
        <a href="https://linkedin.com/in/madhav" className="flex items-center gap-2 hover:text-secondary transition-colors">
          <Linkedin size={18} />
          <span>linkedin.com/in/madhav</span>
        </a>
        <a href="https://g.dev/madhav" className="flex items-center gap-2 hover:text-secondary transition-colors">
          <Github size={18} />
          <span>g.dev/madhav</span>
        </a>
      </div>
    </header>
  );
};