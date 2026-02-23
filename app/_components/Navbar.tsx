"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { WHATSAPP_LINK } from "@/hooks/use-whatsapp-link";
import { IoIosArrowDown } from "react-icons/io";

const links = [
  { name: "Início", id: "inicio" },
  { name: "Benefícios", id: "beneficios" },
  { name: "Instrutor", id: "sobre" },
  { name: "Galeria", id: "treinamentos-workshops" },
  { name: "Vídeo", id: "video" },
  { name: "Workshops", id: "workshops" },
  { name: "Dúvidas", id: "duvidas" },
  { name: "Horários", id: "horarios" },
  { name: "Depoimentos", id: "depoimentos" },
  { name: "Contato", id: "contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl"
      aria-label="Navegação principal"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        <Link
          href="#inicio"
          className="font-display text-base font-bold uppercase tracking-[0.14em] text-foreground sm:text-lg"
          aria-label="Voltar para o início da página"
        >
          ERICK <span className="text-primary">REGHINE</span>
        </Link>

        <div className="hidden items-center gap-4 lg:flex">
          {links.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className="font-display text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground flex gap-2 items-center"
            >
              <IoIosArrowDown className="text-red-500" />
              {link.name}
            </Link>
          ))}
        </div>
        <Link
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            className: "font-display uppercase tracking-wider",
            size: "sm",
          })}
          aria-label="Agendar aula experimental pelo WhatsApp"
        >
          Aula Experimental
        </Link>

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
                <Link
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    className:
                      "mt-4 w-full font-display uppercase tracking-wider",
                  })}
                >
                  Agendar Aula Gratuita
                </Link>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
