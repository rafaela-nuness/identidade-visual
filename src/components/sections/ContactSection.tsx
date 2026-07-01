"use client";

import React, { useState } from "react";
import Section from "../ui/Section";
import Typography from "../ui/Typography";
import Button from "../ui/Button";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      
      // Reset back to idle after a few seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Section id="contact" borderTop className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Side: Editorial Info */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-4">
            <Typography variant="meta" className="text-accent">
              Connect // Collaboration
            </Typography>
            <Typography variant="h1" className="font-serif">
              Let&apos;s build something meaningful.
            </Typography>
            <Typography variant="body" className="mt-2 text-muted/95">
              I am open to contract roles, speaking engagements, and collaborative design-engineering partnerships. Drop a message or reach out directly via email.
            </Typography>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-border-custom/50">
            <Typography variant="caption" className="font-mono text-muted/70 uppercase tracking-wider">
              Direct Contact
            </Typography>
            <a
              href="mailto:hello@example.com"
              className="text-lg font-serif italic hover:text-accent transition-colors duration-200"
            >
              hello@example.com
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7 border border-border-custom bg-bg/50 p-8 md:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Input field: Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs uppercase tracking-wider font-mono text-muted">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                placeholder="Charlotte Perriand"
                className="border-b border-border-custom bg-transparent py-2.5 focus:border-fg focus:outline-none transition-colors duration-300 w-full text-sm placeholder:text-muted/30"
              />
            </div>

            {/* Input field: Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs uppercase tracking-wider font-mono text-muted">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                placeholder="charlotte@studio.com"
                className="border-b border-border-custom bg-transparent py-2.5 focus:border-fg focus:outline-none transition-colors duration-300 w-full text-sm placeholder:text-muted/30"
              />
            </div>

            {/* Input field: Message */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs uppercase tracking-wider font-mono text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell me about your project, timelines, and goals..."
                className="border-b border-border-custom bg-transparent py-2.5 focus:border-fg focus:outline-none transition-colors duration-300 w-full text-sm resize-none placeholder:text-muted/30"
              />
            </div>

            {/* Submit Trigger */}
            <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
              <Button
                type="submit"
                variant="primary"
                disabled={status === "sending" || status === "success"}
                className="min-w-[140px]"
              >
                {status === "sending" && "Sending..."}
                {status === "success" && "Sent"}
                {status === "idle" && "Send Message"}
              </Button>

              {status === "success" && (
                <Typography variant="caption" className="text-emerald-600 font-mono text-xs">
                  ✓ Message received. I will get back to you shortly.
                </Typography>
              )}
            </div>

          </form>
        </div>

      </div>
    </Section>
  );
}
