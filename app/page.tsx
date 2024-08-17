"use client";

import React, { useEffect } from 'react';
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import Navbar from "@/components/NavbarLanding";
import HeroSection1 from "@/components/HeroSection";
import Features1 from "@/components/Features/Feature";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import HeroSection from "@/components/HeroSection/HeroSection";
import CompareBy from "@/components/CampareBy";
import HowWorks from "@/components/HowWorks";
import FeaturesSection from "@/components/FeatureSection";
import VideoSection from "@/components/VideoSection";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import UseCasesSection from '@/components/UsecaseSection';
import IntegrationsSection from '@/components/IntegrationSection';
import TestimonialsSection from '@/components/TestimonialSection';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';

export default function Index() {
    const accordionItems = [
        {
            title: { number: '01', text: 'Import your data' },
            content: 'Detailed information about importing your data.',
            image: "https://www.chatbase.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.655882cf.png&w=3840&q=75&dpl=dpl_AuGk7k9urXD6BBidWwWUFP11isRJ"
        },
        {
            title: { number: '02', text: 'Customize behavior & appearance' },
            content: 'Make your chatbot look like it\'s part of your website with custom colors and logos and make it match your brand\'s personality with custom instructions.',
            image: "https://www.chatbase.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.f5cb49f3.png&w=3840&q=75&dpl=dpl_AuGk7k9urXD6BBidWwWUFP11isRJ"
        },
        {
            title: { number: '03', text: 'Embed on your website' },
            content: 'Instructions for embedding the chatbot on your website.',
            image: "https://www.chatbase.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.1f68180c.png&w=3840&q=75&dpl=dpl_AuGk7k9urXD6BBidWwWUFP11isRJ"
        },
        {
            title: { number: '04', text: 'Integrate with your tools' },
            content: 'Integrate your chatbot with other tools and services.',
            image: "https://www.chatbase.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.e375af97.png&w=3840&q=75&dpl=dpl_AuGk7k9urXD6BBidWwWUFP11isRJ"
        },
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: ".darkSideContainer",
            start: "top top", 
            end: "bottom top", 
            onEnter: () => {
                gsap.to(".darkSideContainer", {
                    backgroundColor: "black",
                    duration: 0.5,
                    ease: "power1.inOut",
                });
            },
            onLeaveBack: () => {
                gsap.to(".darkSideContainer", {
                    backgroundColor: "white",
                    duration: 1,
                    ease: "power1.inOut",
                });
            },
        });
    }, []);

    return (
        <div className="">
            <HeroSection />
            <CompareBy />
            <HowWorks items={accordionItems} />
            <FeaturesSection />
            <div className="darkSideContainer pt-44">
          <VideoSection />
          <UseCasesSection />
          <IntegrationsSection />
          <TestimonialsSection />
          <JoinSection />
        </div>
        <Footer />
        </div>
    );
}
