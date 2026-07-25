"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="register" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[40px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border-white/40 dark:border-white/10"
        >
          <h2 className="text-4xl md:text-[54px] font-bold tracking-tighter mb-6 leading-tight">
            Siap untuk mencapai <br />
            <span className="text-gradient-primary">impianmu?</span>
          </h2>
          <p className="text-[19px] text-muted-foreground mb-10 max-w-xl mx-auto tracking-tight leading-relaxed">
            Bergabunglah dengan banyak siswa yang berhasil meraih impian nya. Daftar sekarang untuk meraih impian anda
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="rounded-full px-8 h-14 text-[17px] font-medium w-full sm:w-auto shadow-xl hover:scale-105 transition-transform group"
              onClick={() => window.open('https://wa.me/6285725824281?text=Halo+Smarter%2C+aku+mau+daftar+di+GrowSmart.edu.+Bisa+dibantu+proses+pendaftarannya+ya%3F+%F0%9F%98%8A', '_blank')}
            >
              Daftar Sekarang
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-[14px] text-muted-foreground mt-4 sm:mt-0 sm:ml-4 font-medium">
              *Kuota kelas terbatas!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
