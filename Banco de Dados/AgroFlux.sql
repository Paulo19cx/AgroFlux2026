CREATE AgroFlux

CREATE TABLE endereco (
    id INT NOT NULL AUTO_INCREMENT,
    logradouro VARCHAR(150) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    cep CHAR(9) NOT NULL,

    PRIMARY KEY (id)
)

CREATE TABLE empresa (
    id INT NOT NULL AUTO_INCREMENT,
    cnpj CHAR(14) NOT NULL UNIQUE,
    data_fundacao DATE NOT NULL,
    nome_razao_social VARCHAR(150) NOT NULL,
    nome_fantasia VARCHAR(50),
    endereco_id INT NOT NULL,

    PRIMARY KEY (id),
    CONSTRAINT fk_empresa_endereco
      FOREIGN KEY (endereco_id) REFERENCES endereco(id)
)

CREATE TABLE cliente (
    id INT NOT NULL AUTO_INCREMENT,
    empresa_id INT NOT NULL,
    cnpj CHAR(14) NOT NULL UNIQUE,
    nome_razao_social VARCHAR(150) NOT NULL,
    nome_fantasia VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL,
    endereco_id INT NOT NULL,

    PRIMARY KEY (id),
    CONSTRAINT fk_cliente_empresa
      FOREIGN KEY (empresa_id) REFERENCES empresa(id),
    CONSTRAINT fk_cliente_endereco
      FOREIGN KEY (endereco_id) REFERENCES endereco(id)
)

CREATE TABLE telefone (
    id INT NOT NULL AUTO_INCREMENT,
    numero VARCHAR(15) NOT NULL,
    tipo VARCHAR(20), -- celular, comercial, residencial
    cliente_id INT NOT NULL,

    PRIMARY KEY (id),
    CONSTRAINT fk_telefone_cliente
      FOREIGN KEY (cliente_id) REFERENCES cliente(id)
      ON DELETE CASCADE
)

CREATE TABLE funcionario (
    id INT NOT NULL AUTO_INCREMENT,
    empresa_id INT NOT NULL,
    nome VARCHAR(150) NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    cargo VARCHAR(15) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    data_contratacao DATE NOT NULL,
    salario_inicial DECIMAL(10,2) NOT NULL,
    salario_atual DECIMAL(10,2) NOT NULL,
    situacao ENUM('ATIVO','INATIVO') NOT NULL,

    PRIMARY KEY (id),
    CONSTRAINT fk_funcionario_empresa
      FOREIGN KEY (empresa_id) REFERENCES empresa(id)
)

CREATE TABLE produto (
    id INT NOT NULL AUTO_INCREMENT,
    descricao VARCHAR(100) NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,
    preco_custo DECIMAL(10,2) NOT NULL,

    PRIMARY KEY (id)
)

CREATE TABLE venda (
    id INT NOT NULL AUTO_INCREMENT,
    cliente_id INT NOT NULL,
    data_venda DATE NOT NULL,
    valor_total DECIMAL(10,2) NOT NULL,
    status ENUM('PENDENTE','CONCLUIDO','CANCELADO') NOT NULL,

    PRIMARY KEY (id),
    CONSTRAINT fk_venda_cliente
      FOREIGN KEY (cliente_id) REFERENCES cliente(id)
)

CREATE TABLE item_venda (
    id INT NOT NULL AUTO_INCREMENT,
    venda_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,

    PRIMARY KEY (id),
    CONSTRAINT fk_item_venda_venda
      FOREIGN KEY (venda_id) REFERENCES venda(id)
      ON DELETE CASCADE,
    CONSTRAINT fk_item_venda_produto
      FOREIGN KEY (produto_id) REFERENCES produto(id)
)
 

-- 9) Fornecedor
CREATE TABLE fornecedor (
    id INT NOT NULL AUTO_INCREMENT,
    empresa_id INT NOT NULL,
    cnpj CHAR(14) NOT NULL UNIQUE,
    nome_razao_social VARCHAR(150) NOT NULL,
    nome_fantasia VARCHAR(50),
    email VARCHAR(150),
    telefone VARCHAR(15),
    endereco_id INT NOT NULL,

    PRIMARY KEY (id),
    CONSTRAINT fk_fornecedor_empresa
      FOREIGN KEY (empresa_id) REFERENCES empresa(id),
    CONSTRAINT fk_fornecedor_endereco
      FOREIGN KEY (endereco_id) REFERENCES endereco(id)
)
-- 10) Estoque (saldo por produto dentro da empresa)
CREATE TABLE estoque (
    id INT NOT NULL AUTO_INCREMENT,
    empresa_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL DEFAULT 0,
    minimo INT NOT NULL DEFAULT 0,
    atualizado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    UNIQUE KEY uk_estoque_empresa_produto (empresa_id, produto_id),
    CONSTRAINT fk_estoque_empresa
      FOREIGN KEY (empresa_id) REFERENCES empresa(id),
    CONSTRAINT fk_estoque_produto
      FOREIGN KEY (produto_id) REFERENCES produto(id)
)

