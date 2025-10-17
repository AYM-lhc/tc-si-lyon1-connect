import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";
import projectsImage from "@/assets/projects-image.jpg";

// Données exemple de projets
const projects = [
  {
    id: 1,
    year: "1",
    title: "Campagne marketing pour startup IoT",
    promo: "2023-2024",
    description: "Création d'une stratégie marketing complète pour une startup spécialisée dans les objets connectés industriels.",
    skills: ["Marketing digital", "Réseaux sociaux", "Analyse de marché"],
    technologies: ["Google Analytics", "Canva", "Mailchimp"],
    supervisors: ["Sophie Martin", "Thomas Dubois"],
    theme: "Marketing",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    year: "1",
    title: "Étude de marché : Industrie 4.0 en Auvergne-Rhône-Alpes",
    promo: "2023-2024",
    description: "Analyse des besoins et opportunités du marché régional en matière de transformation digitale industrielle.",
    skills: ["Étude de marché", "Enquêtes", "Analyse statistique"],
    technologies: ["Excel", "Google Forms", "Power BI"],
    supervisors: ["Marie Lefebvre"],
    theme: "Data",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    year: "2",
    title: "Automatisation d'un processus commercial B2B",
    promo: "2022-2023",
    description: "Mise en place d'un CRM et automatisation du parcours client pour une entreprise industrielle de 150 salariés.",
    skills: ["CRM", "Automatisation", "Gestion de projet"],
    technologies: ["Salesforce", "Zapier", "Python"],
    supervisors: ["Pierre Durand", "Laurent Petit"],
    theme: "Automatisation",
    github: "#",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    year: "2",
    title: "Négociation et contrat international",
    promo: "2022-2023",
    description: "Simulation de négociation commerciale avec un client étranger pour l'export de machines industrielles.",
    skills: ["Négociation", "Commerce international", "Anglais commercial"],
    technologies: ["Simulation professionnelle"],
    supervisors: ["Marie Lefebvre"],
    theme: "Vente",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    year: "3",
    title: "Création d'une plateforme e-commerce B2B",
    promo: "2021-2022",
    description: "Conception et déploiement d'une plateforme de vente en ligne pour pièces industrielles avec espace client personnalisé.",
    skills: ["E-commerce", "UX/UI", "Gestion de projet web"],
    technologies: ["Shopify", "Figma", "JavaScript"],
    supervisors: ["Sophie Martin", "Laurent Petit"],
    theme: "Marketing",
    github: "#",
    portfolio: "#",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    year: "3",
    title: "Stratégie data-driven pour l'optimisation des ventes",
    promo: "2021-2022",
    description: "Analyse prédictive des ventes et recommandations stratégiques basées sur l'exploitation de données CRM.",
    skills: ["Data science", "Business Intelligence", "Recommandations stratégiques"],
    technologies: ["Python", "Tableau", "SQL"],
    supervisors: ["Pierre Durand"],
    theme: "Data",
    github: "#",
    image: "/placeholder.svg"
  },
];

const themes = ["Tous", "Marketing", "Vente", "Data", "Automatisation"];

const Projets = () => {
  const [selectedYear, setSelectedYear] = useState("1");
  const [selectedTheme, setSelectedTheme] = useState("Tous");

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
            Découvrez les réalisations concrètes de nos étudiants : études de cas, campagnes marketing, 
            automatisations et projets innovants menés en partenariat avec des entreprises.
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

              {/* Filtres par thématique */}
              <div className="flex flex-wrap gap-2">
                {themes.map((theme) => (
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
                      <img 
                        src={project.image} 
                        alt=""
                        className="w-full h-48 object-cover rounded-t-lg bg-secondary"
                        aria-hidden="true"
                      />
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

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2">Encadrants :</h4>
                          <p className="text-sm text-muted-foreground">
                            {project.supervisors.join(", ")}
                          </p>
                        </div>

                        {(project.github || project.portfolio) && (
                          <div className="flex gap-2 pt-4 border-t border-border">
                            {project.github && (
                              <a 
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded"
                              >
                                <Github className="h-4 w-4" />
                                Code
                              </a>
                            )}
                            {project.portfolio && (
                              <>
                                {project.github && <span className="text-muted-foreground">•</span>}
                                <a 
                                  href={project.portfolio}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                  Voir le projet
                                </a>
                              </>
                            )}
                          </div>
                        )}
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
