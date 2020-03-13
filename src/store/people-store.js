import { writable, derived } from "svelte/store";

const people = writable([]);

export default {
	subscribe: people.subscribe,
	set: people.set,
	update: people.update,
	setPeople: personArray => {
		people.set(personArray);
	},
	addPerson: personData => {
		const newPerson = {
			...personData
		};
		people.update(items => {
			return [newPerson, ...items];
		});
	},
	updatePerson: (id, personData) => {
		people.update(items => {
			const personIndex = items.findIndex(i => i.id === id);
			const updatedPerson = { ...items[personIndex], ...personData };
			const updatedPeople = [...items];
			updatedPeople[personIndex] = updatedPerson;
			return updatedPeople;
		});
	},
	removePerson: id => {
		people.update(items => {
			return items.filter(i => i.id !== id);
		});
	}
};

export const peopleIds = derived(people, $people => $people.map(person => person.id));
