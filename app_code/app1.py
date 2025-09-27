import streamlit as st

# Initialize session state for cart
if 'cart' not in st.session_state:
    st.session_state['cart'] = {}

# Sample 30 products with real images from your JS code
products = [
    {"id":1, "name":"Smartphone", "category":"electronics", "price":22000, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758970226/phone_aldrex.jpg"},
    {"id":2, "name":"Laptop", "category":"electronics", "price":77000, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971096/laptop_epvlpj.png"},
    {"id":3, "name":"Wireless Earbuds", "category":"electronics", "price":3200, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971088/earbuds_u0y6rw.jpg"},
    {"id":4, "name":"Smartwatch", "category":"electronics", "price":8500, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971100/smartwatch_nfdet8.jpg"},
    {"id":5, "name":"Bluetooth Speaker", "category":"electronics", "price":4600, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758970819/speaker_fttviu.jpg"},
    {"id":6, "name":"T-shirt", "category":"clothing", "price":1500, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758970728/tshirt_vif8ns.jpg"},
    {"id":7, "name":"Jeans", "category":"clothing", "price":3800, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971094/jeans_xwnkcf.jpg"},
    {"id":8, "name":"Jacket", "category":"clothing", "price":6800, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971093/jacket_arftsz.jpg"},
    {"id":9, "name":"Sneakers", "category":"clothing", "price":4200, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758970818/sneakers_gn8idk.jpg"},
    {"id":10, "name":"Backpack", "category":"accessories", "price":3000, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971080/Backpack_hzkezg.jpg"},
    {"id":11, "name":"Sunglasses", "category":"accessories", "price":2200, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758970819/Sunglasses_bywz2i.jpg"},
    {"id":12, "name":"Watch", "category":"accessories", "price":7500, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758970549/watch_fz2pz6.jpg"},
    {"id":13, "name":"Wallet", "category":"accessories", "price":1250, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971711/wallet_pycbir.jpg"},
    {"id":14, "name":"Novel Book", "category":"books", "price":1100, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971099/Novels_e450sn.jpg"},
    {"id":15, "name":"Cookbook", "category":"books", "price":1650, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971086/Cookbook_ghpzub.jpg"},
    {"id":16, "name":"Business Book", "category":"books", "price":900, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971082/Businessbook_aetqhw.jpg"},
    {"id":17, "name":"Children's Book", "category":"books", "price":750, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971083/Children_sBook_fzbovy.jpg"},
    {"id":18, "name":"Table Lamp", "category":"home", "price":1800, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758970820/TableLamp_eiqsfx.jpg"},
    {"id":19, "name":"Wall Art", "category":"home", "price":2500, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758970626/WallArt_blybl3.jpg"},
    {"id":20, "name":"Throw Pillow", "category":"home", "price":700, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758970770/ThrowPillow_hjkkwk.jpg"},
    {"id":21, "name":"Coffee Maker", "category":"home", "price":3200, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971084/CoffeeMaker_utatbh.jpg"},
    {"id":22, "name":"Yoga Mat", "category":"accessories", "price":1400, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758970452/YogaMat_qenscs.jpg"},
    {"id":23, "name":"Bluetooth Headphones", "category":"electronics", "price":6700, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971081/BluetoothHeadphones_azdpkn.jpg"},
    {"id":24, "name":"Fitness Tracker", "category":"electronics", "price":4900, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971089/FitnessTracker_uanspm.jpg"},
    {"id":25, "name":"Desk Organizer", "category":"home", "price":1200, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971088/DeskOrganizer_rcyp5t.jpg"},
    {"id":26, "name":"Cotton Dress", "category":"clothing", "price":3300, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971089/CottonDress_nut3vo.jpg"},
    {"id":27, "name":"Kids' Sneakers", "category":"clothing", "price":1950, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971094/kidssneakers_v4onqd.jpg"},
    {"id":28, "name":"Backyard Grill", "category":"home", "price":10500, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971080/BackyardGrill_qk2b7w.jpg"},
    {"id":29, "name":"Gaming Mouse", "category":"electronics", "price":2800, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971090/GamingMouse_hslxsm.jpg"},
    {"id":30, "name":"Leather Boots", "category":"clothing", "price":5750, "image_url":"https://res.cloudinary.com/doafekcwo/image/upload/v1758971096/LeatherBoots_vnm7uq.jpg"}
]

# --- Sidebar Filters ---
st.sidebar.header("Filters")
categories = sorted(list(set([p['category'] for p in products])))
selected_category = st.sidebar.selectbox("Select Category", ['All'] + categories)

price_min, price_max = st.sidebar.slider("Price Range", 0, 120000, (0, 120000), step=500)

# --- Sorting ---
sort_option = st.sidebar.selectbox("Sort by", ['None', 'Price: Low to High', 'Price: High to Low'])

# --- Filter Products ---
filtered_products = products
if selected_category != 'All':
    filtered_products = [p for p in filtered_products if p['category'] == selected_category]
filtered_products = [p for p in filtered_products if price_min <= p['price'] <= price_max]

# --- Sort Products ---
if sort_option == 'Price: Low to High':
    filtered_products.sort(key=lambda x: x['price'])
elif sort_option == 'Price: High to Low':
    filtered_products.sort(key=lambda x: x['price'], reverse=True)

# --- Display Products ---
st.title("Product Store")

cols = st.columns(3)
for idx, product in enumerate(filtered_products):
    with cols[idx % 3]:
        st.image(product['image_url'], use_container_width=True)
        st.markdown(f"**{product['name']}**")
        st.markdown(f"Category: {product['category']}" )
        st.markdown(f"Price: ₹{product['price']}")
        if st.button("Buy Now", key=f"buy_{product['id']}"):
            cart = st.session_state['cart']
            if product['id'] in cart:
                cart[product['id']]['quantity'] += 1
            else:
                cart[product['id']] = {"name": product['name'], "price": product['price'], "quantity": 1}
            st.success(f"Added {product['name']} to cart!")

# --- Display Cart ---
st.sidebar.header("Your Cart")
if st.session_state['cart']:
    total_price = 0
    for pid, item in list(st.session_state['cart'].items()):
        st.sidebar.write(f"{item['name']} x {item['quantity']} - ₹{item['price']*item['quantity']}")
        if st.sidebar.button(f"Remove {item['name']}", key=f"remove_{pid}"):
            del st.session_state['cart'][pid]
            st.experimental_rerun()
        total_price += item['price']*item['quantity']
    if st.sidebar.button("Clear Cart"):
        st.session_state['cart'] = {}
        st.experimental_rerun()
    st.sidebar.markdown(f"**Total: ₹{total_price}**")
else:
    st.sidebar.write("Cart is empty.")

# --- Custom CSS ---
st.markdown("""
<style>
div.stButton > button:first-child {
    background-color: #4CAF50;
    color: white;
    height: 40px;
    width: 100%;
    border-radius: 10px;
    border: none;
    font-size: 16px;
}
div.stButton > button:hover {
    background-color: #45a049;
    color: white;
}
</style>
""", unsafe_allow_html=True)
