import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Briefcase } from "lucide-react";

const specialties = [
  {
    id: 1,
    name: "Marketing & stratégie commerciale",
    color: "bg-primary",
    description: "Développer la capacité à analyser les marchés industriels et à construire des offres commerciales simples, complexes puis étendues.",
    objectives: [
      "Analyser l'environnement économique, concurrentiel et client",
      "Construire une offre commerciale cohérente et responsable",
      "Intégrer la RSE et la veille dans la stratégie marketing"
    ],
    skills: [
      "Étude de marché simple et complexe",
      "Segmentation, ciblage, positionnement",
      "Construction du mix marketing",
      "Veille concurrentielle et technologique",
      "Intégration des enjeux RSE"
    ],
    projects: [
      "Étude de marché en contexte industriel",
      "Conception d'une offre commerciale",
      "Projet RSE et valorisation de déchets"
    ],
    careers: [
      "Chargé de marketing BtoB",
      "Chef de produit",
      "Consultant marketing industriel"
    ]
  },
  {
    id: 2,
    name: "Vente & négociation BtoB",
    color: "bg-accent",
    description: "Former des professionnels capables de mener des ventes simples puis complexes dans des environnements industriels et concurrentiels.",
    objectives: [
      "Préparer et conduire un entretien de vente",
      "Négocier dans le respect d'un cahier des charges",
      "Gérer un portefeuille clients professionnels"
    ],
    skills: [
      "Découverte et analyse du besoin client",
      "Argumentation commerciale",
      "Négociation de prix et conditions",
      "Vente complexe et internationale",
      "Utilisation d'indicateurs de performance"
    ],
    projects: [
      "Simulation de négociation professionnelle",
      "Prospection commerciale BtoB",
      "Projet de vente complexe"
    ],
    careers: [
      "Technico-commercial",
      "Ingénieur commercial",
      "Business developer",
      "Responsable grands comptes"
    ]
  },
  {
    id: 3,
    name: "Communication & relation client",
    color: "bg-green-500",
    description: "Structurer une communication commerciale efficace et piloter la relation client dans une logique durable.",
    objectives: [
      "Concevoir un plan de communication cohérent",
      "Piloter la satisfaction et l'expérience client",
      "Exploiter les outils de la relation client"
    ],
    skills: [
      "Communication commerciale",
      "Plan de communication 360°",
      "Communication digitale",
      "Gestion des réclamations",
      "Pilotage de la satisfaction client"
    ],
    projects: [
      "Plan de communication globale",
      "Création de supports commerciaux",
      "Gestion de la relation client via CRM"
    ],
    careers: [
      "Chargé de communication",
      "Responsable relation client",
      "Consultant CRM"
    ]
  },
  {
    id: 4,
    name: "Culture industrielle & business développement",
    color: "bg-purple-500",
    description: "Développer une culture technique et industrielle permettant de dialoguer avec des interlocuteurs techniques et de participer à la stratégie commerciale.",
    objectives: [
      "Comprendre les environnements industriels",
      "Adapter une offre à une demande client complexe",
      "Participer au développement commercial de l'entreprise"
    ],
    skills: [
      "Analyse technique d'une demande client",
      "Lecture de cahiers des charges",
      "Adaptation de l'offre",
      "Travail en équipe projet",
      "Management commercial"
    ],
    projects: [
      "Projet entrepreneurial",
      "Conception de solutions industrielles",
      "Projet « Course en Cours »"
    ],
    careers: [
      "Technico-commercial industriel",
      "Chef de projet",
      "Consultant Industrie",
      "Ingénieur d'affaires"
    ]
  }
];

const Specialites = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos spécialités
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Le BUT TC-SI repose sur un parcours unique et progressif sur trois années.
            La formation est organisée autour de compétences évaluées chaque année à travers des situations professionnelles, des projets et des mises en pratique concrètes.
          </p>
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-white/95">
              Les enseignements évoluent au fil des années : certains modules apparaissent, d'autres se renforcent, 
              afin de former des profils complets, à la fois commerciaux, techniques et stratégiques.
            </p>
          </div>
        </div>
      </section>

      {/* Spécialités */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {specialties.map((specialty, index) => (
              <Card 
                key={specialty.id} 
                className={`shadow-elegant border-border overflow-hidden ${
                  index % 2 === 0 ? '' : 'md:ml-auto md:mr-0'
                }`}
              >
                <div className={`h-2 ${specialty.color}`} aria-hidden="true"></div>
                <CardHeader>
                  <div className="flex-1">
                    <CardTitle className="text-2xl md:text-3xl mb-3">
                      {specialty.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {specialty.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Objectifs
                      </h3>
                      <ul className="space-y-2">
                        {specialty.objectives.map((objective, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Compétences acquises</h3>
                      <div className="flex flex-wrap gap-2">
                        {specialty.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Exemples de projets</h3>
                      <ul className="space-y-2">
                        {specialty.projects.map((project, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">• {project}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-accent" />
                        Débouchés métiers
                      </h3>
                      <ul className="space-y-2">
                        {specialty.careers.map((career, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-accent">→</span>
                            <span>{career}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section conclusion */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Une formation professionnalisante
            </h2>
            <p className="text-lg text-muted-foreground">
              Une formation fondée sur des compétences évaluées, une progression pédagogique sur trois années 
              et une double culture commerciale et industrielle unique.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialites;
