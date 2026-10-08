-- =====================================================
-- EXERCÍCIOS MYSQL - INNER JOIN, LIKE, WHERE, AND, OR, IN
-- =====================================================
-- Banco de dados: E-commerce fictício
-- Execute este arquivo no seu MySQL Workbench ou cliente preferido

-- -----------------------------------------------------
-- 1. CRIAÇÃO DO BANCO E TABELAS
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS ecommerce_exercicios;
USE ecommerce_exercicios;

-- Tabela de categorias
CREATE TABLE categorias (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    ativo BOOLEAN DEFAULT TRUE
);

-- Tabela de fornecedores
CREATE TABLE fornecedores (
    id_fornecedor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    cnpj VARCHAR(18) UNIQUE,
    email VARCHAR(150),
    telefone VARCHAR(20),
    cidade VARCHAR(100),
    estado CHAR(2),
    ativo BOOLEAN DEFAULT TRUE
);

-- Tabela de clientes
CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    cpf VARCHAR(14) UNIQUE,
    telefone VARCHAR(20),
    data_nascimento DATE,
    cidade VARCHAR(100),
    estado CHAR(2),
    cep VARCHAR(10),
    ativo BOOLEAN DEFAULT TRUE,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de produtos
CREATE TABLE produtos (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    estoque INT DEFAULT 0,
    id_categoria INT,
    id_fornecedor INT,
    ativo BOOLEAN DEFAULT TRUE,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria),
    FOREIGN KEY (id_fornecedor) REFERENCES fornecedores(id_fornecedor)
);

-- Tabela de pedidos
CREATE TABLE pedidos (
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('pendente', 'confirmado', 'enviado', 'entregue', 'cancelado') DEFAULT 'pendente',
    valor_total DECIMAL(10,2) DEFAULT 0,
    observacoes TEXT,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

-- Tabela de itens do pedido
CREATE TABLE itens_pedido (
    id_item INT PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    preco_unitario DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) GENERATED ALWAYS AS (quantidade * preco_unitario) STORED,
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);

-- -----------------------------------------------------
-- 2. INSERÇÃO DE DADOS DE EXEMPLO
-- -----------------------------------------------------

-- Categorias
INSERT INTO categorias (nome, descricao) VALUES
('Eletrônicos', 'Produtos eletrônicos em geral'),
('Roupas', 'Vestuário e acessórios'),
('Casa e Jardim', 'Artigos para casa e jardim'),
('Esportes', 'Equipamentos e roupas esportivas'),
('Livros', 'Livros físicos e digitais'),
('Beleza', 'Cosméticos e produtos de beleza'),
('Brinquedos', 'Brinquedos e jogos'),
('Automotivo', 'Peças e acessórios automotivos');

-- Fornecedores
INSERT INTO fornecedores (nome, cnpj, email, telefone, cidade, estado) VALUES
('TechBrasil Distribuidora', '12.345.678/0001-90', 'contato@techbrasil.com', '(11) 3333-4444', 'São Paulo', 'SP'),
('Moda Brasileira Ltda', '23.456.789/0001-01', 'vendas@modabrasileira.com', '(11) 4444-5555', 'São Paulo', 'SP'),
('Casa & Conforto', '34.567.890/0001-12', 'comercial@casaeconforto.com', '(21) 2222-3333', 'Rio de Janeiro', 'RJ'),
('Esportes Radicais', '45.678.901/0001-23', 'pedidos@esportesradicais.com', '(31) 3333-4444', 'Belo Horizonte', 'MG'),
('Editora Saber', '56.789.012/0001-34', 'contato@editorasaber.com', '(41) 4444-5555', 'Curitiba', 'PR'),
('Beleza Natural', '67.890.123/0001-45', 'vendas@belezanatural.com', '(11) 5555-6666', 'São Paulo', 'SP'),
('Brinquedos Felizes', '78.901.234/0001-56', 'comercial@brinquedosfelizes.com', '(51) 3333-4444', 'Porto Alegre', 'RS'),
('AutoPeças Brasil', '89.012.345/0001-67', 'vendas@autopecasbrasil.com', '(11) 6666-7777', 'São Paulo', 'SP');

