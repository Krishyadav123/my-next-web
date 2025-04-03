import Image from "next/image"
import Link from "next/link"
import { Mail, Instagram, Youtube, Phone, Facebook, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Hero from "../_components/Home/Hero"
import Feature from "../_components/Home/Feature"
import About from "../_components/Home/About"
import Services from "../_components/Home/Services"
import CTA from "../_components/Home/CTA"
import WhyWeAreBest from "../_components/Home/WhyWeAreBest"
import Blog from "../_components/Home/Blog"
import Partner from "../_components/Home/Partner"

export default function Home() {
  return (
    <main className="min-h-screen">
    

      {/* Hero Section */}
        <Hero />

      {/* Feature Section */}
      <Feature />

      {/* About Section */}
      <About />

      {/* Services Section */}
     <Services />

      {/* Contact CTA Section */}
     <CTA />

      {/* Why We Are The Best Section */}
      <WhyWeAreBest />

      {/* Blogs Section */}
     <Blog />

      {/* Partners Section */}
    <Partner />

      {/* Footer */}
    </main>
  )
}
