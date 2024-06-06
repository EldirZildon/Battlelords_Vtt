import BlcrItemSheets from "./module/sheets/BlcrItemSheets.js";

Hooks.once("int", function () {
    console.log("Battlelords_Vtt | starting up the war")

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("Battlerlords_Vtt", BlcrItemSheet, { makeDefault: true })
});