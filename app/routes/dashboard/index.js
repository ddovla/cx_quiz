import { HtmlElement, Section, FlexRow, TextField, Checkbox, Text, Radio } from 'cx/widgets';
import { LabelsLeftLayout, Repeater, Rescope } from 'cx/ui';
import { PureContainer, Sandbox, HScroller, Tab, Button, MsgBox } from 'cx/widgets';
import { Store, computable } from "cx/data";
import Controller from './Controller';
import uController from './uController'


export default <cx>
  <h2 putInto="header">Quiz - Questions</h2>


  <div controller={Controller}>
    <TextField label="Quiz type:" value-bind="test.type.name" mode="view" emptyText="n/a" style="width: auto" />
    <br />
    <TextField label="Question" value-bind="questions.current" mode="view" emptyText="n/a" />
    <br />
    <br />

    <HScroller class="tabs">
      <Repeater records-bind="questions.list">
        <Tab tab-bind="$record.qid" value-bind="questions.current" mod="line" text-tpl="Question {$record.qid}">
        </Tab>
      </Repeater>
    </HScroller>


    <Sandbox
      key-bind="questions.current"
      storage-bind="questions.items"
      recordName="mainRecord"
    >
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
          <hr />
          <Text value-tpl="You have choosen: {mainRecord.answered}!" />
        </div>
      </div>
    </Sandbox> 

    <div class="tabs">
        <Button mode="hollow" onClick="goToPreviousQ" style="width:100px"> Previous </Button>
        <Button mode="hollow" onClick="goToNextQ" style="width:100px"> Next </Button>
    </div>

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