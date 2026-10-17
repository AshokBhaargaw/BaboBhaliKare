"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickBookingBar from "@/components/QuickBookingBar";
import AboutSection from "@/components/AboutSection";
import RoomsSection from "@/components/RoomsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import TempleGuideSection from "@/components/TempleGuideSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SeoContentSection from "@/components/SeoContentSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const openBooking = () => setBookingModalOpen(true);
  const closeBooking = () => setBookingModalOpen(false);

  return (
    <main>
      {/* Navigation */}
      <Navbar onOpenBooking={openBooking} />

      {/* Hero Banner */}
      <Hero onOpenBooking={openBooking} />

      {/* Floating Availability Inquiry Bar */}
      <QuickBookingBar />

      {/* About Dharmshala */}
      <AboutSection onOpenBooking={openBooking} />

      {/* Rooms Showcase */}
      <RoomsSection onOpenBooking={openBooking} />

      {/* Key Amenities */}
      <AmenitiesSection />

      {/* Ramdevra Darshan & Aarti Guide */}
      <TempleGuideSection />

      {/* Real Photo Gallery */}
      <GallerySection />

      {/* Location, Google Map & Route Guide */}
      <LocationSection />

      {/* Pilgrim Reviews */}
      <TestimonialsSection />

      {/* Dedicated SEO & Information Section */}
      <SeoContentSection onOpenBooking={openBooking} />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer onOpenBooking={openBooking} />

      {/* Sticky Mobile Action Bar for Phone Calling */}
      <MobileBottomBar onOpenBooking={openBooking} />

      {/* Booking Dialog Modal */}
      <BookingModal isOpen={bookingModalOpen} onClose={closeBooking} />
    </main>
  );
}
