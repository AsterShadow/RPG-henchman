"use client";

import Footer from "@/app/layout/Footer/Footer";
import Navbar from "@/app/layout/Header/Header";
import SectionChat from "@/app/layout/SectionChat";
import SectionComponent from "@/app/layout/SectionHero";
import { sections } from "@/constants/section";
import { useRouter } from "next/router";
import { useState } from "react";

const CreatePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [messages, setMessages] = useState<string[]>([]);

  const section = sections.find((section) => section.slug === slug);
  //handle loading state instead of throwing 404 error
  return (
    <main className="container">
      <Navbar />
      <div className="w-full flex flex-col gap-48 py-[8rem] lg:py-[15rem]">
        {section ? (
          <>
            <SectionComponent {...section} />
            <SectionChat messages={messages} />
          </>
        ) : (
          <div className="w-full flex flex-col items-center justify-center">
            <div className="text-2xl">ERROR404</div>
            <div>PAGE NOT FOUND</div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default CreatePage;
