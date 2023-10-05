import { createSignal } from "solid-js";
import { FlashCard } from "./FlashCard";
import { CardData } from "~/decks";

type StudyProps = {
  cards: CardData[];
};

export function Study(props: StudyProps) {
  const [cardIndex, setCardIndex] = createSignal(0);
  const [showBack, setShowBack] = createSignal(false);
  const [randomize, setRandomize] = createSignal(false);
  return (
    <div class="flex flex-col gap-4 place-items-center h-full">
      {cardIndex() + 1} / {props.cards.length}
      <label>
        <input
          type="checkbox"
          checked={randomize()}
          onChange={e => setRandomize(e.currentTarget.checked)}
          class="mr-2"
        />
        Randomize
      </label>
      <FlashCard
        card={props.cards[cardIndex()]}
        showBack={showBack()}
        onReveal={() => setShowBack(true)}
        onNext={() => {
          setShowBack(false);
          if (randomize()) {
            setCardIndex(Math.floor(Math.random() * props.cards.length));
          } else {
            setCardIndex(index => (index + 1) % props.cards.length);
          }
        }}
      />
    </div>
  );
}

