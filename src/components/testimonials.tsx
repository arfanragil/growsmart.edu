"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Mahasiswa UI 2025",
    content: "Berkat Grow Smart, saya bisa paham konsep Fisika yang dulunya bikin pusing. Tutornya asik dan pembahasannya super jelas!",
    avatar: "BS"
  },
  {
    name: "Siti Aminah",
    role: "Orang Tua Siswa",
    content: "Anak saya jadi lebih rajin belajar sejak ikut bimbel di sini. Laporan perkembangannya sangat membantu saya memantau belajarnya.",
    avatar: "SA"
  },
  {
    name: "Dimas Pratama",
    role: "Mahasiswa ITB 2024",
    content: "Tryout-nya bener-bener mirip sama UTBK asli! Jadi pas hari H ujian udah nggak kaget lagi sama tipe soalnya. Recommended banget.",
    avatar: "DP"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-[54px] font-bold tracking-tighter mb-4"
          >
            Kata Mereka Tentang <span className="text-gradient-primary">Grow Smart</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-3xl flex flex-col justify-between"
            >
              <div className="mb-8">
                {/* 5 stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[17px] font-medium leading-relaxed tracking-tight">&quot;{testimonial.content}&quot;</p>
              </div>
              
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border border-border shadow-sm">
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold tracking-tight">{testimonial.name}</h4>
                  <p className="text-[13px] text-muted-foreground font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
