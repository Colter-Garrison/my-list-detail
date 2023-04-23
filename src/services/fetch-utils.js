import { client, checkError } from './client';

export async function getInsects(from = 0, to = 30) {
  const response = await client
    .from('insects')
    .select()
    .range(from, to);
  return checkError(response);
}

export async function getSingleInsect(id) {
  const response = await client
    .from('insects')
    .select()
    .match({ id })
    .single();
  return checkError(response);
}