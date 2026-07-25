import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Philosophy } from "@/components/philosophy";
import { Features } from "@/components/features";
import { TeacherProfile } from "@/components/teacher-profile";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <TeacherProfile />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
