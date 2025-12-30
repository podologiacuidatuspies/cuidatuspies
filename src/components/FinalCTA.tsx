import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const whatsappNumber = "56935835479"; // Número de WhatsApp: +56 9 3583 5479
  const whatsappMessage = encodeURIComponent("Hola, me gustaría una evaluación personalizada para mis pies");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-20 xl:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/30" />
      
      <div className="container mx-auto px-6 xl:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Título principal */}
          <div className="space-y-8">
            <h2 className="text-3xl xl:text-5xl font-bold text-foreground">
              ¿Listo para dar el primer paso hacia el bienestar?
            </h2>
            
            <p className="text-lg xl:text-2xl text-foreground/80 leading-relaxed">
              Contáctanos hoy mismo para una evaluación personalizada. Resolvemos tus dudas 
              y te ayudamos a elegir el mejor plan para tu salud podal.
            </p>
          </div>

          {/* Dónde Atiende */}
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-card space-y-6">
            <h3 className="text-2xl xl:text-3xl font-bold text-foreground">
              📍 ¿Dónde Atiende?
            </h3>
            
            <div className="grid gap-6 xl:grid-cols-2 text-left">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏠</span>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Atención a Domicilio</h4>
                    <p className="text-foreground/70">
                      Voy hasta tu hogar para mayor comodidad. Ideal para personas con movilidad reducida o preferencia por atención en casa.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏢</span>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Consulta Presencial Previa Coordinación</h4>
                    <p className="text-foreground/70">
                      Francisco Bilbao 3471, Providencia, Santiago
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-foreground/70">
                <span className="font-semibold">Cobertura:</span> Consulta disponibilidad en tu zona
              </p>
            </div>
          </div>
          
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
