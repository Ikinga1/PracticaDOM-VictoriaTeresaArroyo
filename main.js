// Lista de productos
const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
  },
  {
    name: 'Lenovo IdeaPad 3 15ADA6',
    price: 399,
    stars: 5,
    reviews: 320,
    seller: 'Amazon',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1084/10847191/1318-lenovo-ideapad-3-gen-6-15alc6-amd-ryzen-7-5700u-16gb-512gb-ssd-156.jpg'
  },
  {
    name: 'Acer Aspire 5 A515-56-347N',
    price: 529,
    stars: 4,
    reviews: 210,
    seller: 'eBay',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1081/10815693/1987-acer-aspire-5-15-a515-58gm-intel-core-i5-1335u-16gb-512gb-ssd-rtx-2050-156.jpg'
  },
  {
    name: 'Asus VivoBook 14',
    price: 450,
    stars: 4,
    reviews: 180,
    seller: 'AliExpress',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1085/10853126/1921-asus-vivobook-go-15-e1504fa-nj1354-amd-ryzen-5-7520u-16gb-512gb-ssd-156.jpg'
  },
  {
    name: 'MacBook Air M1',
    price: 999,
    stars: 5,
    reviews: 500,
    seller: 'Apple Store',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1086/10861589/1120-apple-macbook-air-apple-m2-8-nucleos-16gb-256gb-ssd-gpu-8-nucleos-136-gris-espacial.jpg'
  },
  {
    name: 'Dell XPS 15',
    price: 1299,
    stars: 5,
    reviews: 270,
    seller: 'Dell',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1082/10828805/1120-hp-victus-15-fa0059ns-intel-core-i5-12450h-16gb-512gb-ssd-rtx-3050-156.jpg'
  },
  {
    name: 'Samsung Galaxy Book Pro',
    price: 899,
    stars: 4,
    reviews: 150,
    seller: 'Samsung',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1083/10832873/1666-samsung-galaxy-book-4-intel-core-i5-120u-16gb-512gb-ssd-156-fr.jpg'
  },
  {
    name: 'Microsoft Surface Laptop 7',
    price: 1426,
    stars: 5,
    reviews: 340,
    seller: 'Microsoft',
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1084/10844184/1887-microsoft-surface-laptop-7-qualcomm-snapdragon-x-plus-x1p-64-100-16gb-512gb-ssd-138-tactil-platino.jpg'
  },
  {
    name: 'MSI Katana GF66',
    price: 999,
    stars: 4,
    reviews: 200,
    seller: 'MSI Store',
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1001/10011002/1133-msi-katana-gf66-12ue-091xes-intel-core-i7-12700h-16gb-512gb-ssd-rtx3050ti-156.jpg'
  },
  {
    name: 'Razer Blade 15',
    price: 1699,
    stars: 5,
    reviews: 310,
    seller: 'Razer',
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1037/10377614/1129-razer-blade-15-advanced-model-qhd-intel-core-i7-11800h-16-gb-1tb-ssd-rtx-3070-156.jpg'
  },
  {
    name: 'Lenovo LOQ',
    price: 749,
    stars: 4.7,
    reviews: 49,
    seller: 'Lenovo',
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1084/10847195/1564-lenovo-loq-15irh8-intel-core-i5-12450h-16gb-512gb-ssd-rtx4050-156.jpg'
  },
  {
    name: 'HP OMEN 17',
    price: 1299,
    stars: 4.5,
    reviews: 125,
    seller: 'HP',
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1082/10828811/1353-hp-omen-17-db0005ns-amd-ryzen-9-8945hs-32gb-1tb-ssd-rtx-4060-173.jpg'
  }
]

// Función para renderizar los productos en el DOM
function renderProducts() {
  const container = document.getElementById('products-container')
  container.innerHTML = ''
  products.forEach((product) => {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Vendedor: ${product.seller}</p>
      <p>⭐ ${product.stars} (${product.reviews} reviews)</p>
      <p class="price">€${product.price}</p>
      <button class="buy-button">Comprar</button>
    `
    container.appendChild(productCard)
  })
}

document.addEventListener('DOMContentLoaded', renderProducts)
