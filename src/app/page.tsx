import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#dce3f0] opacity-60 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#e8dff0] opacity-50 blur-[100px]" />
        <div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#fde8e8] opacity-40 blur-[80px]" />
      </div>

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-lg w-full text-center space-y-8">
          <Image
            src="/logo.svg"
            alt="ThaB Media"
            width={320}
            height={178}
            priority
            className="mx-auto"
          />

          <p className="text-lg sm:text-xl text-[#3a4a6b]">
            Web sitemiz çok yakında yayında.
          </p>

          <div className="flex items-center justify-center pt-4">
            <a
              href="mailto:info@thabmedia.com.tr"
              className="inline-flex items-center gap-2 rounded-lg bg-[#192652] text-white px-6 py-3 text-sm font-semibold transition-all hover:bg-[#0f1a3d] hover:scale-105"
            >
              <MailIcon />
              info@thabmedia.com.tr
            </a>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-[#8a95aa]">
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
