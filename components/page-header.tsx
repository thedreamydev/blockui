import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

export default function PageHeader({
  title,
  className,
  children,
}: PageHeaderProps) {
  return (
    <div className={cn("mb-16 text-center max-w-3xl mx-auto", className)}>
      <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        {title}
      </h1>
      <p className="text-muted-foreground">{children}</p>
    </div>
  );
}
