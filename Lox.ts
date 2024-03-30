import { readFileSync } from "node:fs";

export class Lox {
  static hadError: boolean;
  static error(line: number, message: string) {
    this.report(line, "", message);
  }
  static main() {
    if (arguments.length > 1) {
      console.log("Usage: jlox [script]");
      return;
    } else if (arguments.length === 1) {
      this.runFile(arguments[0]);
    } else {
      this.runPrompt();
    }
  }

  static report(line: number, where: string, message: string) {
    console.log("[line " + line + "] Error" + where + ": " + message);
    this.hadError = true;
  }
  static runFile(path) {
    // const reader = new FileReader();
    // const bytes = Uint8Array()
    const file = readFileSync(path, "utf-8");
    for (let line of file.split("\n")) {
      this.run(line);
      this.hadError = false;
    }
  }

  static run(source: String) {
    const tokens = source.split("");
    for (let token of tokens) {
      console.log(token);
    }
  }
  static runPrompt() {}
}
