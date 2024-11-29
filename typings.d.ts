declare module 'qrcode' {
    export function toDataURL(
      text: string,
      options?: { [key: string]: any }
    ): Promise<string>;
  }
  