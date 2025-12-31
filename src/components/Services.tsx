import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: "🦶",
      title: "Tratamientos Regulares",
      description: `👣 Atención Podológica Regular

• Callosidades y durezas
• Hongos (micosis)
• Uñas encarnadas y engrosadas
• Atención segura y personalizada`,
      image: "/antes-despues.jpg"
    },
    {
      icon: "🏥",
      title: "Podología Clínica y Diabética",
      description: "Enfoque especializado con máxima prioridad en seguridad y derivación oportuna. Cuidado preventivo y tratamiento para pacientes con diabetes.",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/6c4c7d74-f1a9-46d1-855c-9061171b402c.jpg"
    },
    {
      icon: "🏠",
      title: "Atención a Domicilio",
      description: "Servicio profesional en la comodidad de tu hogar. Ideal para personas con movilidad reducida o quienes prefieren la atención personalizada en casa.",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/e86893fe-16db-4451-81c7-28371b9d54f5.jpg"
    },
    {
      icon: "👥",
      title: "Convenios Grupales",
      description: "Tarifas preferenciales para empresas, comunidades o grupos familiares. Cuida la salud podal de tu equipo con planes especiales.",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/d8f64404-6677-4e49-bf0f-6c84e0611998.jpg"
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
              <CardContent>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
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
