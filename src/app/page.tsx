import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesPreview from "@/components/home/ServicesPreview";
import CoverflowGallery from "@/components/3d/CoverflowGallery";
import TransformationSlider from "@/components/home/TransformationSlider";
import ReelsSection from "@/components/reels/ReelsSection";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import BookingCTA from "@/components/home/BookingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <CoverflowGallery />
      <TransformationSlider />
      <ReelsSection />
      <TestimonialSlider />
      <BookingCTA />
    </>
  );
}
