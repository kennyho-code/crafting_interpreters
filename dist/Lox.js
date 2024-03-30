class Lox {
    main() {
        if (arguments.length > 1) {
            console.log("Usage: jlox [script]");
            return;
        }
        else if (arguments.length === 1) {
            runFile(arguments[0]);
        }
        else {
            runPrompt();
        }
    }
}
function runFile(args) { }
function runPrompt() { }
//# sourceMappingURL=Lox.js.map