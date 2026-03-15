import { navItems } from "@/lib/constants";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-shell pt-4">
        <div className="flex items-center justify-between rounded-full border border-[#C6A15B]/25 bg-[rgba(26,13,16,0.72)] px-5 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <a
            href="#home"
            className="font-serif text-sm font-semibold tracking-[0.2em] text-[#F6EFEA] sm:text-base"
          >
            B & M
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#E8D3D7] transition hover:text-[#E2C48A]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#rsvp"
              className="inline-flex items-center justify-center rounded-full border border-[#C6A15B]/40 bg-[rgba(255,250,245,0.08)] px-5 py-3 text-sm font-medium text-[#E2C48A] transition duration-300 hover:-translate-y-0.5 hover:border-[#E2C48A] hover:bg-[rgba(255,250,245,0.12)]"
            >
              RSVP
            </a>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}