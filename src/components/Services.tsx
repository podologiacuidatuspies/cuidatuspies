import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const whatsappLink = "https://wa.link/np4q7n";

  const services = [
    {
      icon: "🦶",
      title: "Atención Podológica Regular",
      description: `• Callosidades y durezas
• Hongos (micosis)
• Corte y Rebaje de Uñas`,
      image: "/intervencion_podologica.png"
    },
    {
      icon: "🏥",
      title: "Podología Clínica y Diabética",
      description: `• Uñas Encarnadas
• Uñas Engrosadas
• Atención Pacientes Diabéticos`,
      image: "/podologia_clinica_diabetica.png"
    },
    {
      icon: "🏠",
      title: "Atención a Domicilio",
      description: `• Servicio profesional en la comodidad de tu hogar.
• Para personas con movilidad reducida o tercera edad.
• Traslado de todo material y equipo necesario.`,
      image: "/fachada_domicilio_podologia.png"
    },
    {
      icon: "👨‍👩‍👦",
      title: "Convenios Grupales",
      description: `• Tarifas preferenciales para grupos
• Precio Calculado en base al numero de personas
• Planes diseñados para el cuidado integral de los pies`,
      image: "/grupo_asilo_podologia.png"
    }
  ];

  return (
    <section id="servicios" className="py-20 xl:py-32 bg-gradient-soft">
      <div className="container mx-auto px-6 xl:px-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl xl:text-5xl font-bold text-foreground">
            Atención Personalizada para Cada Necesidad
          </h2>
          <p className="text-lg xl:text-xl text-foreground/70 max-w-3xl mx-auto">
            Ofrecemos servicios especializados adaptados a tus requerimientos específicos
          </p>
        </div>
        
        <div className="grid gap-8 xl:grid-cols-2 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-soft transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-foreground/70 whitespace-pre-line">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-72 object-cover"
                  />
                </div>
                
                {/* Botón de WhatsApp */}
                <div className="flex justify-center pt-2">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
