import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";
import PromptDetail from "./pages/PromptDetail";
import React from "react";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LazyMotion features={domAnimation}>
          <AnimatePresence>
            <TooltipProvider>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/posts/:slug" element={<BlogPost />} />
                <Route path="/prompts/:slug" element={<PromptDetail />} />
              </Routes>
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </AnimatePresence>
        </LazyMotion>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;