// Timeline.js

import React from 'react';


const ExperienceSection = () => {
    return (

        <section id="experience">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Experience
            </h2>
            {/* <ol class="relative border-s border-gray-200 dark:border-gray-700">
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>

                </li>
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>
                <li class="ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
            </ol> */}


            <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    {/* <!-- Icon --> */}
                    <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <svg fill="#7d26e8" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg" stroke="#7d26e8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.141 7.905c.24.102.24.269 0 .37l-7.204 3.058a1.288 1.288 0 0 1-.874 0L.859 8.276c-.24-.102-.24-.27 0-.371l7.204-3.058a1.287 1.287 0 0 1 .874 0zm-6.833 4.303 3.983-1.69v2.081c0 1.394-2.145 2.524-4.791 2.524s-4.79-1.13-4.79-2.524v-2.082l3.982 1.69a2.226 2.226 0 0 0 1.616 0zm4.94 1.677h1.642v-1.091a.822.822 0 1 0-1.643 0zm.82-3.603a.554.554 0 1 0-.553-.554.554.554 0 0 0 .554.554zm0 1.415a.554.554 0 1 0-.553-.555.554.554 0 0 0 .554.555z"></path></g></svg>
                    </div>
                    <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-transparent  p-4 rounded border border-violet-950 shadow">
                        <div class="flex items-center justify-between space-x-2 mb-1">
                            <div class="font-bold">Diploma in Computer Technology
                                <p>India</p>
                            </div>
                            <time class="font-caveat font-medium text-white">2015 - 2018</time>
                        </div>
                        <div class="text-slate-300">
                            Graduated with Diploma in Computer Technology from Mumbai University in June 2018.
                        </div>
                    </div>
                </div>

                <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    {/* <!-- Icon --> */}
                    <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#7d26e8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15" stroke="#7d26e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                    <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-transparent  p-4 rounded border border-violet-950 shadow">
                        <div class="flex items-center justify-between space-x-2 mb-1">
                            <div class="font-bold">Software Developer Intern
                                <p>India</p>
                            </div>
                            <time class="font-caveat font-medium text-white">May 2019- June 2019</time>
                        </div>
                        <div class="text-slate-300">
                            As a Software Engineer intern at Astora  Syndicate, I worked on both front-end and back-end development,
                            creating dynamic user interfaces with ReactJS, achieving extensive test coverage,
                            and integrating RESTful APIs for enhanced application performance.
                        </div>
                    </div>
                </div>

                <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    {/* <!-- Icon --> */}
                    <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <svg fill="#7d26e8" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg" stroke="#7d26e8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.141 7.905c.24.102.24.269 0 .37l-7.204 3.058a1.288 1.288 0 0 1-.874 0L.859 8.276c-.24-.102-.24-.27 0-.371l7.204-3.058a1.287 1.287 0 0 1 .874 0zm-6.833 4.303 3.983-1.69v2.081c0 1.394-2.145 2.524-4.791 2.524s-4.79-1.13-4.79-2.524v-2.082l3.982 1.69a2.226 2.226 0 0 0 1.616 0zm4.94 1.677h1.642v-1.091a.822.822 0 1 0-1.643 0zm.82-3.603a.554.554 0 1 0-.553-.554.554.554 0 0 0 .554.554zm0 1.415a.554.554 0 1 0-.553-.555.554.554 0 0 0 .554.555z"></path></g></svg>
                    </div>
                    <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-transparent  p-4 rounded border border-violet-950 shadow">
                        <div class="flex items-center justify-between space-x-2 mb-1">
                            <div class="font-bold">Bachelor&apos;s in Computer Engineering
                                <p>India</p>
                            </div>
                            <time class="font-caveat font-medium text-white">2018-2021</time>
                        </div>
                        <div class="text-slate-300">
                            Graduated with a Bachelor&apos;s degree in Computer Engineering from Pune University in June 2021.
                        </div>
                    </div>
                </div>

                <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    {/* <!-- Icon --> */}
                    <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#7d26e8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15" stroke="#7d26e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                    <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-transparent  p-4 rounded border border-violet-950 shadow">
                        <div class="flex items-center justify-between space-x-2 mb-1">
                            <div class="font-bold">Software Engineer
                                <p>India</p>
                            </div>
                            <time class="font-caveat font-medium text-white">2021-2022</time>
                        </div>
                        <div class="text-slate-300">

                            As a Software Engineer at Dynaxcel, I led a comprehensive modernization effort, including UI revamp, code optimization, API development, automated testing implementation, and CI/CD pipeline setup.</div>
                    </div>
                </div>

                <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    {/* <!-- Icon --> */}
                    <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <svg fill="#7d26e8" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg" stroke="#7d26e8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.141 7.905c.24.102.24.269 0 .37l-7.204 3.058a1.288 1.288 0 0 1-.874 0L.859 8.276c-.24-.102-.24-.27 0-.371l7.204-3.058a1.287 1.287 0 0 1 .874 0zm-6.833 4.303 3.983-1.69v2.081c0 1.394-2.145 2.524-4.791 2.524s-4.79-1.13-4.79-2.524v-2.082l3.982 1.69a2.226 2.226 0 0 0 1.616 0zm4.94 1.677h1.642v-1.091a.822.822 0 1 0-1.643 0zm.82-3.603a.554.554 0 1 0-.553-.554.554.554 0 0 0 .554.554zm0 1.415a.554.554 0 1 0-.553-.555.554.554 0 0 0 .554.555z"></path></g></svg>
                    </div>
                    <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-transparent  p-4 rounded border border-violet-950 shadow">
                        <div class="flex items-center justify-between space-x-2 mb-1">
                            <div class="font-bold">Master&apos;s In Information Systems
                                <p>Northeastern University</p>
                            </div>
                            <time class="font-caveat font-medium text-white">Exp. 12/08/2023</time>
                        </div>
                        <div class="text-slate-300">
                            Graduated with a Master&apos;s in Information Systems from Northeastern University in May 2024.
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default ExperienceSection;

<svg fill="#000000" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.141 7.905c.24.102.24.269 0 .37l-7.204 3.058a1.288 1.288 0 0 1-.874 0L.859 8.276c-.24-.102-.24-.27 0-.371l7.204-3.058a1.287 1.287 0 0 1 .874 0zm-6.833 4.303 3.983-1.69v2.081c0 1.394-2.145 2.524-4.791 2.524s-4.79-1.13-4.79-2.524v-2.082l3.982 1.69a2.226 2.226 0 0 0 1.616 0zm4.94 1.677h1.642v-1.091a.822.822 0 1 0-1.643 0zm.82-3.603a.554.554 0 1 0-.553-.554.554.554 0 0 0 .554.554zm0 1.415a.554.554 0 1 0-.553-.555.554.554 0 0 0 .554.555z"></path></g></svg>