const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-6 xl:px-12">
        <div className="grid gap-8 xl:grid-cols-3 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Cuida Tus Pies</h3>
            <p className="text-foreground/70">
              Podología profesional con Laura Núñez Morales
            </p>
            <div className="space-y-2 text-sm text-foreground/70">
              <p>📱 WhatsApp: +56 9 3583 5479</p>
              <p>📧 Email: contacto@cuidatuspies.cl</p>
            </div>
          </div>
          
          {/* Servicios */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Servicios</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Atención Podológica Regular</li>
              <li>Podología Clínica y Diabética</li>
              <li>Atención a Domicilio</li>
              <li>Convenios Grupales</li>
            </ul>
          </div>
          
          {/* Horarios */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Horarios de Atención</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Lunes a Viernes: 9:00 - 19:00</li>
              <li>Sábado: 10:00 - 14:00</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-foreground/60">
            © {currentYear} Cuida Tus Pies. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