-- Clientes
INSERT INTO clientes (nome, email, cpf, telefone, data_nascimento, cidade, estado, cep) VALUES
('João Silva Santos', 'joao.silva@email.com', '123.456.789-00', '(11) 99999-1111', '1990-05-15', 'São Paulo', 'SP', '01000-000'),
('Maria Oliveira Costa', 'maria.oliveira@email.com', '234.567.890-11', '(11) 99999-2222', '1985-08-22', 'São Paulo', 'SP', '02000-000'),
('Pedro Henrique Lima', 'pedro.lima@email.com', '345.678.901-22', '(21) 98888-3333', '1992-11-30', 'Rio de Janeiro', 'RJ', '20000-000'),
('Ana Paula Ferreira', 'ana.ferreira@email.com', '456.789.012-33', '(31) 97777-4444', '1988-03-18', 'Belo Horizonte', 'MG', '30000-000'),
('Carlos Eduardo Rocha', 'carlos.rocha@email.com', '567.890.123-44', '(41) 96666-5555', '1995-07-25', 'Curitiba', 'PR', '80000-000'),
('Fernanda Alves Souza', 'fernanda.souza@email.com', '678.901.234-55', '(51) 95555-6666', '1991-12-10', 'Porto Alegre', 'RS', '90000-000'),
('Roberto Carlos Dias', 'roberto.dias@email.com', '789.012.345-66', '(11) 94444-7777', '1987-09-05', 'São Paulo', 'SP', '03000-000'),
('Juliana Mendes', 'juliana.mendes@email.com', '890.123.456-77', '(11) 93333-8888', '1993-01-20', 'São Paulo', 'SP', '04000-000'),
('Ricardo Santos', 'ricardo.santos@email.com', '901.234.567-88', '(21) 92222-9999', '1989-06-12', 'Rio de Janeiro', 'RJ', '21000-000'),
('Patricia Gomes', 'patricia.gomes@email.com', '012.345.678-99', '(31) 91111-0000', '1994-04-08', 'Belo Horizonte', 'MG', '31000-000');

-- Produtos
INSERT INTO produtos (nome, descricao, preco, estoque, id_categoria, id_fornecedor) VALUES
('Smartphone Samsung Galaxy S23', 'Smartphone 128GB 5G', 3999.90, 50, 1, 1),
('Notebook Dell Inspiron 15', 'Notebook i7 16GB RAM 512GB SSD', 4599.00, 30, 1, 1),
('Fone Bluetooth JBL', 'Fone sem fio com cancelamento de ruído', 599.90, 100, 1, 1),
('Smart TV LG 55"', 'Smart TV 4K UHD 55 polegadas', 2899.00, 20, 1, 1),
('Camiseta Básica Branca', '100% algodão, tamanho M', 49.90, 200, 2, 2),
('Calça Jeans Slim', 'Jeans azul escuro, tamanho 42', 129.90, 150, 2, 2),
('Vestido Floral Verão', 'Vestido leve estampado, tamanho P', 89.90, 80, 2, 2),
('Tênis Nike Air Max', 'Tênis esportivo masculino 42', 499.90, 60, 4, 4),
('Bola de Futebol Oficial', 'Bola FIFA Quality Pro', 149.90, 100, 4, 4),
('Raquete de Tênis Wilson', 'Raquete profissional adulto', 349.90, 40, 4, 4),
('Sofá 3 Lugares Retrátil', 'Sofá cinza escuro com chaise', 2499.00, 15, 3, 3),
('Mesa de Jantar 6 Lugares', 'Mesa de madeira maciça', 1899.00, 25, 3, 3),
('Livro "O Poder do Hábito"', 'Charles Duhigg - Capa dura', 59.90, 200, 5, 5),
('Livro "Atomic Habits"', 'James Clear - Original em inglês', 79.90, 150, 5, 5),
('Kit Skincare Completo', 'Limpeza, tônico, hidratante e protetor', 299.90, 80, 6, 6),
('Perfume Importado 100ml', 'Fragrância amadeirada unissex', 399.90, 50, 6, 6),
('Lego Classic 500 peças', 'Blocos de montar criativos', 199.90, 120, 7, 7),
('Boneca Baby Alive', 'Boneca que come e bebe', 249.90, 90, 7, 7),
('Jogo de Tabuleiro Catan', 'Jogo de estratégia para 3-4 jogadores', 229.90, 60, 7, 7),
('Filtro de Óleo Motor', 'Filtro compatível com diversos modelos', 45.90, 300, 8, 8),
('Pastilha de Freio Dianteira', 'Jogo de pastilhas cerâmicas', 189.90, 150, 8, 8),
('Bateria Automotiva 60Ah', 'Bateria selada livre de manutenção', 429.90, 40, 8, 8);

