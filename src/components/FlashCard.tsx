import { Dynamic } from "solid-js/web";
import { Button } from "~/components/Button";
import { templates, CardData } from "~/decks";

type FlashCardData = {
  card: CardData;
  showBack: boolean;
  onReveal: () => void;
  onNext: () => void;
};
export const FlashCard = (props: FlashCardData) => {
  return (
  <div class="bg-white p-4 border-2 w-[30ch] rounded-lg text-center">
    <div class="text-slate-500 text-left">deck: {props.card.deck}</div>
    {templates[props.card.template].front(props.card as any)}
    <hr class="h-px my-8 bg-slate-300 border-0"></hr>
    {templates[props.card.template].back(props.card as any, props.showBack)}
    {!props.showBack
      ? <Button onClick={props.onReveal}>Reveal</Button>
      : <Button onClick={props.onNext}>Next</Button>}
  </div>
  );
}