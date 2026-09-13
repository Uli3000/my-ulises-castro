import * as React from "react";

export function SectionLabel({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-indigo-electric">
      <Icon className="h-4 w-4" />
      <span>{children}</span>
    </div>
  );
}