-- Pedidos
INSERT INTO pedidos (id_cliente, data_pedido, status, valor_total, observacoes) VALUES
(1, '2024-01-15 10:30:00', 'entregue', 4598.90, 'Entrega expressa'),
(2, '2024-01-20 14:15:00', 'entregue', 179.80, ''),
(3, '2024-02-05 09:00:00', 'enviado', 3499.00, 'Presente de aniversário'),
(4, '2024-02-10 16:45:00', 'confirmado', 649.80, ''),
(5, '2024-02-18 11:20:00', 'pendente', 4299.00, 'Aguardando pagamento'),
(6, '2024-03-01 13:30:00', 'entregue', 599.90, ''),
(7, '2024-03-10 10:00:00', 'cancelado', 0, 'Cliente desistiu'),
(8, '2024-03-15 15:20:00', 'entregue', 2748.90, ''),
(9, '2024-03-22 08:45:00', 'enviado', 899.80, ''),
(10, '2024-04-01 12:00:00', 'confirmado', 1399.80, '');

-- Itens dos pedidos
INSERT INTO itens_pedido (id_pedido, id_produto, quantidade, preco_unitario) VALUES
-- Pedido 1: João - Notebook + Fone
(1, 2, 1, 4599.00),
(1, 3, 1, 599.90),
-- Pedido 2: Maria - Camiseta + Calça
(2, 5, 2, 49.90),
(2, 6, 1, 129.90),
-- Pedido 3: Pedro - Smart TV
(3, 4, 1, 2899.00),
(3, 3, 1, 599.90),
-- Pedido 4: Ana - Tênis + Bola
(4, 8, 1, 499.90),
(4, 9, 1, 149.90),
-- Pedido 5: Carlos - Sofá
(5, 11, 1, 2499.00),
(5, 12, 1, 1899.00),
-- Pedido 6: Fernanda - Fone
(6, 3, 1, 599.90),
-- Pedido 8: Juliana - Smartphone + Livro
(8, 1, 1, 3999.90),
(8, 13, 1, 59.90),
-- Pedido 9: Ricardo - Perfume + Kit Skincare
(9, 16, 1, 399.90),
(9, 15, 1, 299.90),
-- Pedido 10: Patricia - Lego + Boneca
(10, 17, 2, 199.90),
(10, 18, 1, 249.90);

-- -----------------------------------------------------
-- 3. VERIFICAÇÃO DOS DADOS
-- -----------------------------------------------------
SELECT 'Categorias' as tabela, COUNT(*) as total FROM categorias
UNION ALL SELECT 'Fornecedores', COUNT(*) FROM fornecedores
UNION ALL SELECT 'Clientes', COUNT(*) FROM clientes
UNION ALL SELECT 'Produtos', COUNT(*) FROM produtos
UNION ALL SELECT 'Pedidos', COUNT(*) FROM pedidos
UNION ALL SELECT 'Itens_Pedido', COUNT(*) FROM itens_pedido;

-- =====================================================
-- 4. EXERCÍCIOS (20 QUESTÕES)
-- =====================================================

