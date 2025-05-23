"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Points from "@/components/ui/Points";
import {
  Card,
  Clock,
  Code,
  Group,
  Handshake,
  Shapes,
} from "@/components/ui/icons";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Header } from "@/components/header"
import CountUpItem from "../components/ui/count-up";
// import { Parallax } from 'react-parallax';
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
// ..

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);



  const testimonials = [
    {
      name: "Colin Lucido",
      title: "Software Designer, Drukee",
      image: "https://picsum.photos/200",
      quote:
        "The client onboarding process has never been smoother. With AgencyFlow, we streamlined our workflows, improved communication, and increased client satisfaction.",
    },
    {
      name: "Ximena Sánchez",
      title: "Software Designer, Drukee",
      image: "https://picsum.photos/200",
      quote:
        "AgencyFlow has completely transformed our workflow, automating repetitive tasks and reducing the time spent on project management. Now, we can focus more on strategy and business growth while everything runs smoothly in the background. The intuitive interface and seamless integrations have made our processes more efficient than ever. It's truly a game-changer for agencies looking to scale.",
    },
    {
      name: "Matthew Jackson",
      title: "Software Designer, Drukee",
      image: "https://picsum.photos/200",
      quote:
        "Before AgencyFlow, missed deadlines and communication gaps were common frustrations. Now, everything is clear, structured, and effortlessly managed, allowing our agency to run smoothly. The platform's collaboration features have strengthened teamwork, improved efficiency, and eliminated stress.",
    },
  ];

  const techItems = [
    { name: "CSS3", icon: "/tech/css.svg" },
    { name: "JavaScript", icon: "/tech/js.svg" },
    { name: "Angular", icon: "/tech/angular.svg" },
    { name: "React", icon: "/tech/react.svg" },
    { name: "CSS3", icon: "/tech/css.svg" },
    { name: "JavaScript", icon: "/tech/js.svg" },
    { name: "Swift", icon: "/tech/swift.svg" },
    { name: "Angular", icon: "/tech/angular.svg" },
  ];

  // Duplicate the array to create a seamless loop
  const duplicatedItems = [...techItems, ...techItems];


  return (
    <ParallaxProvider>
      <main className="min-h-screen">
        <Header />
        {/* Hero Section */}
        <ParallaxProvider>
          <section className="relative overflow-hidden bg-white">
            <div
              data-aos="fade-down"
              className="absolute inset-0 z-0"
            // style={{
            //   transform: `translateY(${scrollY * 0.15}px)`,
            //   transition: "transform 0.1s linear",
            // }}
            >

              <Image
                src="/wave.png"
                alt="Wave pattern background"
                width={1440}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <Parallax speed={20}>
              <div className="max-w-[1300px] mx-auto px-6 pt-28 pb-56 relative z-10">
                <div 
                  className="max-w-[700px]"
                // style={{
                //   transform: `translateY(${scrollY * -0.1}px)`,
                //   opacity: 1 - scrollY * 0.001,
                //   transition: "transform 0.1s linear, opacity 0.1s linear",
                // }}
                >
                  <h1 className="text-[80px] font-bold leading-[1.1] tracking-[-0.02em]" data-aos="fade-up" data-aos-delay="100">
                    Your vision, our innovation limitless potential
                  </h1>
                  <p className="mt-6 text-3xl font-light text-gray-600 max-w-[600px]" data-aos="fade-up"
                  data-aos-delay="200">
                    Turning ideas into{" "}
                    <span className="text-primary">intelligent digital</span>{" "}
                    experiences
                  </p>
                  <Link
                  data-aos="fade-up"
                  data-aos-delay="300"
                    href="#contact"
                    className="mt-8 inline-flex h-12 items-center justify-center bg-primary text-white px-6 rounded-md text-sm font-medium"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </Parallax>
          </section>
        </ParallaxProvider>

        {/* Trusted Solution Section */}
        <section className="bg-[#f3f3f6] py-20  ">
          <div className="max-w-[1300px] mx-auto px-6">
            <div
              data-aos="fade-up"
              className="flex flex-col md:flex-row justify-between items-start mb-12"
            >
              <h2 className="text-[56px] font-semibold max-w-2xl leading-[1.1] tracking-[-0.02em]">
                Our Trusted Solution For Growing Businesses
              </h2>
              <Link
                href="#"
                className="flex items-center gap-2 text-primary font-medium mt-4 md:mt-0"
              >
                Explore Flozy <ArrowUpRight size={16} />
              </Link>
            </div>

            <div data-aos="fade-up" className="flex flex-col md:flex-row gap-6">

              {/* <FeatureSection */}
              <div className="bg-white p-8 rounded-2xl shadow-sm flex-[3]">
                <h3 className="text-2xl font-bold mb-2">
                  AI-Powered Page Builder
                </h3>
                <p className="text-gray-600 mb-6">AI Was The Defining Feature.</p>
                <div className="rounded-lg overflow-hidden border border-gray-100 bg-[linear-gradient(90deg,#e6d7ed,#c5e7fb)] shadow-sm">
                  <Image
                    src="/image.png"
                    alt="AI Page Builder Screenshot"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center   py-4 flex-[2]">
                <CountUpItem number={5000} text="Websites Built Using Flozy Pages" />
                <CountUpItem
                  number={80}
                  text="Faster Website Creation Compared To Traditional Methods"
                  hasPercentage
                />
                <CountUpItem
                  number={99.9}
                  text="Uptime Ensuring Reliable Hosting And Performance"
                  hasPercentage
                />
                <CountUpItem
                  number={10000}
                  text="Templates & Design Combinations For Customization"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tailored Solutions Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="max-w-5xl mb-16">
              <h2 className="text-[40px] font-bold mb-4 leading-[1.1] tracking-[-0.02em]" data-aos="fade-up" data-aos-delay="100">
                Tailored Software Development Solutions for Your Unique Business
                Needs
              </h2>
              <p className="text-gray-600 mt-4 text-lg" data-aos="fade-up" data-aos-delay="200">
                At AgenciFlow, we harness the latest technologies to build modern
                solutions. With deep expertise, we help you modernize, innovate,
                and maintain your critical software applications - delivering
                reliable results every time.
              </p>
              <Link
                href="#contact"
                 data-aos="fade-up" data-aos-delay="300"
                className="mt-8 inline-flex h-12 items-center justify-center bg-primary text-white px-6 rounded-md text-sm font-medium"
              >
                Custom Solutions
              </Link>
            </div>

            <div
              data-aos="fade-up"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-3"
            >
              {[
                "AI & Automation Solutions",
                "Website Development",
                "UI/UX Design",
                "Software Development",
                "QA assurance and engineering",
                "DevOps services",
                "Web Hosting & Maintenance",
                "Branding and Logo Creation",
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-100 rounded-lg hover:bg-[#F1F1F1]"
                >
                  <h3 className="font-medium mb-8">{service}</h3>
                  <Link
                    href="#"
                    className="text-primary text-sm flex items-center gap-1"
                  >
                    View Detail <ArrowUpRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 bg-[#f3f3f6]">
          <div
            className="max-w-[1300px] mx-auto px-6 text-center"
          >
            <h2 className="text-[40px] font-bold mb-4 leading-[1.1] tracking-[-0.02em] max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Whatever Your Tech Stack, We're Ready
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto mb-3" data-aos="fade-up" data-aos-delay="200">
              We deliver cutting-edge technology solutions to help businesses
              innovate, scale, and thrive in the digital era. Our services ensure
              efficiency, security, and high performance across all platforms.
            </p>

            {/* <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-8">
            {[
              { name: "CSS3", icon: "/tech/css.svg" },
              { name: "JavaScript", icon: "/tech/js.svg" },
              { name: "Angular", icon: "/tech/angular.svg" },
              { name: "React", icon: "/tech/react.svg" },
              { name: "CSS3", icon: "/tech/css.svg" },
              { name: "JavaScript", icon: "/tech/js.svg" },
              { name: "Swift", icon: "/tech/swift.svg" },
              { name: "Angular", icon: "/tech/angular.svg" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center animate-swipe"
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-xs mt-2">{tech.name}</span>
              </div>
            ))}
          </div> */}

            <div className="relative w-full pt-[40px]">

              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/techBg.svg" // Replace with your image path
                  alt="Background"
                  layout="fill"
                  objectFit="contain"
                  className="opacity-70" // Adjust opacity as needed
                />
              </div>

              {/* Left fade gradient */}
              <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#f3f3f6] to-transparent pointer-events-none" />
              {/* Right fade gradient */}
              <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#f3f3f6] to-transparent pointer-events-none" />

              <div className="relative w-full group overflow-hidden pb-[60px] pt-[10px]">
                <div className="animate-[infinite-scroll-left_20s_linear_infinite] whitespace-nowrap inline-block group-hover:[animation-play-state:paused]">
                  <div className="inline-flex gap-4">
                    {[...techItems, ...techItems].map((tech, index) => (
                      <div key={index} className=" flex flex-col items-center w-[calc(25%-16px)] md:w-[calc(12.5%-16px)] flex-shrink-0">
                        <div className="w-20 h-20 bg-white techItem rounded-lg flex flex-col items-center justify-center shadow-sm">
                          <Image
                            src={tech.icon || "/placeholder.svg"}
                            alt={tech.name}
                            width={32}
                            height={32}
                          />
                          <span className="text-xs mt-2">{tech.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative w-full group overflow-hidden  pb-[20px] pt-[10px]">
                <div className="animate-[infinite-scroll-right_20s_linear_infinite] whitespace-nowrap inline-block group-hover:[animation-play-state:paused]">
                  <div className="inline-flex gap-4">
                    {[...techItems, ...techItems].map((tech, index) => (
                      <div key={index} className=" flex flex-col items-center w-[calc(25%-16px)] md:w-[calc(12.5%-16px)] flex-shrink-0">
                        <div className="w-20 h-20 bg-white techItem flex-col rounded-lg flex items-center justify-center shadow-sm">
                          <Image
                            src={tech.icon || "/placeholder.svg"}
                            alt={tech.name}
                            width={32}
                            height={32}
                          />
                          <span className="text-xs mt-2">{tech.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>


            {/* <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {[
              { name: "CSS3", icon: "/tech/css.svg" },
              { name: "React", icon: "/tech/react.svg" },
              { name: "HTML5", icon: "/tech/html.svg" },
              { name: "JavaScript", icon: "/tech/js.svg" },
              { name: "React", icon: "/tech/react.svg" },
              { name: "Angular", icon: "/tech/angular.svg" },
              { name: "React", icon: "/tech/react.svg" },
              { name: "Swift", icon: "/tech/swift.svg" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center animate-swipe-reverse"
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-xs mt-2">{tech.name}</span>
              </div>
            ))}
          </div> */}
          </div>
        </section>

        {/* What Makes AgenciFlow Unique Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <Parallax speed={10}>
                <div>
                  <h2 className="text-[40px] font-bold mb-4 leading-[1.1] tracking-[-0.02em]" data-aos="fade-up" data-aos-delay="100">
                    What Makes AgenciFlow Unique?
                  </h2>
                  <p className="text-gray-600 mt-4 text-lg" data-aos="fade-up" data-aos-delay="200">
                    Join us for effortless innovation, customized solutions, and
                    rapid growth.
                  </p>

                  <div className="mt-16" data-aos="fade-up" data-aos-delay="300">
                    <Image
                      src="/infinity.png"
                      alt="AgenciFlow Unique Features"
                      width={400}
                      height={400}
                      className="w-full max-w-md"
                    />
                  </div>
                </div>
              </Parallax>

              <div>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="item-1"
                  className="w-full"
                >
                  {[
                    {
                      id: "item-1",
                      number: "01",
                      title: "Bespoke & Scalable Websites",
                      content:
                        "We create tailor-made websites that evolve with your business, ensuring long-term growth and adaptability.",
                    },
                    {
                      id: "item-2",
                      number: "02",
                      title: "SEO & Mobile Optimization",
                      content:
                        "Our websites are optimized for search engines and mobile devices, ensuring maximum visibility and user experience.",
                    },
                    {
                      id: "item-3",
                      number: "03",
                      title: "Speed & Security First",
                      content:
                        "We prioritize fast loading times and robust security measures to protect your business and customers.",
                    },
                    {
                      id: "item-4",
                      number: "04",
                      title: "Stunning, User-Centric Design",
                      content:
                        "Our designs focus on user experience, creating intuitive and engaging interfaces that convert visitors into customers.",
                    },
                    {
                      id: "item-5",
                      number: "05",
                      title: "E-Commerce Ready",
                      content:
                        "We build powerful e-commerce solutions that drive sales and provide seamless shopping experiences.",
                    },
                    {
                      id: "item-6",
                      number: "06",
                      title: "End-to-End Support & Maintenance",
                      content:
                        "Our team provides ongoing support and maintenance to ensure your website remains up-to-date and secure.",
                    },
                    {
                      id: "item-7",
                      number: "07",
                      title: "Future-Ready Technologies",
                      content:
                        "We use cutting-edge technologies to future-proof your digital presence and stay ahead of the competition.",
                    },
                    {
                      id: "item-8",
                      number: "08",
                      title: "Transparent Pricing & Cost Efficiency",
                      content:
                        "Our pricing is transparent and competitive, providing excellent value for your investment.",
                    },
                  ].map((item, index) => (
                    <AccordionItem
                      key={item.id}
                      value={item.id}
                      className="border-b border-gray-200 py-4"
                       data-aos="fade-up" data-aos-delay={`${index * 100}`}
                    >
                      <AccordionTrigger className="flex items-center justify-between w-full text-left">
                        <div className="flex items-center">
                          <span className="text-primary font-medium mr-4">
                            {item.number}.
                          </span>
                          <span className="text-xl font-medium">
                            {item.title}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-10">
                        <p className="text-gray-600">{item.content}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
       
          <section className="relative  h-screen text-white">
            <div className="relative">
              {" "}
              {/* Container for image and overlay */}
              <Parallax speed={10}>
                <Image
                  src="/teams.jpeg"
                  alt="Our Team"
                  width={1440}
                  height={800}
                  className="w-full object-cover"
                  priority
                />
                <div className="absolute   inset-0 bg-black opacity-40"></div>{" "}
              </Parallax>
              {/* Dark overlay */}
              <Parallax speed={-20}>
                <div
                  data-aos="fade-up"
                  className="absolute bottom-40 left-0 w-full px-6 md:px-28 py-16"
                >
                  <h3 className="text-[56px] font-bold">60 +</h3>
                  <p className="text-xl">
                    Expert Developers, Designers, QA, and DevOps Professionals
                  </p>
                  <p className="mt-4 text-lg">
                    Brilliant minds. Groundbreaking tech. Unwavering drive
                  </p>
                </div>
              </Parallax>
            </div>
          </section>

        {/* Our Process Section */}
        <section className="relative py-20 bg-[#202122]  text-white">
          <Image
            src="/rings.png"
            alt="Process"
            width={400}
            height={400}
            className="absolute w-full max-w-md top-0 right-0"
          />
          <div className="container mx-auto px-6 md:px-12 lg:px-16 py-24 flex flex-col lg:flex-row gap-16">
            <div
              data-aos="fade-up"
              className="max-w-lg lg:max-w-[500px] sticky top-24 h-full"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
                End-to-End Product Development
              </h2>
              <p className="text-gray-400 text-lg">
                End-to-end product development is a comprehensive process that
                takes a concept from its initial stage to a fully functional and
                market-ready product.
              </p>
            </div>
            <div className="flex-1">
              <div className="space-y-8">
                {[
                  {
                    title: "Idea & Conceptualization",
                    description:
                      "Identifying market needs, brainstorming solutions, and defining the product vision for a strong foundation.",
                  },
                  {
                    title: "Planning & Strategy",
                    description:
                      "Defining goals, roadmap, and resources to ensure a clear and efficient development process.",
                  },
                  {
                    title: "Design and Prototyping",
                    description:
                      "Creating intuitive UI/UX and interactive prototypes for validation and user testing.",
                  },
                  {
                    title: "Development & Implementation",
                    description:
                      "Building, integrating, and optimizing the product for performance and scalability.",
                  },
                  {
                    title: "Testing & Quality Assurance",
                    description:
                      "We enhance the product's capabilities to manage increased demand and usage.",
                  },
                  {
                    title: "Deployment & Launch",
                    description:
                      "Final testing, production rollout, and user onboarding for a successful go-live.",
                  },
                  {
                    title: "Maintenance & Improvement",
                    description:
                      "Regular updates, performance monitoring, and feature enhancements for long-term success.",
                  },
                ].map((step, index) => (
                  <div
                    data-aos="fade-up"
                    key={index}
                    className={`flex gap-4 border-gray-700 pb-6 ${index === 0 ? "border-t pt-6" : "border-b"
                      }`}
                  >
                    <Points />
                    <div>
                      <h4 className="text-lg font-medium mb-2">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Sprint-Based Deployment Section */}
        <section className="py-20 bg-[#1d1e1f] w-screen text-white">
          <div className="max-w-[1300px] mx-auto px-6">
            <h2
              data-aos="fade-up"
              className="text-[40px] font-bold mb-12 leading-[1.1] tracking-[-0.02em]"
            >
              Sprint-Based Deployment
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Clock />,
                  title: "Planning & Backlog Creation",
                  description:
                    "Define goals, prioritize tasks, and set the development roadmap.",
                },
                {
                  icon: <Handshake />,
                  title: "Sprint Kickoff",
                  description:
                    "Assign tasks, set timelines, and align the team on sprint goals.",
                },
                {
                  icon: <Card />,
                  title: "Design & Development",
                  description:
                    "Create, refine, and build features for seamless functionality.",
                },
                {
                  icon: <Group />,
                  title: "Testing & QA",
                  description:
                    "Ensure functionality, security, and performance through rigorous testing.",
                },
                {
                  icon: <Code />,
                  title: "Sprint Review & Deployment",
                  description:
                    "Evaluate progress, gather feedback, and release updates.",
                },
                {
                  icon: <Shapes />,
                  title: "Retrospective & Planning",
                  description:
                    "Review performance, refine processes, and plan the next sprint.",
                },
              ].map((sprint, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  key={index}
                  className="border border-gray-600 rounded-lg p-6"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    {sprint.icon}
                  </div>
                  <h3 className="text-lg font-medium mb-2">{sprint.title}</h3>
                  <p className="text-gray-400 text-sm">{sprint.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="pt-20 pb-[100px] bg-gradient-to-br from-[#f5f5ff] to-white overflow-hidden"
        >
          <div className="contactBg2 absolute inset-0 z-0">
            <Image
              src="/contactBg2.svg" // Replace with your image path
              alt="Background"
              layout="fill"
              objectFit="contain"
              className="opacity-70" // Adjust opacity as needed
            />
          </div>
          <div className="contactBg1 absolute inset-0 z-0">
            <Image
              src="/contactBg1.svg" // Replace with your image path
              alt="Background"
              layout="fill"
              objectFit="contain"
              className="opacity-70" // Adjust opacity as needed
            />
          </div>

          <div
            className="max-w-[1300px] mx-auto px-6 text-center mb-16 flex flex-col items-center"
          >
            <h2 className="max-w-lg text-[40px] font-bold mb-4 leading-[1.3] tracking-[-0.02em]" data-aos="fade-up" data-aos-delay={'100'}>
              Let's Build Something Great Together
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay={'200'}>
              We offer end-to-end services including Design, Development, Testing,
              and more. Reach out to discuss how we can bring your ideas to life!
            </p>
          </div>

          <div className="max-w-[1300px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="mb-8" data-aos="fade-right" data-aos-delay={'100'}>
                  <h3 className="text-gray-500 text-sm mb-2">E-mail</h3>
                  <p className="text-xl font-medium">hello@agenciflow.com</p>
                </div>

                <div className="mb-8" data-aos="fade-right" data-aos-delay={'200'}>
                  <h3 className="text-gray-500 text-sm mb-2">Give us a call</h3>
                  <p className="text-xl font-medium">+91 97838-83883</p>
                </div>

                <div className="mb-8" data-aos="fade-right" data-aos-delay={'300'}>
                  <h3 className="text-gray-500 text-sm mb-2">Address</h3>
                  <p className="text-xl font-medium">
                    R-28-C1, First Floor, R-Block, Kovaipudur, Coimbatore, 641042
                  </p>
                </div>

                <div data-aos="fade-right" data-aos-delay={'400'}>
                  <h3 className="text-gray-500 text-sm mb-4">Follow us</h3>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      <Facebook size={18} />
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      <Twitter size={18} />
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      <Instagram size={18} />
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      <Linkedin size={18} />
                    </Link>
                  </div>
                </div>
              </div>

              <div data-aos="fade-left" className="bg-gray-100 p-8 rounded-lg shadow-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="example@gmail.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="+1 (555) 0000-0000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Write Your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-md font-medium"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-[#f3f3f6]">
          <div className="max-w-[1300px] mx-auto px-6">
            <div
              data-aos="fade-up"
              className="flex justify-between items-center mb-12"
            >
              <div>
                <h2 className="text-[56px] font-semibold leading-[1.1] tracking-[-0.02em]">
                  What our clients say
                </h2>
                <p className="text-gray-600 mt-2">
                  A visionary creative agency that inspires and leads.
                </p>
              </div>

              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                  <ArrowLeft size={16} />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  className={`bg-transparent p-6 rounded-xl  border h-full border-[#9E9E9E]`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#6E6C83] leading-[38px]">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <div className="relative h-full w-full p-32 bg-primary text-white flex justify-center items-center overflow-hidden">
          <Image
            src="/rings.png"
            alt="Process"
            width={400}
            height={400}
            style={{
              rotate: "270deg",
            }}
            className="absolute w-full max-w-md top-[-50px] left-0"
          />
          <Image
            src="/rings.png"
            alt="Process"
            width={400}
            height={400}
            className="absolute w-full max-w-md bottom-[-50px] right-0 rotate-90"
          />
          <div className="max-w-[1300px] mx-auto px-6 text-center">
            <h2 className="text-[48px] font-bold mb-4 leading-[1.1] tracking-[-0.02em]">
              Every Project is a Unique Opportunity
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              We bring fresh ideas and a commitment to excellence to every
              project. We bring fresh ideas and a commitment to excellence to
              every project.
            </p>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center bg-white text-primary px-6 rounded-md text-sm font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Footer */}

          <footer className="bg-[#202122] text-white overflow-hidden">
          <Parallax speed={-20}>
              <div className="mx-auto px-6 lg:px-20">
                <div className="grid md:grid-cols-4 gap-8 py-80">
                  {/* ... all your existing footer content ... */}

                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center">
                        <Image src={'/logosvg.svg'} alt="logo" width={30} height={30} />
                      </div>
                      <span className="font-bold text-lg">AgenciFlow</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      R-28-C1, First Floor, R-Block,
                      <br />
                      Kovaipudur, Coimbatore, 641042
                    </p>
                    <div className="flex gap-4">
                      <Link href="#" className="text-gray-400 hover:text-white">
                        <Facebook size={18} />
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-white">
                        <Twitter size={18} />
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-white">
                        <Instagram size={18} />
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-white">
                        <Linkedin size={18} />
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Services</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          AI & Automation Solutions
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          Website Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          Web Hosting & Maintenance
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          Software Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          Mobile App Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          QA assurance and engineering
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          DevOps Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          Branding and Logo Creation
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          UI/UX Design
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Expertise</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          AI Chatbots
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          Cloud Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          AI Software Suite
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          Application Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          Artificial Intelligence
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">About</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          Clients
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          Join Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          About Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-800 pt-8 pb-8 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-400 text-sm">
                    © 2025 AgenciFlow. All rights reserved.
                  </p>
                  <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="#" className="text-gray-400 hover:text-white text-sm">
                      Contact Us
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white text-sm">
                      About Us
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white text-sm">
                      Privacy Policy
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white text-sm">
                      Terms of Service
                    </Link>
                  </div>
                </div>
              </div>
              </Parallax>
          </footer>

        {/* <footer className="bg-[#202122] text-white relative">
        <div className="  mx-auto px-6 px-lg-80">
          <div className="grid md:grid-cols-4 gap-8 py-80">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <Image src={'/logosvg.svg'} alt="logo" width={30} height={30} />
                </div>
                <span className="font-bold text-lg">AgenciFlow</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                R-28-C1, First Floor, R-Block,
                <br />
                Kovaipudur, Coimbatore, 641042
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook size={18} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={18} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram size={18} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={18} />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    AI & Automation Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Web Hosting & Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    QA assurance and engineering
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    DevOps Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Branding and Logo Creation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    UI/UX Design
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Expertise</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    AI Chatbots
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    AI Software Suite
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Application Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Artificial Intelligence
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">About</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Join Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 pb-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 AgenciFlow. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Contact Us
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                About Us
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer> */}
      </main>
    </ParallaxProvider>
  );
}
