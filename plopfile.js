module.exports = function (plop) {
  
  plop.setGenerator('enum', {
    description: 'Create React Enum',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name: '
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/contents/__enums__/{{pascalCase name}}Enums.ts',
        templateFile: 'src/__templates__/__enums__/index.ts.hbs',
      },
      {
        type: 'modify',
        path: 'src/contents/__enums__/index.ts',
        pattern: /$/,
        template: `\nexport * from './{{pascalCase name}}Enums'`
      },
    ]
  });

  plop.setGenerator('global', {
    description: 'Create React Global',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name: '
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/contents/__global__/{{pascalCase name}}.ts',
        templateFile: 'src/__templates__/__global__/index.ts.hbs',
      },
      {
        type: 'modify',
        path: 'src/contents/__global__/index.ts',
        pattern: /$/,
        template: `\nexport * from './{{pascalCase name}}'`
      },
    ]
  });

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
        type: 'add',
        path: 'src/contents/components/{{pascalCase name}}/index.ts',
        templateFile: 'src/__templates__/components/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/contents/components/{{pascalCase name}}/{{pascalCase name}}.component.tsx',
        templateFile: 'src/__templates__/components/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/contents/components/{{pascalCase name}}/{{pascalCase name}}.type.tsx',
        templateFile: 'src/__templates__/components/type.ts.hbs',
      },
      {
        type: 'modify',
        path: 'src/contents/components/index.ts',
        pattern: /$/,
        template: `\nexport * from './{{pascalCase name}}'`
      },
    ]
  });
};