"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/60300000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_0_24px_rgba(37,211,102,0.5)] transition-transform hover:scale-110"
    >
      <MessageCircle className="text-white" size={26} />
    </a>
  );
}
