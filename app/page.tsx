"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";
import { AudioPlayer } from "@/components/audio-player";
import { Countdown } from "@/components/countdown";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { InvitationOpening } from "@/components/invitation-opening";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/reveal";
import { RSVPForm } from "@/components/rsvp-form";
import { SectionHeading } from "@/components/section-heading";
import { eventCards } from "@/lib/constants";

export default function HomePage() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && (
        <InvitationOpening
          onComplete={() => {
            setOpened(true);
          }}
        />
      )}

      <main
        className={`relative min-h-screen transition-all duration-[1400ms] ${
          opened ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden={!opened}
      >
        <Navbar />
        <AudioPlayer />
        <Hero />

        <section id="countdown" className="section-space relative">
          <div className="container-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Counting Down"
                title="Until we celebrate together"
                description="A beautiful evening awaits, filled with love, warmth, and joyful memories."
              />
            </Reveal>
            <div className="mt-12">
              <Reveal delay={0.1}>
                <Countdown />
              </Reveal>
            </div>
          </div>
        </section>

        <section id="story" className="section-space relative overflow-hidden">
          <div className="container-shell">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                    Our Story
                  </p>
                  <h2 className="mt-4 text-4xl sm:text-5xl">
                    A beautiful beginning, a joyful celebration
                  </h2>
                  <div className="glass-line my-6 w-28" />
                  <p>
                    What began as a journey of love, laughter, and shared dreams
                    has now blossomed into a life we are excited to celebrate
                    with the people dearest to us.
                  </p>
                  <p className="mt-4">
                    With grateful hearts, we welcome you to join us for our
                    homecoming celebration and be part of this cherished moment.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <div className="card-luxury flex items-center gap-3 rounded-full px-5 py-3 text-sm">
                      <Heart size={16} className="text-gold" />
                      A love worth celebrating
                    </div>
                    <div className="card-luxury flex items-center gap-3 rounded-full px-5 py-3 text-sm">
                      <Sparkles size={16} className="text-gold" />
                      A joyful new chapter
                    </div>
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                <Reveal delay={0.1}>
                  <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
                    <Image
                      src="/images/couple-1.jpg"
                      alt="Couple portrait"
                      width={900}
                      height={1100}
                      className="h-[420px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
                    <Image
                      src="/images/couple-2.jpg"
                      alt="Couple portrait"
                      width={900}
                      height={1100}
                      className="h-[300px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="details" className="section-space relative">
          <div className="container-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Event Details"
                title="Join us for a memorable evening"
                description="An elegant celebration of togetherness, tradition, and joy."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              {eventCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Reveal key={card.title} delay={index * 0.06}>
                    <div className="card-luxury group h-full rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-champagne text-gold transition group-hover:scale-105">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-2xl">{card.title}</h3>
                      <p className="mt-3 text-sm">{card.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <Gallery />

        <section id="rsvp" className="section-space relative overflow-hidden">
          <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-blush/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

          <div className="container-shell relative">

            <Reveal>
              <SectionHeading
                eyebrow="Wedding Invitation"
                title="We request the honor of your presence"
              />
            </Reveal>

            {/* Invitation Card */}
            <div className="mx-auto max-w-xl rounded-3xl border border-[#C6A15B]/40 bg-[rgba(246,239,234,0.08)] p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-10">

              <p className="text-[#F1E3E5]">
                Mr. & Mrs. Athula Ranasinghe
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.35em] text-[#E2C48A]">
                request the honor of your presence
              </p>

              <p className="mt-2 text-[#E0C9CC]">
                at the celebration of the Homecoming of their son
              </p>

              <h2 className="mt-5 font-serif text-3xl text-[#F6EFEA] sm:text-4xl">
                Mahinsa <span className="text-[#E2C48A]">&</span> Buddhimanthi
              </h2>

              <p className="mt-2 text-[#E0C9CC]">daughter of</p>

              <p className="text-[#F1E3E5]">
                Mr. & Mrs. Thushara Bulathsinghala
              </p>

              <p className="mt-6 text-[#E2C48A]">
                on Monday the 29th of May 2026
              </p>

              <div className="mt-5 space-y-1">
                <p className="text-xs uppercase tracking-[0.35em] text-[#C78C95]">
                  At
                </p>

                <p className="font-medium text-[#F6EFEA]">
                   Empire Ballroom
                </p>

                <p className="text-[#F6EFEA]">
                  Mount Lavinia Hotel
                </p>

                <p className="text-[#F6EFEA]">
                  Mount Lavinia
                </p>
              </div>

              <p className="mt-4 italic text-[#E2C48A]">
                (6.30 pm onwards)
              </p>

              <div className="mx-auto my-6 h-[1px] w-24 bg-[#C6A15B]/40" />

              {/* <p className="uppercase tracking-[0.2em] text-[#E2C48A]">
                RSVP (Regrets only)
              </p>

              <p className="mt-1 text-sm text-[#D9C6C8]">
                Please confirm your attendance below
              </p> */}

            </div>

            {/* RSVP Heading */}
            <div className="mt-14 text-center">
              <h3 className="text-2xl font-serif text-[#E2C48A]">RSVP (Regrets only)</h3>
              <p className="mt-2 text-[#D9C6C8]">
                Please confirm your attendance below
              </p>
            </div>

            {/* RSVP Form */}
            <div className="mt-8">
              <Reveal delay={0.1}>
                <RSVPForm />
              </Reveal>
            </div>

            {/* Contact Numbers */}
            <div className="mt-10 text-center text-sm text-muted">
              <p className="font-semibold text-[#D9C6C8]">For regrets please contact</p>

              <p className="mt-2">
                Thushara – <a href="tel:+94718007123" className="text-gold">071 8007123</a>
              </p>

              <p>
                Athula – <a href="tel:+94777687481" className="text-gold">077 7687481</a>
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}