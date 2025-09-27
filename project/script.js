const products = [
  {id:1, name:"Smartphone", category:"electronics", price:"₹22,000", description:"Latest smartphone with ultra-fast processor and vibrant display.", imageLocal:"images/phone.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758970226/phone_aldrex.jpg", rating:4.5},
  {id:2, name:"Laptop", category:"electronics", price:"₹77,000", description:"Powerful laptop for work and play with long battery life.", imageLocal:"images/laptop.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971096/laptop_epvlpj.png", rating:4.6},
  {id:3, name:"Wireless Earbuds", category:"electronics", price:"₹3,200", description:"Comfortable wireless earbuds with noise cancellation.", imageLocal:"images/earbuds.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971088/earbuds_u0y6rw.jpg", rating:4.3},
  {id:4, name:"Smartwatch", category:"electronics", price:"₹8,500", description:"Stylish smartwatch with health tracking features.", imageLocal:"images/smartwatch.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971100/smartwatch_nfdet8.jpg", rating:4.4},
  {id:5, name:"Bluetooth Speaker", category:"electronics", price:"₹4,600", description:"Portable speaker with high-quality sound.", imageLocal:"images/speaker.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758970819/speaker_fttviu.jpg", rating:4.1},
  {id:6, name:"T-shirt", category:"clothing", price:"₹1,500", description:"Comfortable cotton t-shirt in multiple colors.", imageLocal:"images/tshirt.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758970728/tshirt_vif8ns.jpg", rating:4.2},
  {id:7, name:"Jeans", category:"clothing", price:"₹3,800", description:"Stylish denim jeans with modern fit.", imageLocal:"images/jeans.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971094/jeans_xwnkcf.jpg", rating:4.0},
  {id:8, name:"Jacket", category:"clothing", price:"₹6,800", description:"Warm and cozy jacket for chilly weather.", imageLocal:"images/jacket.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971093/jacket_arftsz.jpg", rating:4.3},
  {id:9, name:"Sneakers", category:"clothing", price:"₹4,200", description:"Lightweight sneakers for everyday comfort.", imageLocal:"images/sneakers.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758970818/sneakers_gn8idk.jpg", rating:4.5},
  {id:10, name:"Backpack", category:"accessories", price:"₹3,000", description:"Durable backpack with multiple compartments.", imageLocal:"images/Backpack.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971080/Backpack_hzkezg.jpg", rating:4.5},
  {id:11, name:"Sunglasses", category:"accessories", price:"₹2,200", description:"UV protected sunglasses with trendy design.", imageLocal:"images/Sunglasses.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758970819/Sunglasses_bywz2i.jpg", rating:4.4},
  {id:12, name:"Watch", category:"accessories", price:"₹7,500", description:"Elegant wristwatch with leather strap.", imageLocal:"images/watch.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758970549/watch_fz2pz6.jpg", rating:4.6},
  {id:13, name:"Wallet", category:"accessories", price:"₹1,250", description:"Leather wallet with multiple card slots.", imageLocal:"images/wallet.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971711/wallet_pycbir.jpg", rating:4.5},
  {id:14, name:"Novel Book", category:"books", price:"₹1,100", description:"A thrilling story to keep you hooked.", imageLocal:"images/Novels.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971099/Novels_e450sn.jpg", rating:4.8},
  {id:15, name:"Cookbook", category:"books", price:"₹1,650", description:"Healthy and easy recipes for everyday.", imageLocal:"images/Cookbook.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971086/Cookbook_ghpzub.jpg", rating:4.7},
  {id:16, name:"Business Book", category:"books", price:"₹900", description:"Insights on entrepreneurship and growth.", imageLocal:"images/Businessbook.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971082/Businessbook_aetqhw.jpg", rating:4.3},
  {id:17, name:"Children's Book", category:"books", price:"₹750", description:"Fun stories and colorful illustrations.", imageLocal:"images/Children'sBook.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971083/Children_sBook_fzbovy.jpg", rating:4.6},
  {id:18, name:"Table Lamp", category:"home", price:"₹1,800", description:"Decorative lamp with adjustable brightness.", imageLocal:"images/TableLamp.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758970820/TableLamp_eiqsfx.jpg", rating:4.5},
  {id:19, name:"Wall Art", category:"home", price:"₹2,500", description:"Beautiful canvas art for home décor.", imageLocal:"images/WallArt.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758970626/WallArt_blybl3.jpg", rating:4.4},
  {id:20, name:"Throw Pillow", category:"home", price:"₹700", description:"Soft pillows to brighten your living space.", imageLocal:"images/ThrowPillow.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758970770/ThrowPillow_hjkkwk.jpg", rating:4.3},
  {id:21, name:"Coffee Maker", category:"home", price:"₹3,200", description:"Automatic coffee machine with timer.", imageLocal:"images/CoffeeMaker.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971084/CoffeeMaker_utatbh.jpg", rating:4.5},
  {id:22, name:"Yoga Mat", category:"accessories", price:"₹1,400", description:"Non-slip mat for fitness and relaxation.", imageLocal:"images/YogaMat.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758970452/YogaMat_qenscs.jpg", rating:4.6},
  {id:23, name:"Bluetooth Headphones", category:"electronics", price:"₹6,700", description:"Wireless headphones with noise cancellation.", imageLocal:"images/BluetoothHeadphones.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971081/BluetoothHeadphones_azdpkn.jpg", rating:4.7},
  {id:24, name:"Fitness Tracker", category:"electronics", price:"₹4,900", description:"Track your workouts and health stats.", imageLocal:"images/FitnessTracker.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971089/FitnessTracker_uanspm.jpg", rating:4.4},
  {id:25, name:"Desk Organizer", category:"home", price:"₹1,200", description:"Keep your desk neat with this organizer.", imageLocal:"images/DeskOrganizer.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971088/DeskOrganizer_rcyp5t.jpg", rating:4.3},
  {id:26, name:"Cotton Dress", category:"clothing", price:"₹3,300", description:"Comfortable and stylish summer dress.", imageLocal:"images/CottonDress.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971089/CottonDress_nut3vo.jpg", rating:4.6},
  {id:27, name:"Kids' Sneakers", category:"clothing", price:"₹1,950", description:"Durable and colorful sneakers for kids.", imageLocal:"images/kidssneakers.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971094/kidssneakers_v4onqd.jpg", rating:4.5},
  {id:28, name:"Backyard Grill", category:"home", price:"₹10,500", description:"Portable grill for your weekend BBQ.", imageLocal:"images/BackyardGrill.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971080/BackyardGrill_qk2b7w.jpg", rating:4.7},
  {id:29, name:"Gaming Mouse", category:"electronics", price:"₹2,800", description:"Ergonomic mouse with RGB lighting.", imageLocal:"images/GamingMouse.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971090/GamingMouse_hslxsm.jpg", rating:4.8},
  {id:30, name:"Leather Boots", category:"clothing", price:"₹5,750", description:"Stylish boots for all occasions.", imageLocal:"images/LeatherBoots.jpg", imageOnline:"https://res.cloudinary.com/doafekcwo/image/upload/v1758971096/LeatherBoots_vnm7uq.jpg", rating:4.5}
];

