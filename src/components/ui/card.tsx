import * as React from "react";

export function Card({
  children,
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`group overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-indigo-electric/30 hover:shadow-lg hover:shadow-indigo-electric/5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
