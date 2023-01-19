export default {
  all() {
    return axios.get('/products');
  },
  get(id = null) {
    //return !id ? this.all() : axios.get(`/products/${id}`);
    return [
      {
        id: 1,
        name: 'Product 1',
        unitPrice: 10.99,
        currency: 'euro',
        description: 'Some description...',
      },
      {
        id: 2,
        name: 'Product 2',
        unitPrice: 5.99,
        currency: 'euro',
        description: 'Some description...',
      },
    ];
  },
};
