// Sample product data
const products = [
    { name: "Product T.Shirt", description: "A great product" },
    { name: "Product outofstock", description: "Another good product" },
    { name: "Product kurtaa", description: "A product with a long description" },
  ];
  
  // Function to filter products based on search query
  function filterProducts(query) {
    return products.filter(product => {
      return product.name.toLowerCase().includes(query.toLowerCase()) ||
             product.description.toLowerCase().includes(query.toLowerCase());
    });
  }
  
  // Event listener for the search input
  document.getElementById('searchInput').addEventListener('input', (event) => {
    const query = event.target.value;
    const results = filterProducts(query);
  
    // Update the UI with the filtered results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results
  
    results.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.textContent = product.name;
      resultsDiv.appendChild(productDiv);
    });
  });