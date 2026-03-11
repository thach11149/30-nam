declare module 'lucide-react' {
  import * as React from 'react';

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
  }

  export type LucideIcon = React.FC<LucideProps>;

  export const Users: LucideIcon;
  export const Globe: LucideIcon;
  export const Calendar: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const GanttChart: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Target: LucideIcon;
  export const Handshake: LucideIcon;
  export const Globe2: LucideIcon;
  export const Sparkles: LucideIcon;
  export const MapPin: LucideIcon;
  export const CalendarDays: LucideIcon;
  export const Award: LucideIcon;
  export const Leaf: LucideIcon;
  export const History: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const Play: LucideIcon;
  export const Quote: LucideIcon;
  export const X: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const Star: LucideIcon;
  export const ArrowLeft: LucideIcon;
  export const Camera: LucideIcon;
  export const Facebook: LucideIcon;
  export const Info: LucideIcon;
  export const Link: LucideIcon;
  export const Scan: LucideIcon;
  export const Twitter: LucideIcon;
  export const User2: LucideIcon;
  export const Download: LucideIcon;
  export const Fingerprint: LucideIcon;
  export const Maximize2: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Zap: LucideIcon;
}