#!/usr/bin/env node
function load() {
    console.log("Loading...");
    console.log();
    var index = 0;
    var loader = setInterval(() => {
        console.log("\u001B[1A" + (index + 1) + "%");
        index++;
        if (index == 100) {
            clearInterval(loader);
            intro();
        }
    }, 25);
}
function intro() {
    const message = "I'm Rajat Sachdeva, a frontend developer.";
    const linkedin = "https://www.linkedin.com/in/r-sachdeva3105/";
    const twitter = "https://twitter.com/r_sachdeva3105/";
    const github = "https://github.com/r-sachdeva3105/";
    const portfolio = "https://r-sachdeva3105.github.io/";
    const display = `


        \x1b[38;5;21m╔──────────────────────────────────────────────────────╗
        \x1b[38;5;21m│ __    __   _______  __       __        ______    __  │
        \x1b[38;5;21m│|  |  |  | |   ____||  |     |  |      /  __  \\  |  | │
        \x1b[38;5;21m│|  |__|  | |  |__   |  |     |  |     |  |  |  | |  | │
        \x1b[38;5;21m│|   __   | |   __|  |  |     |  |     |  |  |  | |  | │
        \x1b[38;5;21m│|  |  |  | |  |____ |  '----.|  '----.|  '--'  | |__| │
        \x1b[38;5;21m│|__|  |__| |_______||_______||_______| \\______/  (__) │
        \x1b[38;5;21m│                                                      │
        \x1b[38;5;21m╚──────────────────────────────────────────────────────╝
    \x1b[38;5;51m+---------------------------------------------------------------+
        |       \x1b[38;5;12m${message}\x1b[38;5;51m       |
    +---------------------------------------------------------------+
        |                       \x1b[38;5;21mLet's Connect\x1b[38;5;51m                   |
        | \x1b[38;5;26mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedin}\x1b[38;5;51m |
        | \x1b[38;5;26mTwitter:\x1b[0m \x1b[38;5;39m${twitter}\x1b[38;5;51m          |
        | \x1b[38;5;26mGithub:\x1b[0m  \x1b[38;5;39m${github}\x1b[38;5;51m           |
        | \x1b[38;5;26mPortfolio:\x1b[0m  \x1b[38;5;39m${portfolio}\x1b[38;5;51m         |
    +---------------------------------------------------------------+\x1b[0m
        
        `;


    console.log("\u001B[2A" + display);
}

load();