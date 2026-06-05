export const lessons = [
  {
    id: 'l0',
    number: 0,
    title: 'Course Overview',
    subtitle: 'Flow Basics & Navigation',
    color: '#0176D3',
    emoji: '🗺️',
    topics: [
      {
        id: 'l0t1',
        title: 'What is Flow?',
        topics: []
      },
      {
        id: 'l0t2',
        title: 'Core Flow Types',
        topics: []
      },
      {
        id: 'l0t3',
        title: 'Flow Builder UI',
        topics: []
      },
      {
        id: 'l0t4',
        title: 'Translating Requirements',
        topics: []
      }
    ]
  },
  {
    id: 'l1',
    number: 1,
    title: 'Think Like a Developer',
    subtitle: 'Variables, Algorithms & Control Structures',
    color: '#7B5EA7',
    emoji: '🧠',
    topics: [
      { id: 'l1t1', title: 'Variables' },
      { id: 'l1t2', title: 'Data Types' },
      { id: 'l1t3', title: 'Record & Collection Variables' },
      { id: 'l1t4', title: 'Algorithms' },
      { id: 'l1t5', title: 'Control Structures' },
      { id: 'l1t6', title: 'Best Practices' }
    ]
  },
  {
    id: 'l2',
    number: 2,
    title: 'Plan & Build Screen Flows',
    subtitle: 'Elements, DML, Field Visibility & Navigation',
    color: '#06A59A',
    emoji: '🖥️',
    topics: [
      { id: 'l2t1', title: 'Use Case 2-1: Opportunity Wizard' },
      { id: 'l2t2', title: 'Elements & Resources' },
      { id: 'l2t3', title: 'Field Visibility' },
      { id: 'l2t4', title: 'DML & Data Elements' },
      { id: 'l2t5', title: 'Faults & Error Handling' },
      { id: 'l2t6', title: 'Surfacing & Finishing a Flow' }
    ]
  },
  {
    id: 'l3',
    number: 3,
    title: 'Plan & Build Record-Triggered Flows',
    subtitle: 'Triggers, Validation, Subflows & Scheduled Paths',
    color: '#FE9339',
    emoji: '⚡',
    topics: [
      { id: 'l3t1', title: 'Save Order of Execution' },
      { id: 'l3t2', title: 'Before Save vs After Save' },
      { id: 'l3t3', title: '$Record & $Record__Prior' },
      { id: 'l3t4', title: 'Flow-Based Validation Rules' },
      { id: 'l3t5', title: 'Replace Formula Fields' },
      { id: 'l3t6', title: 'Subflows' },
      { id: 'l3t7', title: 'Scheduled Paths' }
    ]
  }
];

