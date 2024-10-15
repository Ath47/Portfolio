"use client";
import React, { lazy, Suspense } from "react";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const Header = () => (
  <h2 className="text-2xl font-bold text-center mb-4">
    Send Your Enchanted Messages
  </h2>
);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const LinkItem = ({ text, url }) => (
  <motion.a
    variants={item}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full rounded-full p-4 mb-2 text-center text-foreground border border-accent shadow-lg hover:bg-accent/10 transition hover:border-accent/70"

  >
    {text}
  </motion.a>
);

const ContactLinks = () => (
  <motion.div
    variants={container}
    initial="hidden"
    animate="show"
    className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
  >
    <LinkItem text="Email Me / athuukul@gmail.com" url="mailto:athuukul@gmail.com" />
    <LinkItem
      text="LinkedIn"
      url="https://www.linkedin.com/in/atharva-47-kulkarni/"
    />
    <LinkItem text="GitHub" url="https://github.com/Ath47" />
    <LinkItem
      text="Stackover flow"
      url="https://stackoverflow.com/users/22017077/atharva-k"
    />
  </motion.div>
);

export default function Contact() {
  return (
    <>
      <Toaster richColors={true} />
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <ContactLinks />
      </Suspense>
    </>
  );
}
