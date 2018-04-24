import { HtmlElement, Section, FlexRow, Repeater, Rescope, TextField, Checkbox, Text, Radio } from 'cx/widgets';
import { PureContainer } from 'cx/widgets';
import { computable } from "cx/data";
import Controller from './Controller';


export default <cx>
  <h2 putInto="header">Quiz - Questions</h2>

  <div controller={Controller}>

    <TextField label="Standard" value-bind="tekst1.ime" />
    <TextField label="Question" value-bind="tekst1.ime" mode="view" emptyText="n/a" />
    <TextField label="ime" value-bind="tekst.ime" />
    <br />

    <Repeater records-bind="questions.items" recordAlias="mainRecord">
      <br />
      <br />
      <h4>
        <Text value-tpl="{mainRecord.id}. {mainRecord.question}" />
      </h4>
      <Repeater records-bind="mainRecord.answers">
        <Radio value-bind="mainRecord.answered" option-bind="$record.id" text-bind="$record.answer" visible-expr="{mainRecord.type}=='single' || {mainRecord.type}=='truefalse'" />
        <Checkbox value-bind="$record.checked" text-bind="$record.answer" visible-expr="{mainRecord.type}=='multiple'" />
        <br />
      </Repeater>
      <br />
        <Text value-tpl="You have choosen: {mainRecord.answered}!" />
        <br /> 
        <TextField value={computable("mainRecord.answers", (options) => {
                let answ = options.filter(o => o.checked == true);
                let ans = "";
                for (let i = 0; i <= answ.length - 1; i++) {
                    ans += answ[i].id + ", ";
                }
                return ans.slice(0,ans.length-2);
            } )
            
          }
            visible-expr="true"/>
        <br />          
      <hr />
    </Repeater>
  </div>
</cx>
