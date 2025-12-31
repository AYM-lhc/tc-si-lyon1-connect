import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Briefcase, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="" 
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              IUT Lyon 1
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              BUT TC-SI
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-4">
              Techniques de Commercialisation – Systèmes Industriels
            </p>
            <p className="text-lg text-white/90 mb-8 max-w-2xl">
              Formez-vous aux métiers du commerce et du marketing appliqués aux systèmes industriels. 
              Une formation en 3 ans alliant compétences commerciales et techniques, avec possibilité d'alternance.
            </p>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que le BUT ? */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Qu'est-ce que le BUT ?</h2>
            <p className="text-lg text-muted-foreground">
              Le Bachelor Universitaire de Technologie (BUT) est un diplôme national en 3 ans qui combine 
              enseignements théoriques, pratiques et projets professionnels. Le BUT TC-SI forme des professionnels 
              capables de développer des solutions commerciales adaptées aux entreprises industrielles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="shadow-card border-border hover:shadow-elegant transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>3 ans de formation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  180 crédits ECTS répartis sur 6 semestres, avec une montée en compétences progressive et 
                  des périodes en entreprise.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border hover:shadow-elegant transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Alternance possible</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Possibilité de suivre la formation en alternance dès la 2e année pour une immersion 
                  professionnelle complète.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border hover:shadow-elegant transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Grade licence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Diplôme reconnu Bac+3 permettant une insertion professionnelle directe ou la poursuite 
                  d'études en master.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stages et débouchés */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Stages et débouchés</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="shadow-card border-border hover:shadow-elegant transition-all min-h-[200px]">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-center">Stage ouvrier 1ère année</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Stage de 4 semaines en première année pour découvrir le métier d'ouvrier et 
                  comprendre les réalités du terrain industriel.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border hover:shadow-elegant transition-all min-h-[200px]">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-center">Stage commercial 2ème année</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Possibilité de stage commercial de 10 semaines en deuxième année pour développer 
                  vos compétences en vente et relation client.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border hover:shadow-elegant transition-all min-h-[200px]">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-center">Poursuite<br />d'études</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Possibilité de poursuite d'études en master dans les domaines du commerce, 
                  du marketing, de la gestion ou de l'ingénierie industrielle.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border hover:shadow-elegant transition-all min-h-[200px]">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-center">Métiers après le BUT</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Chargé d'affaires, technico-commercial, responsable des ventes, 
                  chef de produit, ou encore conseiller commercial dans l'industrie.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Points forts */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nos points forts</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card border-border hover:shadow-elegant transition-all">
              <CardHeader>
                <Users className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-xl">Accompagnement personnalisé</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Groupes à taille humaine, suivi individuel et coaching pour votre réussite.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border hover:shadow-elegant transition-all">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-xl">Projets concrets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Travaillez sur des cas réels d'entreprises dès la première année.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border hover:shadow-elegant transition-all">
              <CardHeader>
                <Briefcase className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-xl">Réseau d'entreprises</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Plus de 100 partenaires industriels pour vos stages et alternances.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border hover:shadow-elegant transition-all">
              <CardHeader>
                <Award className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-xl">Excellents débouchés</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  95% d'insertion professionnelle dans les 6 mois après le diplôme.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à rejoindre le BUT TC-SI ?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Découvrez nos spécialités, nos projets étudiants et contactez-nous pour toute question.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/specialites">
              <Button size="lg" className="shadow-elegant">
                Découvrir les spécialités
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
