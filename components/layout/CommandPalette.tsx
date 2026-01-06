"use client";

import * as React from "react";
import { Command } from "cmdk";
import { Search, Code, User, Mail, Component } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-black/90 border border-primary/20 backdrop-blur-xl p-4 rounded-xl shadow-2xl shadow-primary/10 z-50 text-foreground"
    >
        <div className="flex items-center border-b border-primary/20 px-3" cmdk-input-wrapper="">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Command.Input 
                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Type a command or search..."
            />
        </div>
      
      <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden pt-4">
        <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>

        <Command.Group heading="Projects" className="text-xs font-medium text-muted-foreground mb-2">
            <div className="space-y-1">
                <Command.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-primary/20 aria-selected:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                    <Component className="mr-2 h-4 w-4" />
                    <span>TeleCash MFS</span>
                </Command.Item>
                <Command.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-primary/20 aria-selected:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                    <Component className="mr-2 h-4 w-4" />
                    <span>MaiSafe SaaS</span>
                </Command.Item>
                <Command.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-primary/20 aria-selected:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                    <Component className="mr-2 h-4 w-4" />
                    <span>Maktab Management</span>
                </Command.Item>
            </div>
        </Command.Group>

        <Command.Group heading="Navigation" className="text-xs font-medium text-muted-foreground mt-4 mb-2">
            <div className="space-y-1">
                <Command.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-primary/20 aria-selected:text-primary">
                    <User className="mr-2 h-4 w-4" />
                    <span>About Me</span>
                </Command.Item>
                <Command.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-primary/20 aria-selected:text-primary">
                    <Code className="mr-2 h-4 w-4" />
                    <span>Tech Stack</span>
                </Command.Item>
                <Command.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-primary/20 aria-selected:text-primary">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Contact</span>
                </Command.Item>
            </div>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
