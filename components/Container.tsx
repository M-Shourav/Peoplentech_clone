import { cn } from "@/lib/utils";
interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onMouseLeave?: React.MouseEventHandler;
}
const Container = ({ className, children, id, onMouseLeave }: Props) => {
  return (
    <div
      id={id}
      onMouseLeave={onMouseLeave}
      className={cn("max-w-screen-xl mx-auto px-4 md:px-8", className)}
    >
      {children}
    </div>
  );
};

export default Container;
