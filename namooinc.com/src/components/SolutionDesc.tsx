"use client";

import { useRef } from "react";
import CoreCodeComposition from "./CoreCodeComposition";
import CoreCodeConcept from "./CoreCodeConcept";
import CoreCodeFeature from "./CoreCodeFeature";
import CoreCodeOverview from "./CoreCodeOverview";
import CoreCodeStack from "./CoreCodeStack";
import SolutionNavbar from "./SolutionNavbar";

const SolutionDesc = () => {
  const scrollRef = useRef<HTMLDivElement[]>([]);
  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) {
      scrollRef.current[index] = el;
    }
  };
  return (
    <>
      <SolutionNavbar scrollRefs={scrollRef} />
      <div className="grid place-items-center gap-y-20 py-[7.5rem] md:px-[11.25rem] lg:px-[22.5rem]">
        <div ref={setRef(0)} className="scroll-mt-44">
          <CoreCodeConcept />
        </div>
        <div ref={setRef(1)} className="scroll-mt-44">
          <CoreCodeOverview />
        </div>
        <div ref={setRef(2)} className="scroll-mt-44">
          <CoreCodeStack />
        </div>
        <div ref={setRef(3)} className="scroll-mt-44">
          <CoreCodeComposition />
        </div>
        <div ref={setRef(4)} className="scroll-mt-44">
          <CoreCodeFeature />
        </div>
      </div>
    </>
  );
};
export default SolutionDesc;
