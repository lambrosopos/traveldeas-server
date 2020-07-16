const world = 'hello world';

export function hello(word: string = world): string {
  return `Hello, ${world}!`;
}
