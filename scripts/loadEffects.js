import { Effects } from "./effects.js";
import { SequencerData } from "./sequencerData.js";

Hooks.once("init", function () {
  // Adding specials
  if (!CONFIG.fxmaster) CONFIG.fxmaster = {};
   mergeObject(CONFIG.fxmaster, {specials: Effects});
});

Hooks.on("sequencerReady", () => {
    // Register all webm files in Sequencer Database
    Sequencer.Database.registerEntries("jaamod", SequencerData);
});