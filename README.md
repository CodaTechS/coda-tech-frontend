:computer: # codatech-frontend

## Bem-vindo à documentação do codatech-frontend! Este guia irá ajudá-lo a configurar e gerenciar o site.
:wrench: ## Configuração do Projeto

### Para inicializar o seu projeto e instalar suas dependências, execute o seguinte comando:

```
npm install
```

:rocket: #Servidor de Desenvolvimento

## Para o desenvolvimento local, você pode usar o servidor de desenvolvimento, que compila sua aplicação Vue.js e fornece recarregamento automático. Isso permite que você veja as alterações em tempo real durante o desenvolvimento.

```
npm run serve
```

:package: ## Compilação para Produção

### Quando estiver pronto para implantar, você pode criar uma compilação pronta para produção usando o seguinte comando:

```
npm run build
```

### Este comando irá minificar seu código e otimizá-lo para produção, gerando os arquivos necessários no diretório dist.
:white_check_mark: ## Verificação de Qualidade de Código

### Para garantir a qualidade do código e aderência aos padrões de codificação, você pode usar o ESLint para lint e corrigir arquivos:

```
npm run lint
```

:gear: ## Configuração

:whale: ##  Usando Docker

## Se preferir usar o Docker, aqui está um guia sobre como configurar o contêiner Docker codatech-frontend:
:building_construction: ## Construir a Imagem Docker

### Para construir a imagem Docker, execute o seguinte comando na raiz do projeto:


```
npm compose up
```

### A aplicação vai esta disponível em:
```
https://localhost:8080
```

