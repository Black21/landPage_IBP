import { Cross } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Cross className="h-5 w-5 text-accent" />
          <span className="font-display text-lg font-bold text-primary-foreground">
            Igreja da Luz
          </span>
        </div>
        <p className="text-primary-foreground/50 text-sm max-w-md mx-auto mb-6">
          "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito." — João 3:16
        </p>
        <p className="text-primary-foreground/30 text-xs">
          © {new Date().getFullYear()} Igreja da Luz. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
