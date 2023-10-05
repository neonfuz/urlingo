import {
  CardDataNock,
  nockCards,
  nockTemplate,
} from "./nock";
import {
  CardDataMnemonics,
  mnemonicsCards,
  mnemonicsTemplate,
} from "./mnemonics";

export type CardData = {
  deck: string;
} & (
  | CardDataNock
  | CardDataMnemonics
);

export const cards: CardData[] = [
  ...nockCards,
  ...mnemonicsCards,
];

export const templates = {
  nock: nockTemplate,
  mnemonics: mnemonicsTemplate,
};
