import { Controller } from 'cx/ui';
import { mockQuestions } from "app/data/mockQuestions";

export default class extends Controller {
    init() {
        super.init();

        let items = this.store.get("questions.items");
        // Reset the list to default data if it's empty
        if (!items || !items.length) {
            items = mockQuestions.slice();
            this.store.set("questions.items", items);
        }

        this.store.init("testType", { id: "standard" });
        this.store.init("timer", { start: "0" });

    }
}