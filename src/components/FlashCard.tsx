import { Button } from "~/components/Button";
import { Card } from "~/components/Card";
import { CardData } from "../cards";
import { CardDataNock } from "../cards";

export const templates = {
  nock: {
    front: (data: CardDataNock) => (
      <div class="m-8">
        {data.q}
      </div>
    ),
    back: (data: CardDataNock, showBack: boolean) => (
      <div class="m-8 h-4">
        {showBack && data.a}
      </div>
    ),
  }
};

type FlashCardData = {
  card: CardData;
  showBack: boolean;
  onReveal: () => void;
  onNext: () => void;
};
export const FlashCard = (props: FlashCardData) => (
  <Card>
    <div class="text-center">
      <div class="text-slate-500 text-left">deck: {props.card.deck}</div>
      {templates[props.card.template].front(props.card)}
      <hr class="h-px my-8 bg-slate-300 border-0"></hr>
      {templates[props.card.template].back(props.card, props.showBack)}
      {!props.showBack
        ? <Button onClick={props.onReveal}>Reveal</Button>
        : <Button onClick={props.onNext}>Next</Button>}
    </div>
  </Card>
);
