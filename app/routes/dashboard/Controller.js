import { Controller } from 'cx/ui';
import { mockQuestions } from "app/data/mockQuestions";
import { Repeater } from 'cx/widgets'

export default class extends Controller {
    init() {
        super.init();

        let items = this.store.get("questions.items");
        // Reset the list to default data if it's empty
        if (!items || !items.length) {
          items = mockQuestions; //make new..
          //items = [{ id: 1, name: 'Create a demo app'}, { id: 2, name: 'Create something else'}]
        this.store.set("questions.items", items);
        }


        this.store.init("testType", { id: "standard" });
        this.store.init("timer", { start: "0" });

    }
}