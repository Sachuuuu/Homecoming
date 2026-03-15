import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-[#C6A15B]/10 bg-[#1A0D10] py-10 text-white">
      <div className="container-shell text-center">
        <h3 className="text-2xl">Mahinsa & Buddhimanthi</h3>
        <p className="mt-3 text-[#E8D3D7]">
          Thank you for celebrating our homecoming with us.
        </p>
        <p className="mt-4 text-sm text-[#C78C95]">
          © {new Date().getFullYear()} · Made with love
        </p>
      </div>
    </footer>
  );
}