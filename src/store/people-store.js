import { writable, derived } from "svelte/store";

const people = writable([]);

export default {
  subscribe: people.subscribe,
  set: people.set,
  update: people.update,
};

// export const peopleIds = derived(people, $people => $people.map(p => p.id));
