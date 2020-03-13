const API_URL = '//my-json-server.typicode.com/Jordan-T/svelte-200/people';

export async function fetchPeople() {
  const response = await fetch(API_URL);
  return await response.json();
}

export async function updatePerson(id, patch) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(patch),
    headers: { 'Content-Type': 'application/json' }
  });
  return await response.json();
}
