import { Button } from "@/components/ui/button";

const Hero = () => {
  const whatsappNumber = "56912345678"; // Número de WhatsApp de ejemplo
  const whatsappMessage = encodeURIComponent("Hola, me gustaría agendar una consulta de podología");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Overlay suave */}
      <div className="absolute inset-0 bg-background/40" />
      
      {/* Contenido */}
      <div className="container mx-auto px-6 xl:px-12 relative z-10 py-20">
        <div className="grid xl:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: Texto y botón */}
          <div className="space-y-8 animate-fade-in">
            {/* Título principal */}
            <h1 className="text-4xl xl:text-5xl font-bold text-foreground leading-tight">
              Podología Profesional: Salud, Bienestar y Confianza en Cada Paso
            </h1>
            
            {/* Subtítulo con emojis */}
            <p className="text-lg xl:text-xl text-foreground/80 leading-relaxed">
              👣 Cuidamos tus pies como se merecen. ✨ Evaluación, tratamiento y prevención especializada. 
              Agenda tu consulta y recupera la comodidad
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
          <div className="relative w-full animate-fade-in">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-soft">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/82bb7a26-0e8b-4fd8-a274-db9e2d001bc9.jpg"
                alt="Pies saludables y bien cuidados"
                className="w-full h-auto object-cover"
              />
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
