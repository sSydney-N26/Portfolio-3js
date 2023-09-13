import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";


export const ScrollManager = (props) => {
    const { section, onSectionChange } = props;

    const data = useScroll();     // Access scrolling information like where it is
    const lastScroll = useRef(0); // Initialize the lastScroll position.
    const isAnimating = useRef(false);  // Currently not animating 

    // Overall, we are styling it using CSS so that the data is 
    // absolutely positioned within its container
    data.fill.classList.add("top-0");    // Calling the CSS class list "classList" and applying top-0 on the data.
    data.fill.classList.add("absolute");

    // useEffect takes a function and an array of dependencies [section]
    useEffect(() => {
        // Calling gsap to displays the data.el (a DOM element)
        gsap.to(data.el, {
            duration: 1,
            // setting the scroll position to a value based on 
            // the section and the height of data.el. So, it's 
            // scrolling to a specific position on the web page.
            scrollTop: section * data.el.clientHeight,

            // onStart runs when the function begins
            onStart: () => {
                isAnimating.current = true;
            },

            //onComplete runs when the function finishes
            onComplete: () => {
                isAnimating.current = false;
            },
        });
        // The section array tells React to run useEffect function
        // whenever the "section" value changes.
    }, [section]);

    useFrame(() => {
        if (isAnimating.current) {
            lastScroll.current = data.scroll.current;    // Update last scroll position
            return;
        }
        const curSection = Math.floor(data.scroll.current * data.pages);

        // Scrolling downwards (Scroll is from 0 (top) -> 1 (bottom))
        if (data.scroll.current > lastScroll.current && curSection === 0) {
            onSectionChange(1);
        }
        // If we are scrolling bottom to up.
        if (data.scroll.current < lastScroll.current &&
            data.scroll.current < 1 / (data.pages - 1)) {
                onSectionChange(0);
        }
        lastScroll.current = data.scroll.current;
    });
    return null;
}