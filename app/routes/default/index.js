import {LookupField, Button, FlexRow, HtmlElement, Link, Section, TextField} from 'cx/widgets';
import Controller from './Controller';

export default <cx>
<div controller={Controller}>

   <h2 putInto="header">
      CxJS Quiz
   </h2>

    <Section
        mod="card"
        style="margin: auto; width: 65%"
    > 
      <h3>Before we start</h3>
      <p ws>
        CxJS Quiz is a fun way of assesing your knowldge about CxJS framework, and perhaps an opportunity to learn some new things. 
        There are a couple of quiz modes you can choose between. They are self explanatory...
      </p>
      <h4>Please select a quiz type of your choice:</h4>

        <LookupField
            label="Quiz Type"
            value-bind="test.type.id"
            text-bind="test.type.name"
            options-bind="test.types"
            autoFocus
            style="width: auto; min-width: 140px"
        />
      <br />
      <br />
        <Button mod="primary"> Start Quiz!</Button>   
   </Section>
</div>
</cx>
