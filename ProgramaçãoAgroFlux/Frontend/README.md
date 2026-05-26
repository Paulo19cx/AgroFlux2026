# AgroFlux - Frontend

## 📋 Descrição

Frontend da aplicação **AgroFlux**, um sistema de dashboard completo e intuitivo que facilita a leitura e análise dos dados gerais de uma empresa. A interface foi desenvolvida com as melhores práticas de UX/UI, oferecendo uma experiência visual moderna e responsiva.

Dashboard voltado ao setor de agronomia, funcionando como um painel centralizado capaz de transformar dados operacionais em indicadores visuais claros e intuitivos. A ferramenta permite acompanhar, de maneira organizada e eficiente, informações relacionadas a clientes, funcionários, produtos, vendas, fornecedores, estoque e relatórios. Podendo cadastrar ou excluir funcionários, produtos, clientes e fornecedores. Essa visualização estruturada facilita uma gestão mais estratégica, baseada em análises precisas.

## 🎯 Objetivo

Fornecer uma interface web moderna e intuitiva que permita:
- Visualizar dashboards com dados empresariais em tempo real
- Gerenciar clientes, fornecedores, produtos e estoque
- Administrar funcionários e suas informações
- Acompanhar vendas através de gráficos interativos
- Gerar e visualizar relatórios
- Autenticação segura de usuários

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para UI
- **Vite** - Build tool e dev server
- **React Router** - Roteamento de páginas
- **Recharts** - Gráficos interativos (linha, barra, pizza)
- **Bootstrap 5** - Framework CSS responsivo
- **Bootstrap Icons** - Biblioteca de ícones
- **Axios** - Cliente HTTP para requisições
- **React Toastify** - Notificações e alertas
- **Flaticon** - Ícones adicionais

## 🚀 Como Executar

### Pré-requisitos
- Node.js (v18 ou superior)
- npm
- Backend rodando em http://localhost:3001

### Instalação

1. **Navegue para o diretório Frontend**
   ```bash
   cd Frontend
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

A aplicação estará disponível em: **http://localhost:5173**

## 📦 Comandos Disponíveis

```bash
# Modo desenvolvimento
npm run dev
```

## 🎨 Componentes Principais

### Dashboard (Home)
- Visualização geral de dados da empresa
- Gráficos interativos de tendências
- KPIs principais

### Gestão de Clientes
- Listar todos os clientes
- Cadastrar novo cliente
- Editar informações
- Deletar cliente

### Gestão de Funcionários
- Consultar todos os funcionários
- Adicionar novo funcionário
- Atualizar dados
- Remover funcionário

### Controle de Produtos
- Visualizar catálogo de produtos
- Adicionar novo produto
- Atualizar informações
- Deletar produto

### Controle de Estoque
- Monitorar quantidade em estoque
- Adicionar/remover itens
- Alertas de baixo estoque

### Relatórios
- Gráficos de vendas
- Análise de clientes
- Relatórios de funcionários
- Exportação de dados

### Vendas
- Registrar vendas
- Acompanhar transações
- Histórico de vendas

## 🔐 Autenticação

A aplicação utiliza autenticação JWT integrada com o backend. O login é obrigatório para acessar o dashboard.

## 🐛 Troubleshooting

### Erro de conexão com backend
- Certifique-se que o backend está rodando em http://localhost:3001
- Verifique se não há problemas de CORS

### Problema com hot reload
- Reinicie o servidor dev (`npm run dev`)
- Limpe o cache do navegador

## 👥 Autores

- BEATRIZ MOREIRA DOS ANJOS 
- HENRIQUE DA SILVA GUIMARÃES
- JOÃO PEDRO RODRIGUES MARQUES
- PAULO HENRIQUE CODONHO FLORIANO

---

**AgroFlux Dashboard** - Dashboard de análise de dados empresariais
