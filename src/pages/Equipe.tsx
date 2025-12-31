import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Linkedin } from "lucide-react";
import teamImage from "@/assets/team-image.jpg";

// Équipe pédagogique officielle
const teachers = [
  {
    id: 1,
    name: "FLAMANT Nicolas",
    role: "Chef de département / Professeur de techniques",
    speciality: "Mécanique",
    courses: ["Techniques mécaniques", "Conception industrielle", "Analyse de systèmes mécaniques"],
    linkedin: "https://linkedin.com",
    showLinkedin: true,
    image: "/images-equipe/flamant.png"
  },
  {
    id: 2,
    name: "LAURANT Fabienne",
    role: "Professeure",
    speciality: "Vente et Marketing",
    courses: ["Techniques de vente", "Marketing opérationnel", "Négociation commerciale"],
    linkedin: null,
    showLinkedin: false,
    image: "/images-equipe/laurant.png"
  },
  {
    id: 3,
    name: "SELO Catherine",
    role: "Intervenante professionnelle",
    speciality: "Communication 360°",
    courses: ["Communication globale", "Stratégie de marque", "Communication digitale et événementielle"],
    linkedin: "https://linkedin.com",
    showLinkedin: true,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "MARATIER Julien",
    role: "Professeur",
    speciality: "Économie et Gestion",
    courses: ["Économie d'entreprise", "Gestion", "Analyse financière"],
    linkedin: null,
    showLinkedin: false,
    image: "/images-equipe/maratier.png"
  },
  {
    id: 5,
    name: "KOMBAYA Vital",
    role: "Docteur et chercheur / Professeur",
    speciality: "Robotique et Technologies de capteurs",
    courses: ["Robotique industrielle", "Technologies des capteurs", "Excel avancé"],
    linkedin: "https://linkedin.com",
    showLinkedin: true,
    image: "/images-equipe/kombaya.png"
  },
  {
    id: 6,
    name: "BOUZID Mohammed",
    role: "Professeur",
    speciality: "Économie et Gestion",
    courses: ["Économie d'entreprise", "Gestion", "Analyse financière"],
    linkedin: null,
    showLinkedin: false,
    image: "/images-equipe/bouzid.png"
  },
];

const specialties = ["Tous", "Mécanique", "Vente et Marketing", "Communication 360°", "Économie et Gestion", "Robotique et Technologies de capteurs"];

const Equipe = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("Tous");

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSpecialty = selectedSpecialty === "Tous" || teacher.speciality === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={teamImage} 
            alt="" 
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Notre équipe pédagogique
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Une équipe d'enseignants-chercheurs et de professionnels passionnés, experts dans leurs domaines, 
            dédiée à votre réussite.
          </p>
        </div>
      </section>

      {/* Filtres et recherche */}
      <section className="py-8 border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Barre de recherche */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher un enseignant ou un cours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
                aria-label="Rechercher un enseignant"
              />
            </div>

            {/* Filtres par spécialité */}
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty) => (
                <Button
                  key={specialty}
                  variant={selectedSpecialty === specialty ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSpecialty(specialty)}
                  className="text-sm"
                >
                  {specialty}
                </Button>
              ))}
            </div>
          </div>

          {filteredTeachers.length > 0 && (
            <p className="mt-4 text-sm text-muted-foreground">
              {filteredTeachers.length} enseignant{filteredTeachers.length > 1 ? 's' : ''} trouvé{filteredTeachers.length > 1 ? 's' : ''}
            </p>
          )}
        </div>
      </section>

      {/* Liste des enseignants */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTeachers.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTeachers.map((teacher) => (
                <Card key={teacher.id} className="shadow-card border-border hover:shadow-elegant transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <img 
                        src={teacher.image} 
                        alt={`Photo de ${teacher.name}`}
                        className="w-16 h-16 rounded-full object-cover bg-secondary"
                      />
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{teacher.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {teacher.role}
                        </CardDescription>
                        <Badge variant="secondary" className="mt-2">
                          {teacher.speciality}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Cours enseignés :</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {teacher.courses.map((course, index) => (
                          <li key={index}>• {course}</li>
                        ))}
                      </ul>
                    </div>
                    {teacher.showLinkedin && teacher.linkedin && (
                      <div className="flex gap-2 pt-2 border-t border-border">
                        <a 
                          href={teacher.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded"
                          aria-label={`Voir le profil LinkedIn de ${teacher.name}`}
                        >
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                Aucun enseignant trouvé avec ces critères.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Equipe;
