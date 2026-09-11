"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, MessageCircle, Send, X, Phone, User } from "lucide-react";
import Link from "next/link";
import {
  BOOKING_URL,
  BOOKING_CTA_TEXT,
  CHAT_FAQS,
  MAIL_HREF,
  PHONE_HREF,
  QUICK_ACTIONS,
  matchFaq,
} from "@/lib/chatKnowledge";

type Msg = {
  id: string;
  role: "bot" | "user";
  text: string;
  cta?: "book" | "contact" | "human";
};

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

const WELCOME: Msg = {
  id: "welcome",
  role: "bot",
  text: "Hei! Jeg er IntelliSense-assistenten. Spør om priser, leveringstid eller book en gratis konsultasjon.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadNeed, setLeadNeed] = useState("");
  const [showLead, setShowLead] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, showLead]);

  const suggestions = useMemo(() => QUICK_ACTIONS, []);

  function pushBot(text: string, cta?: Msg["cta"]) {
    setMessages((m) => [...m, { id: uid(), role: "bot", text, cta }]);
  }

  function handleUserText(raw: string) {
    const text = raw.trim();
    if (!text) return;
    setMessages((m) => [...m, { id: uid(), role: "user", text }]);
    setInput("");

    const lower = text.toLowerCase();
    const wantsBook =
      /book|konsult|samtale|møte|mot[eé]|ring meg|kontakt|demo|tilbud/.test(
        lower
      );
    const wantsHuman = /menneske|person|snakke med|ekte/.test(lower);

    if (wantsHuman) {
      pushBot(
        "Selvfølgelig! Du kan nå oss direkte via kontaktskjemaet vårt.",
        "human"
      );
      return;
    }

    if (wantsBook) {
      pushBot(BOOKING_CTA_TEXT, "book");
      setShowLead(true);
      return;
    }

    const hit = matchFaq(text);
    if (hit) {
      pushBot(hit.answer);
      pushBot("Vil du booke en gratis, uforpliktende konsultasjon?", "book");
      return;
    }

    pushBot(
      "Jeg fant ikke et eksakt svar der. Vanlige temaer: priser, leveringstid, hva som er inkludert og våre tjenester. Ellers kan du booke en gratis konsultasjon eller snakke med et menneske.",
      "contact"
    );
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    handleUserText(input);
  }

  function submitLead(e: FormEvent) {
    e.preventDefault();
    if (!leadName.trim() || !leadEmail.trim()) return;
    const subject = encodeURIComponent(`Chatbot-lead: ${leadName.trim()}`);
    const body = encodeURIComponent(
      `Navn: ${leadName.trim()}\nE-post: ${leadEmail.trim()}\nBehov: ${leadNeed.trim() || "(ikke oppgitt)"}\n\nKilde: Chatbot på intellisenseai.no`
    );
    window.location.href = `mailto:andreaalborg@intellisenseai.no?subject=${subject}&body=${body}`;
    setLeadSent(true);
    pushBot(
      `Takk, ${leadName.trim().split(" ")[0]}! Åpner e-post med forespørselen din. Du kan også fullføre på kontaktsiden hvor vi har et GHL-skjema som går rett til CRM.`
    );
  }

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="w-[min(100vw-1.5rem,380px)] h-[min(70vh,520px)] rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-2xl shadow-black/40 flex flex-col overflow-hidden"
              role="dialog"
              aria-label="IntelliSense chat"
            >
              <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[var(--border)] bg-[var(--background-secondary)]">
                <div>
                  <p className="text-sm font-semibold">IntelliSense</p>
                  <p className="text-xs text-[var(--foreground-muted)]">
                    Spørsmål · priser · booking
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-[var(--background)] text-[var(--foreground-muted)]"
                  aria-label="Lukk chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-[var(--primary)] text-white rounded-br-md"
                          : "bg-[var(--background-secondary)] border border-[var(--border)] rounded-bl-md"
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>
                      {msg.cta === "book" && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          <Link
                            href={BOOKING_URL}
                            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-[var(--primary)] text-white"
                            onClick={() => setOpen(false)}
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            Book konsultasjon
                          </Link>
                          <a
                            href={PHONE_HREF}
                            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--border)]"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            Ring oss
                          </a>
                        </div>
                      )}
                      {msg.cta === "human" && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          <Link
                            href="/kontakt"
                            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-[var(--primary)] text-white"
                            onClick={() => setOpen(false)}
                          >
                            <User className="w-3.5 h-3.5" />
                            Snakk med menneske
                          </Link>
                        </div>
                      )}
                      {msg.cta === "contact" && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          <button
                            type="button"
                            className="text-xs font-medium px-3 py-1.5 rounded-full bg-[var(--primary)] text-white"
                            onClick={() => {
                              setShowLead(true);
                              pushBot(
                                "Legg igjen navn og e-post, så tar vi det derfra.",
                                "book"
                              );
                            }}
                          >
                            Legg igjen kontaktinfo
                          </button>
                          <Link
                            href="/kontakt"
                            className="text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--border)]"
                            onClick={() => setOpen(false)}
                          >
                            Snakk med menneske
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {showLead && !leadSent && (
                  <form
                    onSubmit={submitLead}
                    className="rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] p-3 space-y-2"
                  >
                    <p className="text-xs font-medium text-[var(--foreground-muted)]">
                      Legg igjen info (valgfritt — du kan også gå rett til /kontakt)
                    </p>
                    <input
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="Navn *"
                      required
                      className="w-full text-sm rounded-lg bg-[var(--background)] border border-[var(--border)] px-3 py-2 outline-none focus:border-[var(--primary)]"
                    />
                    <input
                      type="email"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="E-post *"
                      required
                      className="w-full text-sm rounded-lg bg-[var(--background)] border border-[var(--border)] px-3 py-2 outline-none focus:border-[var(--primary)]"
                    />
                    <input
                      value={leadNeed}
                      onChange={(e) => setLeadNeed(e.target.value)}
                      placeholder="Hva trenger du hjelp til?"
                      className="w-full text-sm rounded-lg bg-[var(--background)] border border-[var(--border)] px-3 py-2 outline-none focus:border-[var(--primary)]"
                    />
                    <button
                      type="submit"
                      className="w-full text-sm font-medium py-2 rounded-lg bg-[var(--primary)] text-white"
                    >
                      Send forespørsel
                    </button>
                    <p className="text-center text-xs text-[var(--foreground-muted)]">
                      <a
                        href={MAIL_HREF}
                        className="hover:text-[var(--primary)]"
                      >
                        Eller send e-post direkte
                      </a>
                      {" · "}
                      <Link
                        href="/kontakt"
                        className="hover:text-[var(--primary)]"
                        onClick={() => setOpen(false)}
                      >
                        GHL-skjema (CRM)
                      </Link>
                    </p>
                  </form>
                )}

                <div className="flex flex-wrap gap-2 pt-1">
                  {suggestions.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => handleUserText(s.userText)}
                      className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
                <div ref={bottomRef} />
              </div>

              <form
                onSubmit={onSubmit}
                className="border-t border-[var(--border)] p-3 flex gap-2 bg-[var(--background-secondary)]"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Skriv et spørsmål…"
                  className="flex-1 text-sm rounded-xl bg-[var(--background)] border border-[var(--border)] px-3 py-2.5 outline-none focus:border-[var(--primary)]"
                  aria-label="Melding"
                />
                <button
                  type="submit"
                  className="shrink-0 w-10 h-10 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center"
                  aria-label="Send"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-14 h-14 rounded-full bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/30 flex items-center justify-center hover:scale-105 transition-transform"
          aria-label={open ? "Lukk chat" : "Åpne chat"}
        >
          {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>

      {/* Hidden FAQ count for a11y / future analytics hooks */}
      <span className="sr-only">{CHAT_FAQS.length} svar klare</span>
    </>
  );
}
