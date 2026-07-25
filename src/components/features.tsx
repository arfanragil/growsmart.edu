"use client";

import { motion } from "framer-motion";
import { BookOpen, Video, BarChart, Users, Trophy, Settings } from "lucide-react";

const features = [
  {
    title: "Tutor Berpengalaman",
    description: "Belajar langsung dari tutor lulusan PTN terbaik yang siap membantu memahami konsep dari dasar.",
    icon: <Users className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/10 to-transparent",
  },
  {
    title: "Modul Lengkap",
    description: "Akses ribuan bank soal dan materi terupdate sesuai kurikulum terbaru.",
    icon: <BookOpen className="w-6 h-6" />,
    className: "md:col-span-1",
  },
  {
    title: "Kelas Interaktif",
    description: "Live class dua arah dengan ukuran kelas kecil untuk fokus maksimal.",
    icon: <Video className="w-6 h-6" />,
    className: "md:col-span-1",
  },
  {
    title: "Tryout Berkala",
    description: "Simulasi ujian berbasis CBT yang mirip dengan ujian aslinya.",
    icon: <Settings className="w-6 h-6" />,
    className: "md:col-span-1",
  },
  {
    title: "Analisis Perkembangan",
    description: "Pantau nilai dan identifikasi kelemahanmu secara otomatis melalui dashboard pintar kami.",
    icon: <BarChart className="w-6 h-6" />,
    className: "md:col-span-2 bg-gradient-to-bl from-indigo-500/10 to-transparent",
  },
  {
    title: "Konsultasi PR",
    description: "Tanya PR dan dapatkan pembahasan lengkap.",
    icon: <Trophy className="w-6 h-6" />,
    className: "md:col-span-1",
  },
];

export function Features() {
  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-950/50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-[54px] font-bold tracking-tighter mb-6 leading-tight"
          >
            Fasilitas <span className="text-gradient-primary">Premium</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[19px] text-muted-foreground tracking-tight leading-relaxed"
          >
            Semua yang kamu butuhkan untuk mencapai nilai maksimal dan lolos ke kampus impian, dirancang khusus untuk generasi modern.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 0.99 }}
              className={`p-6 md:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-border/50 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group overflow-hidden relative ${feature.className}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />

              <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-tight mb-2">{feature.title}</h3>
                <p className="text-[15px] text-muted-foreground font-medium leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
