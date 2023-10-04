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

// Nock 4K

// A noun is an atom or a cell.  An atom is a natural number.  A cell is an ordered pair of nouns.

// Reduce by the first matching pattern; variables match any noun.

// nock(a)             *a
// [a b c]             [a [b c]]

// ?[a b]              0
// ?a                  1
// +[a b]              +[a b]
// +a                  1 + a
// =[a a]              0
// =[a b]              1

// /[1 a]              a
// /[2 a b]            a
// /[3 a b]            b
// /[(a + a) b]        /[2 /[a b]]
// /[(a + a + 1) b]    /[3 /[a b]]
// /a                  /a

// #[1 a b]            a
// #[(a + a) b c]      #[a [b /[(a + a + 1) c]] c]
// #[(a + a + 1) b c]  #[a [/[(a + a) c] b] c]
// #a                  #a

// *[a [b c] d]        [*[a b c] *[a d]]

// *[a 0 b]            /[b a]
// *[a 1 b]            b
// *[a 2 b c]          *[*[a b] *[a c]]
// *[a 3 b]            ?*[a b]
// *[a 4 b]            +*[a b]
// *[a 5 b c]          =[*[a b] *[a c]]

// *[a 6 b c d]        *[a *[[c d] 0 *[[2 3] 0 *[a 4 4 b]]]]
// *[a 7 b c]          *[*[a b] c]
// *[a 8 b c]          *[[*[a b] a] c]
// *[a 9 b c]          *[*[a c] 2 [0 1] 0 b]
// *[a 10 [b c] d]     #[b *[a c] *[a d]]

// *[a 11 [b c] d]     *[[*[a c] *[a d]] 0 3]
// *[a 11 b c]         *[a c]

// *a                  *a








  // {
  //   deck: "nock",
  //   template: "nock",
  //   q: "[[4 [5 6]] [<0> 1]]",
  //   a: "[4 [5 6]]"
  // },
  // {
  //   deck: "nock",
  //   template: "nock",
  //   q: (
  //     <div>
  //       <span>{"[[4 [5 6]] ["}</span>
  //       <span class="text-red-500">{"0"}</span>
  //       <span>{" 2]]"}</span>
  //     </div>
  //   ),
  //   a: "[5 6]"
  // },
  // {
  //   deck: "nock",
  //   template: "nock",
  //   q: (
  //     <div>
  //       <span>{"[[4 [5 6]] ["}</span>
  //       <span class="text-red-500">{"0"}</span>
  //       <span>{" 3]]"}</span>
  //     </div>
  //   ),
  //   a: "5"
  // },
  // {
  //   deck: "nock",
  //   template: "nock",
  //   q: (
  //     <div>
  //       <span>{"[[4 [5 6]] ["}</span>
  //       <span class="text-red-500">{"0"}</span>
  //       <span>{" 6]]"}</span>
  //     </div>
  //   ),
  //   a: "5"
  // },
  // {
  //   deck: "nock",
  //   template: "nock",
  //   q: (
  //     <div>
  //       <span>{"[[4 [5 6]] ["}</span>
  //       <span class="text-red-500">{"0"}</span>
  //       <span>{" 7]]"}</span>
  //     </div>
  //   ),
  //   a: "6"
  // },
