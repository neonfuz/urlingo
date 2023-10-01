import { createSignal } from "solid-js";
import { FlashCard } from "../components/FlashCard";
import { cards } from "../cards";

export default function() {
  const [cardIndex, setCardIndex] = createSignal(0);
  const [showBack, setShowBack] = createSignal(false);
  return (
    <div class="flex flex-col gap-4 place-items-center h-full">
      {cardIndex() + 1} / {cards.length}
      <FlashCard
        card={cards[cardIndex()]}
        showBack={showBack()}
        onReveal={() => setShowBack(true)}
        onNext={() => {
          setShowBack(false);
          setCardIndex(index => (index + 1) % cards.length);
        }}
      />
    </div>
  );
}

