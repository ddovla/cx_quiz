import { HtmlElement, Section, FlexRow, TextField, Checkbox, Text, Radio } from 'cx/widgets';
import { LabelsLeftLayout, Repeater, Rescope } from 'cx/ui';
import { PureContainer, Sandbox, HScroller, Tab } from 'cx/widgets';
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

      <div preserveWhitespace>
        <Radio
          value={{ bind: "questions.current", defaultValue: "Q1" }}
          option="Q1"
        >
          1st
        </Radio>
        <Radio value-bind="questions.current" option="Q2">
          2nd 
        </Radio>
        <Radio value-bind="questions.current" option="Q3">
          3rd
        </Radio>
      </div>


    <Sandbox
      key-bind="questions.current"
      storage-bind="questions.items"
      recordName="mainRecord"
    >

       {/* <Text value-tpl="rez: {questions.current} {questions.items.Q1.id} {mainRecord.id}. {mainRecord.question}" /> */}

      <div controller={uController}>
        <div layout={LabelsLeftLayout}>
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
      </div>
    </Sandbox>


    {/* <Repeater records-bind="questions.items" recordAlias="mainRecord">
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
    </Repeater> */}
  </div>
</cx>