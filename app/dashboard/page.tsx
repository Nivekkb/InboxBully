import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPlaceholder() {
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

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/95 border border-border/60 shadow-lg text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold tracking-tight">Dashboard Placeholder</CardTitle>
              <p className="text-muted-foreground mt-2">
                You’re in the right place. The real dashboard is coming next.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-widest">Coming Soon</span>
              </div>
              <p className="text-muted-foreground">
                This is a placeholder screen so navigation works while you move projects.
              </p>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link href="/">
                  Back to landing page
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
