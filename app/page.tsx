import CareerCourse from "@/components/CareerCourse";
import Certificate from "@/components/Certificate";
import CourseCategory from "@/components/CourseCategory";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      {/* header */}
      <Header />
      {/* banner */}
      <HeroSection />
      {/* certificate */}
      <Certificate />
      {/* categories */}
      <CourseCategory />
      {/* course  */}
      <CareerCourse />
      {/* services */}
      {/* our student */}
      {/* Free seminar */}
      {/* Footer */}
    </div>
  );
}
