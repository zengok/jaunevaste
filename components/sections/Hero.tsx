import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-jaune-300/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-nude/50 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="text-center lg:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cocoa shadow-soft">
            <span className="h-2 w-2 rounded-full bg-jaune-500" aria-hidden="true" />
            Türkiye&apos;nin bakım markası
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Günlük bakım rutinine{" "}
            <span className="text-gold">zarif ve güvenilir</span> bir dokunuş.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg lg:mx-0">
            {site.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <ButtonLink href="/urunler" size="lg">
              Ürünleri Keşfet
            </ButtonLink>
            <ButtonLink href="/urunler#cok-satanlar" variant="outline" size="lg">
              Çok Satanları Gör
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <Image
            src="/images/hero-composition.svg"
            alt="Jaune Vaste dudak, tırnak ve kişisel bakım ürünleri kompozisyonu"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain drop-shadow-xl"
          />
        </div>
      </Container>
    </section>
  );
}
