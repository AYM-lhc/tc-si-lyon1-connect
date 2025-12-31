import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projectsImage from "@/assets/projects-image.jpg";

// Projets officiels du BUT TC-SI
const projects = [
  // 1ère année
  {
    id: 1,
    year: "1",
    title: "Projet de conception – Luminaires",
    promo: "2023–2024",
    description: "Projet de conception et de communication mené en partenariat avec une entreprise. Les étudiants conçoivent des luminaires en respectant un cahier des charges professionnel intégrant des contraintes techniques, esthétiques et fonctionnelles, tout en valorisant leur solution par une communication adaptée.",
    skills: ["Conception produit", "Analyse technique", "Design industriel", "Communication de projet"],
    technologies: ["Logiciels de conception 3D", "Outils de prototypage", "Supports de communication"],
    supervisors: ["Équipe pédagogique BUT TC-SI"],
    theme: "Conception",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: 2,
    year: "1",
    title: "Projet RSE – Valorisation des déchets",
    promo: "2024–2025",
    description: "Projet annuel présenté sous forme de stand. Les étudiants travaillent sur la valorisation des déchets d'une entreprise autour des enjeux du recyclage et de la responsabilité sociétale des entreprises. Chaque groupe conçoit un objet à partir de déchets industriels et crée une entreprise de conseil associée.",
    skills: ["Gestion de projet", "Responsabilité sociétale (RSE)", "Création d'entreprise", "Communication événementielle"],
    technologies: ["Outils de gestion de projet", "Logiciels de communication visuelle", "Supports de présentation"],
    supervisors: ["Équipe pédagogique BUT TC-SI"],
    theme: "RSE",
    images: ["/carrousel-projet-1/projet11.png", "/carrousel-projet-1/projet112.png", "/carrousel-projet-1/projet113.png"]
  },
  // 2ème année
  {
    id: 3,
    year: "2",
    title: "Projet entrepreneurial",
    promo: "2024–2025",
    description: "Les étudiants imaginent une idée innovante et originale n'existant pas encore sur le marché. Le projet inclut la conception du produit, sa modélisation 3D et l'élaboration d'un business plan complet, présenté devant un jury de professionnels et d'anciens dirigeants.",
    skills: ["Innovation", "Business development", "Modélisation économique", "Prise de parole professionnelle"],
    technologies: ["Logiciels de conception 3D", "Outils de business plan", "Supports de présentation", "Outils de prototypage"],
    supervisors: ["Équipe pédagogique et jury professionnel"],
    theme: "Entrepreneuriat",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: 4,
    year: "2",
    title: "Projet de conception de voitures – Course en Cours",
    promo: "2024–2025",
    description: "Projet technique et créatif basé sur le concours national « Course en Cours ». Les étudiants conçoivent une voiture miniature répondant à un cahier des charges strict, de la modélisation à la fabrication, jusqu'au fonctionnement réel du véhicule, en intégrant une identité visuelle et une communication originale.",
    skills: ["Conception mécanique", "Gestion de projet", "Fabrication et prototypage", "Communication et design"],
    technologies: ["Conception 3D", "Impression 3D"],
    supervisors: ["Équipe pédagogique et jury professionnel"],
    theme: "Technique",
    images: ["/carrousel-projet-1/projet211.png", "/carrousel-projet-1/projet212.png", "/carrousel-projet-1/projet213.png"]
  },
  // 3ème année
  {
    id: 5,
    year: "3",
    title: "Projet de négociation acheteur",
    promo: "2024–2025",
    description: "Les étudiants se placent dans la posture d'un acheteur professionnel. À l'aide d'une plateforme de simulation, ils sélectionnent des fournisseurs, négocient les conditions d'achat, anticipent les risques et prennent en compte les contraintes économiques et géographiques.",
    skills: ["Négociation B2B", "Analyse des risques", "Stratégie d'achat", "Prise de décision"],
    technologies: ["Plateforme de simulation", "Outils d'analyse"],
    supervisors: ["Équipe pédagogique BUT TC-SI"],
    theme: "Négociation",
    images: ["/carrousel-projet-1/COMPIT.png"]
  },
  {
    id: 6,
    year: "3",
    title: "Projet associatif et gestion de services étudiants",
    promo: "2024–2025",
    description: "Chaque groupe de la promotion gère une association ou un service étudiant, en assurant l'organisation, la communication et le suivi des actions menées tout au long de l'année. Groupes possibles : Voyage, Communication, AideTU (aide alimentaire et hygiénique), Alumni, Salon de l'Étudiant, Erasmus, TC-SI Sport, Cordée de la Réussite.",
    skills: ["Gestion associative", "Organisation d'événements", "Travail en équipe", "Communication"],
    technologies: ["Outils collaboratifs", "Supports de communication"],
    supervisors: ["Équipe pédagogique BUT TC-SI"],
    theme: "Projet associatif",
    images: ["/carrousel-projet-1/aidetu.jpg", "/carrousel-projet-1/tcsport.jpg", "/carrousel-projet-1/voyage.jpg"]
  },
];

