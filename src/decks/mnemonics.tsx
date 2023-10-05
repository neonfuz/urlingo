import { CardData } from ".";

export type CardDataMnemonics = {
  deck: "mnemonics";
  template: "mnemonics";
  name: string;
  mnemonic: string | string[];
};

const mnemonics = {
  ace: "␣",
  bar: "|",
  bas: "\\",
  buc: "$",
  cab: "_",
  cen: "%",
  col: ":",
  com: ",",
  doq: "\"",
  dot: ".",
  fas: "/",
  gal: "<",
  gap: ["␣␣", "\n"],
  gar: ">",
  hax: "#",
  hep: "-",
  kel: "{",
  ker: "}",
  ket: "^",
  lus: "+",
  mic: ";",
  pal: "(",
  par: ")",
  pam: "&",
  pat: "@",
  sel: "[",
  ser: "]",
  sig: "~",
  soq: "'",
  tar: "*",
  tic: "`",
  tis: "=",
  wut: "?",
  zap: "!",
};

export const mnemonicsCards: CardData[] = Object.entries(mnemonics).map(
  ([name, mnemonic]) => ({
    deck: "mnemonics",
    template: "mnemonics",
    name,
    mnemonic,
  })
);

export const mnemonicsTemplate = {
  front: (data: CardDataMnemonics) => (
    <div class="mx-2 my-8">
      <span>{data.name}</span>
    </div>
  ),
  back: (data: CardDataMnemonics, showBack: boolean) => (
    <div class="mx-2 my-8 min-h-4 flex flex-col gap-4">
    <div class="min-h-[1.5em]">
      {showBack && data.mnemonic}
    </div>
    </div>
  ),
};