-- -----------------------------------------------------
-- EXERCÍCIO 1: INNER JOIN BÁSICO
-- Liste todos os pedidos com nome do cliente, data e status
-- -----------------------------------------------------
/*
SELECT p.id_pedido, c.nome as cliente, p.data_pedido, p.status, p.valor_total
FROM pedidos p
INNER JOIN clientes c ON p.id_cliente = c.id_cliente
ORDER BY p.data_pedido DESC;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 2: INNER JOIN COM 3 TABELAS
-- Liste produtos com nome da categoria e nome do fornecedor
-- -----------------------------------------------------
/*
SELECT pr.nome as produto, ca.nome as categoria, fo.nome as fornecedor, pr.preco
FROM produtos pr
INNER JOIN categorias ca ON pr.id_categoria = ca.id_categoria
INNER JOIN fornecedores fo ON pr.id_fornecedor = fo.id_fornecedor
ORDER BY ca.nome, pr.nome;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 3: INNER JOIN + WHERE
-- Liste todos os pedidos entregues com nome do cliente e valor total
-- -----------------------------------------------------
/*
SELECT p.id_pedido, c.nome as cliente, p.data_pedido, p.valor_total
FROM pedidos p
INNER JOIN clientes c ON p.id_cliente = c.id_cliente
WHERE p.status = 'entregue'
ORDER BY p.valor_total DESC;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 4: INNER JOIN + LIKE
-- Liste clientes cujo nome contém "Silva" ou "Santos"
-- -----------------------------------------------------
/*
SELECT c.nome, c.email, c.cidade, c.estado
FROM clientes c
WHERE c.nome LIKE '%Silva%' OR c.nome LIKE '%Santos%'
ORDER BY c.nome;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 5: INNER JOIN + LIKE EM MÚLTIPLOS CAMPOS
-- Liste produtos que tenham "Smart" no nome OU na descrição
-- -----------------------------------------------------
/*
SELECT pr.nome, pr.descricao, pr.preco, ca.nome as categoria
FROM produtos pr
INNER JOIN categorias ca ON pr.id_categoria = ca.id_categoria
WHERE pr.nome LIKE '%Smart%' OR pr.descricao LIKE '%Smart%'
ORDER BY pr.preco DESC;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 6: INNER JOIN + AND
-- Liste pedidos confirmados OU entregues de clientes de São Paulo (SP)
-- -----------------------------------------------------
/*
SELECT p.id_pedido, c.nome as cliente, c.estado, p.status, p.valor_total
FROM pedidos p
INNER JOIN clientes c ON p.id_cliente = c.id_cliente
WHERE (p.status = 'confirmado' OR p.status = 'entregue')
  AND c.estado = 'SP'
ORDER BY p.data_pedido DESC;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 7: INNER JOIN + IN
-- Liste produtos das categorias 'Eletrônicos' E 'Esportes'
-- -----------------------------------------------------
/*
SELECT pr.nome, pr.preco, ca.nome as categoria, pr.estoque
FROM produtos pr
INNER JOIN categorias ca ON pr.id_categoria = ca.id_categoria
WHERE ca.nome IN ('Eletrônicos', 'Esportes')
ORDER BY ca.nome, pr.preco DESC;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 8: INNER JOIN + IN + AND
-- Liste pedidos de clientes dos estados SP, RJ ou MG com valor > 1000
-- -----------------------------------------------------
/*
SELECT p.id_pedido, c.nome as cliente, c.estado, p.valor_total, p.status
FROM pedidos p
INNER JOIN clientes c ON p.id_cliente = c.id_cliente
WHERE c.estado IN ('SP', 'RJ', 'MG')
  AND p.valor_total > 1000
ORDER BY p.valor_total DESC;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 9: INNER JOIN + BETWEEN
-- Liste produtos com preço entre 100 e 500
-- -----------------------------------------------------
/*
SELECT pr.nome, pr.preco, ca.nome as categoria, fo.nome as fornecedor
FROM produtos pr
INNER JOIN categorias ca ON pr.id_categoria = ca.id_categoria
INNER JOIN fornecedores fo ON pr.id_fornecedor = fo.id_fornecedor
WHERE pr.preco BETWEEN 100 AND 500
ORDER BY pr.preco;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 10: INNER JOIN COM SUBQUERY
-- Liste clientes que fizeram pedidos com valor total maior que a média
-- -----------------------------------------------------
/*
SELECT DISTINCT c.nome, c.email, c.cidade
FROM clientes c
INNER JOIN pedidos p ON c.id_cliente = p.id_cliente
WHERE p.valor_total > (SELECT AVG(valor_total) FROM pedidos WHERE valor_total > 0)
ORDER BY c.nome;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 11: INNER JOIN + GROUP BY + HAVING
-- Liste categorias com mais de 2 produtos ativos
-- -----------------------------------------------------
/*
SELECT ca.nome as categoria, COUNT(pr.id_produto) as qtd_produtos, AVG(pr.preco) as preco_medio
FROM categorias ca
INNER JOIN produtos pr ON ca.id_categoria = pr.id_categoria
WHERE pr.ativo = TRUE
GROUP BY ca.id_categoria, ca.nome
HAVING COUNT(pr.id_produto) > 2
ORDER BY qtd_produtos DESC;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 12: INNER JOIN MÚLTIPLO + AGREGAÇÃO
-- Total gasto por cliente (apenas pedidos entregues)
-- -----------------------------------------------------
/*
SELECT c.nome, c.email, COUNT(p.id_pedido) as qtd_pedidos, SUM(p.valor_total) as total_gasto
FROM clientes c
INNER JOIN pedidos p ON c.id_cliente = p.id_cliente
WHERE p.status = 'entregue'
GROUP BY c.id_cliente, c.nome, c.email
ORDER BY total_gasto DESC;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 13: INNER JOIN + CASE WHEN
-- Classifique pedidos: 'Alto' (>2000), 'Médio' (500-2000), 'Baixo' (<500)
-- -----------------------------------------------------
/*
SELECT p.id_pedido, c.nome as cliente, p.valor_total,
       CASE 
           WHEN p.valor_total > 2000 THEN 'Alto'
           WHEN p.valor_total >= 500 THEN 'Médio'
           ELSE 'Baixo'
       END as classificacao
FROM pedidos p
INNER JOIN clientes c ON p.id_cliente = c.id_cliente
WHERE p.valor_total > 0
ORDER BY p.valor_total DESC;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 14: INNER JOIN + DATE FUNCTIONS
-- Pedidos feitos no primeiro trimestre de 2024 (jan-mar)
-- -----------------------------------------------------
/*
SELECT p.id_pedido, c.nome as cliente, p.data_pedido, p.valor_total, p.status
FROM pedidos p
INNER JOIN clientes c ON p.id_cliente = c.id_cliente
WHERE YEAR(p.data_pedido) = 2024 
  AND MONTH(p.data_pedido) BETWEEN 1 AND 3
ORDER BY p.data_pedido;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 15: INNER JOIN + LEFT JOIN (produtos sem estoque)
-- Liste todos os produtos e seus pedidos (incluindo produtos nunca vendidos)
-- -----------------------------------------------------
/*
SELECT pr.nome as produto, pr.estoque, ca.nome as categoria,
       COUNT(ip.id_item) as vezes_vendido,
       COALESCE(SUM(ip.quantidade), 0) as total_vendido
FROM produtos pr
INNER JOIN categorias ca ON pr.id_categoria = ca.id_categoria
LEFT JOIN itens_pedido ip ON pr.id_produto = ip.id_produto
GROUP BY pr.id_produto, pr.nome, pr.estoque, ca.nome
ORDER BY vezes_vendido DESC;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 16: INNER JOIN COM SUBQUERY CORRELACIONADA
-- Para cada cliente, mostre o pedido de maior valor
-- -----------------------------------------------------
/*
SELECT c.nome, c.email,
       (SELECT MAX(p2.valor_total) 
        FROM pedidos p2 
        WHERE p2.id_cliente = c.id_cliente) as maior_pedido
FROM clientes c
WHERE EXISTS (SELECT 1 FROM pedidos p WHERE p.id_cliente = c.id_cliente)
ORDER BY maior_pedido DESC;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 17: INNER JOIN + UNION
-- Liste todos os emails de clientes e fornecedores (sem duplicatas)
-- -----------------------------------------------------
/*
SELECT email, 'Cliente' as tipo, nome
FROM clientes
WHERE email IS NOT NULL
UNION
SELECT email, 'Fornecedor' as tipo, nome
FROM fornecedores
WHERE email IS NOT NULL
ORDER BY tipo, email;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 18: INNER JOIN COMPLEXO - Itens de pedidos com detalhes completos
-- -----------------------------------------------------
/*
SELECT p.id_pedido, c.nome as cliente, c.cidade, c.estado,
       pr.nome as produto, ca.nome as categoria,
       ip.quantidade, ip.preco_unitario, ip.subtotal,
       p.status, p.data_pedido
FROM pedidos p
INNER JOIN clientes c ON p.id_cliente = c.id_cliente
INNER JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
INNER JOIN produtos pr ON ip.id_produto = pr.id_produto
INNER JOIN categorias ca ON pr.id_categoria = ca.id_categoria
WHERE p.status IN ('entregue', 'enviado', 'confirmado')
ORDER BY p.data_pedido DESC, p.id_pedido;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 19: INNER JOIN + REGEX (RLIKE)
-- Clientes com email Gmail OU Outlook
-- -----------------------------------------------------
/*
SELECT c.nome, c.email, c.cidade, c.estado
FROM clientes c
WHERE c.email RLIKE '@(gmail|outlook|hotmail)\\.com$'
ORDER BY c.nome;
*/

