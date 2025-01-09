module.exports = function (plop) {
  
  plop.setGenerator('enum', {
    description: 'Create Enum',
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
    description: 'Create Global Interface',
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

  plop.setGenerator('connection', {
    description: 'Create Connection',
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
        path: 'src/contents/connections/{{camelCase name}}/index.ts',
        templateFile: 'src/__templates__/connections/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/contents/connections/{{camelCase name}}/{{camelCase name}}.connection.ts',
        templateFile: 'src/__templates__/connections/connection.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/contents/connections/{{camelCase name}}/{{camelCase name}}.type.ts',
        templateFile: 'src/__templates__/connections/type.ts.hbs',
      },
      {
        type: 'modify',
        path: 'src/contents/connections/index.ts',
        pattern: /$/,
        template: `\nexport * from './{{camelCase name}}'`
      },
    ]
  });

  plop.setGenerator('hook', {
    description: 'Create React Hook',
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
        path: 'src/contents/hooks/use{{pascalCase name}}/index.ts',
        templateFile: 'src/__templates__/hooks/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/contents/hooks/use{{pascalCase name}}/use{{pascalCase name}}.ts',
        templateFile: 'src/__templates__/hooks/hook.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/contents/hooks/use{{pascalCase name}}/use{{pascalCase name}}.type.ts',
        templateFile: 'src/__templates__/hooks/type.ts.hbs',
      },
      {
        type: 'modify',
        path: 'src/contents/hooks/index.ts',
        pattern: /$/,
        template: `\nexport * from './use{{pascalCase name}}'`
      },
    ]
  });

  plop.setGenerator('service', {
    description: 'Create Service',
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
        path: 'src/contents/services/{{camelCase name}}/index.ts',
        templateFile: 'src/__templates__/services/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/contents/services/{{camelCase name}}/{{camelCase name}}.service.ts',
        templateFile: 'src/__templates__/services/service.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/contents/services/{{camelCase name}}/{{camelCase name}}.type.ts',
        templateFile: 'src/__templates__/services/type.ts.hbs',
      },
      {
        type: 'modify',
        path: 'src/contents/services/index.ts',
        pattern: /$/,
        template: `\nexport * from './{{camelCase name}}'`
      },
    ]
  });
};