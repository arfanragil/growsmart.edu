"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  User,
  GraduationCap,
  Quote,
  Award,
  BookOpen,
  Trophy,
  FileText,
  Medal,
  FileBadge,
  Landmark,
  UserCheck,
  Users
} from "lucide-react";

export function TeacherProfile() {
  const historyItems = [
    {
      icon: <BookOpen className="w-5 h-5 text-primary" />,
      text: (
        <>
          Pengajar mata pelajaran <strong>Fisika</strong> untuk jenjang SMP dan SMA serta <strong>Matematika</strong> untuk jenjang SD dan SMP sejak tahun 2017.
        </>
      ),
    },
    {
      icon: <Trophy className="w-5 h-5 text-primary" />,
      text: "Pembimbing Olimpiade Sains.",
    },
    {
      icon: <FileText className="w-5 h-5 text-primary" />,
      text: (
        <>
          Pembimbing <strong>karya ilmiah</strong> untuk perlombaan dan publikasi jurnal nasional.
        </>
      ),
    },
    {
      icon: <Medal className="w-5 h-5 text-primary" />,
      text: (
        <>
          Mendampingi siswa dalam berbagai kompetisi karya tulis ilmiah hingga meraih <strong>Juara 1 Tingkat Nasional</strong> serta berbagai prestasi di tingkat provinsi dan kabupaten/kota.
        </>
      ),
    },
    {
      icon: <FileBadge className="w-5 h-5 text-primary" />,
      text: (
        <>
          Penulis artikel ilmiah pada jurnal terakreditasi <strong>SINTA</strong> dan jurnal internasional terindeks <strong>Scopus Q1</strong>.
        </>
      ),
    },
    {
      icon: <Landmark className="w-5 h-5 text-primary" />,
      text: (
        <>
          Penerima <strong>Hibah Penelitian</strong> Kementerian Riset dan Teknologi/Badan Riset dan Inovasi Nasional <strong>(Kemenristek/BRIN)</strong> Tahun 2020.
        </>
      ),
    },
    {
      icon: <UserCheck className="w-5 h-5 text-primary" />,
      text: (
        <>
          Instruktur <strong>AKMI</strong> Bidang Literasi Sains Tahun 2024.
        </>
      ),
    },
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      text: (
        <>
          Berpengalaman dalam pendampingan <strong>tugas sekolah</strong> dan <strong>proyek akademik</strong> siswa.
        </>
      ),
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-primary" />,
      text: (
        <>
          Pembimbing persiapan <strong>ujian sekolah</strong> dan <strong>Tes Kemampuan Akademik (TKA)</strong>.
        </>
      ),
    },
  ];

  return (
    <section id="teacher" className="py-24 bg-gradient-to-b from-background to-blue-50/30">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-[54px] font-bold tracking-tighter mb-4">Founder & <span className="text-gradient-primary">Pengajar</span></h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Left Column - Main Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col h-full bg-white rounded-3xl p-8 shadow-lg border border-blue-50 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50/50 rounded-br-full -z-10"></div>

            <div className="flex-1 flex flex-col justify-center gap-10 py-6">
              <h4 className="text-3xl font-extrabold text-blue-900 leading-tight">
                Anissa Maghfiroh, M.Pd.
              </h4>

              <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-stretch">
                <div className="relative w-full sm:w-56 lg:w-60 aspect-[3/4] shrink-0 rounded-2xl overflow-hidden shadow-xl bg-slate-100 border-4 border-white">
                  <Image
                    src="/profile.jpg"
                    alt="Anissa Maghfiroh, M.Pd."
                    fill
                    className="object-cover object-top scale-125 origin-top"
                  />
                </div>

                <div className="space-y-6 flex-1 flex flex-col justify-center">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 text-primary rounded-lg shrink-0 mt-0.5">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                      Lulusan S1 dan S2 Pendidikan Fisika dari <br className="hidden xl:block" />
                      <strong className="text-blue-900">Universitas Negeri Yogyakarta (UNY)</strong>
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 text-primary rounded-lg shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                      Pengajar Berpengalaman <br />
                      <strong className="text-blue-900">sejak tahun 2017.</strong>
                    </p>
                  </div>

                  {/* Commitment Badge */}
                  <div className="mt-2 p-4 bg-yellow-50/80 border border-yellow-100 rounded-xl flex items-start gap-3">
                    <Award className="w-6 h-6 text-yellow-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-yellow-800 mb-1 uppercase tracking-wider">Komitmen</p>
                      <p className="text-sm text-yellow-900/80 font-medium">Mendidik dengan hati, menginspirasi masa depan.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative p-6 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl mt-6 shadow-inner">
              <Quote className="absolute -top-3 -left-1 w-8 h-8 text-primary opacity-20 transform -scale-x-100" />
              <p className="text-blue-900 text-sm md:text-[15px] font-medium italic relative z-10 leading-relaxed text-center px-4">
                "Belajar bukan sekadar memperoleh nilai yang tinggi, tetapi juga membangun pemahaman yang mendalam, kemandirian, serta rasa percaya diri dalam menghadapi berbagai tantangan akademik."
              </p>
            </div>
          </motion.div>

          {/* Right Column - Riwayat Singkat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="h-full bg-white rounded-3xl p-8 shadow-lg border border-blue-50 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10"></div>

              <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
                Riwayat Singkat
              </h3>

              <div className="space-y-5 flex-1">
                {historyItems.map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="shrink-0 mt-0.5">
                      <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1.5">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
