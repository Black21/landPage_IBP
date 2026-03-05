import { Flame } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark py-12 border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flame className="h-5 w-5 text-accent" />
          <span className="font-display text-lg font-bold text-white">
            Igreja da Luz
          </span>
        </div>
        <p className="text-white/30 text-sm max-w-md mx-auto mb-6">
          "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito." — João 3:16
        </p>
        <p className="text-white/15 text-xs">
          © {new Date().getFullYear()} Igreja da Luz. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
