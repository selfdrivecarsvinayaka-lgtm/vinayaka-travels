export const categories = [
  "All",
  "Hatchbacks",
  "Sedans",
  "MUVs"
];

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-ink mb-3">Choose Your Ride</h2>
        <p className="text-muted-foreground text-lg">Find the perfect vehicle for your journey.</p>
      </div>
      
      <div className="w-full py-2">
        <div className="flex flex-wrap items-center justify-center gap-3 px-2 sm:px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                  : "bg-white border border-gray-200 text-ink hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
