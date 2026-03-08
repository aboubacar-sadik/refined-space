"use client";

type TabValue = "all" | "guide" | "review" | "comparison";

interface TabsFilterProps {
  activeTab: TabValue;
  onChange: (tab: TabValue) => void;
}

const tabs: { value: TabValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "guide", label: "Guides" },
  { value: "review", label: "Reviews" },
  { value: "comparison", label: "Comparisons" },
];

export default function TabsFilter({ activeTab, onChange }: TabsFilterProps) {
  return (
    <nav
      aria-label="Article type filter"
      className="border w-full overflow-x-auto border-border rounded-sm p-1 "
    >
      <div
        role="tablist"
        className="inline-flex items-center  w-full gap-1 "
        aria-label="Filter by article type"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;
          return (
            <button
              key={tab.value}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(tab.value)}
              className={`
                relative px-5 py-2 text-sm font-medium rounded-sm transition-all
                focus-visible:outline-2 focus-visible:outline-ring cursor-pointer
                ${
                  isActive
                    ? "bg-forest text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
