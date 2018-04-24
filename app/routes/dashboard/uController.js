import { Controller } from 'cx/ui';

export default class uController extends Controller {
    init() {
        this.addComputable(
            "mainRecord.answeredM",
            ["mainRecord.answers"], 
            (options) => {
                let answ = options.filter(o => o.checked == true);
                let ans = "";
                for (let i = 0; i <= answ.length - 1; i++) {
                  ans += answ[i].id + ", ";
                }
                return ans.slice(0, ans.length - 2);
              }
        )
        this.addTrigger("tgAnswers", ["mainRecord.answeredM"], answeredM => {
            this.store.copy("mainRecord.answeredM", "mainRecord.answered")
         });
    }
}