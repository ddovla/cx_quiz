
export const mockQuestions = 
{    
Q1: {
    id: 1,
    type: 'single',
    question: 'What is the name of central data repository used in Cx?',
    answers: [  {id: 'A', answer: 'Storage'}, 
                {id: 'B', answer: 'Store'}, 
                {id: 'C', answer: 'StoredData'}, 
                {id: 'D', answer: 'mainTable'}
            ],
    answered: [''],        
    correct: ['B'],
    rationale: 'Application state in Cx is held in central data repository called Store.'
}, 
Q2: {
    id: 2,
    type: 'single',
    question: 'What a "Data binding" refers to?',
    answers: [  {id: 'A', answer: 'Data binding is a process of connecting the application state to the UI'}, 
                {id: 'B', answer: 'Data binding is a framework within which the application state is created'}, 
                {id: 'C', answer: 'Data binding is a way of managing data in the browser local storage'}, 
                {id: 'D', answer: 'Data binding is a process of connecting front-end with the data on the server (back-end)'}
            ],
    answered: [''],            
    correct: ['A'],
    rationale: 'Data binding is a process of connecting the application state to the UI. If the connection is successful, data changes will be reflected in the UI and user actions will be properly translated into data changes.'
}, 
Q3: {
    id: 3,
    type: 'truefalse',
    question: 'It is allowed to define methods within a controller which can be invoked when necessary from the view.',
    answers: [  {id: 'A', answer: 'True'}, 
                {id: 'B', answer: 'False'}, 
            ],
    answered: [''],         
    correct: ['A'],
    rationale: 'See Controllers/Callback Methods in Cx docs.'
}, 
Q4: {
    id: 4,
    type: 'multiple',
    question: 'Select all properly named Cx widgets from the given list:',
    answers: [  {id: 'A', answer: 'GroupField', checked: false}, 
                {id: 'B', answer: 'LookupField', checked: false}, 
                {id: 'C', answer: 'Switch', checked: false}, 
                {id: 'D', answer: 'PieCharts', checked: false}
            ],
    answered: [''],             
    correct: ['B','C'],
    rationale: 'GroupField and PieCharts are incorrect. Proper names of these widgets are FieldGroup and PieChart.'
}, 
Q5: {
    id: 5,
    type: 'truefalse',
    question: 'Overlays are web pages displayed on top of the main UI?',
    answers: [  {id: 'A', answer: 'True'}, 
                {id: 'B', answer: 'False'}
            ],
    answered: [],        
    correct: ['B'],
    rationale: 'Overlays are page elements displayed on top of the main UI'
}, 
Q6: {
    id: 6,
    type: 'multiple',
    question: 'Triggers are used to (select two most appropriate answers):',
    answers: [  {id: 'A', answer: 'Calculate data based on the other data', checked: false}, 
                {id: 'B', answer: 'Invoke methods defined higher in the ancestor controller tree', checked: false}, 
                {id: 'C', answer: 'Load data from the server on selection change', checked: false}, 
                {id: 'D', answer: 'Implement complex data behavior', checked: false}
            ],
    answered: [''],             
    correct: ['C','D'],
    rationale: 'GroupField and PieCharts are incorrect. Proper names of these widgets are FieldGroup and PieChart.'
}, 
Q7: {
    id: 7,
    type: 'single',
    question: 'What is the proper syntax for putting a code in a comment in the Cx (JSX)?',
    answers: [  {id: 'A', answer: '//'}, 
                {id: 'B', answer: '/* */'}, 
                {id: 'C', answer: '/--'}, 
                {id: 'D', answer: '{/* */}'}
            ],
    answered: [''],            
    correct: ['D'],
    rationale: 'One way for remembering this, is to think in the way that you use curley braces { } to enclose JS code within JSX, and afterward use standard JS block comment syntax /* */.'
}
}
;