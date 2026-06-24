import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#1a1040] opacity-60 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#0f2027] opacity-50 blur-[100px]" />
        <div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#1c1030] opacity-40 blur-[80px]" />
      </div>

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-lg w-full text-center space-y-8">
          <Image
            src="/logo.svg"
            alt="ThaB Media"
            width={320}
            height={160}
            priority
            className="mx-auto"
          />

          <p className="text-lg sm:text-xl text-gray-300">
            Web sitemiz çok yakında yayında.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="mailto:info@thabmedia.com"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-[#0a0e1a] px-6 py-3 text-sm font-semibold transition-all hover:bg-gray-200 hover:scale-105"
            >
              <MailIcon />
              E-posta ile İletişim
            </a>
            <a
              href="https://instagram.com/thabmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold transition-all hover:border-white hover:bg-white/5 hover:scale-105"
            >
              <InstagramIcon />
              Instagram
            </a>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-gray-500">
        © 2026 ThaB Media. Tüm hakları saklıdır.
      </footer>
    </>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
