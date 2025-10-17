import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Briefcase } from "lucide-react";

const specialties = [
  {
    id: 1,
    name: "Marketing & stratégie digitale",
    color: "bg-blue-500",
    description: "Maîtrisez les techniques du marketing moderne appliquées aux entreprises industrielles.",
    objectives: [
      "Développer des stratégies marketing BtoB",
      "Piloter des campagnes digitales multicanales",
      "Analyser les comportements d'achat industriels"
    ],
    skills: [
      "SEO/SEA et webmarketing",
      "Marketing automation",
      "Content marketing",
      "Social media management",
      "Analytics et KPIs"
    ],
    projects: [
      "Création de stratégie marketing pour startup tech",
      "Audit digital et plan d'action SEO",
      "Campagne de lancement produit industriel"
    ],
    careers: [
      "Chef de produit digital",
      "Traffic manager",
      "Growth hacker",
      "Consultant marketing BtoB"
    ]
  },
  {
    id: 2,
    name: "Vente & négociation industrielle",
    color: "bg-orange-500",
    description: "Devenez expert en techniques de vente et négociation dans l'univers industriel.",
    objectives: [
      "Maîtriser les techniques de vente complexe",
      "Conduire des négociations commerciales stratégiques",
      "Gérer un portefeuille clients BtoB"
    ],
    skills: [
      "Techniques de vente consultative",
      "Négociation BtoB avancée",
      "Gestion de la relation client",
      "Prospection et développement commercial",
      "Commerce international"
    ],
    projects: [
      "Simulation de négociation internationale",
      "Plan de prospection BtoB",
      "Étude de satisfaction client"
    ],
    careers: [
      "Ingénieur commercial",
      "Business developer",
      "Account manager",
      "Responsable grands comptes"
    ]
  },
  {
    id: 3,
    name: "Data & intelligence commerciale",
    color: "bg-green-500",
    description: "Exploitez la puissance des données pour optimiser les performances commerciales.",
    objectives: [
      "Analyser et interpréter des données commerciales",
      "Créer des tableaux de bord décisionnels",
      "Piloter la performance par la data"
    ],
    skills: [
      "Business Intelligence",
      "Data mining et analyse prédictive",
      "CRM et automation",
      "Visualisation de données",
      "Excel avancé et SQL"
    ],
    projects: [
      "Dashboard de pilotage des ventes",
      "Analyse prédictive du churn client",
      "Optimisation du pricing data-driven"
    ],
    careers: [
      "Business analyst",
      "Data analyst commercial",
      "Consultant CRM",
      "Revenue operations manager"
    ]
  },
  {
    id: 4,
    name: "Automatisation & systèmes industriels",
    color: "bg-purple-500",
    description: "Intégrez les technologies d'automatisation et d'Industrie 4.0 dans les processus commerciaux.",
    objectives: [
      "Comprendre les enjeux de l'Industrie 4.0",
      "Commercialiser des solutions d'automatisation",
      "Accompagner la transformation digitale"
    ],
    skills: [
      "IoT et objets connectés",
      "Robotique et automatisation",
      "ERP et systèmes d'information",
      "Maintenance prédictive",
      "Gestion de projets techniques"
    ],
    projects: [
      "Étude de cas : déploiement IoT",
      "Cahier des charges solution d'automatisation",
      "Accompagnement transformation digitale PME"
    ],
    careers: [
      "Technico-commercial en automatisation",
      "Chef de projet IoT",
      "Consultant Industrie 4.0",
      "Ingénieur avant-vente"
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
            Le BUT TC-SI propose 4 parcours de spécialisation dès la 2e année, 
            pour vous former aux métiers du commerce et du marketing industriel.
          </p>
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-white/95">
              <strong>Schéma de formation :</strong> Acquisition progressive des compétences → 
              Mise en situation professionnelle → Insertion dans les métiers ciblés
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
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl md:text-3xl mb-3">
                        {specialty.name}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {specialty.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                      Parcours {specialty.id}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Objectifs */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Objectifs de la spécialité
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

                    {/* Compétences */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Compétences acquises</h3>
                      <div className="flex flex-wrap gap-2">
                        {specialty.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Exemples de projets */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Exemples de projets</h3>
                      <ul className="space-y-2">
                        {specialty.projects.map((project, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            • {project}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Débouchés */}
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

      {/* Section complémentaire */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Une formation évolutive et personnalisée
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Les spécialités sont choisies en fin de 1ère année, après une première année commune 
              qui vous permet de découvrir l'ensemble des domaines.
            </p>
            <p className="text-muted-foreground">
              Chaque parcours peut être suivi en alternance dès la 2e année, 
              pour une immersion complète en entreprise.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialites;
