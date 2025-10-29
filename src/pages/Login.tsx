import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import logoImage from "@/assets/logo-palma.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement auth later
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,hsl(25_45%_30%),hsl(35_65%_60%))]">
      <Card className="w-full max-w-md bg-card/90 backdrop-blur-sm shadow-elegant border-none">
        <CardContent className="p-8">
          <div className="flex flex-col items-center mb-6">
            <img src={logoImage} alt="Palmador" className="h-14 mb-2" />
            <h1 className="text-2xl font-serif font-semibold text-chocolate">Connexion</h1>
          </div>
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-sm mb-2">Email</label>
              <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="vous@exemple.com" />
            </div>
            <div>
              <label className="block text-sm mb-2">Mot de passe</label>
              <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder="••••••••" />
            </div>
            <Button type="submit" className="w-full bg-accent text-chocolate hover:bg-accent/90">Se connecter</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;







