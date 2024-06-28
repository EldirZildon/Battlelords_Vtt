/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/Battlelords_Vtt/templates/actor/parts/actor-skills.hbs',
    'systems/Battlelords_Vtt/templates/actor/parts/actor-items.hbs',
    'systems/Battlelords_Vtt/templates/actor/parts/actor-matrices.hbs',
    'systems/Battlelords_Vtt/templates/actor/parts/actor-effects.hbs',
    'systems/Battlelords_Vtt/templates/actor/parts/actor-combat.hbs',
    'systems/Battlelords_Vtt/templates/actor/parts/actor-vitals.hbs',
    'systems/Battlelords_Vtt/templates/actor/parts/actor-weapons.hbs',
    // Item partials
    'systems/Battlelords_Vtt/templates/item/parts/item-effects.hbs',
  ]);
};