export const quizData = {
  l0: [
    {
      id: 'l0q1',
      question: 'What is a Flow Interview?',
      options: [
        'A job interview at Salesforce',
        'An instance of a currently executing flow',
        'A review of flow performance metrics',
        'A test run before activating a flow'
      ],
      correct: 1,
      explanation: 'A Flow Interview is a single running instance of a flow. Each time a flow is triggered, a new Flow Interview is created — like the recipe vs. actually cooking the meal.'
    },
    {
      id: 'l0q2',
      question: 'Which flow type requires a user to interact with it?',
      options: ['Record-Triggered Flow', 'Schedule-Triggered Flow', 'Screen Flow', 'Autolaunched Flow'],
      correct: 2,
      explanation: 'Screen Flows have a user interface — they show screens and collect input. All other flow types run automatically in the background.'
    },
    {
      id: 'l0q3',
      question: 'Where do flows primarily run in the Salesforce application layers?',
      options: [
        'User Interface layer only',
        'Logic and Data layers (Screen Flows also touch UI)',
        'Data layer only',
        'All three layers equally'
      ],
      correct: 1,
      explanation: 'Flows operate in the Business Logic/Automation and Data layers. Screen Flows additionally touch the User Interface layer because they display screens to users.'
    },
    {
      id: 'l0q4',
      question: 'What is the correct 3-step framework for translating a use case into a Flow?',
      options: [
        'Think → Build → Test',
        'Say it in Plain Language → Say it in Salesforce → Say it in Flow',
        'Objects → Fields → Logic',
        'Requirements → Design → Deploy'
      ],
      correct: 1,
      explanation: 'The course framework: (1) Plain Language — what does the user need? (2) Salesforce — what objects/operations? (3) Flow — "I need a Get Records to look up X, then an Update Records..."'
    }
  ],
  l1: [
    {
      id: 'q1',
      question: 'How many values can a primitive variable hold at one time?',
      options: ['One', 'Two', 'Any Number'],
      correct: 0,
      explanation: 'A primitive variable (Text, Number, Boolean, Date, Date/Time) holds exactly ONE value at a time. If you need multiple values, use a Collection.'
    },
    {
      id: 'q2',
      question: "What data type captures a user's first name?",
      options: ['Boolean', 'Number', 'Text', 'Date', 'Record'],
      correct: 2,
      explanation: "A first name like 'Angela' is a Text data type — it stores alphanumeric characters and words."
    },
    {
      id: 'q3',
      question: "What data type captures a user's birthday?",
      options: ['Text', 'Date/Time', 'Number', 'Date', 'Record'],
      correct: 3,
      explanation: "A birthday like 10/13/1985 is just a Date — it has no time component. Date/Time would include hours and minutes (like a login timestamp)."
    },
    {
      id: 'q4',
      question: 'What data type captures when a user logged into Salesforce?',
      options: ['Text', 'Date/Time', 'Number', 'Date', 'Record'],
      correct: 1,
      explanation: 'A login event has both a date AND a time (10/13/2022, 10:04 AM), so it uses Date/Time — not just Date.'
    },
    {
      id: 'q5',
      question: 'What data type captures the data for the "Pizza R Us" Account?',
      options: ['Text', 'Date/Time', 'Boolean', 'Record'],
      correct: 3,
      explanation: 'An Account like "Pizza R Us" has many fields (Name, Phone, Industry, etc.). A Record variable stores all of them — like a suitcase packed with every field on the object.'
    },
    {
      id: 'q6',
      question: 'What data type do we use to write three new Accounts to the database?',
      options: ['Record', 'Text', 'Collection', 'Date/Time'],
      correct: 2,
      explanation: 'When working with MULTIPLE records at once, use a Collection. A single Record variable can only hold one record at a time.'
    },
    {
      id: 'q7',
      question: 'What data type captures a Salesforce Record ID?',
      options: ['Boolean', 'Text', 'Number', 'Record'],
      correct: 1,
      explanation: 'A Salesforce Record ID like "0011E00001pDIbHQAS" is Text — it contains letters and numbers but is not a numeric value you\'d calculate with.'
    }
  ],
  l2: [
    {
      id: 'q8',
      question: 'After a Create Records element, you show a success screen. Should you hide the Previous button?',
      options: ['No — users should be able to go back', 'Yes — going back won\'t undo the insert and clicking Next again creates a duplicate', 'Only if it\'s a required field'],
      correct: 1,
      explanation: 'DML operations are not undone when navigating backward. If a user goes back and hits Next again, the Create Records element fires again — creating a duplicate record.'
    },
    {
      id: 'q9',
      question: 'When would you use a Record Choice Set instead of a Lookup field?',
      options: ['When you need access to all parent records', 'When you need to filter which records appear (e.g., only Prospect Accounts)', 'When you need to create a new parent record on the fly'],
      correct: 1,
      explanation: 'Record Choice Sets filter records by criteria (Type = Prospect). Limitation: 200 records max. Lookup fields show ALL related records and allow creating new ones.'
    },
    {
      id: 'q10',
      question: 'What does a Fault path do in a Screen Flow?',
      options: ['It skips the current element and moves to the next', 'It catches database errors and lets you show a custom error message instead of the generic system error', 'It pauses the flow for admin review'],
      correct: 1,
      explanation: 'Without a fault path, users see: "An unhandled fault has occurred." With a fault path, you catch the error and show a helpful screen with the ExceptionCode details.'
    },
    {
      id: 'q11',
      question: 'Which of these operations is NOT available as a Flow element?',
      options: ['Insert (Create Records)', 'Update (Update Records)', 'Undelete', 'Delete (Delete Records)'],
      correct: 2,
      explanation: 'Flow supports Create, Update, Delete, and Get Records. UNDELETE and MERGE are not available as Flow elements — those require Apex.'
    }
  ],
  l3: [
    {
      id: 'q12',
      question: 'A Record-Triggered Flow needs to send a welcome email when a new Account is created. Should this be Fast Field Update or Actions and Related Records?',
      options: ['Fast Field Update (Before Save)', 'Actions and Related Records (After Save)'],
      correct: 1,
      explanation: 'Sending email is an Action — only available in After Save flows. Fast Field Update runs before the record is committed, so no ID exists yet and actions aren\'t available.'
    },
    {
      id: 'q13',
      question: 'What is $Record__Prior used for?',
      options: [
        'To get the record from the previous transaction',
        'To compare field values before and after an update — e.g., did Stage change?',
        'To reference a parent record\'s previous values'
      ],
      correct: 1,
      explanation: '$Record__Prior contains the field values BEFORE the save. Compare {!$Record.StageName} to {!$Record__Prior.StageName} to detect "did Stage change FROM Prospecting?"'
    },
    {
      id: 'q14',
      question: 'When is $Record__Prior available?',
      options: ['On CREATE and UPDATE', 'Only on UPDATE', 'Only on DELETE'],
      correct: 1,
      explanation: 'On a CREATE trigger, there\'s no "prior" version — the record is brand new. $Record__Prior only has values on UPDATE triggers.'
    },
    {
      id: 'q15',
      question: 'What does the Custom Error element do?',
      options: [
        'Logs an error to debug logs only',
        'Shows an error message to the user but continues saving the record',
        'Terminates the flow, rolls back the transaction, and shows an error on the page layout'
      ],
      correct: 2,
      explanation: 'Custom Error is the Flow equivalent of a Validation Rule — it stops the save completely, rolls back all changes in the transaction, and displays your error message inline on the field or in a popup.'
    },
    {
      id: 'q16',
      question: 'Why replace a formula field with a Record-Triggered Flow?',
      options: [
        'Formula fields are deprecated in Salesforce',
        'Formula fields calculate on every page load; a flow pre-computes and stores the value, making pages load faster',
        'Flows can reference more objects than formula fields'
      ],
      correct: 1,
      explanation: 'Formula fields are computed on-the-fly every time a record is accessed. With many formula fields, page loads slow down. A flow runs once on save and stores the result as a regular field value.'
    },
    {
      id: 'q17',
      question: 'What is the best practice for Record-Triggered Flows per object?',
      options: [
        'One large flow per object that handles all logic',
        'Multiple focused flows per object, each with specific entry criteria',
        'One flow per field that needs automation'
      ],
      correct: 1,
      explanation: 'One giant flow becomes unmaintainable "spaghetti." Multiple small flows with focused entry criteria are easier to test, debug, maintain, and perform better.'
    }
  ]
};
