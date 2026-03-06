import MainTable from "@/components/MainTable";
import SectionTitle from "@/components/SectionTitle";

export default function ComparisonTable() {
  return (
    <div className="bg-forest py-14 lg:py-24">
      <div className="container">
        <SectionTitle
          type="white"
          title="Side-by-Side. No Guesswork."
          tagline="Quick Comparison"
          link_href={`/articles?type=comparison`}
          link_label="All comparisons"
        />
        <div>
          <MainTable />
        </div>
      </div>
    </div>
  );
}
