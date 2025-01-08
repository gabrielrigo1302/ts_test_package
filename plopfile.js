module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create React Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name: '
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/content/components/{{name}}',
        templateFiles: 'src/templates/components/*.hbs',
        base: 'src/templates/components',
      },
      {
        type: 'modify',
        path: 'src/content/components/index.ts',
        pattern: /$/,
        template: `\nexport * from './{{name}}'`
      },
      {
        type: 'add',
        path: 'src/__types__/components/{{name}}/index.ts',
        templateFile: 'src/templates/__types__/components/index.ts.hbs',
      },
      {
        type: 'modify',
        path: 'src/__types__/components/index.ts',
        pattern: /$/,
        template: `\nexport * from './{{name}}'`
      }
    ]
  });

  plop.setGenerator('component', {
    description: 'Create Adapter',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do Adapter: '
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/content/adapters/{{camelCase name}}',
        templateFiles: 'src/templates/adapters/*.hbs',
        base: 'src/templates/adapters',
      },
      {
        type: 'modify',
        path: 'src/content/adapters/index.ts',
        pattern: /$/,
        template: `\nexport * from './{{camelCase name}}'`
      },
      {
        type: 'add',
        path: 'src/__types__/adapters/{{camelCase name}}/index.ts',
        templateFile: 'src/templates/__types__/adapters/index.ts.hbs',
      },
      {
        type: 'modify',
        path: 'src/__types__/adapters/index.ts',
        pattern: /$/,
        template: `\nexport * from './{{camelCase name}}'`
      }
    ]
  });
  };