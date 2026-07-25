"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, GraduationCap, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background overflow-hidden -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] animate-float" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/15 blur-[120px] animate-float-delayed" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8">
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-[80px] font-bold tracking-tighter mb-8 max-w-5xl mx-auto leading-[1.05]"
        >
          Raih Impian dengan <br className="hidden md:block" />
          <span className="text-gradient-primary">Lebih Mudah & Cerdas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[19px] md:text-[22px] text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed tracking-tight"
        >
          Metode belajar interaktif dengan tutor profesional. Kami telah membantu banyak siswa meraih impian nya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Button
            size="lg"
            className="rounded-full px-8 h-14 text-[17px] font-medium shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all w-full sm:w-auto group"
            onClick={() => window.open('https://wa.me/6285725824281?text=Hello+Smarter%2C+aku+mau+info+lebih+lanjut+tentang+GrowSmart.edu+dong.+%3A%29&utm_source=chatgpt.com', '_blank')}
          >
            Info Lengkap
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 h-14 text-[17px] font-medium glass-card hover:bg-white/60 dark:hover:bg-zinc-800/60 w-full sm:w-auto"
            onClick={() => window.open('https://wa.me/6285725824281?text=Halo+Smarter%2C+aku+tertarik+untuk+coba+gratis+program+belajar+di+GrowSmart.edu.+Bisa+info+lebih+lanjut%3F+%F0%9F%98%8A', '_blank')}
          >
            Coba Gratis
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
