import { CardData } from ".";

export type CardDataNock = {
  template: "nock";
  id: string;
  q: string;
  a: string;
  hint?: string;
} & ({
  class: "rule";
  hint: string;
} | {
  class: "example";
  parent: string;
} | {
  class: "hint";
  hint: string;
});

export const nockTemplate = {
  front: (data: CardDataNock) => (
    <div class="mx-2 my-8">
      <span>{data.q}</span>
    </div>
  ),
  back: (data: CardDataNock, showBack: boolean) => (
    <div class="mx-2 my-8 min-h-4 flex flex-col gap-4">
      {showBack && (
        <>
          <div>{data.a}</div>
          <p class={"text-slate-500 whitespace-pre"}>
            {data.hint}
          </p>
        </>
      )}
    </div>
  ),
};

/** Remove initial whitespace on each line of a template string */
const leftTrim = (
  template: TemplateStringsArray,
  ...parts: string[]
) => {
  const str = template.reduce((acc,next,i) =>
    acc + next + (parts[i] ?? ''),
    ''
  );
  const initialWhitespace = str.match(/^\n(\s*)/)?.[1] ?? '';
  return str
    .split('\n')
    .map(line =>
      line.startsWith(initialWhitespace)
        ? line.slice(initialWhitespace.length)
        : line
    )
    .join('\n');
};

export const nockCards: CardData[] = [
  {
    deck: "nock",
    template: "nock",
    class: "rule",
    id: "rule-1",
    q: "[a b c]",
    a: "[a [b c]]",
    hint: leftTrim`
      Letters represent nouns.
      A noun is an atom or a cell.
      An atom is a natural number.
      A cell is an ordered pair of nouns.
      This rule recursively applies, so
      [1 2 3 4] becomes [1 [2 [3 4]]]
    `
  },
  {
    deck: "nock",
    template: "nock",
    class: "example",
    id: "example-1",
    parent: "rule-1",
    q: "[1 2 3]",
    a: "[1 [2 3]]",
  },
  {
    deck: "nock",
    template: "nock",
    class: "example",
    id: "example-2",
    parent: "rule-1",
    q: "[4 5 6 7]",
    a: "[4 [5 [6 7]]]",
  },
  {
    deck: "nock",
    template: "nock",
    class: "example",
    id: "example-3",
    parent: "rule-1",
    q: "[4 [5 6] 7]",
    a: "[4 [[5 6] 7]]",
  },
];



