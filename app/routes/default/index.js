import {LookupField, Button, FlexRow, HtmlElement, Link, Section, TextField} from 'cx/widgets';
import Controller from './Controller';

export default <cx>
<div controller={Controller}>

   <h2 putInto="header">
      CxJS Quiz
   </h2>

    <Section
        mod="card"
    > 
      <h3>Before we start</h3>
      <p ws>
        CxJS Quiz is a fun way of assesing your knowldge about CxJS framework, and perhaps an opportunity to learn some new things. 
        There are a couple of quiz modes you can choose between. They are self explanatory...
      </p>
      <h3>Please select a quiz type of your choice:</h3>
      <FlexRow spacing target="tablet" putInto="footer">
        <LookupField
            label="Quiz Type"
            value-bind="$page.type.id"
            text-bind="$page.type.name"
            options-bind="$page.types"
            autoFocus
        />
        <Button mod="primary"> Start Quiz!</Button> 
        <TextField label="ime" value-bind="tekst.ime" />
      </FlexRow>  
   </Section>
</div>
</cx>
