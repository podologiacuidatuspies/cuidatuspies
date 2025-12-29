import { Button } from "@/components/ui/button";

const Hero = () => {
  const whatsappNumber = "56935835479"; // Número de WhatsApp: +56 9 3583 5479
  const whatsappMessage = encodeURIComponent("Hola, me gustaría agendar una consulta de podología");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-start overflow-hidden bg-gradient-hero pt-[54px]">
      {/* Overlay suave */}
      <div className="absolute inset-0 bg-background/40" />
      
      {/* Contenido */}
      <div className="container mx-auto px-6 xl:px-12 relative z-10">
        <div className="space-y-16">
          {/* Título principal - Arriba de todo */}
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl xl:text-6xl font-bold text-foreground leading-tight">
              Podología Profesional: Salud, Bienestar y Confianza en Cada Paso
            </h1>
          </div>

          {/* Grid con texto y fotografía */}
          <div className="grid xl:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda: Texto y botón */}
            <div className="space-y-8 animate-fade-in">
              {/* Subtítulo con emojis */}
              <p className="text-lg xl:text-xl text-foreground/80 leading-relaxed">
                👣 Cuidamos la salud de tus pies con atención profesional.
                Evaluación clínica, tratamiento especializado y prevención podológica.
                Agenda tu consulta y camina con seguridad y bienestar.
              </p>
              
              {/* Botón CTA principal */}
              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-soft transition-all duration-300 hover:scale-105"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <img src="/whatsapp.png" alt="WhatsApp" className="w-[42px] h-[42px]" />
                    Agendar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Columna derecha: Imagen decorativa */}
            <div className="relative w-full animate-fade-in flex justify-center">
              <div className="relative w-[72%] rounded-2xl overflow-hidden shadow-soft">
                <img
                  src="/hero-podologia.jpg"
                  alt="Podóloga profesional realizando tratamiento de uñas con instrumental especializado"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
