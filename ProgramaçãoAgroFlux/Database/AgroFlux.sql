CREATE DATABASE agroflux;

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
    CONSTRAINT fk_empresa_endereco FOREIGN KEY (endereco_id) REFERENCES endereco(id)

    -- dasdos empresa:
    -- INSERT INTO `endereco`(`logradouro`, `numero`, `bairro`, `cidade`, `estado`, `cep`) VALUES ('Rua Pedrosa do Vale','1002','Jardim das Flores','Garça','SP','10303679');
    -- INSERT INTO `empresa`(`endereco_id`, `cnpj`, `data_fundacao`, `nome_razao_social`, `nome_fantasia`) VALUES (1,'12345678000102','1997-03-15','AgroFlux Distribuidora Ltda e Outros','AgroFlux');
);  

CREATE TABLE cliente (
    id INT(11) NOT NULL AUTO_INCREMENT,
    empresa_id INT(11) NOT NULL DEFAULT 1,
    funcionario_id INT(11) NOT NULL,
    nome_razao_social VARCHAR(200) NOT NULL,
    nome_fantasia VARCHAR(100) NULL,
    tipo_pessoa ENUM('FISICA', 'JURIDICA') NOT NULL,
    cnpj CHAR(14) UNIQUE,
    cpf CHAR(11) UNIQUE,
    email VARCHAR(150) NOT NULL,
    situacao ENUM('ATIVO', 'INATIVO') NOT NULL,
    data_cadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT fk_cliente_empresa FOREIGN KEY (empresa_id) REFERENCES empresa(id),
    CONSTRAINT chk_cliente_cnpj_cpf CHECK (cnpj IS NOT NULL OR cpf IS NOT NULL)
);

CREATE TABLE funcionario (
    id INT(11) NOT NULL AUTO_INCREMENT,
    empresa_id INT(11) NOT NULL DEFAULT 1,
    nome VARCHAR(150) NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    cargo VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(250) NOT NULL,
    data_nascimento DATE NOT NULL,
    data_contratacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    salario_inicial DECIMAL(10,2) NOT NULL,
    salario_atual DECIMAL(10,2) NOT NULL,
    foto VARCHAR(255),
    regra VARCHAR(50) NOT NULL,
    situacao ENUM('ATIVO', 'INATIVO') NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_funcionario_empresa FOREIGN KEY (empresa_id) REFERENCES empresa(id)
);

CREATE TABLE fornecedor (
    id INT(11) NOT NULL AUTO_INCREMENT,
    empresa_id INT(11) NOT NULL DEFAULT 1,
    funcionario_id INT(11) NOT NULL,
    nome_razao_social VARCHAR(150) NOT NULL,
    nome_fantasia VARCHAR(50) NOT NULL,
    cnpj CHAR(14) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL,
    situacao ENUM('ATIVO', 'INATIVO') NOT NULL,
    data_cadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT fk_fornecedor_empresa FOREIGN KEY (empresa_id) REFERENCES empresa(id),
    CONSTRAINT fk_fornecedor_funcionario FOREIGN KEY (funcionario_id) REFERENCES funcionario(id)
);

CREATE TABLE telefone (
    id INT(11) NOT NULL AUTO_INCREMENT,
    cliente_id INT(11) NULL,
    funcionario_id INT(11) NULL,
    fornecedor_id INT(11) NULL,
    numero_telefone VARCHAR(15) NOT NULL,
    tipo VARCHAR(20) NOT NULL,
    principal CHAR(3) NOT NULL, -- SIM ou NAO
    PRIMARY KEY (id),
    CONSTRAINT fk_telefone_cliente FOREIGN KEY (cliente_id) REFERENCES cliente(id) ON DELETE CASCADE,
    CONSTRAINT fk_telefone_funcionario FOREIGN KEY (funcionario_id) REFERENCES funcionario(id) ON DELETE CASCADE,
    CONSTRAINT fk_telefone_fornecedor FOREIGN KEY (fornecedor_id) REFERENCES fornecedor(id) ON DELETE CASCADE,
    CONSTRAINT chk_telefone_cliente_funcionario_fornecedor_cpf CHECK ((cliente_id IS NOT NULL) + (funcionario_id IS NOT NULL) + (fornecedor_id IS NOT NULL) = 1)
);

CREATE TABLE produto (
    id INT(11) NOT NULL AUTO_INCREMENT,
    empresa_id INT(11) NOT NULL DEFAULT 1,
    fornecedor_id INT(11) NOT NULL,
    funcionario_id INT(11) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    unidade_medida VARCHAR(15) NOT NULL,
    preco_venda DECIMAL(10,2) NOT NULL,
    custo_unitario DECIMAL(10,2) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    data_cadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    situacao ENUM('ATIVO', 'INATIVO') NOT NULL DEFAULT 'ATIVO',
    PRIMARY KEY (id),
    CONSTRAINT fk_produto_empresa FOREIGN KEY (empresa_id) REFERENCES empresa(id),
    CONSTRAINT fk_produto_fornecedor FOREIGN KEY (fornecedor_id) REFERENCES fornecedor(id)
);

