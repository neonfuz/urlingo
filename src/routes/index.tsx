import { A } from "solid-start";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        UrLingo
      </h1>
      <h3 class="text-2xl text-extrabold">Decks:</h3>
      <ul>
        <li><A href="/study/mnemonics">mnemonics</A></li>
        <li><A href="/study/nock">nock (WIP)</A></li>
      </ul>
    </main>
  );
}
