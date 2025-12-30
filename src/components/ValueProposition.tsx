const ValueProposition = () => {
  return (
    <section className="py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-6 xl:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl xl:text-5xl font-bold text-foreground">
            Tu Bienestar Comienza por la Base
          </h2>
          
          <p className="text-lg xl:text-xl text-foreground/70 leading-relaxed">
            En <span className="font-semibold text-primary">Cuida Tus Pies</span>, ofrecemos un servicio integral 
            de podología que combina experiencia profesional, técnicas especializadas y un trato cercano. 
            Laura Núñez Morales, podóloga certificada, se dedica a cuidar la salud y el confort de tus pies 
            con atención personalizada, diagnóstico preciso y tratamientos efectivos.
          </p>
          
          <p className="text-lg xl:text-xl text-foreground/70 leading-relaxed">
            Nuestro compromiso es brindarte soluciones profesionales que mejoren tu calidad de vida, 
            desde el tratamiento de afecciones comunes hasta el cuidado especializado para pacientes diabéticos. 
            Porque cuando tus pies están bien, todo tu cuerpo lo siente.
          </p>
          
          {/* Imagen de la podóloga en acción */}
          <div className="pt-8">
            <div className="grid gap-6 xl:grid-cols-2 max-w-5xl mx-auto">
              {/* Columna izquierda: Foto de Laura */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/laura-profesional.png"
                  alt="Laura Núñez Morales, podóloga profesional"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Columna derecha: Certificado */}
              <div className="relative w-full rounded-2xl overflow-hidden flex items-center">
                <img
                  src="/certificado.jpg"
                  alt="Certificado de Inscripción en el Registro Nacional de Prestadores Individuales de Salud - Laura Jimena Núñez Morales"
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

export default ValueProposition;
