import {LookupField, Button, FlexRow, HtmlElement, Link, Section} from 'cx/widgets';
import { testTypes } from 'app/data/testTypes';

export default <cx>
   <h2 putInto="header">
      CxJS Quiz
   </h2>

   <Section mod="card">     
      <h3>Before we start</h3>
      <p ws>
        CxJS Quiz is a fun way of assesing your knowldge about CxJS framework, and perhaps an opportunity to learn some new things. 
        There are a couple of quiz modes you can choose between. They are self explanatory...
      </p>

      <h3>Please select a quiz type of your choice:</h3>
      
      <FlexRow spacing putInto="footer">
        <LookupField
            label="Quiz Type"
            value-bind="testTypes.id"
            text-bind="testTypes.name"
            options-bind="testTypes"
        />
        <Button mod="primary"> Start Quiz!</Button> 
      </FlexRow>

    <div>
        testiranje { testTypes[1] }
    </div>    

   </Section>
</cx>
