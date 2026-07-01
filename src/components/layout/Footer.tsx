"use client";

import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import Typography from "../ui/Typography";

export default function Footer() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Sao_Paulo", // Default to Brazil/Sao_Paulo (GMT-3 matching metadata)
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      
      try {
        const formatter = new Intl.DateTimeFormat("en-US", options);
        setTimeString(formatter.format(new Date()));
      } catch {
        // Fallback if timezone not supported
        const now = new Date();
        setTimeString(now.toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full border-t border-border-custom bg-bg py-12 mt-auto">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <Typography variant="caption" className="font-medium text-fg">
            © {new Date().getFullYear()} Studio. All rights reserved.
          </Typography>
          <Typography variant="meta" className="text-muted/70">
            Typography-First Editorial Base
          </Typography>
        </div>

        {/* Local time and availability status */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Typography variant="caption" className="text-muted font-medium">
              Available for projects
            </Typography>
          </div>
          
          {timeString && (
            <Typography variant="caption" className="font-mono text-muted/80">
              BRT / {timeString}
            </Typography>
          )}
        </div>

        {/* Social connections */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider text-muted hover:text-fg font-mono transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider text-muted hover:text-fg font-mono transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider text-muted hover:text-fg font-mono transition-colors duration-200"
          >
            Twitter
          </a>
        </div>
      </Container>
    </footer>
  );
}
