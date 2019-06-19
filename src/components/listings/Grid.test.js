import data from '../../data/courses.json';

const numItems = data.length;

test('Number of items = 12', () => {
    expect(numItems).toBe(12);
});

test('Number of items to be greader than 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
});

const dataTest = data[0].title;

test('Contains JS', () => {
    expect(dataTest).toMatch(/JS/); // some regex
});

test('Contains React', () => {
    expect(dataTest).toContain('React');
});