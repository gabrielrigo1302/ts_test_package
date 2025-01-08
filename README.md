Dependencias Base:

- react 
- react-dom
- typescript
- axios
- @types/react
- @types/react-dom
- @types/node

Passo a Passo da criação desse Package:

- rodar no terminal: ```npm init -y```;
- rodar no terminal: ```npx tsc --init```;
- adicionar no "tsconfig.json" a tag "jsx": "react";
- adicionar no "tsconfig.json" a tag "outDir": "./dist";
- adicionar no "package.json" o script "build": "tsc";
- adicionar no "package.json" a tag "main": "dist/index.js";
- adicionar no "package.json" a tag "types": "dist/index.d.ts";
- rodar no terminal: ```npm login```;
- rodar no terminal: ```npm run build```;
- rodar no terminal: ```npm publish```;

Scripts de Geração:

Componente: 
- ```npm run generate component 'NomeDoComponente' ```