import React from "react";

import { LayoutClasses } from "../components/LayoutClasses";

export const HorizontalRule: React.FC = () => (
  <div
    className={`${LayoutClasses.marginClasses} flex w-full max-w-[1230px] items-center justify-center`}
  >
    <hr className="border-sky-blue-400 w-full"></hr>
  </div>
);
