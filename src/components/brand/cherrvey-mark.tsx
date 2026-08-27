import { cn } from "@/lib/utils";

type CherrveyMarkProps = {
  className?: string;
  title?: string;
};

export function CherrveyMark({ className, title }: CherrveyMarkProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block", className)}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="#194898"
        d="M70 16.5 57 6H28L8 26v28L28 74h29l13-10.5V52.5L60.5 63H32.5L16.5 47.5v-15L32.5 17h28L70 27.5V16.5Z"
      />
      <path
        fill="#939496"
        d="M62 24.5 53 16H33L19 30v20l14 14h20l9-8.5V47L54.5 55.5h-17L27.5 47V33L37.5 24.5h17L62 33V24.5Z"
      />
      <path
        fill="#E33629"
        d="M36 30h20v7H44v3h12v7H44v3h12v7H36v-7h12v-3H36v-7h12v-3H36V30Z"
      />
    </svg>
  );
}
