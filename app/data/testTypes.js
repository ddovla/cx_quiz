export const types = [
{       id: 'learn',
        name: 'Learning mode - all questions / unlimited time'
}, {
        id: 'quick',
        name: 'Quick test - 20 questions / 15 minutes'
}, {
        id: 'standard',
        name: 'Standard test - 40 questions / 35 minutes'
},
];

export const testTypes = {};

types.forEach(c => {
    testTypes[c.id] = c.name;
});