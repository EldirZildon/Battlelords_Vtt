import BlcrItemSheets from "./module/sheets/BlcrItemSheets.js";
import {blcr} from " ./module/config.js";

Hooks.once("int", function () {
    console.log("Battlelords_Vtt | starting up the war")

    CONFIG.blcr = blcr;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("Battlerlords_Vtt", BlcrItemSheet, { makeDefault: true })
});