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
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Points from "@/components/ui/Points";
import { Card, Clock, Code, Group, Handshake, Shapes } from "@/components/ui/icons";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="px-6 py-5 flex items-center justify-between max-w-[1300px] mx-auto fixed top-2 left-0 right-0 z-50  bg-white/80 backdrop-blur-sm rounded-2xl">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="AgenciFlow Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-semibold text-xl">AgenciFlow</span>
        </div>

        <div className="flex items-center">
          <nav className="hidden md:flex items-center">
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary px-4"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary px-4"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary px-4"
            >
              Our Services
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary px-4"
            >
              Contact Us
            </Link>
          </nav>

          <Link
            href="#contact"
            className="bg-primary text-white px-8 py-3 rounded-md text-sm font-medium ml-6"
          >
            Get in Touch
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24">
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            transition: "transform 0.1s linear",
          }}
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

        <div className="max-w-[1300px] mx-auto px-6 pt-28 pb-56 relative z-10">
          <div
            className="max-w-[700px]"
            style={{
              transform: `translateY(${scrollY * -0.1}px)`,
              opacity: 1 - scrollY * 0.001,
              transition: "transform 0.1s linear, opacity 0.1s linear",
            }}
          >
            <h1 className="text-[80px] font-bold leading-[1.1] tracking-[-0.02em]">
              Your vision, our innovation limitless potential
            </h1>
            <p className="mt-6 text-3xl font-light text-gray-600 max-w-[600px]">
              Turning ideas into{" "}
              <span className="text-primary">intelligent digital</span>{" "}
              experiences
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex h-12 items-center justify-center bg-primary text-white px-6 rounded-md text-sm font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Solution Section */}
      <section className="bg-[#f3f3f6] py-16">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
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

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
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

            <div className="flex flex-col justify-center   py-4">
              <div className="border-b py-8">
                <h3 className="text-[32px] font-semibold text-gray-900 leading-tight">
                  5,000+
                </h3>
                <p className="text-gray-600 mt-1 text-xl">
                  Websites Built Using Flozy Pages
                </p>
              </div>

              <div className="border-b py-8">
                <h3 className="text-[32px] font-semibold text-gray-900 leading-tight">
                  80%
                </h3>
                <p className="text-gray-600 mt-1">
                  Faster Website Creation Compared To Traditional Methods
                </p>
              </div>

              <div className="border-b py-8">
                <h3 className="text-[32px] font-semibold text-gray-900 leading-tight">
                  99.9%
                </h3>
                <p className="text-gray-600 mt-1">
                  Uptime Ensuring Reliable Hosting And Performance
                </p>
              </div>

              <div className="border-b py-8">
                <h3 className="text-[32px] font-semibold text-gray-900 leading-tight">
                  10,000+
                </h3>
                <p className="text-gray-600 mt-1">
                  Templates & Design Combinations For Customization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Solutions Section */}
      <section className="py-20">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="max-w-5xl mb-16">
            <h2 className="text-[40px] font-bold mb-4 leading-[1.1] tracking-[-0.02em]">
              Tailored Software Development Solutions for Your Unique Business
              Needs
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              At AgenciFlow, we harness the latest technologies to build modern
              solutions. With deep expertise, we help you modernize, innovate,
              and maintain your critical software applications - delivering
              reliable results every time.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex h-12 items-center justify-center bg-primary text-white px-6 rounded-md text-sm font-medium"
            >
              Custom Solutions
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
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
                className="p-6 border border-gray-100 rounded-lg"
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
        <div className="max-w-[1300px] mx-auto px-6 text-center">
          <h2 className="text-[40px] font-bold mb-4 leading-[1.1] tracking-[-0.02em] max-w-2xl mx-auto">
            Whatever Your Tech Stack, We're Ready
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto mb-16">
            We deliver cutting-edge technology solutions to help businesses
            innovate, scale, and thrive in the digital era. Our services ensure
            efficiency, security, and high performance across all platforms.
          </p>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-8">
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
              <div key={index} className="flex flex-col items-center">
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
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
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
              <div key={index} className="flex flex-col items-center">
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
          </div>
        </div>
      </section>

      {/* What Makes AgenciFlow Unique Section */}
      <section className="py-20">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[40px] font-bold mb-4 leading-[1.1] tracking-[-0.02em]">
                What Makes AgenciFlow Unique?
              </h2>
              <p className="text-gray-600 mt-4 text-lg">
                Join us for effortless innovation, customized solutions, and
                rapid growth.
              </p>

              <div className="mt-16">
                <Image
                  src="/infinity.png"
                  alt="AgenciFlow Unique Features"
                  width={400}
                  height={400}
                  className="w-full max-w-md"
                />
              </div>
            </div>

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
                ].map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border-b border-gray-200 py-4"
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
                    <AccordionContent className="pt-4 pl-10">
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
      <section className="relative py-20 bg-[#111111] text-white">
        <div className="relative">
          {" "}
          {/* Container for image and overlay */}
          <img
            src="/teams.jpeg"
            alt="Our Team"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
          {/* Dark overlay */}
          <div className="absolute bottom-0 left-0 w-full px-6 md:px-28 py-16">
            <h3 className="text-[56px] font-bold">60 +</h3>
            <p className="text-xl">
              Expert Developers, Designers, QA, and DevOps Professionals
            </p>
            <p className="mt-4 text-lg">
              Brilliant minds. Groundbreaking tech. Unwavering drive
            </p>
          </div>
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
          <div className="max-w-lg lg:max-w-[500px]">
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
                  key={index}
                  className={`flex gap-4 border-gray-700 pb-6 ${
                    index === 0 ? "border-t pt-6" : "border-b"
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
      <section className="py-20 bg-[#1d1e1f] w-screen h-screen text-white">
        <div className="max-w-[1300px] mx-auto px-6">
          <h2 className="text-[40px] font-bold mb-12 leading-[1.1] tracking-[-0.02em]">
            Sprint-Based Deployment
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon:  <Clock/>,
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
                icon: <Card   />,
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
                icon: <Shapes   />,
                title: "Retrospective & Planning",
                description:
                  "Review performance, refine processes, and plan the next sprint.",
              },
            ].map((sprint, index) => (
              <div
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
        className="py-20 bg-gradient-to-br from-[#f5f5ff] to-white"
      >
        <div className="max-w-[1300px] mx-auto px-6 text-center mb-16 flex flex-col items-center">
          <h2 className="max-w-lg text-[40px] font-bold mb-4 leading-[1.3] tracking-[-0.02em]">
            Let's Build Something Great Together
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We offer end-to-end services including Design, Development, Testing,
            and more. Reach out to discuss how we can bring your ideas to life!
          </p>
        </div>

        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-gray-500 text-sm mb-2">E-mail</h3>
                <p className="text-xl font-medium">hello@agenciflow.com</p>
              </div>

              <div className="mb-8">
                <h3 className="text-gray-500 text-sm mb-2">Give us a call</h3>
                <p className="text-xl font-medium">+91 97838-83883</p>
              </div>

              <div className="mb-8">
                <h3 className="text-gray-500 text-sm mb-2">Address</h3>
                <p className="text-xl font-medium">
                  R-28-C1, First Floor, R-Block, Kovaipudur, Coimbatore, 641042
                </p>
              </div>

              <div>
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

            <div className="bg-gray-100 p-8 rounded-lg shadow-sm">
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
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-[40px] font-bold leading-[1.1] tracking-[-0.02em]">
                What our clients say
              </h2>
              <p className="text-gray-600 mt-2">
                A visionary creative agency that inspires and leads.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() =>
                  setActiveTestimonial((prev) =>
                    prev > 0 ? prev - 1 : testimonials.length - 1
                  )
                }
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() =>
                  setActiveTestimonial((prev) =>
                    prev < testimonials.length - 1 ? prev + 1 : 0
                  )
                }
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-transparent p-6 rounded-xl  border border-[#9E9E9E]`}
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
                <p className="text-gray-700">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-40 bg-primary text-white">
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
      </section>
      {/* Footer */}
      <footer className="bg-[#111111] text-white py-16">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3L4 9V21H20V9L12 3Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
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
      </footer>
    </div>
  );
}
