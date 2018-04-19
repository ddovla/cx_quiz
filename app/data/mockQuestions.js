mockQuestions = [
{
    id: 1,
    type: 'single',
    question: 'What is the name of central data repository used in Cx?',
    answers: [  {id: 'A', answer: 'Storage'}, 
                {id: 'B', answer: 'Store'}, 
                {id: 'C', answer: 'StoredData'}, 
                {id: 'D', answer: 'mainTable'}
            ],
    correct: ['B'],
    rationale: 'Application state in Cx is held in central data repository called Store.'
}, {
    id: 2,
    type: 'single',
    question: 'What a "Data binding" refers to?',
    answers: [  {id: 'A', answer: 'Data binding is a process of connecting the application state to the UI'}, 
                {id: 'B', answer: 'Data binding is a framework within which the application state is created'}, 
                {id: 'C', answer: 'Data binding is a way of managing data in the browser local storage'}, 
                {id: 'D', answer: 'Data binding is a process of connecting front-end with the data on the server (back-end'}
            ],
    correct: ['A'],
    rationale: 'Data binding is a process of connecting the application state to the UI. If the connection is successful, data changes will be reflected in the UI and user actions will be properly translated into data changes. There are multiple ways of applying data to the widgets.'
}, {
    id: 3,
    type: 'truefalse',
    question: 'It is allowed to define methods within a controller which can be invoked when necessary from the view.',
    answers: [  {id: 'A', answer: 'True'}, 
                {id: 'B', answer: 'False'}, 
            ],
    correct: ['A'],
    rationale: 'See Controllers/Callback Methods in Cx docs.'
}, {
    id: 4,
    type: 'multiple',
    question: 'Select all proper Cx widgets from the given list:',
    answers: [  {id: 'A', answer: 'GroupField'}, 
                {id: 'B', answer: 'LookupField'}, 
                {id: 'C', answer: 'Switch'}, 
                {id: 'D', answer: 'PieCharts'}
            ],
    correct: ['B','C'],
    rationale: 'GroupField and PieCharts are incorrect. Proper names of these widgets are FieldGroup and PieChart.'
}, {
    id: 5,
    type: 'truefalse',
    question: 'Overlays are web pages displayed on top of the main UI?',
    answers: [  {id: 'A', answer: 'True'}, 
                {id: 'B', answer: 'False'}
            ],
    correct: ['B'],
    rationale: 'Overlays are page elements displayed on top of the main UI'
}
];
