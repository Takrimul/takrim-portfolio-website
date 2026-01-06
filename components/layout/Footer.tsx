"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LOGS = [
  { type: "INFO", msg: "Processed transaction #1024 via Kafka" },
  { type: "DEBUG", msg: "Redis cache hit for user_session_892" },
  { type: "WARN", msg: "Latency spike detected in region-asia-south1" },
  { type: "INFO", msg: "Microservice 'Auth-Service' scaled up to 5 instances" },
  { type: "INFO", msg: "Database connection pool refreshed" },
  { type: "DEBUG", msg: "Garbage collection completed in 120ms" },
  { type: "INFO", msg: "New deployment: TeleCash v2.1.0" },
  { type: "INFO", msg: "System health check: 100% OK" },
];

export function Footer() {
  // Use client-side only rendering to avoid hydration mismatch with random dates
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <footer className="fixed bottom-0 w-full bg-black/90 border-t border-primary/20 backdrop-blur-md z-50 h-8 flex items-center overflow-hidden font-mono text-[10px] md:text-xs">
      <div className="bg-primary/20 px-3 h-full flex items-center text-primary font-bold whitespace-nowrap">
        LIVE SYSTEM LOGS
      </div>
      <div className="flex-1 overflow-hidden relative flex">
         <motion.div 
            className="flex whitespace-nowrap min-w-full"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
         >
            {[...LOGS, ...LOGS, ...LOGS].map((log, i) => (
                <div key={i} className="flex items-center gap-2 px-4 border-r border-white/5 opacity-70">
                    <span className="text-muted-foreground">[{new Date().toISOString().split('T')[1].split('.')[0]}]</span>
                    <span className={
                        log.type === "INFO" ? "text-blue-400" :
                        log.type === "WARN" ? "text-yellow-400" :
                        "text-green-400"
                    }>
                        [{log.type}]
                    </span>
                    <span className="text-foreground/80">{log.msg}</span>
                </div>
            ))}
         </motion.div>
      </div>
    </footer>
  );
}
