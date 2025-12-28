import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Tarifas Servicios", href: "#tarifas" },
    { label: "Productos Cuidado Anti Hongos", href: "#productos" },
    { label: "Donde Atiende?", href: "#ubicacion" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-[#3DB6D3] shadow-md">
      <div className="container mx-auto px-6 xl:px-12">
        <div className="flex h-48 items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img 
              src="/logo-cuida-tus-pies.png" 
              alt="Cuida Tus Pies - Clínica Podológica Móvil" 
              className="h-[180px] w-[180px] object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-white hover:text-white/80 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:text-white/80 hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-4 pb-4 border-b border-border">
                  <img 
                    src="/logo-cuida-tus-pies.png" 
                    alt="Cuida Tus Pies - Clínica Podológica Móvil" 
                    className="h-[180px] w-[180px] object-contain"
                  />
                  <span className="text-xl font-bold text-foreground">
                    Cuida Tus Pies
                  </span>
                </div>
                <nav className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg font-medium text-foreground/70 hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
