import { useEffect } from "react";
import { gsap } from "gsap";

export const ExperienceCount = () => {
  useEffect(() => {
    const counterElement = document.querySelector(".counter");

    if (counterElement) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            count();
            observer.unobserve(counterElement);
          }
        });
      });

      observer.observe(counterElement);
    }

    function count() {
      const counter = { value: 0 };

      gsap.to(counter, {
        value: 23,
        duration: 3,
        onUpdate: function () {
          const number = Math.ceil(counter.value);
          if (counterElement) {
            counterElement.textContent = number.toString();
          }
        },
        ease: "circ.inOut",
      });
    }
  }, []);

  return (
    <span className="inline-block counter mx-2 font-bold text-sky-900 text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed min-w-6 ">
      0
    </span>
  );
};
