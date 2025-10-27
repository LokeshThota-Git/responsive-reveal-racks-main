import { useState } from "react";
import { HelpCircle } from "lucide-react";

type TabType = "about" | "experiences" | "recommended";

const tabContent = {
  about: `Hello! I’m Lokesh, a passionate frontend developer and a B.Tech graduate in Electrical and Electronics Engineering from Aditya Engineering College. I love building clean, interactive, and responsive user interfaces using modern web technologies like React, Tailwind CSS, HTML, CSS, and JavaScript.

I was born and raised in Pathavalasa, Anakapalle District, and I enjoy spending time learning new web development concepts, exploring UI/UX ideas, and improving my skills every day. I’m currently focusing on becoming a skilled React Developer and constantly work on small projects to sharpen my creativity and technical skills.`,
  experiences: `I have hands-on experience in frontend web development through academic and personal projects. Over time, I’ve built and deployed multiple responsive web applications using React.js, JavaScript (ES6+), HTML, CSS, and Tailwind CSS.

My experience includes developing API-driven applications, managing state efficiently with React hooks and context, and ensuring cross-browser compatibility and performance optimization. I’ve also focused on creating user-friendly UI designs and implementing reusable components for scalability.

Through continuous learning and project work, I’ve gained strong problem-solving, debugging, and collaboration skills-ready to apply them effectively in a professional development environment.`,
  recommended: `Based on my development experience, I recommend starting any web project with a clear requirements analysis and UI/UX planning to ensure the final product aligns with user and business needs.

I also suggest conducting regular code reviews and testing cycles during the development phase to identify and resolve issues early. Additionally, investing time in writing clean, reusable code and maintaining proper documentation greatly improves scalability and long-term project success.`,
};

export const AboutWidget = () => {
  const [activeTab, setActiveTab] = useState<TabType>("about");

  const tabs: { key: TabType; label: string }[] = [
    { key: "about", label: "About Me" },
    { key: "experiences", label: "Experiences" },
    { key: "recommended", label: "Recommended" },
  ];

  return (
    <div className="w-full bg-widget rounded-[1.25rem] shadow-lg overflow-hidden">
      <div className="p-6 pb-0 flex items-center justify-start gap-4">
        <div className="flex items-center justify-between mb-6">
          <div className="w-8 h-8 bg-icon-bg rounded-full flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>

        <div className="flex bg-background rounded-[1.25rem] p-1.5 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 px-6 py-3 rounded-[1rem] text-base font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-tab-active text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="h-[180px] overflow-y-auto custom-scrollbar">
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {tabContent[activeTab]}
          </p>
        </div>
      </div>

      <div className="h-16 bg-gradient-to-b from-transparent to-background/40" />
    </div>
  );
};
