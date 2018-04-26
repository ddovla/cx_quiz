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
      <h3>Before You Start</h3>
      <p ws>
        CxJS Quiz is a fun way of assesing your knowldge about CxJS framework, and perhaps an opportunity to learn some new things. 
        There are a couple of quiz modes you can choose between: 
      </p>
      <p>
        <strong>Learning mode</strong> - You get the access to all the questions, and unlimited time for answering them. Correct answers are provided straight away.
        <br />
        <br />
        <strong>Quick test</strong> - In this mode, you'll get 20 random questions.The time is limited for 15 min. Results and correct answers are provided at the end of quiz.
        <br />
        <br />
        <strong>Standard test</strong> - The same as the Quick test but you have to answer 40 question in 35 minutes.
        <br />
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
      <TextField label="Question" value-bind="questions.items.q1.question" mode="view" emptyText="n/a" />
        <Button mod="primary"> Start Quiz!</Button>   
   </Section>
</div>
</cx>