-- -----------------------------------------------------
-- EXERCÍCIO 20: RELATÓRIO COMPLETO - Vendas por categoria e estado
-- -----------------------------------------------------
/*
SELECT ca.nome as categoria, c.estado, 
       COUNT(DISTINCT p.id_pedido) as qtd_pedidos,
       SUM(ip.quantidade) as total_itens,
       SUM(ip.subtotal) as faturamento
FROM pedidos p
INNER JOIN clientes c ON p.id_cliente = c.id_cliente
INNER JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
INNER JOIN produtos pr ON ip.id_produto = pr.id_produto
INNER JOIN categorias ca ON pr.id_categoria = ca.id_categoria
WHERE p.status IN ('entregue', 'enviado')
GROUP BY ca.nome, c.estado
ORDER BY faturamento DESC;
*/

-- =====================================================
-- 5. EXERCÍCIOS EXTRAS (DESAFIO)
-- =====================================================

-- EXTRA 1: Top 3 clientes que mais compraram (valor total)
/*
SELECT c.nome, c.email, SUM(p.valor_total) as total_compras
FROM clientes c
INNER JOIN pedidos p ON c.id_cliente = p.id_cliente
WHERE p.status = 'entregue'
GROUP BY c.id_cliente, c.nome, c.email
ORDER BY total_compras DESC
LIMIT 3;
*/

