"use client";

import { BookOpen, User, Leaf, Star, Palette, Circle } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const philosophyItems = [
  {
    title: "Buku Terbuka",
    description: "Melambangkan ilmu pengetahuan, proses belajar, dan keterbukaan terhadap wawasan baru.",
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    color: "bg-blue-50/50",
  },
  {
    title: "Figur Manusia",
    description: "Melambangkan semangat belajar, rasa percaya diri, serta keberhasilan dalam meraih prestasi.",
    icon: <User className="w-8 h-8 text-blue-600" />,
    color: "bg-blue-50/50",
  },
  {
    title: "Daun yang Tumbuh",
    description: 'Melambangkan pertumbuhan kemampuan, karakter, dan potensi setiap peserta didik. Kata "Grow" diwujudkan melalui elemen ini.',
    icon: <Leaf className="w-8 h-8 text-blue-600" />,
    color: "bg-blue-50/50",
  },
  {
    title: "Bintang",
    description: "Melambangkan cita-cita, prestasi, kecerdasan, dan masa depan yang gemilang.",
    icon: <Star className="w-8 h-8 text-blue-600" fill="currentColor" />,
    color: "bg-blue-50/50",
  },
  {
    title: "Warna Biru",
    description: "Melambangkan kepercayaan, profesionalisme, kecerdasan, ketenangan, dan kredibilitas sebagai lembaga pendidikan.",
    icon: <div className="w-8 h-8 rounded-full bg-blue-600" />,
    color: "bg-blue-50/50",
  },
  {
    title: "Latar Putih",
    description: "Memberikan kesan bersih, sederhana, modern, dan mudah diaplikasikan di berbagai media.",
    icon: <div className="w-8 h-8 rounded-full border-2 border-slate-300 bg-white" />,
    color: "bg-blue-50/50",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Image 
              src="/logo-transparent.png" 
              alt="Grow Smart.edu Logo" 
              width={400} 
              height={400} 
              className="object-contain drop-shadow-md"
            />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4"
          >
            Makna Logo <span className="text-blue-600">Grow Smart</span>.edu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto font-medium"
          >
            Tumbuh, Belajar, Berprestasi
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {philosophyItems.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`p-8 rounded-3xl border border-blue-100 ${item.color} backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-200 group`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-8 md:p-12 text-center shadow-lg shadow-blue-900/5 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wider text-blue-600/80">Makna Utama</h3>
            <div className="relative max-w-4xl mx-auto">
              <span className="absolute -top-6 -left-8 text-6xl text-blue-200 font-serif leading-none">&quot;</span>
              <p className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed italic relative z-10 px-4 md:px-8">
                Grow Smart.edu hadir untuk membantu setiap siswa bertumbuh, belajar dengan percaya diri, dan meraih prestasi melalui pendidikan yang berkualitas.
              </p>
              <span className="absolute -bottom-10 -right-8 text-6xl text-blue-200 font-serif leading-none">&quot;</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