// Composant Carrousel d'images
const ImageCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full group">
      <img 
        src={images[currentIndex]} 
        alt={`${title} - Image ${currentIndex + 1}`}
        className="w-full h-96 object-center object-cover rounded-t-lg bg-secondary"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Image suivante"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-primary' : 'bg-background/60'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Projets = () => {
  const [selectedYear, setSelectedYear] = useState("1");
  const [selectedTheme, setSelectedTheme] = useState("Tous");

  // Générer les thèmes dynamiquement basés sur les projets de l'année sélectionnée
  const availableThemes = useMemo(() => {
    const projectsForYear = projects.filter(p => p.year === selectedYear);
    const themes = [...new Set(projectsForYear.map(p => p.theme))];
    return ["Tous", ...themes];
  }, [selectedYear]);

  // Réinitialiser le thème si non disponible
  useMemo(() => {
    if (!availableThemes.includes(selectedTheme)) {
      setSelectedTheme("Tous");
    }
  }, [availableThemes, selectedTheme]);

  const filteredProjects = projects.filter((project) => {
    const matchesYear = project.year === selectedYear;
    const matchesTheme = selectedTheme === "Tous" || project.theme === selectedTheme;
    return matchesYear && matchesTheme;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={projectsImage} 
            alt="" 
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projets étudiants
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez les réalisations concrètes de nos étudiants : projets de conception, RSE, 
            entrepreneuriat et négociation menés en partenariat avec des entreprises.
          </p>
        </div>
      </section>

      {/* Onglets par année */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedYear} onValueChange={setSelectedYear} className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <TabsList className="w-full md:w-auto">
                <TabsTrigger value="1">1ère année</TabsTrigger>
                <TabsTrigger value="2">2ème année</TabsTrigger>
                <TabsTrigger value="3">3ème année</TabsTrigger>
              </TabsList>

              {/* Filtres par thématique - dynamiques */}
              <div className="flex flex-wrap gap-2">
                {availableThemes.map((theme) => (
                  <Button
                    key={theme}
                    variant={selectedTheme === theme ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTheme(theme)}
                    className="text-sm"
                  >
                    {theme}
                  </Button>
                ))}
              </div>
            </div>

            {/* Contenu des projets */}
            <TabsContent value={selectedYear} className="mt-0">
              {filteredProjects.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <Card key={project.id} className="shadow-card border-border hover:shadow-elegant transition-all flex flex-col">
                      <ImageCarousel images={project.images} title={project.title} />
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <Badge variant="secondary">{project.theme}</Badge>
                          <span className="text-xs text-muted-foreground">{project.promo}</span>
                        </div>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <div className="mb-4 flex-1">
                          <h4 className="text-sm font-semibold mb-2">Compétences mobilisées :</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.skills.map((skill, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2">Technologies :</h4>
                          <p className="text-sm text-muted-foreground">
                            {project.technologies.join(", ")}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold mb-2">Encadrants :</h4>
                          <p className="text-sm text-muted-foreground">
                            {project.supervisors.join(", ")}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    Aucun projet trouvé pour cette année avec ces critères.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Projets;
