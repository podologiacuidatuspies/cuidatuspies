import { Button } from "@/components/ui/button";

const Hero = () => {
  const whatsappLink = "https://wa.link/np4q7n";

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
              Podología Clínica: Salud, Bienestar y Confianza en Cada Paso
            </h1>
          </div>

          {/* Grid con texto y fotografía */}
          <div className="grid xl:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda: Texto y botón */}
            <div className="space-y-6 animate-fade-in text-left">
              {/* Subtítulo con emoji */}
              <h2 className="text-2xl xl:text-3xl font-semibold text-foreground/90 flex items-center gap-2">
                <span>👣</span>
                <span>Cuidamos la salud de tus pies con atención profesional.</span>
              </h2>
              
              {/* Texto destacado con llamado a la acción */}
              <div className="space-y-4">
                <p className="text-xl xl:text-2xl font-medium text-foreground/90 leading-relaxed">
                  Evaluación clínica, tratamiento especializado y prevención podológica.
                </p>
                <p className="text-lg xl:text-xl font-semibold text-foreground/90 leading-relaxed">
                  Agenda tu consulta y camina con seguridad y bienestar.
                </p>
              </div>
              
              {/* Botón CTA principal */}
              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 shadow-soft transition-all duration-300 hover:scale-105"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white">
                    <img src="/whatsapp.png" alt="WhatsApp" className="w-[42px] h-[42px]" />
                    Agendar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Columna derecha: Imagen decorativa */}
            <div className="relative w-full animate-fade-in flex justify-center">
              <div className="relative w-[94%] rounded-2xl overflow-hidden shadow-soft">
                <img
                  src="/imagen-principal-podologa-podologia.png"
                  alt="Podóloga profesional realizando tratamiento de uñas con instrumental especializado"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