CREATE TABLE venda (
    id INT(11) NOT NULL AUTO_INCREMENT,
    empresa_id INT(11) NOT NULL DEFAULT 1,
    cliente_id INT(11) NOT NULL,
    funcionario_id INT(11) NOT NULL,
    data_venda DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    valor_total DECIMAL(10,2) NOT NULL,
    situacao ENUM('PENDENTE', 'FINALIZADA', 'CANCELADA') NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_venda_cliente FOREIGN KEY (cliente_id) REFERENCES cliente(id),
    CONSTRAINT fk_venda_empresa FOREIGN KEY (empresa_id) REFERENCES empresa(id),
    CONSTRAINT fk_venda_funcionario FOREIGN KEY (funcionario_id) REFERENCES funcionario(id)
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
    CONSTRAINT fk_item_venda_venda FOREIGN KEY (venda_id) REFERENCES venda(id),
    CONSTRAINT fk_item_venda_produto FOREIGN KEY (produto_id) REFERENCES produto(id)
);

CREATE TABLE estoque (
    id INT(11) NOT NULL AUTO_INCREMENT,
    empresa_id INT(11) NOT NULL DEFAULT 1,
    produto_id INT(11) NOT NULL,
    quantidade INT(5) NOT NULL DEFAULT 0,
    minimo INT(5) NOT NULL DEFAULT 0,
    atualizado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY uk_estoque_empresa_produto (empresa_id, produto_id),
    CONSTRAINT fk_estoque_empresa FOREIGN KEY (empresa_id) REFERENCES empresa(id),
    CONSTRAINT fk_estoque_produto FOREIGN KEY (produto_id) REFERENCES produto(id) ON DELETE CASCADE
);

CREATE TABLE nota_entrada (
    id INT(11) NOT NULL AUTO_INCREMENT,
    numero_nota VARCHAR(20) NOT NULL,
    empresa_id INT(11) NOT NULL DEFAULT 1,
    fornecedor_id INT(11) NOT NULL,
    funcionario_id INT(11) NOT NULL,
    data_emissao DATETIME NOT NULL,
    data_entrada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    observacao TEXT,
    data_criacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT fk_nota_entrada_empresa FOREIGN KEY (empresa_id) REFERENCES empresa(id),
    CONSTRAINT fk_nota_entrada_fornecedor FOREIGN KEY (fornecedor_id) REFERENCES fornecedor(id),
    CONSTRAINT fk_nota_entrada_funcionario FOREIGN KEY (funcionario_id) REFERENCES funcionario(id)
);

CREATE TABLE item_nota_entrada (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nota_entrada_id INT(11) NOT NULL,
    produto_id INT(11) NOT NULL,
    quantidade INT(5) NOT NULL DEFAULT 0,
    preco_unitario DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    desconto DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    total DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_item_nota_entrada_nota_entrada FOREIGN KEY (nota_entrada_id) REFERENCES nota_entrada(id),
    CONSTRAINT fk_item_nota_entrada_produto FOREIGN KEY (produto_id) REFERENCES produto(id)
);

CREATE TABLE funcionario_endereco(
    id INT(11) NOT NULL AUTO_INCREMENT,
    endereco_id INT(11) NOT NULL,
    funcionario_id INT(11) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_funcionario_endereco_endereco FOREIGN KEY (endereco_id) REFERENCES endereco(id) ON DELETE CASCADE,
    CONSTRAINT fk_funcionario_endereco_funcionario FOREIGN KEY (funcionario_id) REFERENCES funcionario(id) ON DELETE CASCADE
);

CREATE TABLE cliente_endereco(
    id INT(11) NOT NULL AUTO_INCREMENT,
    endereco_id INT(11) NOT NULL,
    cliente_id INT(11) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_cliente_endereco_endereco FOREIGN KEY (endereco_id) REFERENCES endereco(id) ON DELETE CASCADE,
    CONSTRAINT fk_cliente_endereco_cliente FOREIGN KEY (cliente_id) REFERENCES cliente(id) ON DELETE CASCADE                                                                                    
);

CREATE TABLE fornecedor_endereco(
    id INT(11) NOT NULL AUTO_INCREMENT,
    endereco_id INT(11) NOT NULL,
    fornecedor_id INT(11) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_fornecedor_endereco_endereco FOREIGN KEY (endereco_id) REFERENCES endereco(id) ON DELETE CASCADE,
    CONSTRAINT fk_fornecedor_endereco_fornecedor FOREIGN KEY (fornecedor_id) REFERENCES fornecedor(id) ON DELETE CASCADE
);