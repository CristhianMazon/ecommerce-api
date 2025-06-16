const Product = require('../models/Product');
const Category = require('../models/Category');

exports.createProduct = async (req, res) => {
    try {
        const { name, price, categoryId, stock } = req.body; // Adicionado 'stock'

        // Validação básica
        if (!name || !price || !categoryId || stock === undefined || stock < 0) {
            return res.status(400).json({ message: 'Nome, preço, categoria e estoque são obrigatórios. Estoque não pode ser negativo.' });
        }

        const category = await Category.findByPk(categoryId);
        if (!category) return res.status(400).json({ message: 'Categoria não encontrada.' });

        const product = await Product.create({ name, price, categoryId, stock }); // Passa 'stock'
        res.status(201).json(product);
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        res.status(500).json({ message: 'Erro ao criar produto', error: error.message });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll({ include: Category });
        res.json(products);
    } catch (error) {
        console.error('Erro ao listar produtos:', error);
        res.status(500).json({ message: 'Erro ao listar produtos', error: error.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id, { include: Category });

        if (!product) return res.status(404).json({ message: 'Produto não encontrado.' });

        res.json(product);
    } catch (error) {
        console.error('Erro ao buscar produto:', error);
        res.status(500).json({ message: 'Erro ao buscar produto', error: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, categoryId, stock } = req.body; // Adicionado 'stock'

        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ message: 'Produto não encontrado.' });

        if (categoryId) {
            const category = await Category.findByPk(categoryId);
            if (!category) return res.status(400).json({ message: 'Categoria inválida.' });
        }

        // Validação de estoque para atualização
        if (stock !== undefined && stock < 0) {
            return res.status(400).json({ message: 'Estoque não pode ser negativo.' });
        }

        await product.update({
            name: name || product.name,
            price: price || product.price,
            categoryId: categoryId || product.categoryId,
            stock: stock !== undefined ? stock : product.stock // Atualiza estoque se fornecido
        });
        res.json(product);
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        res.status(500).json({ message: 'Erro ao atualizar produto', error: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ message: 'Produto não encontrado.' });

        // TODO: Considerar o que acontece com produtos em pedidos existentes.
        // Se a integridade referencial estiver configurada para RESTRICT ou NO ACTION,
        // você pode precisar impedir a exclusão se o produto estiver em algum pedido.
        // Se for CASCADE, as entradas em OrderProduct seriam deletadas.
        // No seu caso, o relacionamento N:N via OrderProduct não impede a exclusão direta do produto.

        await product.destroy();
        res.status(204).send();
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        res.status(500).json({ message: 'Erro ao deletar produto', error: error.message });
    }
};