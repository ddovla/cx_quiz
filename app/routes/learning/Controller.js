import { Controller } from 'cx/ui';
import { mockQuestions } from "app/data/mockQuestions";
import { MsgBox } from 'cx/widgets';

export default class extends Controller {
    init() {
        super.init();

        let items = this.store.get("questions.items");
        // Reset the list to default data if it's empty
        if (!items || !items.length) {
            items = mockQuestions //.slice();
            this.store.set("questions.items", items);
        }

        //this.store.init("test.type.id", "standard");
        this.store.init("timer", { start: "0" });
        this.store.init("questions.current", "Q1");
        this.store.init("questions.showA", false);


        let list = [];
        for (var key in items) {
            let obj = { qid: key };
            list.push(obj);
        }
        // this.store.init("questions.list", [{qid:"Q1"},{qid:"Q2"},{qid:"Q3"},{qid:"Q4"}] );
        this.store.init("questions.list", list);

    }

    goToPreviousQ() {
        let cQ = this.store.get("questions.current");
        let tempQ=cQ.replace("Q","") - 1;
        if (tempQ>=1){
            let newQ = "Q" + tempQ;
            this.store.set("questions.current", newQ);
            this.store.set("questions.showA", false);
        }
        else {
            MsgBox.alert("You've reached the first question!");
        }
    }

    goToNextQ() {
        let cQ = this.store.get("questions.current");
        let tempQ=cQ.replace("Q","") - 2 + 3;
        let newQ = "Q" + tempQ;
        this.store.set("questions.current", newQ);
        this.store.set("questions.showA", false);
    }

    showA() {
        this.store.set("questions.showA", true);
    }


} 