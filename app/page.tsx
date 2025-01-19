import CareerCourse from "@/components/CareerCourse";
import Certificate from "@/components/Certificate";
import CourseCategory from "@/components/CourseCategory";
import Facilities from "@/components/Facilities";
import HeroSection from "@/components/HeroSection";
import OurClients from "@/components/OurClients";
import OurConcerns from "@/components/OurConcerns";
import ScrollButton from "@/components/ScrollButton";
import Seminars from "@/components/Seminars";
import SuccessStory from "@/components/SuccessStory";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Certificate />
      <CourseCategory />
      <CareerCourse />
      <Facilities />
      <SuccessStory />
      <Seminars />
      <OurConcerns />
      <OurClients />
      <ScrollButton />
    </div>
  );
}
