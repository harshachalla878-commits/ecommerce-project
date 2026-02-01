fetch("/products")
  .then(response => response.json())
  .then(data => {
    console.log("Products from backend:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });