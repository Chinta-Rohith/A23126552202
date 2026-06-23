const Log = require("./logger");

(async () => {
    await Log(
        "backend",
        "info",
        "service",
        "Testing logging middleware"
    );
})();