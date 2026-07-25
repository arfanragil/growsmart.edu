import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="overflow-hidden group-hover:scale-105 transition-transform">
                <Image
                  src="/logo-icon-only.png"
                  alt="Grow Smart Logo"
                  width={125}
                  height={90}
                  className="w-auto h-10 md:h-12 object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-tight">Grow Smart.edu</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs text-[15px] leading-relaxed">
              Tumbuh, Belajar, Berprestasi. Meraih impian dengan lebih cerdas.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/6285725824281" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-[15px]">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>0857-2582-4281</span>
                </a>
              </li>
              <li>
                <a href="mailto:growsmart.edu@yahoo.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-[15px]">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>growsmart.edu@yahoo.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Lokasi</h4>
            <div className="flex items-start gap-3 text-muted-foreground text-[15px] leading-relaxed">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p>Alief Park Residence No. C3, Cipayung, Depok</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Sosial Media</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://instagram.com/growsmart_edu" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-[15px]">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                  <span>@growsmart_edu</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-muted-foreground">
            © {new Date().getFullYear()} Grow Smart.edu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
