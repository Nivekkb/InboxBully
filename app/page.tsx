"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  ShieldCheck, 
  Filter, 
  Trash2, 
  MessageSquare, 
  AlertTriangle, 
  Heart, 
  CheckCircle2,
  Zap,
  Clock,
  Lock,
  Star,
  Quote,
  Info,
  LogIn,
  UserPlus,
  ShieldAlert,
  Undo2
} from "lucide-react";

const features = [
  {
    id: "unsubscribe",
    title: "Smart Unsubscribe Defense",
    icon: ShieldCheck,
    summary: "Neutralize predatory funnels before they bleed you dry. InboxBully identifies and shuts down aggressive marketing loops automatically.",
    details: {
      identifies: [
        "Predatory subscriptions",
        "Manipulative marketing funnels",
        "Hidden recurring charges",
        "Fake urgency pressure tactics"
      ],
      actions: [
        "Bulk unsubscribes with one click",
        "Prioritizes high-cost senders",
        "Protects essential accounts"
      ],
      outcome: "Reclaim your mental energy and stop unwanted financial leaks."
    }
  },
  {
    id: "filters",
    title: "Emotional Safety Filters",
    icon: Filter,
    summary: "Your inbox shouldn’t ambush you. Stress-inducing emails get routed to a safe space until you’re ready.",
    details: {
      folders: ["Essential Accounts", "Renewal Alerts", "Handle When Ready", "Noise Filter"],
      detects: ["Debt threats", "Guilt-based marketing", "Aggressive collections", "High-pressure spam"],
      outcome: "Soften the blow. View sensitive information only when you are emotionally ready."
    }
  },
  {
    id: "cleanup",
    title: "Confident Bulk Cleanup",
    icon: Trash2,
    summary: "Reduce the clutter without fear. InboxBully explains every deletion in plain language so you always understand why.",
    details: {
      process: [
        "Deep history analysis",
        "Identifies safe-to-delete noise",
        "Explains exactly why it's safe"
      ],
      modes: ["One-tap purge", "Guided review mode"],
      outcome: "A clean slate without the anxiety of losing something important."
    }
  },
  {
    id: "prompt",
    title: "Human-Language Control",
    icon: MessageSquare,
    summary: "Say what you want in normal words. InboxBully organizes your inbox like a trusted friend would.",
    details: {
      examples: [
        "\"Remove everything that stresses me out except my bills.\"",
        "\"Find every subscription that's costing me money.\"",
        "\"Delete the shopping noise but keep my warranties.\"",
        "\"Help me get my life back in order.\""
      ],
      outcome: "Complex organization handled through simple, calm conversation."
    }
  },
  {
    id: "awareness",
    title: "Emotional Awareness",
    icon: AlertTriangle,
    summary: "Gentle, thoughtful warnings for hard-hitting financial content. You stay in control, not your anxiety.",
    details: {
      warnings: [
        "\"This email mentions debt — view now or save for later?\"",
        "\"Detected financial pressure language. Move to safety?\"",
        "\"This looks like a manipulative tactic. Want a draft response?\""
      ],
      outcome: "Your inbox stops feeling like an attack and starts feeling like a tool."
    }
  },
  {
    id: "guardrails",
    title: "Human-First Guardrails",
    icon: Heart,
    summary: "Absolute safety. InboxBully never touches your most critical documents without you.",
    details: {
      neverDeletes: ["Identity documents", "Financial access", "Government notices", "Legal records"],
      features: ["Instant Undo", "Full transparency", "Human-readable logs"],
      outcome: "Stability and trust. You are always the one in the driver's seat."
    }
  }
];

