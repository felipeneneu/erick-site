"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import sentinelasLogo from "@/public/afiliados/erick.png";
import { InteractiveOrbButton } from "@/app/_components/InteractiveOrbButton";
import { sentinelasNavLinks } from "./content";

export function SentinelasNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl"
      aria-label="Navegação principal"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        <Link href="/sentinelas" className="flex items-center gap-3">
          <Image
            src={sentinelasLogo}
            alt="Logo do Projeto Sentinelas"
            className="h-10 w-auto object-contain md:h-12"
            priority
          />
          <span className="font-display text-base font-bold uppercase tracking-[0.14em] text-foreground sm:text-lg">
            PROJETO <span className="text-pink-600">SENTINELAS</span>
          </span>
        </Link>

        <div className="hidden items-center gap-4 lg:flex">
          {sentinelasNavLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className="font-display text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <InteractiveOrbButton
          href="#inscricao"
          className="hidden h-10 px-6 font-poppins text-sm font-black tracking-wider lg:inline-flex"
        >
          Garanta sua vaga
        </InteractiveOrbButton>

        <Drawer open={open} onOpenChange={setOpen} direction="right">
          <DrawerTrigger asChild>
            <Button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-border/80 bg-card p-2 text-foreground lg:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </DrawerTrigger>

          <DrawerContent className="lg:hidden">
            <DrawerHeader className="border-b border-border/70 px-5 py-4 text-left">
              <DrawerTitle className="font-display uppercase tracking-[0.12em]">
                Menu
              </DrawerTitle>
              <DrawerDescription>
                Navegue pelas seções do Projeto Sentinelas.
              </DrawerDescription>
            </DrawerHeader>

            <div className="px-5 py-4">
              <div className="grid gap-2">
                {sentinelasNavLinks.map((link) => (
                  <DrawerClose asChild key={link.id}>
                    <Link
                      href={`#${link.id}`}
                      className="rounded-md px-3 py-2 font-display text-sm uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-muted"
                    >
                      {link.name}
                    </Link>
                  </DrawerClose>
                ))}
              </div>

              <DrawerClose asChild>
                <div className="mt-4">
                  <InteractiveOrbButton
                    href="#inscricao"
                    className="flex h-12 w-full justify-center px-6 font-poppins text-sm font-black tracking-wider"
                  >
                    Garanta sua vaga
                  </InteractiveOrbButton>
                </div>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
