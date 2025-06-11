import { gsap } from "gsap";

export const animateFadeInUp = (ref) => {
    gsap.fromTo(
      ref.current, 
      {opacity: 0, y: 200},
      {opacity: 1, y: 0, duration: 1, ease: "power2.out"}
    );
};

export const animateFadeInRight = (ref) => {
    gsap.fromTo(
        ref.current,
        {opacity: 0, x: 75},
        {opacity: 1, x: 0, duration: 1, ease: "power2.out"}
    );
}

export const animateFadeInLeft = (ref) => {
    gsap.fromTo(
        ref.current,
        {opacity: 0, x: -75},
        {opacity: 1, x: 0, duration: 1, ease: "power2.out"}
    );
}
