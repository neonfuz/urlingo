import { ParentComponent } from "solid-js";

export const Card: ParentComponent = ({ children }) => (
  <div class="bg-white p-4 border-2 w-[30ch] rounded-lg">
    {children}
  </div>
);
