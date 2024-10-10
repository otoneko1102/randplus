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
    color(format?: 'hex' | 'rgb'): string | [number, number, number];
  }

  const random: Random;
  export = random;
}
