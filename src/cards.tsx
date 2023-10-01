import { JSX } from "solid-js";

export type CardData = {
  deck: string;
} & (
  | CardDataNock
);

export type CardDataNock = {
  template: "nock";
  q: JSX.Element;
  a: string;
}

export const cards: CardData[] = [
  {
    deck: "nock",
    template: "nock",
    q: (
      <div>
        <span>{"[[4 [5 6]] ["}</span>
        <span class="text-red-500">{"0"}</span>
        <span>{" 1]]"}</span>
      </div>
    ),
    a: "[4 [5 6]]"
  },
  {
    deck: "nock",
    template: "nock",
    q: (
      <div>
        <span>{"[[4 [5 6]] ["}</span>
        <span class="text-red-500">{"0"}</span>
        <span>{" 2]]"}</span>
      </div>
    ),
    a: "[5 6]"
  },
  {
    deck: "nock",
    template: "nock",
    q: (
      <div>
        <span>{"[[4 [5 6]] ["}</span>
        <span class="text-red-500">{"0"}</span>
        <span>{" 3]]"}</span>
      </div>
    ),
    a: "5"
  },
  {
    deck: "nock",
    template: "nock",
    q: (
      <div>
        <span>{"[[4 [5 6]] ["}</span>
        <span class="text-red-500">{"0"}</span>
        <span>{" 6]]"}</span>
      </div>
    ),
    a: "5"
  },
  {
    deck: "nock",
    template: "nock",
    q: (
      <div>
        <span>{"[[4 [5 6]] ["}</span>
        <span class="text-red-500">{"0"}</span>
        <span>{" 7]]"}</span>
      </div>
    ),
    a: "6"
  },
];
