import { site } from "@/lib/company";

const items = [
  {
    label: "Established",
    value: String(site.foundedYear),
  },
  {
    label: "Sector experience",
    value: "Government & Institutional",
  },
  {
    label: "License",
    value: `PCAB No. ${site.pcabNumber}`,
  },
  {
    label: "Practice",
    value: "Construction + Technical Infrastructure",
  },
] as const;

export function CredibilityStrip() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto grid max-w-[1180px] sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={`px-5 py-7 sm:px-6 lg:px-8 ${
              index !== 0 ? "border-t border-border lg:border-t-0 lg:border-l" : ""
            } ${index === 1 ? "sm:border-t-0 sm:border-l" : ""} ${
              index === 2 ? "lg:border-l" : ""
            }`}
          >
            <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-brand-steel uppercase">
              {item.label}
            </p>
            <p className="mt-2 text-sm font-semibold tracking-tight text-brand-ink sm:text-[0.95rem]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
