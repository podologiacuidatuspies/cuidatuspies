const ValueProposition = () => {
  return (
    <section id="quien-soy" className="py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-6 xl:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl xl:text-5xl font-bold text-foreground">
            Tu Bienestar Comienza por la Base
          </h2>
          
          <p className="text-lg xl:text-xl text-foreground/70 leading-relaxed">
            Laura Núñez Morales es podóloga clínica certificada, con más de 20 años de experiencia 
            profesional en el diagnóstico y tratamiento de diversas patologías podológicas. Cuenta con 
            registro N° 116447 en el Registro Nacional de Prestadores Individuales de Salud, lo que 
            respalda una atención segura, ética y de alto estándar profesional.
          </p>
          
          <p className="text-lg xl:text-xl text-foreground/70 leading-relaxed">
            En <span className="font-semibold text-primary">Cuida Tus Pies</span>, brindamos un servicio 
            integral de podología, combinando conocimiento clínico, técnicas especializadas y atención 
            personalizada. Nuestro enfoque está orientado a entregar soluciones efectivas y duraderas, 
            tanto en tratamientos podológicos generales como en cuidados especializados, incluyendo 
            atención a pacientes diabéticos.
          </p>
          
          <p className="text-lg xl:text-xl text-foreground/70 leading-relaxed">
            Nuestro compromiso es ofrecer una experiencia profesional de calidad, enfocada en el bienestar, 
            la prevención y la mejora de la calidad de vida de nuestros pacientes. Pies sanos, mayor 
            bienestar y mejor calidad de vida.
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
