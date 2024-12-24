import CareerCourse from "@/components/CareerCourse";
import Certificate from "@/components/Certificate";
import CourseCategory from "@/components/CourseCategory";
import Facilities from "@/components/Facilities";
import HeroSection from "@/components/HeroSection";
import SuccessStory from "@/components/SuccessStory";

export default function Home() {
  return (
    <div>
      {/* banner */}
      <HeroSection />
      {/* certificate */}
      <Certificate />
      {/* categories */}
      <CourseCategory />
      {/* course  */}
      <CareerCourse />
      {/* facilities */}
      <Facilities />
      {/* services */}
      {/* our student */}
      {/* Free seminar */}
      {/* Footer */}
    </div>
  );
}
