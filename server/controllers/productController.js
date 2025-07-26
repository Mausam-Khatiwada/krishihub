export const addProduct = (req, res) => {
  const { title, price, category } = req.body;

  if (!title || !price || !category) {
    return res.status(400).json({ msg: 'Please provide all fields' });
  }

  res.status(201).json({
    msg: 'Product added successfully',
    product: { title, price, category }
  });
};
