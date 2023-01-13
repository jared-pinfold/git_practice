
const EDACourse = [
  ['Javascript', 'Git and GitHub', 'Node and NPM', 'Pair programming', 'Jest'],
  ['Express.js', 'Handlebars', 'Heroku', 'Cheerio'],
  ['Knex', 'SQLite', 'Database design'],
  ['React', 'React-Router', 'Webpack', 'Testing Library', 'Supertest'],
  ['Superagent', 'REST APIs'],
  ['Redux'],
  ['Group Projects'],
  ['Public speaking'],
  ['Giving Feedback']
]

const mySkillset = EDACourse.reduce((skillset, week) => [...skillset, week].flat())

console.log(mySkillset)