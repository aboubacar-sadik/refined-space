"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="">
      <div className="fixed top-0 left-0 right-0 z-40 bg-nav-background border-b border-border backdrop-blur-md">
        <nav className="container">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link href={"/"}>
              <Image
                src={"/logo.svg"}
                alt="The refined space logo"
                width={120}
                height={32}
                style={{ width: "auto", height: "32px" }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-9">
              <ul className="flex items-center justify-end gap-9">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-normal tracking-[0.08em] uppercase text-text-muted transition-colors duration-200 hover:text-forest relative after:content-[''] after:absolute after:-bottom-0.75 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter Button */}
              <div className="hidden lg:block">
                <Button
                  variant={"secondary"}
                  aria-label={`Link to the newsletter inscription`}
                >
                  <Link href="#newsletter" className="">
                    NEWSLETTER
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-forest hover:text-forest-light transition-colors "
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-forest/20 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-0 right-0 bottom-0 w-70 z-50  lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b border-border h-18 p-6 bg-cream">
                  <span className="text-lg font-serif">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-forest hover:text-forest-light transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>
                <ul className="flex flex-col p-6 gap-4 h-full bg-cream">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.label}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      className="text-[13px] font-medium text-forest uppercase tracking-[0.08em] py-2"
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </motion.li>
                  ))}
                  {/* Newsletter Button */}
                  <div className="w-full mt-4">
                    <Button
                      variant={"secondary"}
                      className="w-full"
                      aria-label={`Link to the Newsletter inscription`}
                    >
                      <Link href="#newsletter" className="">
                        NEWSLETTER
                      </Link>
                    </Button>
                  </div>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
