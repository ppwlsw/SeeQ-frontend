import type { ReactNode } from "react";

interface GapControllerProps {
  children: ReactNode;
  gap?: Number;
  y_axis?: boolean;
  algin?: string
}

function GapController({ children, gap, y_axis = true, algin = "start"}: GapControllerProps) {
  return <div className={`flex ${y_axis?'flex-col':'flex-row'} items-${algin}`} style={{ gap: `${gap}px` }}>{children}</div>;
}

export default GapController;
