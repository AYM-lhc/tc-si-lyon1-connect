import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nous contacter
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Une question sur la formation, l'admission ou l'alternance ? 
            Notre équipe est à votre écoute pour vous accompagner dans votre projet.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Formulaire */}
            <Card className="shadow-elegant border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et nous vous répondrons rapidement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        required 
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        required 
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      required 
                      placeholder="votre.email@exemple.fr"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel" 
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Objet de votre demande *</Label>
                    <Select name="subject" required>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Sélectionnez un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admission">Admission / Candidature</SelectItem>
                        <SelectItem value="alternance">Alternance</SelectItem>
                        <SelectItem value="formation">Contenu de la formation</SelectItem>
                        <SelectItem value="visite">Visite du campus</SelectItem>
                        <SelectItem value="autre">Autre question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Votre message *</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      required 
                      placeholder="Décrivez votre demande en quelques lignes..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full shadow-elegant"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    * Champs obligatoires
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Informations pratiques */}
            <div className="space-y-6">
              <Card className="shadow-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Adresse
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <address className="not-italic text-muted-foreground">
                    <strong className="text-foreground">Département BUT TC-SI</strong><br />
                    IUT Lyon 1 - Site de Villeurbanne<br />
                    43 Boulevard du 11 novembre 1918<br />
                    69622 Villeurbanne Cedex
                  </address>
                  <div className="mt-4">
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring rounded"
                    >
                      Voir sur Google Maps →
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Téléphone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Secrétariat pédagogique :</p>
                  <a 
                    href="tel:+33472692020" 
                    className="text-lg font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded"
                  >
                    04 72 69 20 20
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Contact général :</p>
                    <a 
                      href="mailto:contact@iut.univ-lyon1.fr" 
                      className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded"
                    >
                      contact@iut.univ-lyon1.fr
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Alternance :</p>
                    <a 
                      href="mailto:alternance-tcsi@univ-lyon1.fr" 
                      className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded"
                    >
                      alternance-tcsi@univ-lyon1.fr
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Horaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Secrétariat ouvert :</strong><br />
                      Lundi - Vendredi : 9h00 - 12h00 / 14h00 - 17h00
                    </p>
                    <p className="text-sm">
                      Fermé les week-ends et jours fériés
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Questions fréquentes</h2>
            
            <div className="space-y-4">
              <Card className="shadow-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Comment candidater au BUT TC-SI ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Les candidatures se font via Parcoursup entre janvier et mars. 
                    Vous devez avoir un bac général, technologique ou professionnel. 
                    La sélection se fait sur dossier et entretien de motivation.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Quand débute l'alternance ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    L'alternance est possible dès la 2e année du BUT. 
                    Nous vous accompagnons dans la recherche d'entreprise dès le printemps précédant votre entrée en alternance.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Quel est le calendrier de formation ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Le BUT se déroule sur 3 ans (6 semestres). 
                    En formation initiale, vous alternez cours, projets et stages. 
                    En alternance, vous alternez 2 à 3 semaines en entreprise et 1 à 2 semaines à l'IUT.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Puis-je visiter le campus ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Oui ! Nous organisons des journées portes ouvertes chaque année (en janvier et mars). 
                    Vous pouvez également nous contacter pour une visite personnalisée en prenant rendez-vous.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
