export function chunkText(
  text: string,
  chunkSize: number = 500,
  overlap: number = 100
): string[] {
  const chunks: string[] = [];

  let startIndex = 0;

  while (startIndex < text.length) {
    const endIndex = startIndex + chunkSize;
    const chunk = text.slice(startIndex, endIndex);

    chunks.push(chunk);

    startIndex += chunkSize - overlap;
  }

  return chunks;
}