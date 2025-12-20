import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const whatsappNumber = "56912345678";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría una evaluación personalizada para mis pies");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-20 xl:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/30" />
      
      <div className="container mx-auto px-6 xl:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl xl:text-5xl font-bold text-foreground">
            ¿Listo para dar el primer paso hacia el bienestar?
          </h2>
          
          <p className="text-lg xl:text-2xl text-foreground/80 leading-relaxed">
            Contáctanos hoy mismo para una evaluación personalizada. Resolvemos tus dudas 
            y te ayudamos a elegir el mejor plan para tu salud podal.
          </p>
          
          <div className="flex flex-col xl:flex-row gap-4 justify-center items-center pt-6">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-soft transition-all duration-300 hover:scale-105"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                💬 Agendar Consulta por WhatsApp
              </a>
            </Button>
          </div>
          
          {/* Información de contacto adicional */}
          <div className="pt-8 space-y-2">
            <p className="text-foreground/70">
              <span className="font-semibold">Podóloga:</span> Laura Núñez Morales
            </p>
            <p className="text-foreground/70">
              <span className="font-semibold">Atención:</span> Lunes a Sábado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
