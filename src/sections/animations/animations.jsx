import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateFadeInUp = (ref) => {
    if (!ref.current) return;
    
    gsap.fromTo(
        ref.current, 
        {
            opacity: 0, 
            y: 100
        },
        {
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power2.out",
            scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",    // Animation starts when element is 80% down the viewport
                end: "bottom 20%",   // Animation can end when element is 20% up the viewport
                toggleActions: "play none none reverse", // play on enter, reverse on leave
                // markers: true,    // Uncomment to see trigger points (for debugging)
            }
        }
    );
};

export const animateFadeInRight = (ref) => {
    if (!ref.current) return;
    
    gsap.fromTo(
        ref.current,
        {
            opacity: 0, 
            x: 100
        },
        {
            opacity: 1, 
            x: 0, 
            duration: 1, 
            ease: "power2.out",
            scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                // markers: true,
            }
        }
    );
}

export const animateFadeInLeft = (ref) => {
    if (!ref.current) return;
    
    gsap.fromTo(
        ref.current,
        {
            opacity: 0, 
            x: -100
        },
        {
            opacity: 1, 
            x: 0, 
            duration: 1, 
            ease: "power2.out",
            scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                // markers: true,
            }
        }
    );
}

// New animation for staggered items (like skill items)
export const animateStaggerIn = (refs) => {
    if (!refs || refs.length === 0) return;
    
    const elements = refs.map(ref => ref.current).filter(Boolean);
    if (elements.length === 0) return;
    
    gsap.fromTo(
        elements,
        {
            opacity: 0,
            y: 50,
            scale: 0.8
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1, // 0.1 second delay between each item
            scrollTrigger: {
                trigger: elements[0].parentElement, // Use parent container as trigger
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                // markers: true,
            }
        }
    );
}

// Synchronized project cards animation - all cards animate together
export const animateProjectCards = (refs) => {
    if (!refs || refs.length === 0) return;
    
    const elements = refs.map(ref => ref.current).filter(Boolean);
    if (elements.length === 0) return;
    
    // Set consistent initial state for all cards
    gsap.set(elements, {
        opacity: 0,
        y: 50,
        scale: 0.95
    });
    
    gsap.to(elements, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        // No stagger - all cards animate simultaneously
        scrollTrigger: {
            trigger: elements[0].parentElement,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            // markers: true,
        }
    });
}

// Animation for section titles
export const animateSectionTitle = (ref) => {
    if (!ref.current) return;
    
    gsap.fromTo(
        ref.current,
        {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ref.current,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
                // markers: true,
            }
        }
    );
}

// Hero animations that trigger on scroll with staggered timing
export const animateHeroFadeInUp = (ref) => {
    if (!ref.current) return;
    
    gsap.fromTo(
        ref.current, 
        {
            opacity: 0, 
            y: 50
        },
        {
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power2.out",
            scrollTrigger: {
                trigger: ref.current,
                start: "top 100%",
                end: "bottom 0%",
                toggleActions: "play reverse play reverse",
                refreshPriority: 1,
                // markers: true, // Uncomment to debug
            }
        }
    );
};

export const animateHeroFadeInLeft = (ref) => {
    if (!ref.current) return;
    
    gsap.fromTo(
        ref.current,
        {
            opacity: 0, 
            x: -50,
            scale: 0.9
        },
        {
            opacity: 1, 
            x: 0, 
            scale: 1,
            duration: 1, 
            ease: "power2.out",
            delay: 0.2,
            scrollTrigger: {
                trigger: ref.current,
                start: "top 100%",
                end: "bottom 0%",
                toggleActions: "play reverse play reverse",
                refreshPriority: 1,
                // markers: true,
            }
        }
    );
}

export const animateHeroFadeInRight = (ref) => {
    if (!ref.current) return;
    
    gsap.fromTo(
        ref.current,
        {
            opacity: 0, 
            x: 50,
            rotation: 180
        },
        {
            opacity: 1, 
            x: 0, 
            rotation: 0,
            duration: 1, 
            ease: "power2.out",
            delay: 0.4,
            scrollTrigger: {
                trigger: ref.current,
                start: "top 100%",
                end: "bottom 0%",
                toggleActions: "play reverse play reverse",
                refreshPriority: 1,
                // markers: true,
            }
        }
    );
}

// Project modal animations
export const animateModalIn = (overlayRef, contentRef) => {
    if (!overlayRef.current || !contentRef.current) return;
    
    gsap.fromTo(overlayRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
    );
    gsap.fromTo(contentRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.1 }
    );
}

export const animateModalOut = (overlayRef, contentRef, onComplete) => {
    if (!overlayRef.current || !contentRef.current) return;
    
    gsap.to(contentRef.current,
        { opacity: 0, scale: 0.8, y: 50, duration: 0.3, ease: 'power2.in' }
    );
    gsap.to(overlayRef.current,
        { 
            opacity: 0, 
            duration: 0.3, 
            ease: 'power2.in',
            onComplete: onComplete
        }
    );
}
