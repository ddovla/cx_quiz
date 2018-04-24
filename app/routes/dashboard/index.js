import { HtmlElement, Section, FlexRow, Repeater, Rescope, TextField, Checkbox, Text, Radio } from 'cx/widgets';
import { PureContainer } from 'cx/widgets';
import { Store, computable } from "cx/data";
import Controller from './Controller';
import uController from './uController'


export default <cx>
  <h2 putInto="header">Quiz - Questions</h2>





  <div controller={Controller}>
    <TextField label="Quiz type:" value-bind="test.type.name" mode="view" emptyText="n/a" style="width: auto" />
    <br />
    <TextField label="Question" value-bind="tekst1.ime" mode="view" emptyText="n/a" />
    
    <br />
    <Repeater records-bind="questions.items" recordAlias="mainRecord">
      <div controller={uController}>
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
        <br />
        <Text value-tpl="You have choosen: {mainRecord.answered}!" />
        <hr />
      </div>
    </Repeater>
  </div>
</cx>