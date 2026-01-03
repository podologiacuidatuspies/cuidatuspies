import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPlans = () => {
  const whatsappNumber = "56935835479"; // Número de WhatsApp: +56 9 3583 5479
  
  const plans = [
    {
      icon: "🥿",
      name: "Plan Podología Básica",
      duration: "45 minutos",
      price: "$25.000",
      ideal: "Mantenimiento de uñas, durezas y limpieza general",
      features: [
        "Corte y limado de uñas",
        "Retiro de durezas",
        "Limpieza de surcos",
        "Hidratación",
        "Masaje podal"
      ],
      highlight: false
    },
    {
      icon: "🏥",
      name: "Plan Podología Clínica",
      duration: "60 minutos",
      price: "$27.500",
      ideal: "Micosis leve, durezas, resequedad o cuidado preventivo diabético",
      features: [
        "Corte, limado y fresado",
        "Eliminación de durezas plantares",
        "Hidratación profunda",
        "Masaje terapéutico",
        "Derivación profesional si se requiere"
      ],
      highlight: true
    },
    {
      icon: "⚡",
      name: "Plan Podología Intensiva",
      duration: "60 minutos",
      price: "$30.000",
      ideal: "Casos avanzados con uñas engrosadas, involutas o micosis avanzada",
      features: [
        "Eliminación profunda de hiperqueratosis",
        "Tratamiento de helomas ('ojos de gallo')",
        "Fresado intensivo",
        "Hidratación profunda",
        "Masaje relajante"
      ],
      highlight: false
    }
  ];

  const getWhatsappLink = (planName: string) => {
    const message = encodeURIComponent(`Hola, me interesa el ${planName}. ¿Podrías darme más información?`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section className="py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-6 xl:px-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl xl:text-5xl font-bold text-foreground">
            Elige el Plan que Tus Pies Necesitan
          </h2>
          <p className="text-lg xl:text-xl text-foreground/70 max-w-3xl mx-auto">
            Planes diseñados para diferentes necesidades y niveles de atención
          </p>
        </div>
        
        <div className="grid gap-8 xl:grid-cols-3 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`bg-card border-border transition-all duration-300 hover:scale-105 ${
                plan.highlight ? 'ring-2 ring-primary shadow-soft' : 'hover:shadow-card'
              }`}
            >
              <CardHeader className="text-center pb-8">
                <div className="text-6xl mb-4">{plan.icon}</div>
                <CardTitle className="text-2xl text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">Duración: {plan.duration}</div>
                </div>
                <CardDescription className="text-sm text-foreground/70 pt-4">
                  <span className="font-semibold">Ideal para:</span> {plan.ideal}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <p className="font-semibold text-foreground">Incluye:</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button
                  asChild
                  size="lg"
                  className={`w-full text-lg px-8 py-6 shadow-soft transition-all duration-300 hover:scale-105 ${
                    plan.highlight 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                  }`}
                >
                  <a href={getWhatsappLink(plan.name)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                    <img src="/whatsapp.png" alt="WhatsApp" className="w-[42px] h-[42px]" />
                    Consultar por WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
