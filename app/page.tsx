"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [is2ndOpen, setIs2ndOpen] = useState(false);
  const [is3rdOpen, setIs3rdOpen] = useState(false);

  return (
    // <div className="min-h-screen bg-[#050505] text-white p-6 font-sans selection:bg-purple-500/30">
    <div className="min-h-screen bg-transparent text-white p-6 p-6 font-sans selection:bg-purple-500/30">
      {/* Background Blobs for Visual Interest */}
      <div className="fixed top-0 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        
        {/* Profile Card with Glass Effect */}
        <div className="md:col-span-2 bg-[#121212]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all duration-300 shadow-2xl group">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-purple-500/50 transition-colors duration-500">
              <Image
                src="/chae1.jpg"
                alt="Mark Joseph Fulmentera"
                fill
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                priority
              />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Mark Joseph Fulmentera
              </h1>
              <p className="text-purple-400 font-medium text-lg mt-1">Software Developer</p>
              <div className="flex gap-3 mt-4 justify-center sm:justify-start">
                {/* <button className="px-4 py-1.5 bg-white text-black text-sm font-bold rounded-full hover:bg-purple-400 transition-colors">Resume</button> */}
                <a 
                  href="/Fulmentera_Mark_Joseph_Resume.pdf" 
                  download="Fulmentera_Mark_Joseph_Resume.pdf"
                  className="px-4 py-1.5 bg-white text-black text-sm font-bold rounded-full hover:bg-purple-400 transition-colors inline-flex items-center gap-2"
                >
                  <span>Resume</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                </a>
                {/* <button className="px-4 py-1.5 bg-white/5 border border-white/10 text-sm rounded-full hover:bg-white/10 transition-colors">GitHub</button> */}
                <a 
                  href="https://github.com/Makdoto"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 bg-white/5 border border-white/10 text-sm rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                >
                  <span>GitHub</span>
                  {/* Optional: Add a small external link icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                </a>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-4 text-white/90">About</h2>
          <p className="text-gray-400 leading-relaxed">
            I&apos;m a full-stack developer specializing in building modern web applications...
          </p>
        </div>

        {/* Experience - Interactive Timeline */} 
        <div className="md:row-span-2 space-y-6">
          
          {/* Experience Section */}
          <div className="bg-[#121212]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl">
            <h2 className="text-xl font-semibold mb-8 flex items-center gap-3">
              <span className="p-2 bg-white/5 rounded-lg text-yellow-500">💼</span> Experience
            </h2>
            <div className="space-y-10 border-l-2 border-white/5 ml-3 pl-8 relative">
              {[
                { title: "Software Developer", date: "April 2024 - Present", current: true },
                { title: "System Specialist", date: "June 2023 - April 2024", current: false }
              ].map((job, i) => (
                <div key={i} className="relative group cursor-default">
                  <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-[#050505] transition-colors duration-300 ${job.current ? 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'bg-gray-700'}`} />
                  <h3 className="font-bold text-lg group-hover:text-purple-400 transition-colors">{job.title}</h3>
                  <p className="text-sm text-gray-400">Eprime Business Solutions Inc</p>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-2 block">{job.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-[#121212]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl">
            <h2 className="text-xl font-semibold mb-8 flex items-center gap-3">
              <span className="p-2 bg-white/5 rounded-lg text-blue-500">🎓</span> Education
            </h2>
            <div className="space-y-10 border-l-2 border-white/5 ml-3 pl-8 relative">
              {[
                { 
                  degree: "Bachelor of Science in Information Technology", 
                  school: "Cavite State University - Silang Campus", 
                  date: "2018 - 2023",
                  //notable: "Specialized in Software Engineering" 
                }
              ].map((edu, i) => (
                <div key={i} className="relative group cursor-default">
                  {/* Blue accent for Education */}
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-[#050505] bg-blue-500 transition-colors duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                  <h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors">{edu.degree}</h3>
                  <p className="text-sm text-gray-400">{edu.school}</p>
                  {/* <p className="text-[11px] text-gray-500 mt-1 italic">{edu.notable}</p> */}
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-2 block">{edu.date}</span>
                </div>
              ))}
            </div>
            <div className="space-y-10 border-l-2 border-white/5 ml-3 pl-8 relative">
              {[
                { 
                  degree: "Information and Commmunication Technology in Mobile Application and Web Development", 
                  school: "STI College - Dasmariñas Campus", 
                  date: "2016 - 2018",
                  notable: "Specialized in Mobile Application and Web Development" 
                }
              ].map((edu, i) => (
                <div key={i} className="relative group cursor-default">
                  {/* Blue accent for Education */}
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-[#050505] bg-blue-500 transition-colors duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                  <h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors">{edu.degree}</h3>
                  <p className="text-sm text-gray-400">{edu.school}</p>
                  <p className="text-[11px] text-gray-500 mt-1 italic">{edu.notable}</p> 
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-2 block">{edu.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
        

        {/* Technical Expertise Card */}
        <div className="md:col-span-2 bg-[#121212]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-purple-500">⚡</span> Technical Expertise
          </h2>
          
          <div className="space-y-10">
            {/* C# / .NET Section */}
            <div className="group">
              <h3 className="text-xs font-black text-purple-500 uppercase tracking-[0.2em] mb-4 group-hover:translate-x-1 transition-transform">C# & .NET Ecosystem</h3>
              <div className="flex flex-wrap gap-2">
                {["ASP.NET Core", "Web API", "REST API", "MVC Framework", "Entity Framework", "Dapper", "ADO.NET", "WPF (Desktop)", "Xamarin (Mobile)"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-purple-500/5 border border-purple-500/20 text-purple-200 rounded-lg text-xs hover:bg-purple-500/20 hover:border-purple-500/50 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Web & Java Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* SQL Section */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-green-500/30 transition-colors">
                <h3 className="text-xs font-black text-green-500 uppercase tracking-[0.2em] mb-4">SQL Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {["SQL Server", "MySQL", "SQLite"].map((db) => (
                    <span key={db} className="px-3 py-1 bg-green-500/10 text-green-400 rounded-md text-[11px] font-bold border border-green-500/20">
                      {db}
                    </span>
                  ))}
                </div>
              </div>

              {/* Java Section */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-colors">
                <h3 className="text-xs font-black text-orange-500 uppercase tracking-[0.2em] mb-4">Java Development</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 px-3 py-1 bg-orange-500/10 text-orange-400 rounded-md text-[11px] font-bold border border-orange-500/20">
                    <span>Android Studio</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Frontend Section */}
            <div>
              <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.2em] mb-4">Frontend & Web</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "Node.js", "JavaScript", "Tailwind CSS"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/5 border border-blue-500/20 text-blue-300 rounded-lg text-xs hover:bg-blue-500/20 hover:border-blue-500/50 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>


      {/* Featured Projects Section */}
      {/* Quiz Mo To */}
      <div className="md:col-span-3">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="text-orange-500">🚀</span> Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group bg-[#121212]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 hover:border-purple-500/30 transition-all shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              </div>
              {/* Change <a> to <button> for better accessibility */}
              <button 
                onClick={() => setIsOpen(true)}
                className="text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              </button>
            </div>
            <h3 className="text-xl font-bold mb-2">Quiz Mo&apos; To</h3>
            <p className="text-gray-400 text-sm mb-4">A full-stack quiz application featuring real-time scoring and SQL Server integration.</p>
            <div className="flex gap-2">
              <span className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-gray-400">ASP.NET Core</span>
              <span className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-gray-400">Next.js</span>
            </div>
          </div>
          {/* --- MODAL OVERLAY --- */}
            {isOpen && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                onClick={() => setIsOpen(false)} // Close when clicking outside the image
              >
                <div 
                  className="relative max-w-5xl w-full bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                >
                  {/* Close Button */}
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>

                  {/* Your Project Screenshot */}
                  <div className="p-2">
                    <Image 
                      src="/3.jpg" 
                      alt="Project Screenshot" 
                      width={1200}
                      height={800}
                      className="w-full h-auto rounded-lg"
                      priority
                    />
                  </div>
                  
                  <div className="p-4 bg-black/20 border-t border-white/5">
                    <p className="text-sm text-gray-400">Project Preview: Quiz Mo&apos; To Design</p>
                  </div>
                </div>
              </div>
            )}
          {/* <div className="group bg-[#121212]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 hover:border-purple-500/30 transition-all shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              </div>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              </a>
            </div>
            <h3 className="text-xl font-bold mb-2">Quiz Mo&apos; To</h3>
            <p className="text-gray-400 text-sm mb-4">A full-stack quiz application featuring real-time scoring and SQL Server integration.</p>
            <div className="flex gap-2">
              <span className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-gray-400">ASP.NET Core</span>
              <span className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-gray-400">Next.js</span>
            </div>
          </div> */}
          {/* Inventory Tracking System */}
          <div className="group bg-[#121212]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 hover:border-purple-500/30 transition-all shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              </div>
              {/* <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              </a> */}
              {/* Change <a> to <button> for better accessibility */}
              <button 
                onClick={() => setIs2ndOpen(true)}
                className="text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              </button>              
            </div>
            <h3 className="text-xl font-bold mb-2">Inventory Tracking System</h3>
            <p className="text-gray-400 text-sm mb-4">A self made sales and inventory system featuring real-time tracking of sales and stocks using Android Studio and Microsoft SQL Server.</p>
            <div className="flex gap-2">
              <span className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-gray-400">Java</span>
              <span className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-gray-400">Microsoft SQL Server</span>
            </div>
          </div>
          {/* --- MODAL OVERLAY --- */}
            {is2ndOpen && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                onClick={() => setIs2ndOpen(false)} // Close when clicking outside the image
              >
                <div 
                  className="relative max-w-5xl w-full bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                >
                  {/* Close Button */}
                  <button 
                    onClick={() => setIs2ndOpen(false)}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>

                  {/* Your Project Screenshot */}
                  <div className="p-2">
                    <Image 
                      src="/1.jpg" 
                      alt="Project Screenshot" 
                      width={1200}
                      height={800}
                      className="w-full h-auto rounded-lg"
                      priority
                    />
                  </div>
                  
                  <div className="p-4 bg-black/20 border-t border-white/5">
                    <p className="text-sm text-gray-400">Project Preview: Inventory Tracking System Design</p>
                  </div>
                </div>
              </div>
            )}
          {/* Add more project cards here */}
          <div className="group bg-[#121212]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 hover:border-purple-500/30 transition-all shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              </div>
              {/* <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              </a> */}
              {/* Change <a> to <button> for better accessibility */}
              <button 
                onClick={() => setIs3rdOpen(true)}
                className="text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              </button>
            </div>
            <h3 className="text-xl font-bold mb-2">Asset Management System</h3>
            <p className="text-gray-400 text-sm mb-4">An asset management web application for company&apos;s assets using ReactJS, Vue, NextJS, and Microsoft SQL Server.</p>
            <div className="flex gap-2">
              <span className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-gray-400">ReactJS</span>
              <span className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-gray-400">Vue</span>
              <span className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-gray-400">NextJS</span>
              <span className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-gray-400">Microsoft SQL Server</span>
            </div>
          </div>
          {/* --- MODAL OVERLAY --- */}
            {is3rdOpen && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                onClick={() => setIs3rdOpen(false)} // Close when clicking outside the image
              >
                <div 
                  className="relative max-w-5xl w-full bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                >
                  {/* Close Button */}
                  <button 
                    onClick={() => setIs3rdOpen(false)}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>

                  {/* Your Project Screenshot */}
                  <div className="p-2">
                    <Image 
                      src="/5.png" 
                      alt="Project Screenshot" 
                      width={1200}
                      height={800}
                      className="w-full h-auto rounded-lg"
                      priority
                    />
                  </div>
                  
                  <div className="p-4 bg-black/20 border-t border-white/5">
                    <p className="text-sm text-gray-400">Project Preview: Asset Management System Design</p>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>

      </div>
    </div>
  );
}