import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Building2, MapPin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mouhad",
    company: "BASF",
    position: "Alternant Commercial BtoB",
    location: "Lyon",
    quote: "L'alternance m'a permis de mettre en pratique immédiatement mes connaissances. J'ai pu développer une réelle autonomie et comprendre les enjeux commerciaux dans un environnement industriel exigeant.",
    year: "3e année"
  },
  {
    id: 2,
    name: "Manon",
    company: "JTEKT",
    position: "Alternante Marketing Digital",
    location: "Lyon",
    quote: "Grâce au BUT TC-SI, j'ai découvert le marketing industriel et l'automatisation. Mon entreprise me confie des missions de plus en plus stratégiques.",
    year: "2e année"
  },
  {
    id: 3,
    name: "Aymen",
    company: "Bosch Rexroth",
    position: "Alternant Technico-commercial",
    location: "Vénissieux",
    quote: "Le mélange entre commerce et technique est un vrai atout. Je conseille des solutions industrielles tout en comprenant les contraintes techniques des clients.",
    year: "3e année"
  },
  {
    id: 4,
    name: "Idris",
    company: "SWEGON",
    position: "Alternant Business Intelligence",
    location: "Lyon",
    quote: "J'analyse les données commerciales et je crée des tableaux de bord pour les équipes. Cette expérience me permet de développer des compétences très recherchées dans le secteur industriel.",
    year: "3e année"
  },
];

const companies = [
  { name: "BASF", sector: "Chimie industrielle", location: "Lyon", logo: "/placeholder.svg" },
  { name: "JTEKT", sector: "Équipements automobiles", location: "Lyon", logo: "/placeholder.svg" },
  { name: "Bosch Rexroth", sector: "Systèmes d'entraînement", location: "Vénissieux", logo: "/placeholder.svg" },
  { name: "SWEGON", sector: "Climatisation industrielle", location: "Lyon", logo: "/placeholder.svg" },
  { name: "Schneider Electric", sector: "Automatisation industrielle", location: "Grenoble", logo: "/placeholder.svg" },
  { name: "Siemens", sector: "Technologies industrielles", location: "Lyon", logo: "/placeholder.svg" },
  { name: "ABB", sector: "Robotique & automation", location: "Lyon", logo: "/placeholder.svg" },
  { name: "Festo", sector: "Automatisation pneumatique", location: "Villeurbanne", logo: "/placeholder.svg" },
];

const companyTestimonials = [
  {
    company: "BASF",
    sector: "Chimie industrielle",
    quote: "Les alternants du BUT TC-SI sont opérationnels rapidement. Leur double compétence commerce-technique est un vrai atout.",
    missions: ["Développement commercial", "Support avant-vente", "Animation de formations client"]
  },
  {
    company: "Bosch Rexroth",
    sector: "Systèmes d'entraînement",
    quote: "Nous accueillons chaque année plusieurs étudiants TC-SI. Leur formation correspond parfaitement à nos besoins en BtoB industriel.",
    missions: ["Technico-commercial", "Gestion de projet", "Analyse de données"]
  },
];

const Temoignages = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Témoignages & alternance
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez les expériences de nos alternants et de nos entreprises partenaires. 
            L'alternance, c'est la garantie d'une immersion professionnelle réussie.
          </p>
        </div>
      </section>

      {/* Témoignages alternants */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Paroles d'alternants</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nos étudiants témoignent de leur expérience en entreprise et de l'apport de l'alternance dans leur formation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="shadow-card border-border hover:shadow-elegant transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{testimonial.name}</CardTitle>
                      <CardDescription className="text-base">
                        {testimonial.position}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          {testimonial.company}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {testimonial.location}
                        </Badge>
                      </div>
                    </div>
                    <Quote className="h-8 w-8 text-primary/20 shrink-0" aria-hidden="true" />
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground italic mb-3">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="text-sm text-muted-foreground">
                    — {testimonial.year}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages entreprises */}
      <section className="py-12 md:py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos entreprises partenaires témoignent</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez ce que pensent les entreprises qui accueillent nos alternants.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {companyTestimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card border-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{testimonial.company}</CardTitle>
                      <CardDescription>{testimonial.sector}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg text-muted-foreground italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Types de missions confiées :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {testimonial.missions.map((mission, idx) => (
                        <li key={idx}>• {mission}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Liste des entreprises partenaires */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos entreprises partenaires</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plus de 100 entreprises accueillent nos alternants chaque année dans toute la région Auvergne-Rhône-Alpes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {companies.map((company, index) => (
              <Card key={index} className="shadow-card border-border hover:shadow-elegant transition-all">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <Building2 className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-base">{company.name}</CardTitle>
                  <CardDescription className="text-sm">{company.sector}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="outline" className="flex items-center gap-1 w-fit mx-auto">
                    <MapPin className="h-3 w-3" />
                    {company.location}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comment candidater */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Comment candidater en alternance ?
            </h2>
            
            <div className="space-y-6">
              <Card className="shadow-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge className="bg-primary">1</Badge>
                    Admission au BUT TC-SI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Candidature via Parcoursup (bac général, technologique ou professionnel). 
                    Sélection sur dossier et entretien de motivation.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge className="bg-primary">2</Badge>
                    Recherche d'entreprise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Le département vous accompagne dans votre recherche d'alternance dès le printemps. 
                    CV, lettre de motivation, simulations d'entretiens et mise en relation avec notre réseau.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge className="bg-primary">3</Badge>
                    Signature du contrat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Une fois l'entreprise trouvée, vous signez un contrat d'apprentissage ou de professionnalisation. 
                    Calendrier : en général de septembre à août N+1 (ou N+2 pour la 3e année).
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg text-center">
              <p className="text-muted-foreground mb-4">
                <strong>Besoin d'aide ?</strong> Notre équipe est là pour vous accompagner à chaque étape.
              </p>
              <p className="text-sm text-muted-foreground">
                Contact alternance : <a href="mailto:alternance-tcsi@univ-lyon1.fr" className="text-primary hover:underline">alternance-tcsi@univ-lyon1.fr</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Temoignages;
