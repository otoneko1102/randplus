declare module 'randplus' {
  interface Random {
    random(inc?: boolean): number;
    number(start: number, end: number, inc?: boolean): number;
    integer(start: number, end: number, inc?: boolean): number;
    boolean(): boolean;
    array<T>(arr: T[]): T;
    buffer(length?: number): Buffer;
    string(length: number): string;
    string(input: string, length: number): string;
    string(input: string[], length: number): string;
    shuffle(input: string | any[]): string | any[];
    color(format?: 'hex' | 'rgb' | 'word', options?: { language?: 'en' | 'ja' | 'cn'; prefix?: string }): string | [number, number, number] | string;
  }

  namespace color {
    function hex(prefix?: string): string;
    function rgb(): [number, number, number];
    function word(language?: 'en' | 'ja' | 'cn'): string;
  }

  const random: Random & { color: typeof color };
  export = random;
}
