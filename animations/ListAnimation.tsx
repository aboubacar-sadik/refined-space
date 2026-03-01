"use client";
import { useInView } from "react-intersection-observer";

const LazyAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity ${inView ? "opacity-1" : "opacity-0"}`}
    >
      <span aria-label="Wave">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem, ex corporis! Neque perferendis, omnis, magnam,
        temporibus in ab voluptas a beatae corporis obcaecati voluptate possimus
        vitae. Est vel modi placeat.
      </span>
    </div>
  );
};

export default LazyAnimation;
