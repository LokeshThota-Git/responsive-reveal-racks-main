import { useState, useRef } from "react";
import { HelpCircle, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "./ui/button";

const initialImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
];

export const GalleryWidget = () => {
  const [images, setImages] = useState<string[]>(initialImages);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleAddImage = () => {
    const randomImageId = Math.floor(Math.random() * 1000);
    const newImage = `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&sig=${randomImageId}`;
    setImages([...images, newImage]);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 220;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-widget rounded-[1.25rem] shadow-lg p-6">
      <div className="flex items-center justify-start">
        <div className="w-8 h-8 bg-icon-bg rounded-full flex items-center justify-center">
          <HelpCircle className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="bg-background rounded-[1.25rem] px-8 py-2">
          <h2 className="text-xl font-semibold text-foreground">Gallery</h2>
        </div>

        <div className="flex items-center gap-6">
          <Button
            onClick={handleAddImage}
            className="bg-background hover:bg-background/80 text-foreground rounded-full px-6 py-2.5 text-sm font-medium shadow-lg transition-all duration-300"
          >
            <Plus className="w-4 h-4 mr-2" />
            ADD IMAGE
          </Button>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 bg-gradient-to-br from-muted/40 to-muted/20 hover:from-muted/60 hover:to-muted/40 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 bg-gradient-to-br from-muted/40 to-muted/20 hover:from-muted/60 hover:to-muted/40 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto custom-scrollbar pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[190px] h-[180px] rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
