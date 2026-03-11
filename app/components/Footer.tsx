import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#151a24] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="inline-block bg-[#2563eb] px-2 py-0.5 text-lg font-bold text-white tracking-tight">
              BOINCA
            </span>
            <p className="mt-3 text-sm text-[#94a3b8] max-w-xs">
              Especialistas en reparación y mantenimiento industrial para el sector petrolero.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Servicios
            </h4>
            <ul className="space-y-2">
              <li><Link href="/servicios" className="text-sm text-[#94a3b8] hover:text-white transition-colors">Motores Eléctricos</Link></li>
              <li><Link href="/servicios" className="text-sm text-[#94a3b8] hover:text-white transition-colors">Bombas de Petróleo</Link></li>
              <li><Link href="/servicios" className="text-sm text-[#94a3b8] hover:text-white transition-colors">Servicios de Campo</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Compañía
            </h4>
            <ul className="space-y-2">
              <li><Link href="/nosotros" className="text-sm text-[#94a3b8] hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link href="/contacto" className="text-sm text-[#94a3b8] hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Síguenos
            </h4>
            <div className="flex gap-3 text-white/70">
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.994 2.013 9.338 2 11.965 2h.08z" clipRule="evenodd"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Tu e-mail"
                className="flex-1 rounded-lg bg-[#1e2530] border border-white/10 px-3 py-2 text-sm text-white placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              />
              <button type="button" className="rounded-lg bg-[#2563eb] px-4 py-2 text-sm font-medium text-white hover:bg-[#1d4ed8] transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-[#94a3b8]">
            © 2023 Boinca Servicios Industriales C.A.
          </p>
        </div>
      </div>
    </footer>
  );
}
