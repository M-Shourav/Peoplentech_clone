import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import { TbStackFilled } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
const TabsMenu = [
  {
    name: "All Courses",
    value: "allCourses",
  },
  {
    name: "ScholarShip Courses",
    value: "ScholarShip",
  },
  {
    name: "Database Management & Testing",
    value: "Database",
  },
  {
    name: "Web & Software Development",
    value: "web-development",
  },
  {
    name: "Post Graduate diploma",
    value: "diploma",
  },
  {
    name: "Network and Server Management",
    value: "network",
  },
  {
    name: "Security & Project Management",
    value: "security",
  },
  {
    name: "Graphics & Multimedia",
    value: "graphics",
  },
  {
    name: "Digital Marketing",
    value: "digitalMarketing",
  },
  {
    name: "Basics Computing",
    value: "basicComputer",
  },
];
function CareerCourse() {
  return (
    <Container className="py-5 md:py-10 flex flex-col gap-10">
      <Heading
        title="Career Acceleration Courses"
        subtitle="Benefit from expert guidance, gain in-demand skills, and accelerate your professional journey with our proven success"
        icon={<TbStackFilled />}
        smallTitle="Course"
      />
      <div className="w-full">
        <Tabs className="flex flex-col md:flex-row gap-5">
          <TabsList className="border-b border-b-black flex flex-col">
            {TabsMenu?.map((item) => (
              <TabsTrigger key={item?.value} value={item?.value}>
                {item?.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="allCourses">
            <p>all Courses</p>
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  );
}

export default CareerCourse;
