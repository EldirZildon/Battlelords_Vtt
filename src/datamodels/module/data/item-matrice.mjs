import BattlelordsItemBase from "./base-item.mjs";

export default class Battlelordsmatrice extends BattlelordsItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    schema.matriceLevel = new fields.NumberField({ required: true, nullable: false, integer: true, initial: 1, min: 1, max: 9 });

    return schema;
  }
}