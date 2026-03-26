type SectionErrorProps = {
  sectionName: string;
};

export default function SectionError({ sectionName }: SectionErrorProps) {
  return (
    <section className="section-container py-10 lg:py-12">
      <div
        className="rounded-card border border-red-300 bg-red-50 px-4 py-4 text-sm font-semibold text-red-700 lg:px-6"
        role="alert"
        aria-live="polite"
      >
        {sectionName} section data is invalid.
      </div>
    </section>
  );
}