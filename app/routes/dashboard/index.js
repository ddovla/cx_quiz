import {HtmlElement, Section, FlexRow, Repeater, Rescope, TextField, Checkbox, Text, Radio} from 'cx/widgets';
import Controller from './Controller';


export default <cx>
   <h2 putInto="header">Quiz - Questions</h2>

<div controller = {Controller}>

 <TextField label="Standard" value-bind="tekst1.ime" />
 <TextField label="Question" value-bind="tekst1.ime" mode="view" emptyText = "n/a"/>
 <TextField label="ime" value-bind="tekst.ime" />
 <br />

      <Repeater records-bind="intro.core.items">
        <Checkbox value-bind="$record.checked" text-bind="$record.text" />
        <br />
      </Repeater>


    <Repeater records-bind="questions.items">
                <br />
                <Text value-bind="$record.question"/>
                <br />
                <br />
                <Repeater records-bind="$record.answers">
                    <Radio value-bind="$record.answers.checked" option-bind="$record.id" text-bind="$record.answer" />
                    <br />
                </Repeater>
    </Repeater>

</div>

</cx>
