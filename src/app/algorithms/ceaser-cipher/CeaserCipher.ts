export class CeaserCipher {
  private static readonly alphabet = "abcdefghijklmnopqrstuvwxyz";
  private static readonly alphabetLength = CeaserCipher.alphabet.length;

  public static encrypt(text: string, shift: number): string {
    return text
      .split("")
      .map((char) => {
        const index = CeaserCipher.alphabet.indexOf(char.toLowerCase());
        if (index === -1) {
          return char;
        }
        const newIndex = (index + shift) % CeaserCipher.alphabetLength;
        return CeaserCipher.alphabet[newIndex];
      })
      .join("");
  }

  public static decrypt(text: string, shift: number): string {
    return CeaserCipher.encrypt(text, -shift);
  }
}
