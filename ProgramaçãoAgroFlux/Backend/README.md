# AgroFlux - API

## Descrição

Backend da aplicação **AgroFlux**, um sistema de dashboard completo e integrado que facilita a leitura e análise dos dados gerais de uma empresa. O backend é responsável por gerenciar toda a lógica de negócios, autenticação, manipulação de dados e comunicação com o banco de dados.

## Objetivo

Fornecer uma API robusta e segura que suporte o dashboard AgroFlux, permitindo:
- Gerenciamento de clientes
- Controle de estoque
- Gestão de funcionários
- Cadastro e controle de produtos
- Autenticação segura com JWT
- Upload de arquivos

## Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MySQL** - Banco de dados relacional
- **JWT (jsonwebtoken)** - Autenticação e autorização
- **Bcrypt** - Criptografia de senhas
- **Multer** - Upload de arquivos
- **Cors** - Controle de acesso entre domínios
- **Dotenv** - Variáveis de ambiente
- **Nodemon** - Desenvolvimento com hot reload

## Como Executar

### Pré-requisitos
- Node.js (v18 ou superior)
- MySQL (v8 ou superior)

### Instalação

1. **Clone ou acesse o repositório**
   ```bash
   cd Backend
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env` na raiz do Backend com as seguintes variáveis:
   ```
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=agroflux
   DB_PORT=3306
   JWT_SECRET=sua_chave_secreta
   ```

4. **Crie o banco de dados**
   
   Execute o arquivo SQL fornecido:
   ```bash
   AgroFlux2026\ProgramaçãoAgroFlux\Database
   ```

5. **Inicie o servidor em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

O servidor estará rodando em: **http://localhost:3001**

## Endpoints Principais

### Clientes
- `GET /clientes` - Listar todos os clientes
- `GET /clientes/:id` - Obter detalhes de um cliente
- `POST /clientes` - Criar novo cliente
- `PUT /clientes/:id` - Editar cliente
- `DELETE /clientes/:id` - Deletar cliente

### Funcionários
- `GET /funcionarios` - Listar todos os funcionários
- `POST /funcionarios` - Criar novo funcionário
- `PUT /funcionarios/:id` - Editar funcionário
- `DELETE /funcionarios/:id` - Deletar funcionário

### Produtos
- `GET /produtos` - Listar todos os produtos
- `POST /produtos` - Criar novo produto
- `PUT /produtos/:id` - Editar produto
- `DELETE /produtos/:id` - Deletar produto

### Estoque
- `GET /estoque` - Consultar estoque
- `POST /estoque` - Adicionar ao estoque
- `PUT /estoque/:id` - Atualizar estoque

## Autenticação

A API utiliza **JWT (JSON Web Tokens)** para autenticação. Todos os endpoints protegidos requerem um token válido no header:

```
Authorization: Bearer seu_token_aqui
```

## Troubleshooting

### Erro de conexão com banco de dados
- Verifique se o MySQL está rodando
- Confirme as credenciais no arquivo `.env`
- Certifique-se que o banco `agroflux` foi criado

### Porta 3001 já em uso
- Altere a porta no arquivo `src/index.js`
- Ou finalize o processo usando a porta

## Autores

- BEATRIZ MOREIRA DOS ANJOS 
- HENRIQUE DA SILVA GUIMARÃES
- JOÃO PEDRO RODRIGUES MARQUES
- PAULO HENRIQUE CODONHO FLORIANO