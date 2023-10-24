declare module 'jszip-utils' {
  export function getBinaryContent(
    url: string,
    callback: (err: unknown, data: ArrayBuffer) => void,
  ): void;
}
