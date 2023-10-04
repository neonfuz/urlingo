import { CardDataNock, nockCards, nockTemplate } from "./nock";

export type CardData = {
  deck: string;
} & (
  | CardDataNock
);

export const cards: CardData[] = [
  ...nockCards,
];

export const templates = {
  nock: nockTemplate,
};
