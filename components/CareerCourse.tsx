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
      {/* course Carousel */}
      {/* <div className="w-full">
        <Tabs
          defaultValue="allCourses"
          className="flex flex-col gap-10 md:gap-20"
        >
          <TabsList
            className="w-full md:w-fit h-full md:min-h-[43h]
           grid grid-cols-2 md:grid-cols-4 place-items-start gap-5"
          >
            {TabsMenu?.map((item) => (
              <TabsTrigger
                key={item?.value}
                value={item?.value}
                className="w-full bg-gray-100 data-[state=active]:text-orange-600/85 font-semibold text-xs md:text-base"
              >
                {item?.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="allCourses" className="">
            <p>All Courses</p>
          </TabsContent>
        </Tabs>
      </div> */}
    </Container>
  );
}

export default CareerCourse;
