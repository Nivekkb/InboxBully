import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  return (
    <div className="min-h-screen mesh-gradient selection:bg-primary/30 text-foreground font-sans">
      <div className="hero-glow absolute inset-0 -z-10" />
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center mb-10">
          <div className="justify-self-start">
            <Button asChild variant="ghost" className="hover:bg-primary/10 hover:text-primary">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-2 justify-self-center">
            <div className="relative w-8 h-8 overflow-hidden rounded-lg shadow-glow">
              <Image src="/images/logo.png" alt="InboxBully Logo" fill className="object-cover" />
            </div>
            <span className="font-bold text-lg tracking-tight gradient-text">InboxBully</span>
          </div>
          <div className="justify-self-end" aria-hidden="true" />
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="bg-card/95 border border-border/60 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold tracking-tight">Create your account</CardTitle>
              <p className="text-muted-foreground mt-2">
                A calm inbox starts with a secure setup.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4 max-w-xs mx-auto">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="h-12 rounded-full px-5 bg-background/90 border-border/70 text-primary placeholder:text-muted-foreground/70"
                />
                <label className="sr-only" htmlFor="password">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="h-12 rounded-full px-5 bg-background/90 border-border/70 text-primary placeholder:text-muted-foreground/70"
                />
              </div>

              <div className="space-y-3 max-w-xs mx-auto">
                <Button asChild className="w-full h-12 rounded-full text-base font-bold" variant="glow">
                  <Link href="/dashboard">
                    <UserPlus className="w-4 h-4" />
                    Create Free Account
                  </Link>
                </Button>
                <Button asChild className="w-full h-12 rounded-full text-base" variant="outline">
                  <Link href="/login">
                    <LogIn className="w-4 h-4" />
                    Login
                  </Link>
                </Button>
              </div>

              <div className="text-xs text-muted-foreground/80 text-center">
                No inbox access is ever taken without your permission. You stay in control at every step.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
