import { useParams } from "solid-start";
import { cards } from "~/decks";
import { Study } from "~/components/Study";

export default () => {
  const params = useParams();
  const deckCards = cards.filter(card => card.deck === params.deck);
  return <Study cards={deckCards} />;
}
