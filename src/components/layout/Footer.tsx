import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">BUT TC-SI</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Formation en Techniques de Commercialisation appliquées aux Systèmes Industriels à l'IUT Lyon 1.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <a href="tel:+33472692020" className="flex items-center hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded">
                <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                <span>04 72 69 20 20</span>
              </a>
              <a href="mailto:contact@iut.univ-lyon1.fr" className="flex items-center hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded">
                <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                <span>contact@iut.univ-lyon1.fr</span>
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <nav aria-label="Liens du footer">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/equipe" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded">
                    Équipe pédagogique
                  </Link>
                </li>
                <li>
                  <Link to="/projets" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded">
                    Projets étudiants
                  </Link>
                </li>
                <li>
                  <Link to="/specialites" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded">
                    Spécialités
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded">
                    Nous contacter
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Adresse */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Localisation</h3>
            <div className="flex items-start text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
              <address className="not-italic">
                IUT Lyon 1 - Site de Villeurbanne<br />
                43 Boulevard du 11 novembre 1918<br />
                69622 Villeurbanne Cedex
              </address>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} IUT Lyon 1 - BUT TC-SI. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/mentions-legales" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
