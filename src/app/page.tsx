import Hero from "@/components/home/Hero";
import ReelsSection from "@/components/reels/ReelsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesPreview from "@/components/home/ServicesPreview";
import CoverflowGallery from "@/components/3d/CoverflowGallery";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import BookingCTA from "@/components/home/BookingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ReelsSection />
      <WhyChooseUs />
      <ServicesPreview />
      <CoverflowGallery />
      <TestimonialSlider />
      <BookingCTA />
    </>
  );
}

