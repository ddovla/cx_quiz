import { Controller } from "cx/ui";
import { testTypes, types } from "app/data/testTypes";


export default class extends Controller {
    init() {
        super.init();
        let items = this.store.get('test.types');
        // Reset the list to default data if it's empty
        if (!items || !items.length) {
            items = types.slice();
            this.store.set('test.types', items.map((v, i) => ({
                id: items[i].id,
                text: items[i].name
                }))
            );
        }
    }
}