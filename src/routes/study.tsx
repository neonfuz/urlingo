import { JSX, createSignal } from "solid-js";
import { Button, Card } from "~/components/ui";

const cards = [
  {
    deck: "nock",
    front: (
      <div>
        <span>{"[[4 [5 6]] ["}</span>
        <span class="text-red-500">{"0"}</span>
        <span>{" 1]]"}</span>
      </div>
    ),
    back: "[4 [5 6]]"
  },
  {
    deck: "nock",
    front: (
      <div>
        <span>{"[[4 [5 6]] ["}</span>
        <span class="text-red-500">{"0"}</span>
        <span>{" 2]]"}</span>
      </div>
    ),
    back: "[5 6]"
  },
  {
    deck: "nock",
    front: (
      <div>
        <span>{"[[4 [5 6]] ["}</span>
        <span class="text-red-500">{"0"}</span>
        <span>{" 3]]"}</span>
      </div>
    ),
    back: "5"
  },
  {
    deck: "nock",
    front: (
      <div>
        <span>{"[[4 [5 6]] ["}</span>
        <span class="text-red-500">{"0"}</span>
        <span>{" 6]]"}</span>
      </div>
    ),
    back: "5"
  },
  {
    deck: "nock",
    front: (
      <div>
        <span>{"[[4 [5 6]] ["}</span>
        <span class="text-red-500">{"0"}</span>
        <span>{" 7]]"}</span>
      </div>
    ),
    back: "6"
  },
];

const content = (<div>Hello, world</div>)

export default function() {
  const [cardIndex, setCardIndex] = createSignal(0);
  const [showBack, setShowBack] = createSignal(false);
  return (
    <div class="flex flex-col gap-4 place-items-center h-full">
      {cardIndex() + 1} / {cards.length}
      <FlashCard
        deck={cards[cardIndex()].deck}
        front={cards[cardIndex()].front}
        back={cards[cardIndex()].back}
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

type FlashCardData = {
  deck: string,
  front: string | JSX.Element,
  back: string | JSX.Element,
  showBack: boolean,
  onReveal: () => void,
  onNext: () => void,
};

const FlashCard = (props: FlashCardData) => (
  <Card>
    <div class="text-center">
      <div class="text-slate-500 text-left">deck: {props.deck}</div>
      <div class="m-8">
        {props.front}
      </div>
      <hr class="h-px my-8 bg-slate-300 border-0"></hr>
      <div class="m-8 h-4">
        {props.showBack && props.back}
      </div>
      {!props.showBack
        ? <Button onClick={props.onReveal}>Reveal</Button>
        : <Button onClick={props.onNext}>Next</Button>
      }
    </div>
  </Card>
);