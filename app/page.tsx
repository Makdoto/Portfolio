import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
    
    <div className="md:col-span-2 bg-[#121212] border border-gray-800 rounded-2xl p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 bg-gray-700 rounded-full overflow-hidden">
          </div>
        <div>
          <h1 className="text-3xl font-bold">Mark Joseph Fulmentera</h1>
          <p className="text-gray-400">Software Developer / Aspiring Data Analyst</p>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-4">About</h2>
      <p className="text-gray-400 leading-relaxed">
        I'm a full-stack developer specializing in building modern web applications...
      </p>
    </div>

    <div className="md:row-span-2 bg-[#121212] border border-gray-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <span>💼</span> Experience
      </h2>
      <div className="space-y-8 border-l border-gray-700 ml-2 pl-6 relative">
        <div className="relative">
          <div className="absolute -left-[31px] top-1 w-3 h-3 bg-white rounded-full"></div>
          <h3 className="font-bold">Software Developer</h3>
          <p className="text-sm text-gray-400">Eprime Business Solutions Inc</p>
          <span className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded-full mt-1 inline-block">2024</span>
        </div>
        <div className="relative">
          <div className="absolute -left-[31px] top-1 w-3 h-3 bg-white rounded-full"></div>
          <h3 className="font-bold">System Specialist</h3>
          <p className="text-sm text-gray-400">Eprime Business Solutions Inc</p>
          <span className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded-full mt-1 inline-block">2023</span>
        </div>
        </div>
    </div>

    <div className="md:col-span-2 bg-[#121212] border border-gray-800 rounded-2xl p-8">
  <h2 className="text-2xl font-bold mb-8 text-white">Technical Expertise</h2>

  <div className="space-y-8">
    {/* C# / .NET Ecosystem */}
    <div>
      <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-4">C# & .NET Development</h3>
      <div className="flex flex-wrap gap-2">
        {["ASP.NET Core", "Web API", "REST API", "MVC Framework", "Entity Framework", "Dapper", "ADO.NET", "WPF (Desktop)", "Xamarin (Mobile)"].map((skill) => (
          <span key={skill} className="px-3 py-1.5 bg-purple-900/10 border border-purple-800/30 text-purple-200 rounded-lg text-xs font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Web Stack */}
    <div>
      <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">Web & JavaScript</h3>
      <div className="flex flex-wrap gap-2">
        {["Next.js", "React", "Node.js", "JavaScript", "Tailwind CSS"].map((skill) => (
          <span key={skill} className="px-3 py-1.5 bg-blue-900/10 border border-blue-800/30 text-blue-200 rounded-lg text-xs font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Databases */}
      <div>
        <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest mb-4">Databases (SQL)</h3>
        <div className="flex flex-wrap gap-2">
          {["MySQL", "SQL Server", "SQLite"].map((skill) => (
            <span key={skill} className="px-3 py-1.5 bg-green-900/10 border border-green-800/30 text-green-200 rounded-lg text-xs font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Java/Mobile */}
      <div>
        <h3 className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-4">Mobile Development</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-orange-900/10 border border-orange-800/30 text-orange-200 rounded-lg text-xs font-medium">
            Java (Android Studio)
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
</div>
  );
}