-- EXTRA 2: Produtos mais vendidos (quantidade)
/*
SELECT pr.nome, ca.nome as categoria, SUM(ip.quantidade) as total_vendido
FROM produtos pr
INNER JOIN categorias ca ON pr.id_categoria = ca.id_categoria
INNER JOIN itens_pedido ip ON pr.id_produto = ip.id_produto
INNER JOIN pedidos p ON ip.id_pedido = p.id_pedido
WHERE p.status IN ('entregue', 'enviado')
GROUP BY pr.id_produto, pr.nome, ca.nome
ORDER BY total_vendido DESC
LIMIT 5;
*/

-- EXTRA 3: Ticket médio por estado
/*
SELECT c.estado, AVG(p.valor_total) as ticket_medio, COUNT(p.id_pedido) as qtd_pedidos
FROM pedidos p
INNER JOIN clientes c ON p.id_cliente = c.id_cliente
WHERE p.status = 'entregue'
GROUP BY c.estado
ORDER BY ticket_medio DESC;
*/

-- EXTRA 4: Fornecedor com mais produtos ativos
/*
SELECT fo.nome, fo.cidade, fo.estado, COUNT(pr.id_produto) as qtd_produtos
FROM fornecedores fo
INNER JOIN produtos pr ON fo.id_fornecedor = pr.id_fornecedor
WHERE pr.ativo = TRUE AND fo.ativo = TRUE
GROUP BY fo.id_fornecedor, fo.nome, fo.cidade, fo.estado
ORDER BY qtd_produtos DESC;
*/

-- EXTRA 5: Clientes que nunca compraram
/*
SELECT c.nome, c.email, c.cidade, c.data_cadastro
FROM clientes c
LEFT JOIN pedidos p ON c.id_cliente = p.id_cliente
WHERE p.id_pedido IS NULL
ORDER BY c.data_cadastro;
*/

-- =====================================================
-- FIM DO ARQUIVO
-- =====================================================