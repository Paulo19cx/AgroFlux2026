CREATE DATABASE AgroFlux;

CREATE TABLE endereco (
    id INT(11) NOT NULL AUTO_INCREMENT,
    logradouro VARCHAR(150) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    cep CHAR(9) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE empresa (
    id INT(11) NOT NULL AUTO_INCREMENT,
    endereco_id INT(11) NOT NULL,
    cnpj CHAR(14) NOT NULL UNIQUE,
    data_fundacao DATE NOT NULL,
    nome_razao_social VARCHAR(150) NOT NULL,
    nome_fantasia VARCHAR(50),
    PRIMARY KEY (id),
    CONSTRAINT fk_empresa_endereco FOREIGN KEY (endereco_id) REFERENCES endereco(id) ON DELETE CASCADE
);  

CREATE TABLE cliente (
    id INT(11) NOT NULL AUTO_INCREMENT,
    empresa_id INT(11) NOT NULL,
    endereco_id INT(11) NOT NULL,
    nome_razao_social VARCHAR(150) NOT NULL,
    nome_fantasia VARCHAR(50) NULL,
    cnpj CHAR(14) UNIQUE,
    cpf CHAR(11) UNIQUE,
    email VARCHAR(150) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_cliente_empresa FOREIGN KEY (empresa_id) REFERENCES empresa(id),
    CONSTRAINT fk_cliente_endereco FOREIGN KEY (endereco_id) REFERENCES endereco(id),
    CONSTRAINT chk_cliente_cnpj_cpf CHECK (cnpj IS NOT NULL OR cpf IS NOT NULL)
);

CREATE TABLE funcionario (
    id INT(11) NOT NULL AUTO_INCREMENT,
    empresa_id INT(11) NOT NULL,
    nome VARCHAR(150) NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    cargo VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(250) NOT NULL,
    data_nascimento DATE NOT NULL,
    data_contratacao DATE NOT NULL,
    salario_inicial DECIMAL(10,2) NOT NULL,
    salario_atual DECIMAL(10,2) NOT NULL,
    situacao ENUM('ATIVO','INATIVO') NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_funcionario_empresa FOREIGN KEY (empresa_id) REFERENCES empresa(id)
);

CREATE TABLE fornecedor (
    id INT(11) NOT NULL AUTO_INCREMENT,
    empresa_id INT(11) NOT NULL,
    endereco_id INT(11) NOT NULL,
    nome_razao_social VARCHAR(150) NOT NULL,
    nome_fantasia VARCHAR(50),
    cnpj CHAR(14) NOT NULL UNIQUE,
    email VARCHAR(150),
    situacao ENUM('ATIVO', 'INATIVO') NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_fornecedor_empresa FOREIGN KEY (empresa_id) REFERENCES empresa(id),
    CONSTRAINT fk_fornecedor_endereco FOREIGN KEY (endereco_id) REFERENCES endereco(id)
);

CREATE TABLE telefone (
    id INT(11) NOT NULL AUTO_INCREMENT,
    cliente_id INT(11) NULL,
    funcionario_id INT(11) NULL,
    fornecedor_id INT(11) NULL,
    numero VARCHAR(15) NOT NULL,
    tipo VARCHAR(20),
    principal BOOLEAN NOT NULL, -- SIM ou NAO
    PRIMARY KEY (id),
    CONSTRAINT fk_telefone_cliente FOREIGN KEY (cliente_id) REFERENCES cliente(id) ON DELETE CASCADE,
    CONSTRAINT fk_telefone_funcionario FOREIGN KEY (funcionario_id) REFERENCES funcionario(id) ON DELETE CASCADE,
    CONSTRAINT fk_telefone_fornecedor FOREIGN KEY (fornecedor_id) REFERENCES fornecedor(id) ON DELETE CASCADE
);

CREATE TABLE produto (
    id INT(11) NOT NULL AUTO_INCREMENT,
    empresa_id INT(11) NOT NULL,
    fornecedor_id INT(11) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    unidade_medida ENUM('UN', 'KG', 'L', 'SAC', 'MT') NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,
    preco_custo DECIMAL(10,2) NOT NULL,
    situacao ENUM('ATIVO', 'INATIVO') NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_produto_empresa FOREIGN KEY (empresa_id) REFERENCES empresa(id),
    CONSTRAINT fk_produto_fornecedor FOREIGN KEY (fornecedor_id) REFERENCES fornecedor(id)
);

CREATE TABLE venda (
    id INT(11) NOT NULL AUTO_INCREMENT,
    cliente_id INT(11) NOT NULL,
    empresa_id INT(11) NOT NULL,
    funcionario_id INT(11) NOT NULL,
    data_venda DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    valor_total DECIMAL(10,2) NOT NULL,
    status ENUM('PENDENTE','CONCLUIDO','CANCELADO') NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_venda_cliente FOREIGN KEY (cliente_id) REFERENCES cliente(id),
    CONSTRAINT fk_venda_empresa FOREIGN KEY (empresa_id) REFERENCES empresa(id),
    CONSTRAINT fk_venda_funcionario FOREIGN KEY (funcionario_id) REFERENCES funcionario(id) ON DELETE CASCADE
);

CREATE TABLE item_venda (
    id INT(11) NOT NULL AUTO_INCREMENT,
    venda_id INT(11) NOT NULL,
    produto_id INT(11) NOT NULL,
    quantidade INT(4) NOT NULL DEFAULT 0,
    preco_unitario DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    subtotal DECIMAL(10,2) NOT NULL,
    desconto DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    PRIMARY KEY (id),
    CONSTRAINT fk_item_venda_venda FOREIGN KEY (venda_id) REFERENCES venda(id) ON DELETE CASCADE,
    CONSTRAINT fk_item_venda_produto FOREIGN KEY (produto_id) REFERENCES produto(id)
);
 


CREATE TABLE estoque (
    id INT(11) NOT NULL AUTO_INCREMENT,
    empresa_id INT(11) NOT NULL,
    produto_id INT(11) NOT NULL,
    quantidade INT(5) NOT NULL DEFAULT 0,
    minimo INT(5) NOT NULL DEFAULT 0,
    atualizado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY uk_estoque_empresa_produto (empresa_id, produto_id),
    CONSTRAINT fk_estoque_empresa FOREIGN KEY (empresa_id) REFERENCES empresa(id),
    CONSTRAINT fk_estoque_produto FOREIGN KEY (produto_id) REFERENCES produto(id)
);


-- Alterações

CREATE TABLE funcionario_endereco(
    id INT(11) NOT NULL AUTO_INCREMENT,
    endereco_id INT(11) NOT NULL,
    funcionario_id INT(11) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE cliente_endereco(
    id INT(11) NOT NULL AUTO_INCREMENT,
    endereco_id INT(11) NOT NULL,
    cliente_id INT(11) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE fornecedor_endereco(
    id INT(11) NOT NULL AUTO_INCREMENT,
    endereco_id INT(11) NOT NULL,
    fornecedor_id INT(11) NOT NULL,
    PRIMARY KEY(id)
);

ALTER TABLE cliente DROP FOREIGN KEY fk_cliente_endereco;
ALTER TABLE cliente DROP COLUMN cliente_endereco;

ALTER TABLE fornecedor DROP FOREIGN KEY fk_fornecedor_endereco;
ALTER TABLE fornecedor DROP COLUMN endereco_id;
