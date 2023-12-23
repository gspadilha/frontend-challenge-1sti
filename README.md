# Criado projeto com VITE e TypeScript

1. Inclusão do .editorconfig

2. Instalação do ESLINT
```` bash script
yarn eslint --init
````
- instalar pacotes sugeridos ao configurar

3. Instalação do PRETTIER
- cópia do arquivo de configuração

4. Instalação do JEST
```` bash script
yarn jest --init
````
- alterar o "roots", "testPathIgnorePatterns" e "transform" no arquivo de configuração
```` bash script
yarn add @testing-library/dom @testing-library/jest-dom @testing-library/react @testing-library/user-event -D
````

5. Instalação do Testing Library
- alterar o "setupFilesAfterEnv" no arquivo de configuração do Jest

6. Instalação dos pacotes adicionais para o Jest
```` bash script
yarn add babel-jest jest-environment-jsdom ts-jest ts-node -D
````

7. Instalação dos pacotes adicionais para o Vite
```` bash script
yarn add add babel-preset-vite -D
````
