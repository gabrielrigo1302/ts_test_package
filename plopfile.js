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
      // {
      //   type: 'addMany',
      //   destination: 'src/content/components/{{pascalCase name}}',
      //   templateFiles: 'src/env/templates/components/*.hbs',
      //   base: 'src/env/templates/components',
      // },
      {
        type: 'add',
        path: 'src/contents/components/{{pascalCase name}}/{{pascalCase name}}.component.tsx',
        templateFile: 'src/__templates__/components/component.tsx.hbs',
      },
      // {
      //   type: 'modify',
      //   path: 'src/content/components/index.ts',
      //   pattern: /$/,
      //   template: `\nexport * from './{{pascalCase name}}'`
      // },
      // {
      //   type: 'add',
      //   path: 'src/__types__/components/{{pascalCase name}}/index.ts',
      //   templateFile: 'src/env/templates/__types__/components/index.ts.hbs',
      // },
      // {
      //   type: 'modify',
      //   path: 'src/__types__/components/index.ts',
      //   pattern: /$/,
      //   template: `\nexport * from './{{pascalCase name}}'`
      // }
    ]
  });
};