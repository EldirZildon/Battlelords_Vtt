export default class BlcrItemSheets extends ItemSheet {
    get template() {
        return 'systems/Battlelords_Vtt/templates/sheets/${this.item.data.type}-sheets.html';
    }
    getData()
    {
        const data = super.getData();

        data.config = CONFIG.blcr;
        return data;
    }
}