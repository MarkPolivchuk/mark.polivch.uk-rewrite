import React from 'react'

import Section from './section'

const languages = [
  'Javascript',
  'Typescript',
  'HTML',
  'CSS',
  'SQL',
  'Swift',
  'C#',
  'Java',
]

const frameworks = [
  'Node',
  'React',
  'Redux',
  'React-Native',
  'Bootstrap',
  'Tailwind',
  'Mocha',
  'Jest',
  'Stripe',
  'Auth0',
]

const tools = [
  'Git',
  'AWS',
  'Firebase',
  'Docker',
  'Postgres',
  'MongoDB',
  'Redis',
  'Windows',
  'Ubuntu',
  'MacOS',
]

const software = [
  'Microsoft Office',
  'Apple iWork',
  'Google Docs',
  'VSCode',
  'Xcode',
  'Adobe Creative Suite',
  'Sketch',
]

const patterns = ['MVC', 'MVVM', 'UI', 'UX', 'REST', 'GraphQL']

const Badge = ({ color, children }) => (
  <span
    class={`rounded bg-gray-100 px-3 py-1 mr-2 mb-2 font-semibold ${color}`}
  >
    {children}
  </span>
)

const Skills = () => (
  <Section
    title="Skills"
    titleColor="text-blue-600"
    borderColor="border-blue-500"
  >
    <div class="flex flex-wrap align-start justify-start tracking-wider text-xs">
      {languages.map(x => (
        <Badge color="text-green-500">{x}</Badge>
      ))}
      {frameworks.map(x => (
        <Badge color="text-teal-500">{x}</Badge>
      ))}
      {tools.map(x => (
        <Badge color="text-blue-500">{x}</Badge>
      ))}
      {software.map(x => (
        <Badge color="text-indigo-500">{x}</Badge>
      ))}
      {patterns.map(x => (
        <Badge color="text-purple-500">{x}</Badge>
      ))}
    </div>
  </Section>
)

export default Skills
