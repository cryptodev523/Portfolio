declare module "react-reveal" {
  import { ComponentType } from "react";

  type Effect =
    | "fade"
    | "slide"
    | "zoom"
    | "rotate"
    | "flip"
    | "roll"
    | "lightSpeed"
    | "bounce"
    | "swing"
    | "tada"
    | "wipe"
    | "flash"
    | "jello"
    | "pulse"
    | "heart"
    | "circle"
    | "square"
    | "triangle"
    | "hexagon"
    | "random";

  interface RevealProps {
    effect?: Effect;
    cascade?: boolean;
    duration?: number;
    delay?: number;
    fraction?: number;
    left?: number | string;
    right?: number | string;
    top?: number | string;
    bottom?: number | string;
    distance?: string;
    count?: number;
    opposite?: boolean;
    spy?: boolean;
    spyOptions?: {
      element?: string;
      rootMargin?: string;
      threshold?: number;
    };
    when?: "before" | "after";
    appear?: boolean;
    ssrFadeout?: boolean;
    collapse?: boolean;
    forever?: boolean;
    mirror?: boolean;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    onReveal?: () => void;
    onReset?: () => void;
    children?: React.ReactNode;
  }

  export const Reveal: ComponentType<RevealProps>;
  export const Fade: ComponentType<RevealProps>;
  export const Slide: ComponentType<RevealProps>;
  export const Zoom: ComponentType<RevealProps>;
  export const Rotate: ComponentType<RevealProps>;
  export const Flip: ComponentType<RevealProps>;
  export const Roll: ComponentType<RevealProps>;
  export const LightSpeed: ComponentType<RevealProps>;
  export const Bounce: ComponentType<RevealProps>;
  export const Swing: ComponentType<RevealProps>;
  export const Tada: ComponentType<RevealProps>;
  export const Wipe: ComponentType<RevealProps>;
  export const Flash: ComponentType<RevealProps>;
  export const Jello: ComponentType<RevealProps>;
  export const Pulse: ComponentType<RevealProps>;
  export const Heart: ComponentType<RevealProps>;
  export const Circle: ComponentType<RevealProps>;
  export const Square: ComponentType<RevealProps>;
  export const Triangle: ComponentType<RevealProps>;
  export const Hexagon: ComponentType<RevealProps>;
  export const Random: ComponentType<RevealProps>;
}
