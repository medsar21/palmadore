import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Phone, MapPin, Clock, Instagram, MessageCircle, Send, CheckCircle2, User, Mail } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.message) {
      toast({
        title: "Erreur de formulaire",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Message envoyé avec succès !",
        description: "Nous vous contacterons dans les 24 heures.",
      });
    }, 2000);
  };

  const handleNewMessage = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      message: ""
    });
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-chocolate via-chocolate/90 to-copper flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8 shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardContent className="text-center">
              <CheckCircle2 className="h-24 w-24 text-green-500 mx-auto mb-6 animate-scale-in" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-4 animate-slide-up">
                Message Envoyé !
              </h1>
              <p className="text-lg text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Merci <span className="font-semibold text-chocolate">{formData.fullName}</span> pour votre message.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-xl font-semibold text-chocolate mb-3">Prochaines étapes :</h2>
                <ul className="text-left text-gray-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-green-500" />
                    Nous vous contacterons dans les <span className="font-semibold text-chocolate">24 heures maximum</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-green-500" />
                    Nous utiliserons le numéro : <span className="font-semibold">{formData.phone}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-green-500" />
                    Nous répondrons à votre demande concernant : <span className="font-semibold italic">"{formData.message.substring(0, 50)}..."</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <Button 
                  onClick={handleNewMessage}
                  variant="outline"
                  size="lg"
                  className="border-2 border-chocolate text-chocolate hover:bg-chocolate hover:text-white transition-all duration-300"
                >
                  Envoyer un autre message
                </Button>
                <Button 
                  onClick={() => navigate("/")}
                  size="lg"
                  className="bg-gradient-to-r from-chocolate to-copper hover:from-chocolate/90 hover:to-copper/90 text-white font-semibold shadow-elegant transition-all duration-300"
                >
                  Retour à l'accueil
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-chocolate via-chocolate/90 to-copper py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-3 sm:mb-4">
            Contactez-Nous
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Nous sommes à votre écoute pour réaliser vos projets chocolatés. 
            Remplissez le formulaire ci-dessous et nous vous contacterons dans les 24 heures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Formulaire de contact */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-chocolate to-copper rounded-full flex items-center justify-center">
                  <Send className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-chocolate">
                  Envoyez-nous un message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-chocolate font-semibold mb-2 block">
                    <User className="h-4 w-4 inline mr-2" />
                    Nom Complet *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Votre nom complet"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-gray-200 focus:border-chocolate focus:ring-4 focus:ring-chocolate/10 transition-all duration-300 py-2 sm:py-3 text-sm sm:text-base w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-chocolate font-semibold mb-2 block">
                    <Phone className="h-4 w-4 inline mr-2" />
                    Numéro de téléphone *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Votre numéro de téléphone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-gray-200 focus:border-chocolate focus:ring-4 focus:ring-chocolate/10 transition-all duration-300 py-2 sm:py-3 text-sm sm:text-base w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-chocolate font-semibold mb-2 block">
                    <MessageCircle className="h-4 w-4 inline mr-2" />
                    Votre message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre demande, projet ou question..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="border-2 border-gray-200 focus:border-chocolate focus:ring-4 focus:ring-chocolate/10 transition-all duration-300 text-base resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-gradient-to-r from-chocolate to-copper hover:from-chocolate/90 hover:to-copper/90 text-white font-semibold py-3 sm:py-4 text-sm sm:text-base shadow-elegant hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-elegant">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent mb-3 sm:mb-4">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-chocolate" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Téléphone</h3>
                <div className="space-y-1 sm:space-y-2">
                  <a href="tel:+212530562079" className="text-white/80 hover:text-accent transition-colors block text-sm sm:text-lg">
                    +212 530 56 20 79
                  </a>
                  <a href="tel:+212660436040" className="text-white/80 hover:text-accent transition-colors block text-sm sm:text-lg">
                    +212 660 43 60 40
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                  <MapPin className="h-8 w-8 text-chocolate" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Adresse</h3>
                <p className="text-white/80 text-lg">
                  Kenitra, Maroc
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                  <Clock className="h-8 w-8 text-chocolate" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Horaires</h3>
                <div className="text-white/80 space-y-1">
                  <p className="text-lg">Lun - Ven: 9h00 - 18h00</p>
                  <p className="text-lg">Sam: 9h00 - 16h00</p>
                  <p className="text-lg">Dim: Fermé</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                  <Instagram className="h-8 w-8 text-chocolate" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Réseaux Sociaux</h3>
                <Button 
                  size="lg"
                  onClick={() => window.open('https://wa.me/+212660436040', '_blank')}
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-8 shadow-elegant w-full"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
