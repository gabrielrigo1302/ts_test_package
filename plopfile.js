module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'React component using Typescript',
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
            type: 'add',
            path: 'src/__types__/components/{{name}}/index.ts',
            templateFile: 'src/templates/__types__/components/index.ts.hbs',
          },
        ]
    });
  };