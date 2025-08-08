export function fetchNewQuestion(arr: string[]): string | undefined {
  const randomIndex = Math.floor(Math.random() * arr.length);

  console.log(arr[randomIndex]);
  return arr[randomIndex];
}
