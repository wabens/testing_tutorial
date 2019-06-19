import data from '../../data/courses.json';

// Numbers
const numItems = data.length;

test('Number of items = 12', () => {
  expect(numItems).toBe(12);
});

test('Number of items to be greader than 12', () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

// STrings
const dataTest = data[0].title;

test('Contains JS', () => {
  expect(dataTest).toMatch(/JS/); // some regex
});

test('Contains React', () => {
  expect(dataTest).toContain('React');
});

// Arrays
const data2 = ['React Native', 'MeteorJS'];

test('The list of courses mentions React Native and MeteorJS', () => {
  expect(['React Native', 'MeteorJS', 'React']).toEqual(expect.arrayContaining(data2)); 
});

// Objects
test('Expect first course to have property of title', () => {
  expect(data[0]).toHaveProperty('title');
});

test('Expect first course to have 31,266 views', () => {
  expect(data[0]).toHaveProperty('views', '31,266');
});
