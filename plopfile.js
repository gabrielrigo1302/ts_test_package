module.exports = function (plop) {
  
  plop.setGenerator('globalEnum', {
    description: 'Create Global Enum',
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
        path: 'src/contents/__global__/enums/{{pascalCase name}}.enum.ts',
        templateFile: 'src/__templates__/__global__/enums/enum.ts.hbs',
      },
      {
        type: 'modify',
        path: 'src/contents/__global__/enums/index.ts',
        pattern: /$/,
        template: `\nexport * from './{{pascalCase name}}.enum'`
      },
    ]
  });

  plop.setGenerator('globalType', {
    description: 'Create Global Type',
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
        path: 'src/contents/__global__/types/{{pascalCase name}}.type.ts',
        templateFile: 'src/__templates__/__global__/types/type.ts.hbs',
      },
      {
        type: 'modify',
        path: 'src/contents/__global__/types/index.ts',
        pattern: /$/,
        template: `\nexport * from './{{pascalCase name}}.type'`
      },
    ]
  });

  plop.setGenerator('globalInterface', {
    description: 'Create Global Interfaces',
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
        path: 'src/contents/__global__/interfaces/{{pascalCase name}}.interface.ts',
        templateFile: 'src/__templates__/__global__/interfaces/interface.ts.hbs',
      },
      {
        type: 'modify',
        path: 'src/contents/__global__/interfaces/index.ts',
        pattern: /$/,
        template: `\nexport * from './{{pascalCase name}}.interface'`
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
        path: 'src/contents/components/{{pascalCase name}}/{{pascalCase name}}.type.ts',
        templateFile: 'src/__templates__/components/type.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/contents/components/{{pascalCase name}}/{{pascalCase name}}.enum.ts',
        templateFile: 'src/__templates__/components/enum.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/contents/components/{{pascalCase name}}/{{pascalCase name}}.interface.ts',
        templateFile: 'src/__templates__/components/interface.ts.hbs',
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
        type: 'add',
        path: 'src/contents/connections/{{camelCase name}}/{{camelCase name}}.enum.ts',
        templateFile: 'src/__templates__/connections/enum.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/contents/connections/{{camelCase name}}/{{camelCase name}}.interface.ts',
        templateFile: 'src/__templates__/connections/interface.ts.hbs',
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
        type: 'add',
        path: 'src/contents/hooks/use{{pascalCase name}}/use{{pascalCase name}}.interface.ts',
        templateFile: 'src/__templates__/hooks/interface.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/contents/hooks/use{{pascalCase name}}/use{{pascalCase name}}.enum.ts',
        templateFile: 'src/__templates__/hooks/enum.ts.hbs',
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
        type: 'add',
        path: 'src/contents/services/{{camelCase name}}/{{camelCase name}}.interface.ts',
        templateFile: 'src/__templates__/services/interface.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/contents/services/{{camelCase name}}/{{camelCase name}}.enum.ts',
        templateFile: 'src/__templates__/services/enum.ts.hbs',
      },
      {
        type: 'modify',
        path: 'src/contents/services/index.ts',
        pattern: /$/,
        template: `\nexport * from './{{camelCase name}}'`
      },
    ]
  });

  plop.setGenerator('util', {
    description: 'Create Util',
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
        path: 'src/contents/utils/{{camelCase name}}/index.ts',
        templateFile: 'src/__templates__/utils/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/contents/utils/{{camelCase name}}/{{camelCase name}}.util.ts',
        templateFile: 'src/__templates__/utils/util.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/contents/utils/{{camelCase name}}/{{camelCase name}}.type.ts',
        templateFile: 'src/__templates__/utils/type.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/contents/utils/{{camelCase name}}/{{camelCase name}}.interface.ts',
        templateFile: 'src/__templates__/utils/interface.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/contents/utils/{{camelCase name}}/{{camelCase name}}.enum.ts',
        templateFile: 'src/__templates__/utils/enum.ts.hbs',
      },
      {
        type: 'modify',
        path: 'src/contents/utils/index.ts',
        pattern: /$/,
        template: `\nexport * from './{{camelCase name}}'`
      },
    ]
  });
};