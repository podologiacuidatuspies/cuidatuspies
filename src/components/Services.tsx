import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: "🦶",
      title: "Atención Podológica Regular",
      description: `• Callosidades y durezas
• Hongos (micosis)
• Corte y Rebaje de Uñas`,
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/330d2bd8-833d-487f-9015-3a92f71a7d1e.jpg"
    },
    {
      icon: "🏥",
      title: "Podología Clínica y Diabética",
      description: `• Uñas Encarnadas
• Uñas Engrosadas
• Atención Pacientes Diabéticos`,
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/e44d8ac0-bd3e-4417-b555-91c9402d7386.jpg"
    },
    {
      icon: "🏠",
      title: "Atención a Domicilio",
      description: `• Servicio profesional en la comodidad de tu hogar.
• Para personas con movilidad reducida o tercera edad.
• Traslado de todo material y equipo necesario.`,
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/69d653cb-489a-4f58-8caa-4d7ce84f5460.jpg"
    },
    {
      icon: "👥",
      title: "Convenios Grupales",
      description: `• Tarifas preferenciales para grupos
• Precio Calculado en base al numero de personas
• Planes diseñados para el cuidado integral de los pies`,
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/b757e109-933c-420f-abd4-441c41335950.jpg"
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
