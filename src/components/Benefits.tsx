import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: "🏠",
      title: "Atención Domiciliaria",
      description: "Llevamos nuestro servicio profesional a tu hogar con todo el equipamiento necesario"
    },
    {
      icon: "👥",
      title: "Convenios Grupales",
      description: "Tarifas especiales para empresas, comunidades y grupos familiares"
    },
    {
      icon: "📱",
      title: "Agenda Simple vía WhatsApp",
      description: "Reserva tu hora de forma rápida y directa sin complicaciones"
    },
    {
      icon: "👩‍⚕️",
      title: "Profesionalismo con Técnicas Seguras",
      description: "Atención certificada con protocolos de higiene y seguridad de primer nivel"
    },
    {
      icon: "🔗",
      title: "Red de Derivación a Especialistas",
      description: "Conexión directa con médicos especialistas cuando tu caso lo requiera"
    }
  ];

  return (
    <section className="py-20 xl:py-32 bg-gradient-soft">
      <div className="container mx-auto px-6 xl:px-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl xl:text-5xl font-bold text-foreground">
            Por Qué Elegirnos
          </h2>
          <p className="text-lg xl:text-xl text-foreground/70 max-w-3xl mx-auto">
            Beneficios que hacen la diferencia en tu experiencia de cuidado podológico
          </p>
        </div>
        
        <div className="grid gap-6 xl:grid-cols-3 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-soft transition-all duration-300 hover:scale-105"
            >
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="text-5xl">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground/70">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
