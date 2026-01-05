import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Products = () => {
  const whatsappNumber = "56935835479"; // Número de WhatsApp: +56 9 3583 5479
  
  const products = [
    {
      name: "Esmalte de Terbinafina 3%",
      size: "10 ml",
      description: "Tratamiento intensivo para hongos en las uñas. Fórmula especializada de uso tópico.",
      price: "$7.990",
      image: "/esmalte_terbinafina.png"
    },
    {
      name: "Talco con Óxido de Zinc",
      size: "30 g",
      description: "Absorbe la humedad y protege el pie. Ideal para prevenir rozaduras y mantener los pies secos.",
      price: "$3.990",
      image: "/talco_antimicotico.png"
    },
    {
      name: "Jabón Antimicótico",
      size: "80 g",
      description: "Previene la aparición de hongos. Limpieza profunda con propiedades antifúngicas.",
      price: "$3.590",
      image: "/jabon_antimicotico.png"
    }
  ];

  const getWhatsappLink = (productName: string) => {
    const message = encodeURIComponent(`Hola, me interesa el producto: ${productName}. ¿Está disponible?`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section className="py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-6 xl:px-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl xl:text-5xl font-bold text-foreground">
            Complementa Tu Tratamiento
          </h2>
          <p className="text-lg xl:text-xl text-foreground/70 max-w-3xl mx-auto">
            Productos podológicos especializados para el cuidado continuo de tus pies
          </p>
        </div>
        
        <div className="grid gap-8 xl:grid-cols-3 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-soft transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[345px] object-cover"
                  />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {product.size}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground/70">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <Button
                    asChild
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6"
                  >
                    <a href={getWhatsappLink(product.name)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <img src="/whatsapp.png" alt="WhatsApp" className="w-[42px] h-[42px]" />
                      Consultar
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

export default Products;
