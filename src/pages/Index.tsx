import { AboutWidget } from "@/components/AboutWidget";
import { GalleryWidget } from "@/components/GalleryWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen">
          {/* Left Half - Empty but responsive */}
          <div className="hidden lg:block" />

          {/* Right Half - Widgets */}
          <div className="flex flex-col gap-8">
            <AboutWidget />
            <GalleryWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