export default function LandingPage() {
  const [demoState, setDemoState] = useState<'before' | 'after'>('before');

  return (
    <div className="min-h-screen mesh-gradient selection:bg-primary/30 text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg shadow-glow">
              <Image 
                src="/images/logo.png" 
                alt="InboxBully Logo" 
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold text-xl tracking-tight gradient-text">InboxBully</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#trust" className="hover:text-primary transition-colors">Safety</a>
            <a href="#demo" className="hover:text-primary transition-colors">Demo</a>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="hidden sm:flex hover:bg-primary/10 hover:text-primary">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild size="sm" variant="glow" className="rounded-full px-6">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="hero-glow absolute inset-0 -z-10" />
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge variant="outline" className="mb-6 py-1 px-4 border-primary/30 text-primary animate-pulse-slow bg-primary/5">
              A Free Gift for BillBully Members
            </Badge>
            <h1 className="text-5xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
              Protect your <br />
              <span className="gradient-text">nervous system.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              Email shouldn’t put you into fight-or-flight. InboxBully shields you from financial stress emails so you can breathe, think, and stay in control.
            </p>
            
            {/* Signup/Login Path */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button asChild size="lg" variant="glow" className="rounded-full px-10 h-14 font-bold text-lg group">
                <Link href="/signup">
                  <UserPlus className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Create Free Account
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-10 h-14 font-medium text-base glass-card border-primary/20 hover:border-primary/50 group transition-all text-foreground/80">
                <Link href="/login">
                  <LogIn className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Login
                </Link>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground/80 mb-10">
              No inbox access is ever taken without your permission. You stay in control at every step.
            </div>

            {/* Trusted By Section */}
            <div className="mt-16 pt-8 border-t border-border/20 max-w-4xl mx-auto">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-8 font-semibold">Trusted by members from</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="relative w-32 h-12">
                  <Image src="/images/partner-logos.png" alt="Partner Logos" fill className="object-contain" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Wall Section */}
      <section id="trust" className="py-24 relative bg-background/30 border-y border-border/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4 text-center md:text-left">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <ShieldAlert className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Absolute Privacy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don’t sell, rent, share, or trade your data—ever. Your financial life is personal, and we treat it with the dignity it deserves.
                </p>
              </div>
              <div className="space-y-4 text-center md:text-left">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <Lock className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Safety Guardrails</h3>
                <p className="text-muted-foreground leading-relaxed">
                  InboxBully never deletes financial, government, legal, or identity documents without explicit confirmation. We only touch what you approve.
                </p>
              </div>
              <div className="space-y-4 text-center md:text-left">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <Undo2 className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Total Control</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Undo is always available. Every action is logged in plain English so you always know exactly what happened and why.
                </p>
              </div>
            </div>
            <div className="mt-16 p-6 rounded-2xl glass-card border-primary/10 text-center">
              <p className="text-primary font-medium italic">
                "Your inbox should be a tool for your life—not a weapon against your nervous system."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">See the Relief</h2>
            <p className="text-muted-foreground text-lg">Experience the calm of an InboxBully-protected workspace.</p>
          </div>

          <div className="max-w-4xl mx-auto glass-card p-2 lg:p-4 shadow-glow">
            <div className="flex justify-center gap-2 p-4 bg-background/20 rounded-t-xl border-b border-border/20">
              <Button 
                variant={demoState === 'before' ? 'glow' : 'ghost'}
                onClick={() => setDemoState('before')}
                className="rounded-full px-6"
              >
                Before
              </Button>
              <Button 
                variant={demoState === 'after' ? 'glow' : 'ghost'}
                onClick={() => setDemoState('after')}
                className="rounded-full px-6"
              >
                After
              </Button>
            </div>

            <div className="relative min-h-[450px] bg-background/40 overflow-hidden p-6 lg:p-10">
              <AnimatePresence mode="wait">
                {demoState === 'before' ? (
                  <motion.div 
                    key="before"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20 flex items-start gap-4 shadow-sm">
                      <AlertTriangle className="text-destructive w-6 h-6 shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-destructive text-lg">FINAL WARNING: Account Suspension</div>
                        <div className="text-muted-foreground">Your subscription has expired. Pay now to avoid collections.</div>
                      </div>
                    </div>
                    <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20 flex items-start gap-4 shadow-sm">
                      <Zap className="text-destructive w-6 h-6 shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-destructive text-lg">URGENT: 90% OFF ENDS IN 2 HOURS</div>
                        <div className="text-muted-foreground">Don't miss out on this once-in-a-lifetime predatory offer!</div>
                      </div>
                    </div>
                    <div className="p-5 rounded-xl bg-muted/20 border border-border/50 flex items-start gap-4 opacity-40">
                      <Clock className="w-6 h-6 shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-lg">Newsletter: Weekly Update #452</div>
                        <div className="text-sm">Here is some content you haven't read in 3 years.</div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="after"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="p-5 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-4 glass-card shadow-glow-strong">
                      <ShieldCheck className="text-primary w-6 h-6 shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-primary text-lg">Inbox Protected</div>
                        <div className="text-muted-foreground">3 predatory senders neutralized. 2 high-pressure emails moved to "Handle When Ready".</div>
                      </div>
                    </div>
                    <div className="p-5 rounded-xl bg-background/60 border border-border/30 flex items-start gap-4 glass-card">
                      <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-lg">Essential: Utility Bill</div>
                        <div className="text-muted-foreground">Your electricity bill is ready. No manipulative language detected.</div>
                      </div>
                    </div>
                    <div className="p-5 rounded-xl bg-background/60 border border-border/30 flex items-start gap-4 glass-card">
                      <Heart className="text-primary w-6 h-6 shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-lg">Handle When Ready (2)</div>
                        <div className="text-muted-foreground">Sensitive financial updates are waiting for you when you're calm.</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section id="features" className="py-24 bg-background/50">
        <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4 tracking-tight">Built for Humans</h2>
          <p className="text-muted-foreground text-lg">Thoughtful technology designed for your peace of mind.</p>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.id} className="glow-card flex flex-col border-primary/5 hover:border-primary/20 transition-all duration-500 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="text-primary w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl text-primary tracking-tight">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground flex-grow">
                  <p className="mb-8 text-lg leading-relaxed">{feature.summary}</p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="rounded-full w-full group border-primary/10 hover:border-primary/40 bg-primary/5">
                        Deep Dive
                        <Info className="ml-2 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="glass-card border-primary/20 max-w-2xl bg-background/98 p-8">
                      <DialogHeader>
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                          <feature.icon className="text-primary w-7 h-7" />
                        </div>
                        <DialogTitle className="text-3xl font-bold tracking-tight text-primary">{feature.title}</DialogTitle>
                        <DialogDescription className="text-xl text-primary/60 mt-2">
                          How it protects you
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="mt-8 space-y-8">
                        {feature.details.identifies && (
                          <div>
                            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Automatic Detection</h4>
                            <ul className="grid sm:grid-cols-2 gap-4">
                              {feature.details.identifies.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm">
                                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                                  <span className="text-foreground/80">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {feature.details.folders && (
                          <div>
                            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Smart Organization</h4>
                            <div className="flex flex-wrap gap-2">
                              {feature.details.folders.map((folder, i) => (
                                <Badge key={i} variant="secondary" className="bg-primary/10 border-primary/20 text-primary px-3 py-1">{folder}</Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {feature.details.detects && (
                          <div>
                            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Stress Triggers</h4>
                            <ul className="grid sm:grid-cols-2 gap-4">
                              {feature.details.detects.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm">
                                  <ShieldAlert className="text-destructive w-5 h-5 shrink-0" />
                                  <span className="text-foreground/80">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {feature.details.examples && (
                          <div>
                            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">AI Assistant Examples</h4>
                            <div className="space-y-3">
                              {feature.details.examples.map((example, i) => (
                                <div key={i} className="p-4 rounded-xl bg-primary/5 border border-primary/10 text-sm italic text-primary/90">
                                  "{example}"
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="pt-8 border-t border-border/20">
                          <div className="flex items-center gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/10">
                            <Zap className="text-primary w-6 h-6 shrink-0" />
                            <div>
                              <div className="font-bold text-sm text-primary uppercase tracking-wider">Core Outcome</div>
                              <div className="text-foreground/70 mt-1">{feature.details.outcome}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Member Stories</h2>
            <p className="text-muted-foreground text-lg">Real experiences from the BillBully community.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah J.",
                role: "BillBully Member",
                content: "I used to wake up to 'Final Warning' emails that ruined my day before I even stood up. InboxBully caught them before I saw them. Honest relief.",
                stars: 5
              },
              {
                name: "Michael R.",
                role: "Early Adopter",
                content: "I didn’t realize how much my inbox was stressing me out until it stopped. The 'Handle When Ready' folder is my safe space.",
                stars: 5
              },
              {
                name: "Elena K.",
                role: "Stability Seeker",
                content: "This is the first tool that understands financial stress isn’t just numbers—it’s emotional pressure. It helped me breathe again.",
                stars: 5
              }
            ].map((t, i) => (
              <Card key={i} className="glass-card relative border-primary/5 hover:border-primary/20 transition-all duration-500 p-2">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/5" />
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-xl text-primary tracking-tight">{t.name}</CardTitle>
                  <div className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold">{t.role}</div>
                </CardHeader>
                <CardContent className="text-muted-foreground italic text-lg leading-relaxed">
                  "{t.content}"
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="py-24 bg-background/50 border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto glass-card p-8 lg:p-12 border-primary/10">
            <div className="text-center mb-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-3 tracking-tight">Privacy Policy</h2>
              <p className="text-muted-foreground text-lg">Your inbox is personal. We treat it that way.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 text-sm lg:text-base text-muted-foreground leading-relaxed">
              <div className="space-y-6">
                <div>
                  <h3 className="text-foreground font-bold text-lg mb-2">What we collect</h3>
                  <p>Account details (email, name) and the minimum metadata required to operate InboxBully. If you connect an email provider, we process message data only to deliver the features you request.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg mb-2">How we use it</h3>
                  <p>To filter, organize, and protect your inbox, provide customer support, and improve product reliability. We do not sell, rent, or trade personal information.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg mb-2">Sharing</h3>
                  <p>We share data only with trusted processors that help run the service (hosting, analytics, email delivery) under strict confidentiality obligations.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-foreground font-bold text-lg mb-2">Security</h3>
                  <p>We use encryption in transit, access controls, and audit logs. No system is perfect, but we build for safety first.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg mb-2">Your choices</h3>
                  <p>You can request access, correction, export, or deletion of your data at any time. Disconnect your email account to stop processing.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg mb-2">Contact</h3>
                  <p>Email us at support@inboxbully.com for privacy requests. We respond within a reasonable timeframe.</p>
                </div>
              </div>
            </div>
            <div className="mt-10 text-xs text-muted-foreground/70 text-center">
              Effective date: January 1, 2026. We may update this policy with notice on this page.
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Section */}
      <section id="terms" className="py-24 bg-background/30 border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto glass-card p-8 lg:p-12 border-primary/10">
            <div className="text-center mb-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-3 tracking-tight">Terms of Service</h2>
              <p className="text-muted-foreground text-lg">Simple rules, clear boundaries.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 text-sm lg:text-base text-muted-foreground leading-relaxed">
              <div className="space-y-6">
                <div>
                  <h3 className="text-foreground font-bold text-lg mb-2">Acceptance</h3>
                  <p>By using InboxBully, you agree to these terms and our Privacy Policy. If you don’t agree, do not use the service.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg mb-2">Accounts</h3>
                  <p>You’re responsible for your account activity and for keeping access credentials secure.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg mb-2">Acceptable use</h3>
                  <p>Don’t misuse the service, attempt to break it, or use it for unlawful or abusive purposes.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg mb-2">Subscriptions</h3>
                  <p>Paid plans, if offered, renew until canceled. Pricing and features can change with prior notice.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-foreground font-bold text-lg mb-2">Service limits</h3>
                  <p>InboxBully depends on third-party email providers. We can’t guarantee uninterrupted access or provider availability.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg mb-2">Disclaimers</h3>
                  <p>The service is provided “as is.” We don’t provide legal, financial, or medical advice.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg mb-2">Termination</h3>
                  <p>You can stop using the service at any time. We may suspend accounts for violations of these terms.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg mb-2">Contact</h3>
                  <p>Questions? Email support@inboxbully.com.</p>
                </div>
              </div>
            </div>
            <div className="mt-10 text-xs text-muted-foreground/70 text-center">
              Effective date: January 1, 2026. We may update these terms with notice on this page.
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-background/50 border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass-card p-8 border-primary/10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Support</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Need help or have a privacy request? We’re here for you.
            </p>
            <Button asChild variant="outline" className="rounded-full px-8">
              <a href="mailto:support@inboxbully.com">Email support@inboxbully.com</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-border/20 bg-background/30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="relative w-8 h-8 overflow-hidden rounded-lg shadow-glow">
              <Image 
                src="/images/logo.png" 
                alt="InboxBully Logo" 
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold text-2xl tracking-tight gradient-text">InboxBully</span>
          </div>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            A free gift for the BillBully community. Built with care for your peace of mind.
          </p>
          <div className="flex justify-center gap-10 text-sm font-bold uppercase tracking-widest text-muted-foreground/60 mb-12">
            <a href="#privacy" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-primary transition-colors">Terms</a>
            <a href="#support" className="hover:text-primary transition-colors">Support</a>
          </div>
          <div className="text-xs text-muted-foreground/40 font-medium">
            © 2026 InboxBully. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
