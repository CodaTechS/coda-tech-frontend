# Front End Coda Tech Solutions

## Introdução

Bem-vindo à documentação do codatech-frontend! Este guia irá ajudá-lo a configurar e gerenciar o site.

Para rodar essa aplicação será necessário ter o node e Docker instalados em sua máquina.


## Instalação do projeto metódo 1

1. **Clone o repositório:**
     ```
        git clone git@github.com:CodaTechS/coda-tech-frontend.git
    ``` 
2. **Instale as dependências:**
     ```
        npm install
    ``` 
3. **Iniciar o servidor**
     ```
        npm run dev
    ```
3. **Comandos de compilação para produção**
    ```
        npm run build
    ```

4. **Verificação de qualidade de código**
    ```
        npm run lint
    ```
## Instalação do projeto metódo 2 (Docker compose)

O projeto também pode ser executado utilizando Docker Compose, que facilita a configuração e execução do ambiente. Certifique-se de ter o Docker e o Docker Compose instalados na sua máquina.

### Executando com Docker Compose

1. **Clonar o repositório:**
     ```
        git clone git@github.com:CodaTechS/coda-tech-frontend.git
    ``` 

2. **Navegar até a pasta do projeto:**
     ```
        git clone git@github.com:CodaTechS/coda-tech-frontend.git
    ``` 

3. **Criar arquivo `.env` para Docker Compose:**
   - Crie um arquivo chamado `.env` na raiz do projeto e configure as variáveis de ambiente necessárias, como `PORT` e outras conforme necessário.

4. **Construir e Iniciar os Contêineres:**
   - Execute o comando `docker-compose up --build` para construir as imagens e iniciar os contêineres.

5. **Acessar a API:**
   - A aplicação estará acessível em `http://localhost:{PORT}`, onde `{PORT}` é a porta definida no arquivo `.env`.

6. **Parar os Contêineres:**
   - Para parar a execução dos contêineres, pressione `Ctrl + C` no terminal onde o `docker-compose up` está sendo executado.

7. **Comandos para Produção:**
   ```
   docker-compose -f docker-compose.prod.yml up --build

   ```

7. **ESLint no Docker**
   ```
   docker-compose run --rm frontend npm run lint


   ```