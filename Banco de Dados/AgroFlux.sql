CREATE TABLE empresa(
    id INT(11) NOT NULL AUTO_INCREMENT,
    cnpj CHAR(14) NOT NULL UNIQUE,
    data_fundacao DATE NOT NULL,
    nome_razao_social VARCHAR(30) NOT NULL,
    nome_fantasia VARCHAR(20),
    endereco VARCHAR(150) NOT NULL, 

    PRIMARY KEY(ID)
);

CREATE TABLE endereco(
    id INT(11) NOT NULL AUTO_INCREMENT,
    logradouro VARCHAR(150) NOT NULL,
    numero CHAR(1000) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    cep CHAR(9) NOT NULL,

    PRIMARY KEY(id)
)

CREATE TABLE telefone(
    id INT(11) NOT NULL AUTO_INCREMENT,
    numero VARCHAR(15) NOT NULL,
    tipo VARCHAR(20), -- celular, comercial, residencial
    cliente_id INT(11) NOT NULL,
    
    PRIMARY KEY(id),
    FOREIGN KEY(cliente_id) REFERENCES cliente(id)
)

CREATE TABLE cliente(
    id INT(11) NOT NULL AUTO_INCREMENT,
    empresa_id INT(11) NOT NULL,
    cnpj CHAR(14) NOT NULL UNIQUE,
    nome_razao_social VARCHAR(150) NOT NULL.
    nome_fantasia VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL,
    telefone CHAR(10) NOT NULL,
    endereco_id INT(11) NOT NULL,

    PRIMARY KEY(id),
    FOREIGN KEY(endereco_id) REFERENCES endereco(id)
)

CREATE TABLE funcionario(
    id INT(11) NOT NULL AUTO_INCREMENT,
    empresa_id INT(11) NOT NULL,
    nome VARCHAR(150) NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    cargo VARCHAR(15) NOT NULL,
    telefone CHAR(10) NOT NULL,
    email VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    data_contratacao DATE NOT NULL,
    salario_inicial DECIMAL(10,2) NOT NULL,
    salario_atual DECIMAL(10,2) NOT NULL,
    situacao CHAR(1) NOT NULL, -- A = ATIVO OU I = INATIVO

    PRIMARY KEY(id),
    FOREIGN KEY(empresa_id) REFERENCES empresa(id)
)

CREATE TABLE produto(
    id INT(11) NOT NULL AUTO_INCREMENT<
    descricao VARCHAR(100) NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,

)