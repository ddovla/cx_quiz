import { Controller } from 'cx/ui';
import { mockQuestions } from "app/data/mockQuestions";

export default class extends Controller {
    init() {
        super.init();

        let items = this.store.get("questions.items");
        // Reset the list to default data if it's empty
        if (!items || !items.length) {
          items = mockQuestions;
          //items = [{ id: 1, name: 'Create a demo app'}, { id: 2, name: 'Create something else'}]
        this.store.set("questions.items", items);
        }

        this.store.init("tekst", { ime: "vlado d" });
        this.store.init("tekst1", { ime: "vladimir n" });

        this.store.set("intro.core.items", [
            { text: "A", checked: false },
            { text: "B", checked: true },
            { text: "C", checked: false },
            { text: "D", checked: false }
          ]);




    }
}