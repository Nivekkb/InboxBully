"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
  ArrowRight,
  CheckCircle2,
  Zap,
  Clock,
  Lock,
  Star,
  Quote,
  Info
} from "lucide-react";

const features = [
  {
    id: "unsubscribe",
    title: "Smart Unsubscribe Defense",
    icon: ShieldCheck,
    summary: "Automatically identifies predatory subscriptions and manipulative marketing funnels.",
    details: {
      identifies: [
        "Predatory subscriptions",
        "Manipulative marketing funnels",
        "\"You subscribed years ago and forgot\" spam",
        "Recurring \"fake urgency\" financial pressure emails"
      ],
      actions: [
        "Bulk unsubscribes safely",
        "Prioritizes financial-impact senders first",
        "Protects important accounts from accidental removal"
      ],
      outcome: "You stop bleeding money and mental energy from unwanted inbox pressure."
    }
  },
  {
    id: "filters",
    title: "Emotional Safety Filters",
    icon: Filter,
    summary: "Protects your nervous system by detecting emails that trigger stress and routing them away.",
    details: {
      folders: ["Bills & Important Accounts", "Renewal Alerts", "Financial Threats / Pressure Emails", "Nice To Check Later", "Trash / Noise"],
      detects: ["Debt threats", "\"URGENT final warning\" manipulation", "Guilt-based marketing", "Payday lending spam"],
      outcome: "Your inbox stops ambushing you emotionally. Softens exposure by routing them to \"Handle When Ready\"."
    }
  },
  {
    id: "cleanup",
    title: "Safe Bulk Cleanup",
    icon: Trash2,
    summary: "Identifies safe-to-delete history with clear explanations and guided modes.",
    details: {
      process: [
        "Reviews your inbox history",
        "Identifies stuff that’s safe to delete in bulk",
        "Explains why it’s safe (\"No account activity in last 12 months\")"
      ],
      modes: ["One-click clean", "Step-by-step guided mode"],
      outcome: "You clean up confidently without worrying you’ll nuke something important."
    }
  },
  {
    id: "prompt",
    title: "\"What Do You Want?\" Mode",
    icon: MessageSquare,
    summary: "The AI-assist magic layer. Just say what you want and InboxBully executes safely.",
    details: {
      examples: [
        "\"Get rid of everything that stresses me out except bills.\"",
        "\"Find emails that might be costing me money.\"",
        "\"Delete shopping spam but leave receipts and warranties.\"",
        "\"Clean this inbox like you would for someone trying to get life back in order.\""
      ],
      outcome: "Feels like having a calm, responsible friend helping organize your life."
    }
  },
  {
    id: "awareness",
    title: "Emotional Awareness",
    icon: AlertTriangle,
    summary: "Gentle warnings for hard-hitting content. Thoughtful, not patronizing.",
    details: {
      warnings: [
        "\"This email mentions collections or debt — do you want to see it now or later?\"",
        "\"This looks like financial threat language. Move to 'Handle When Ready'?\"",
        "\"This looks like pressure messaging. Want help drafting a response?\""
      ],
      outcome: "You stay in control. Your inbox stops feeling like an attack."
    }
  },
  {
    id: "guardrails",
    title: "Human-First Guardrails",
    icon: Heart,
    summary: "Never deletes identity, financial access, or legal emails without confirmation.",
    details: {
      neverDeletes: ["Identity emails", "Financial account access", "Government emails", "Legal notices"],
      features: ["Undo functionality", "Full transparency", "Clear explanations"],
      outcome: "Trust. Calm. Stability."
    }
  }
];

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [demoState, setDemoState] = useState<'before' | 'after'>('before');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen mesh-gradient selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg">
              <Image 
                src="/images/logo.png" 
                alt="InboxBully Logo" 
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold text-xl tracking-tight">InboxBully</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#demo" className="hover:text-primary transition-colors">Demo</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
          </div>
          <Button size="sm" className="rounded-full px-6">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="hero-glow absolute inset-0 -z-10" />
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 py-1 px-4 border-primary/30 text-primary">
              A Free Gift for BillBully Members
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              Thank you for joining me on <br />
              <span className="gradient-text">this adventure.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              InboxBully is my way of saying thanks. It's a full-featured set designed to protect your nervous system and your wallet from inbox pressure.
            </p>
            
            {/* Lead Capture Form */}
            <div className="max-w-md mx-auto mb-12">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    type="email" 
                    placeholder="Enter your email for early access" 
                    className="h-12 rounded-full glass-card border-primary/20 focus:border-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" size="lg" className="rounded-full px-8 h-12 font-semibold shadow-lg shadow-primary/20">
                    Join Waitlist
                  </Button>
                </form>
              ) : (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary font-medium flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  You're on the list! We'll be in touch soon.
                </motion.div>
              )}
            </div>

            {/* Trusted By Section */}
            <div className="mt-16 pt-8 border-t border-border/40">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">Trusted by members from</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="relative w-32 h-12">
                  <Image src="/images/partner-logos.png" alt="Partner Logos" fill className="object-contain" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">See the AI Magic</h2>
            <p className="text-muted-foreground">Visualize how InboxBully protects your nervous system.</p>
          </div>

          <div className="max-w-4xl mx-auto glass-card p-4 lg:p-8">
            <div className="flex justify-center gap-4 mb-8">
              <Button 
                variant={demoState === 'before' ? 'default' : 'outline'}
                onClick={() => setDemoState('before')}
                className="rounded-full"
              >
                Before InboxBully
              </Button>
              <Button 
                variant={demoState === 'after' ? 'default' : 'outline'}
                onClick={() => setDemoState('after')}
                className="rounded-full"
              >
                After InboxBully
              </Button>
            </div>

            <div className="relative min-h-[400px] rounded-xl bg-background/40 border border-border/50 overflow-hidden p-6">
              <AnimatePresence mode="wait">
                {demoState === 'before' ? (
                  <motion.div 
                    key="before"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-4"
                  >
                    <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 flex items-start gap-4">
                      <AlertTriangle className="text-destructive w-6 h-6 shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-destructive">FINAL WARNING: Account Suspension</div>
                        <div className="text-sm opacity-80">Your subscription has expired. Pay now to avoid collections.</div>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 flex items-start gap-4">
                      <Zap className="text-destructive w-6 h-6 shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-destructive">URGENT: 90% OFF ENDS IN 2 HOURS</div>
                        <div className="text-sm opacity-80">Don't miss out on this once-in-a-lifetime predatory offer!</div>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 border border-border flex items-start gap-4 opacity-50">
                      <Clock className="w-6 h-6 shrink-0 mt-1" />
                      <div>
                        <div className="font-bold">Newsletter: Weekly Update #452</div>
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
                    className="space-y-4"
                  >
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 flex items-start gap-4">
                      <ShieldCheck className="text-primary w-6 h-6 shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-primary">Inbox Protected</div>
                        <div className="text-sm opacity-80">3 predatory senders unsubscribed. 2 high-pressure emails moved to "Handle When Ready".</div>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-background/60 border border-border/50 flex items-start gap-4">
                      <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-1" />
                      <div>
                        <div className="font-bold">Bills & Important</div>
                        <div className="text-sm opacity-80">Your electricity bill is ready. No urgency detected.</div>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-background/60 border border-border/50 flex items-start gap-4">
                      <Heart className="text-primary w-6 h-6 shrink-0 mt-1" />
                      <div>
                        <div className="font-bold">Handle When Ready (2)</div>
                        <div className="text-sm opacity-80">Emails with financial language are waiting for you when you're calm.</div>
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
      <section id="features" className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Full Feature Set</h2>
            <p className="text-muted-foreground">Clear, human, and designed for your peace of mind.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.id} className="glow-card flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="text-primary w-6 h-6" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground flex-grow">
                  <p className="mb-6">{feature.summary}</p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="rounded-full w-full group">
                        Learn More
                        <Info className="ml-2 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="glass-card border-primary/20 max-w-2xl">
                      <DialogHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                          <feature.icon className="text-primary w-6 h-6" />
                        </div>
                        <DialogTitle className="text-2xl">{feature.title}</DialogTitle>
                        <DialogDescription className="text-lg text-primary/80">
                          Deep Dive Breakdown
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="mt-6 space-y-6">
                        {feature.details.identifies && (
                          <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Automatically Identifies</h4>
                            <ul className="grid sm:grid-cols-2 gap-3">
                              {feature.details.identifies.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <CheckCircle2 className="text-primary w-4 h-4 shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {feature.details.folders && (
                          <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Meaningful Folders</h4>
                            <div className="flex flex-wrap gap-2">
                              {feature.details.folders.map((folder, i) => (
                                <Badge key={i} variant="secondary" className="bg-primary/5 border-primary/10">{folder}</Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {feature.details.detects && (
                          <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Detects Stress Triggers</h4>
                            <ul className="grid sm:grid-cols-2 gap-3">
                              {feature.details.detects.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <AlertTriangle className="text-destructive w-4 h-4 shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {feature.details.examples && (
                          <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">AI-Assist Magic Layer</h4>
                            <div className="space-y-3">
                              {feature.details.examples.map((example, i) => (
                                <div key={i} className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-sm italic">
                                  {example}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {feature.details.warnings && (
                          <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Thoughtful Warnings</h4>
                            <div className="space-y-3">
                              {feature.details.warnings.map((warning, i) => (
                                <div key={i} className="p-3 rounded-lg bg-background/40 border border-border/50 text-sm">
                                  {warning}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {feature.details.neverDeletes && (
                          <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Safety Guardrails (Never Deletes)</h4>
                            <ul className="grid sm:grid-cols-2 gap-3">
                              {feature.details.neverDeletes.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <Lock className="text-primary w-4 h-4 shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="pt-6 border-t border-border/40">
                          <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
                            <Zap className="text-primary w-5 h-5 shrink-0" />
                            <div>
                              <div className="font-bold text-sm">Core Outcome</div>
                              <div className="text-sm text-muted-foreground">{feature.details.outcome}</div>
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
      <section id="testimonials" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Community Says</h2>
            <p className="text-muted-foreground">Join hundreds of BillBully members who have reclaimed their peace.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah J.",
                role: "BillBully Member",
                content: "I used to wake up to 'Final Warning' emails that ruined my entire day. InboxBully caught them before I even saw them. Life-changing.",
                stars: 5
              },
              {
                name: "Michael R.",
                role: "Early Adopter",
                content: "The 'What Do You Want?' mode is pure magic. I told it to clean my inbox like a calm friend would, and it did exactly that.",
                stars: 5
              },
              {
                name: "Elena K.",
                role: "Stability Seeker",
                content: "Finally, a tool that understands that financial stress is emotional stress. The 'Handle When Ready' folder is my safe space.",
                stars: 5
              }
            ].map((t, i) => (
              <Card key={i} className="glass-card relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{t.name}</CardTitle>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.role}</div>
                </CardHeader>
                <CardContent className="text-muted-foreground italic">
                  "{t.content}"
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="relative w-6 h-6 overflow-hidden rounded">
              <Image 
                src="/images/logo.png" 
                alt="InboxBully Logo" 
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold text-lg tracking-tight">InboxBully</span>
          </div>
          <p className="text-muted-foreground text-sm mb-8">
            A free gift for the BillBully community. Built with care for your peace of mind.
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
          <div className="mt-8 text-xs text-muted-foreground/60">
            © 2026 InboxBully. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
