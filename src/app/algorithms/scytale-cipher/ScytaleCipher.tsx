export class ScytaleCipher {
  public static encipher(message: string, key: number): string {
    let cipher = "";
    for (let k = 0; k < key; k++) {
      for (let i = k; i < message.length; i += key) {
        cipher += message[i];
      }
    }
    return cipher;
  }

  public static decipher(cipher: string, key: number): string {
    let message = "";
    const repitition = Math.ceil(cipher.length / key);
    for (let k = 0; k < repitition; k++) {
      for (let i = k; i < cipher.length; i += repitition) {
        message += cipher[i];
      }
    }
    return message;
  }
}
