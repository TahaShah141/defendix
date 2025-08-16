"use client";

import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

import Link from "next/link";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full flex justify-center transition-colors duration-300 ${
        scrolled
          ? "bg-white border-b border-black/10 shadow-sm"
          : "bg-white/5 border-b border-white/10"
      }`}
    >
      <div className="container flex justify-between items-center py-2 px-4">
        <img
          src={scrolled ? "/logoBlack.png" : "/logo.png"}
          className="h-10 md:h-14 transition-opacity duration-300"
          alt="Defendix logo"
        />

        {/* Desktop Navigation */}
        <div
          className={`hidden lg:flex gap-6 items-center transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <Link href={"/"} className="hover:opacity-75 transition-opacity">
            Home
          </Link>
          <Link href={"/about"} className="hover:opacity-75 transition-opacity">
            Who we are
          </Link>
          <Link
            href={"/services"}
            className="hover:opacity-75 transition-opacity"
          >
            What we do
          </Link>
          <Link href={"/news"} className="hover:opacity-75 transition-opacity">
            Resources
          </Link>
          <Link
            href={"/contact"}
            className={`p-2 px-3 rounded-lg transition-colors duration-300 ${
              scrolled ? "bg-[#167F3D] text-white hover:bg-primary hover:text-black" : "bg-primary text-black hover:bg-white"
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={`lg:hidden p-2 transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {mobileMenuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200">
            <div className="flex flex-col py-4">
              <Link
                href={"/"}
                className="px-4 py-3 text-black hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href={"/about"}
                className="px-4 py-3 text-black hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Who we are
              </Link>
              <Link
                href={"/services"}
                className="px-4 py-3 text-black hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                What we do
              </Link>
              <Link
                href={"/news"}
                className="px-4 py-3 text-black hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href={"/contact"}
                className="mx-4 mt-2 p-2 px-3 rounded-lg bg-[#167F3D] text-white text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