const gallery = document.getElementById('gallery');
const filterButtons = document.querySelectorAll('.filters button');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalName = document.getElementById('modal-name');
const modalPrice = document.getElementById('modal-price');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.getElementById('close-btn');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'default';

function getStarRating(rate) {
  const fullStar = '★';
  const emptyStar = '☆';
  const roundedRate = Math.round(rate);
  return fullStar.repeat(roundedRate) + emptyStar.repeat(5 - roundedRate);
}

function extractNumber(priceStr) {
  return Number(priceStr.replace(/[₹,]/g, ''));
}

function renderGallery() {
  let filteredProducts = products;

  if(currentFilter !== 'all'){
    filteredProducts = filteredProducts.filter(p => p.category === currentFilter);
  }

  if(currentSearch.trim() !== ''){
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(currentSearch.toLowerCase())
    );
  }

  if(currentSort === 'price-asc'){
    filteredProducts.sort((a, b) => extractNumber(a.price) - extractNumber(b.price));
  }
  else if(currentSort === 'price-desc'){
    filteredProducts.sort((a, b) => extractNumber(b.price) - extractNumber(a.price));
  }

  gallery.innerHTML = '';

  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    const img = document.createElement('img');
    img.className = 'product-image';
    img.alt = product.name;
    img.src = product.imageLocal;
    img.onerror = () => { img.src = product.imageOnline; };

    const details = document.createElement('div');
    details.className = 'product-details';
    details.innerHTML = `
      <div class="product-name">${product.name}</div>
      <div class="rating">${getStarRating(product.rating)}</div>
      <div class="product-price">${product.price}</div>
      <p class="product-desc">${product.description}</p>
      <button class="buy-btn">Buy Now</button>
    `;

    card.appendChild(img);
    card.appendChild(details);

    card.querySelector('.buy-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      alert(`"${product.name}" added to cart!`);
    });

    card.addEventListener('click', () => showModal(product.id));
    gallery.appendChild(card);
  });
}

function showModal(productId) {
  const product = products.find(p => p.id === productId);
  if(product){
    modalImage.src = product.imageLocal;
    modalImage.onerror = () => { modalImage.src = product.imageOnline; };
    modalName.textContent = product.name;
    modalPrice.textContent = product.price;
    modalDesc.textContent = product.description;
    modal.style.display = 'flex';
  }
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    currentFilter = button.getAttribute('data-filter');
    renderGallery();
  });
});

searchInput.addEventListener('input', (e) => {
  currentSearch = e.target.value;
  renderGallery();
});

sortSelect.addEventListener('change', (e) => {
  currentSort = e.target.value;
  renderGallery();
});

closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });

window.addEventListener('click', (event) => {
  if(event.target === modal){ modal.style.display = 'none'; }
});

renderGallery();
