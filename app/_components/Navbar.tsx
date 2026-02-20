"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const links = [
  { name: "Início", id: "inicio" },
  { name: "Benefícios", id: "beneficios" },
  { name: "Instrutor", id: "instrutor" },
  { name: "Horários", id: "horarios" },
  { name: "Depoimentos", id: "depoimentos" },
  { name: "Contato", id: "contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        <Link
          href="#inicio"
          className="font-display text-base font-bold uppercase tracking-[0.14em] text-foreground sm:text-lg"
        >
          ERICK <span className="text-primary">REGHINE</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className="font-display text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm" className="font-display uppercase tracking-wider">
            Aula Experimental
          </Button>
        </div>

        <Drawer open={open} onOpenChange={setOpen} direction="right">
          <DrawerTrigger asChild>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-border/80 bg-card p-2 text-foreground lg:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </DrawerTrigger>

          <DrawerContent className="lg:hidden">
            <DrawerHeader className="border-b border-border/70 px-5 py-4 text-left">
              <DrawerTitle className="font-display uppercase tracking-[0.12em]">
                Menu
              </DrawerTitle>
              <DrawerDescription>
                Navegue pelas seções do site.
              </DrawerDescription>
            </DrawerHeader>

            <div className="px-5 py-4">
              <div className="grid gap-2">
                {links.map((link) => (
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
                <Button className="mt-4 w-full font-display uppercase tracking-wider">
                  Agendar Aula Gratuita
                </Button>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
