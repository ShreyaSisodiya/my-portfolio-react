"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";


const AboutSection = () => {

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/hero-image.png" width={500} height={550} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        In the dynamic pace of academic life at Northeastern University, I find myself fully engaged in the intricate world of Information Systems,
                        expanding upon my Computer Engineering foundation. With an insatiable thirst for knowledge,
                        I'm not only delving into software development but also immersing myself in the depths of data science.
                        This journey is a humble exploration, weaving together these disciplines to navigate through uncharted territories with earnest curiosity
                        and a steadfast commitment to innovation.
                        <br></br>
                        <br></br>

                        When I'm not deciphering lines of code or unraveling the mysteries of the digital realm,
                        you'll likely find me lost in the pages of a gripping high-fantasy novel, looking for the best ramen places,
                        or venturing into the great outdoors, camera in hand, capturing the beauty of nature.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;