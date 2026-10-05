```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#050505">
  <meta name="description" content="Khpalwak Mobiles — Premium phones, tablets, laptops, audio and accessories in Afghanistan.">
  <title>Khpalwak Mobiles | خپلواک موبایل</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>

<body>

<div id="loader">
  <div class="loader-logo">K</div>
  <div class="loader-name">KHPALWAK</div>
  <div class="loader-bar"><span></span></div>
</div>

<div class="noise"></div>
<div id="toast"></div>

<header class="header">
  <div class="topbar">
    <div class="topbar-inner">
      <span>🇦🇫 Afghanistan's premium technology destination</span>
      <span>Same-day Kabul delivery • Warranty • Authentic products</span>
    </div>
  </div>

  <nav class="nav container">
    <a class="brand" href="#home">
      <div class="brand-mark">
        <span>K</span>
        <i></i>
      </div>
      <div>
        <strong>KHPALWAK</strong>
        <small>خپلواک موبایل</small>
      </div>
    </a>

    <div class="nav-links">
      <a href="#home" data-i18n="navHome">Home</a>
      <a href="#products" data-i18n="navStore">Store</a>
      <a href="#calculator" data-i18n="navCalculator">Calculator</a>
      <a href="#community" data-i18n="navCommunity">Community</a>
      <a href="#sales" data-i18n="navSales">Sales</a>
      <a href="#contact" data-i18n="navContact">Contact</a>
    </div>

    <div class="nav-actions">
      <select id="language" class="lang">
        <option value="en">EN</option>
        <option value="fa">دری</option>
        <option value="ps">پښتو</option>
      </select>

      <button class="icon-btn" onclick="openSearch()">⌕</button>
      <button class="cart-btn" onclick="openCart()">
        🛒 <span id="cartCount">0</span>
      </button>
      <button class="menu-btn" onclick="toggleMobileMenu()">☰</button>
    </div>
  </nav>

  <div id="mobileMenu" class="mobile-menu">
    <a href="#home">Home</a>
    <a href="#products">Store</a>
    <a href="#calculator">Calculator</a>
    <a href="#community">Community</a>
    <a href="#sales">Sales</a>
    <a href="#contact">Contact</a>
  </div>
</header>

<main>

<section id="home" class="hero">
  <div class="hero-orb orb-one"></div>
  <div class="hero-orb orb-two"></div>

  <div class="container hero-grid">
    <div class="hero-content reveal">
      <div class="eyebrow">
        <span class="pulse"></span>
        <span data-i18n="heroEyebrow">Kabul • Afghanistan • Since 2000</span>
      </div>

      <h1>
        <span data-i18n="heroTitle1">THE FUTURE</span>
        <em data-i18n="heroTitle2">IS IN YOUR HAND.</em>
      </h1>

      <p data-i18n="heroText">
        Discover authentic Apple, Samsung, Google, Xiaomi, OnePlus,
        Sony, Huawei, OPPO and more — with premium service from Khpalwak.
      </p>

      <div class="hero-buttons">
        <a href="#products" class="btn btn-gold" data-i18n="shopNow">SHOP NOW</a>
        <a href="#community" class="btn btn-outline" data-i18n="talkToUs">TALK TO US</a>
      </div>

      <div class="hero-stats">
        <div><strong>10K+</strong><span data-i18n="happy">Happy Customers</span></div>
        <div><strong>500+</strong><span data-i18n="products">Products</span></div>
        <div><strong>50+</strong><span data-i18n="brands">Brands</span></div>
        <div><strong>4.9</strong><span>★★★★★</span></div>
      </div>
    </div>

    <div class="hero-device-wrap reveal">
      <div class="hero-ring ring-one"></div>
      <div class="hero-ring ring-two"></div>
      <div class="hero-badge">KHPALWAK<br><small>PREMIUM</small></div>

      <div class="hero-device">
        <div class="device-camera">
          <i></i><i></i><i></i>
        </div>
        <div class="device-logo"></div>
        <div class="device-shine"></div>
      </div>

      <div class="floating-card fc-one">
        <span>✦</span>
        <div><strong>100%</strong><small>Authentic</small></div>
      </div>

      <div class="floating-card fc-two">
        <span>⚡</span>
        <div><strong>Same Day</strong><small>Kabul Delivery</small></div>
      </div>
    </div>
  </div>
</section>

<section class="brands-section">
  <div class="container">
    <p class="section-kicker">OFFICIAL PRODUCT CATEGORIES</p>
    <div class="brands">
      <button onclick="filterBrand('Apple')">APPLE</button>
      <button onclick="filterBrand('Samsung')">SAMSUNG</button>
      <button onclick="filterBrand('Google')">GOOGLE</button>
      <button onclick="filterBrand('OnePlus')">ONEPLUS</button>
      <button onclick="filterBrand('Xiaomi')">XIAOMI</button>
      <button onclick="filterBrand('Huawei')">HUAWEI</button>
      <button onclick="filterBrand('Sony')">SONY</button>
      <button onclick="filterBrand('OPPO')">OPPO</button>
      <button onclick="filterBrand('Accessories')">JBL / ANKER</button>
    </div>
  </div>
</section>

<section id="products" class="products-section section">
  <div class="container">

    <div class="section-heading">
      <div>
        <p class="section-kicker" data-i18n="featured">FEATURED COLLECTION</p>
        <h2 data-i18n="latest">Latest technology.<br><em>Beautifully selected.</em></h2>
      </div>

      <div class="filters">
        <button class="filter active" data-filter="all">All</button>
        <button class="filter" data-filter="Apple">iPhone</button>
        <button class="filter" data-filter="Samsung">Samsung</button>
        <button class="filter" data-filter="Tablet">Tablet</button>
        <button class="filter" data-filter="Laptop">Laptop</button>
        <button class="filter" data-filter="Accessories">Accessories</button>
      </div>
    </div>

    <div id="productGrid" class="product-grid"></div>

  </div>
</section>

<section class="trust-section">
  <div class="container trust-grid">
    <div class="trust-card">
      <div class="trust-icon">✓</div>
      <div><strong>100% Genuine</strong><span>Authenticity guaranteed</span></div>
    </div>
    <div class="trust-card">
      <div class="trust-icon">♢</div>
      <div><strong>Full Warranty</strong><span>Manufacturer warranty</span></div>
    </div>
    <div class="trust-card">
      <div class="trust-icon">⚡</div>
      <div><strong>Fast Delivery</strong><span>Same day in Kabul</span></div>
    </div>
    <div class="trust-card">
      <div class="trust-icon">↻</div>
      <div><strong>Trade-In</strong><span>Trade your old device</span></div>
    </div>
  </div>
</section>

<section id="calculator" class="calculator-section section">
  <div class="container calc-grid">

    <div class="calc-copy">
      <p class="section-kicker">SMART BUYING</p>
      <h2 data-i18n="calcTitle">Know your budget.<br><em>Choose your device.</em></h2>
      <p data-i18n="calcText">
        Tell us how much you have. We'll show you what remains after
        buying your dream device.
      </p>

      <div class="currency-box">
        <button class="currency active" data-currency="USD">USD</button>
        <button class="currency" data-currency="AFN">AFN</button>
        <button class="currency" data-currency="GBP">GBP</button>
        <span>1 USD ≈ 65 AFN</span>
      </div>
    </div>

    <div class="calculator glass">
      <div class="calc-row">
        <label data-i18n="yourMoney">Your money</label>
        <div class="input-money">
          <span id="currencySymbol">$</span>
          <input id="budget" type="number" placeholder="1000" value="1000">
        </div>
      </div>

      <div class="calc-row">
        <label data-i18n="choosePhone">Choose a device</label>
        <select id="calcProduct"></select>
      </div>

      <div class="calc-result">
        <span data-i18n="remaining">Money remaining</span>
        <strong id="remaining">$0</strong>
        <small id="calcMessage">You can afford this device.</small>
      </div>

      <button class="btn btn-gold full" onclick="calculateBudget()" data-i18n="calculate">
        CALCULATE MY BUDGET
      </button>
    </div>

  </div>
</section>

<section class="compare-section section">
  <div class="container">
    <div class="section-heading">
      <div>
        <p class="section-kicker">DEVICE SCORE</p>
        <h2>Which one deserves <em>your money?</em></h2>
      </div>
      <span class="live-tag">● LIVE SCORE</span>
    </div>

    <div id="scoreGrid" class="score-grid"></div>
  </div>
</section>

<section id="community" class="community-section section">
  <div class="container">

    <div class="section-heading">
      <div>
        <p class="section-kicker">KHPALWAK COMMUNITY</p>
        <h2 data-i18n="communityTitle">Talk. Share. <em>Connect.</em></h2>
      </div>
      <div class="online">
        <span></span>
        <strong id="onlineCount">247</strong> online
      </div>
    </div>

    <div class="community-grid">

      <div class="chat-panel glass">
        <div class="chat-header">
          <div class="avatar">K</div>
          <div>
            <strong>Khpalwak Community</strong>
            <small>● Live community chat</small>
          </div>
          <button onclick="openRegistration()">＋ Join</button>
        </div>

        <div id="chatMessages" class="chat-messages">
          <div class="chat-message">
            <div class="avatar mini">A</div>
            <div>
              <strong>Ahmad</strong>
              <span>Has anyone tested the iPhone 17 Pro camera?</span>
              <small>2 min ago</small>
            </div>
          </div>

          <div class="chat-message">
            <div class="avatar mini gold">F</div>
            <div>
              <strong>Fatima</strong>
              <span>I got my S25 Ultra from Khpalwak. Amazing service! ⭐</span>
              <small>5 min ago</small>
            </div>
          </div>

          <div class="chat-message">
            <div class="avatar mini blue">M</div>
            <div>
              <strong>Mohammad</strong>
              <span>Do you deliver to Mazar?</span>
              <small>8 min ago</small>
            </div>
          </div>
        </div>

        <div class="chat-login-hint">
          <span>🔒</span>
          Register with your phone number to participate in chat.
        </div>

        <form id="chatForm" class="chat-input" onsubmit="sendMessage(event)">
          <button type="button" onclick="document.getElementById('postImage').click()">📷</button>
          <input id="postImage" type="file" accept="image/*" hidden>
          <input id="messageInput" placeholder="Register to write a message..." disabled>
          <button type="button" onclick="openRegistration()">➤</button>
        </form>
      </div>

      <div class="registration glass">
        <div class="register-icon">✦</div>
        <p class="section-kicker">JOIN KHPALWAK</p>
        <h3>Become part of<br>the community.</h3>
        <p>
          Register once and receive your unique 8-digit Khpalwak Community ID.
        </p>

        <button class="btn btn-gold full" onclick="openRegistration()">REGISTER NOW</button>

        <div class="register-benefits">
          <span>✓ 8-digit ID</span>
          <span>✓ Chat</span>
          <span>✓ Photo posts</span>
          <span>✓ Product comments</span>
        </div>
      </div>

    </div>

    <div class="social-strip">
      <span>FOLLOW KHPALWAK</span>
      <a href="https://www.facebook.com/Khpalwak.Mobiles786" target="_blank">f</a>
      <a href="https://www.instagram.com/khpalwak_mobiless/" target="_blank">◎</a>
      <a href="https://www.tiktok.com/@khpalwak_mobile786" target="_blank">♪</a>
      <a href="https://t.me/khpalwakMobiles" target="_blank">✈</a>
      <a href="https://wa.me/93788886988" target="_blank">◉</a>
    </div>
  </div>
</section>

<section id="sales" class="sales-section section">
  <div class="container">

    <div class="section-heading">
      <div>
        <p class="section-kicker">BUSINESS ANALYTICS</p>
        <h2>Sales <em>dashboard.</em></h2>
      </div>
      <span class="live-tag">● LIVE DATABASE VIEW</span>
    </div>

    <div class="sales-stats">
      <div class="sales-stat">
        <span>Total sales</span>
        <strong id="totalSales">$0</strong>
        <small>Last 30 days</small>
      </div>
      <div class="sales-stat">
        <span>Products sold</span>
        <strong id="productsSold">0</strong>
        <small>All categories</small>
      </div>
      <div class="sales-stat">
        <span>Orders</span>
        <strong id="ordersCount">0</strong>
        <small>Processed orders</small>
      </div>
      <div class="sales-stat">
        <span>Average order</span>
        <strong id="averageOrder">$0</strong>
        <small>Per order</small>
      </div>
    </div>

    <div class="sales-table-wrap glass">
      <div class="table-head">
        <h3>Recent transactions</h3>
        <select id="salesFilter">
          <option>All sales</option>
          <option>iPhone</option>
          <option>Samsung</option>
          <option>Accessories</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Time</th>
            <th>Price USD</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody id="salesTable"></tbody>
      </table>
    </div>

  </div>
</section>

<section class="delivery-section section">
  <div class="container delivery-grid">

    <div class="delivery-art">
      <div class="delivery-phone">📦</div>
      <div class="delivery-light"></div>
    </div>

    <div>
      <p class="section-kicker">KHPALWAK DELIVERY</p>
      <h2>From our store<br><em>to their door.</em></h2>
      <p>
        Buying a phone for your family in Kabul while you're in London?
        No problem. Select the device, enter the recipient's information,
        choose delivery and complete your payment.
      </p>

      <div class="delivery-features">
        <div>🇦🇫 <strong>Afghanistan</strong><span>Same-day Kabul delivery</span></div>
        <div>🌍 <strong>International buyer</strong><span>Buy for family in Afghanistan</span></div>
        <div>💳 <strong>Flexible payment</strong><span>Cash, transfer and supported online payments</span></div>
      </div>

      <button class="btn btn-gold" onclick="openCheckout()">SEND TO THEIR DOOR →</button>
    </div>

  </div>
</section>

<section id="contact" class="contact-section section">
  <div class="container">

    <div class="contact-header">
      <p class="section-kicker">VISIT KHPALWAK</p>
      <h2>Come see us <em>in Kabul.</em></h2>
      <p>四راهی انصاری • Kabul, Afghanistan</p>
    </div>

    <div class="contact-grid">

      <div class="contact-card glass">
        <div class="contact-icon">⌖</div>
        <span>MAIN BRANCH</span>
        <h3>Ansari Square</h3>
        <p>چهار راهی انصاری، کابل، افغانستان</p>
        <a href="https://www.google.com/maps/search/?api=1&query=Khpalwak+Mobiles+Ansari+Square+Kabul" target="_blank" class="btn btn-outline full">OPEN MAP</a>
      </div>

      <div class="contact-card glass">
        <div class="contact-icon">☎</div>
        <span>CALL / WHATSAPP</span>
        <h3>+93 78 888 6988</h3>
        <p>+93 70 088 6988</p>
        <a href="tel:+93788886988" class="btn btn-gold full">CALL NOW</a>
      </div>

      <div class="contact-card glass">
        <div class="contact-icon">✉</div>
        <span>EMAIL</span>
        <h3>info@khpalwakmobiles.com</h3>
        <p>Business & product inquiries</p>
        <a href="mailto:info@khpalwakmobiles.com" class="btn btn-outline full">SEND EMAIL</a>
      </div>

    </div>

    <div class="map-container">
      <iframe
        src="https://www.google.com/maps?q=Khpalwak%20Mobiles%20Ansari%20Square%20Kabul&output=embed"
        loading="lazy"
        title="Khpalwak Mobiles Kabul location">
      </iframe>
      <div class="map-overlay">
        <div class="map-pin">K</div>
        <div>
          <strong>Khpalwak Mobiles</strong>
          <span>چهار راهی انصاری، کابل</span>
        </div>
      </div>
    </div>

  </div>
</section>

<section class="newsletter">
  <div class="container newsletter-inner">
    <div>
      <p class="section-kicker">STAY CONNECTED</p>
      <h2>Never miss the next <em>big drop.</em></h2>
    </div>
    <form onsubmit="subscribe(event)">
      <input type="email" required placeholder="Your email address">
      <button class="btn btn-gold">SUBSCRIBE</button>
    </form>
  </div>
</section>

</main>

<footer>
  <div class="container footer-grid">

    <div class="footer-brand">
      <div class="brand">
        <div class="brand-mark"><span>K</span><i></i></div>
        <div><strong>KHPALWAK</strong><small>خپلواک موبایل</small></div>
      </div>
      <p>
        Afghanistan's technology destination.
        Authentic devices, expert advice and premium service.
      </p>
      <div class="footer-socials">
        <a href="https://www.facebook.com/Khpalwak.Mobiles786" target="_blank">f</a>
        <a href="https://www.instagram.com/khpalwak_mobiless/" target="_blank">◎</a>
        <a href="https://www.tiktok.com/@khpalwak_mobile786" target="_blank">♪</a>
        <a href="https://t.me/khpalwakMobiles" target="_blank">✈</a>
      </div>
    </div>

    <div>
      <h4>SHOP</h4>
      <a href="#products">Smartphones</a>
      <a href="#products">Tablets</a>
      <a href="#products">Laptops</a>
      <a href="#products">Audio</a>
      <a href="#products">Accessories</a>
    </div>

    <div>
      <h4>SUPPORT</h4>
      <a href="#community">Community</a>
      <a href="#calculator">Budget Calculator</a>
      <a href="#contact">Contact</a>
      <a href="#contact">Delivery</a>
      <a href="#sales">Sales</a>
    </div>

    <div>
      <h4>CONTACT</h4>
      <a href="tel:+93788886988">+93 78 888 6988</a>
      <a href="tel:+93700886988">+93 70 088 6988</a>
      <a href="mailto:info@khpalwakmobiles.com">info@khpalwakmobiles.com</a>
      <span>چهار راهی انصاری، کابل</span>
      <span>8:00 AM — 7:00 PM</span>
    </div>

  </div>

  <div class="footer-bottom container">
    <span>© 2026 Khpalwak Mobiles. All rights reserved.</span>
    <span>Built for Afghanistan 🇦🇫</span>
  </div>
</footer>

<!-- SEARCH MODAL -->
<div id="searchModal" class="modal">
  <div class="modal-box search-box">
    <button class="modal-close" onclick="closeModal('searchModal')">×</button>
    <p class="section-kicker">SEARCH</p>
    <h2>Find your device.</h2>
    <input id="searchInput" class="big-input" placeholder="iPhone 17 Pro, Galaxy, iPad...">
    <div id="searchResults"></div>
  </div>
</div>

<!-- REGISTRATION -->
<div id="registrationModal" class="modal">
  <div class="modal-box">
    <button class="modal-close" onclick="closeModal('registrationModal')">×</button>
    <p class="section-kicker">COMMUNITY REGISTRATION</p>
    <h2>Create your <em>Khpalwak ID.</em></h2>

    <form id="registerForm" onsubmit="registerUser(event)">
      <input id="regFirstName" required class="big-input" placeholder="First name">
      <input id="regLastName" required class="big-input" placeholder="Last name">
      <input id="regPhone" required class="big-input" type="tel" placeholder="+93 7XX XXX XXX">
      <input id="regAddress" required class="big-input" placeholder="Address / City">
      <label class="upload-photo">
        📷 Add profile photo
        <input id="regPhoto" type="file" accept="image/*" hidden>
      </label>

      <button class="btn btn-gold full">CREATE MY 8-DIGIT ID</button>
    </form>

    <div id="registrationSuccess" class="registration-success hidden">
      <div class="success-icon">✓</div>
      <h3>Registration complete!</h3>
      <p>Your Khpalwak Community ID:</p>
      <strong id="generatedID"></strong>
      <button class="btn btn-outline full" onclick="closeModal('registrationModal')">CONTINUE</button>
    </div>
  </div>
</div>

<!-- CART -->
<div id="cartModal" class="modal">
  <div class="modal-box cart-modal">
    <button class="modal-close" onclick="closeModal('cartModal')">×</button>
    <p class="section-kicker">YOUR CART</p>
    <h2>Your <em>selection.</em></h2>
    <div id="cartItems"></div>
    <div class="cart-total">
      <span>Total</span>
      <strong id="cartTotal">$0</strong>
    </div>
    <button class="btn btn-gold full" onclick="openCheckout()">PROCEED TO PURCHASE</button>
  </div>
</div>

<!-- CHECKOUT -->
<div id="checkoutModal" class="modal">
  <div class="modal-box checkout-box">
    <button class="modal-close" onclick="closeModal('checkoutModal')">×</button>
    <p class="section-kicker">DELIVERY & PURCHASE</p>
    <h2>Send it <em>to their door.</em></h2>

    <form onsubmit="placeOrder(event)">
      <div class="two-inputs">
        <input required class="big-input" id="customerName" placeholder="Buyer full name">
        <input required class="big-input" id="customerPhone" placeholder="Buyer phone">
      </div>

      <input required class="big-input" id="deliveryRecipient" placeholder="Recipient full name">
      <input required class="big-input" id="deliveryPhone" placeholder="Recipient phone">
      <input required class="big-input" id="deliveryAddress" placeholder="Delivery address">
      <input class="big-input" id="deliveryCity" placeholder="City / Province">

      <select class="big-input" id="paymentMethod" required>
        <option value="">Select payment method</option>
        <option>YouPay / Online payment</option>
        <option>Bank transfer</option>
        <option>Cash on delivery — Kabul</option>
        <option>Contact Khpalwak for international payment</option>
      </select>

      <label class="terms-check">
        <input type="checkbox" required>
        I confirm that the information is correct.
      </label>

      <button class="btn btn-gold full">SEND ORDER REQUEST →</button>
    </form>
  </div>
</div>

<script src="app.js"></script>
</body>
</html>
```

```
/* style.css */

:root {
  --black: #050505;
  --black2: #0b0b0c;
  --panel: #111112;
  --panel2: #171719;
  --gold: #d7ad58;
  --gold2: #f5d98d;
  --gold3: #8e6728;
  --white: #f7f5ef;
  --muted: #929292;
  --line: rgba(255,255,255,.09);
  --green: #35e69a;
  --red: #ff6262;
  --blue: #4ea7ff;
  --radius: 22px;
  --shadow: 0 25px 80px rgba(0,0,0,.45);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background:
    radial-gradient(circle at 80% 10%, rgba(215,173,88,.08), transparent 25%),
    var(--black);
  color: var(--white);
  font-family: Inter, sans-serif;
  overflow-x: hidden;
}

body.rtl {
  font-family: "Noto Naskh Arabic", Inter, sans-serif;
}

button,
input,
select {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  border: 0;
  cursor: pointer;
}

.container {
  width: min(1240px, calc(100% - 40px));
  margin: auto;
}

.noise {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 1000;
  opacity: .025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E");
}

#loader {
  position: fixed;
  inset: 0;
  background: #030303;
  z-index: 9999;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 14px;
  transition: .8s;
}

#loader.loaded {
  opacity: 0;
  visibility: hidden;
}

.loader-logo {
  width: 80px;
  height: 80px;
  border: 1px solid var(--gold);
  transform: rotate(45deg);
  display: grid;
  place-items: center;
  color: var(--gold2);
  font-size: 42px;
  font-weight: 900;
  box-shadow: 0 0 60px rgba(215,173,88,.2);
}

.loader-logo::first-letter {
  transform: rotate(-45deg);
}

.loader-name {
  letter-spacing: .35em;
  color: var(--gold);
  font-weight: 800;
}

.loader-bar {
  width: 160px;
  height: 2px;
  background: #222;
}

.loader-bar span {
  display: block;
  height: 100%;
  width: 0;
  background: var(--gold);
  animation: loading 1.7s ease forwards;
}

@keyframes loading {
  to { width: 100%; }
}

.topbar {
  background: #000;
  border-bottom: 1px solid var(--line);
  color: #aaa;
  font-size: 11px;
  letter-spacing: .04em;
}

.topbar-inner {
  min-height: 34px;
  width: min(1240px, calc(100% - 40px));
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header {
  position: sticky;
  top: 0;
  z-index: 900;
  background: rgba(5,5,5,.86);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--line);
}

.nav {
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 45px;
  height: 45px;
  border: 1px solid var(--gold);
  background: linear-gradient(145deg,#222,#050505);
  box-shadow:
    inset 3px 3px 8px rgba(255,255,255,.08),
    inset -5px -5px 10px rgba(0,0,0,.8),
    0 5px 25px rgba(215,173,88,.13);
  transform: perspective(300px) rotateY(-12deg);
  display: grid;
  place-items: center;
  position: relative;
}

.brand-mark span {
  color: var(--gold2);
  font-size: 25px;
  font-weight: 900;
}

.brand-mark i {
  position: absolute;
  width: 17px;
  height: 1px;
  background: var(--gold);
  bottom: 7px;
  right: 7px;
}

.brand strong {
  display: block;
  font-size: 15px;
  letter-spacing: .16em;
}

.brand small {
  display: block;
  color: var(--gold);
  font-size: 10px;
  margin-top: 3px;
}

.nav-links {
  display: flex;
  gap: 27px;
  color: #aaa;
  font-size: 13px;
}

.nav-links a {
  transition: .25s;
}

.nav-links a:hover {
  color: var(--gold2);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.lang,
.icon-btn,
.cart-btn,
.menu-btn {
  background: #101011;
  color: white;
  border: 1px solid var(--line);
  border-radius: 10px;
  min-height: 39px;
}

.lang {
  padding: 0 9px;
  color: var(--gold2);
}

.icon-btn,
.menu-btn {
  width: 40px;
}

.cart-btn {
  padding: 0 13px;
}

.cart-btn span {
  color: var(--gold2);
  margin-left: 4px;
}

.menu-btn {
  display: none;
}

.mobile-menu {
  display: none;
  padding: 20px;
  background: #080808;
  border-top: 1px solid var(--line);
}

.mobile-menu a {
  display: block;
  padding: 13px 0;
  border-bottom: 1px solid var(--line);
}

.hero {
  min-height: 760px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background:
    radial-gradient(circle at 70% 50%, rgba(215,173,88,.14), transparent 27%),
    radial-gradient(circle at 50% 100%, rgba(255,255,255,.035), transparent 35%);
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px),
    linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: linear-gradient(to bottom, black, transparent);
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(1px);
  pointer-events: none;
}

.orb-one {
  width: 500px;
  height: 500px;
  right: -150px;
  top: 70px;
  background: radial-gradient(circle, rgba(215,173,88,.12), transparent 68%);
}

.orb-two {
  width: 700px;
  height: 700px;
  left: -350px;
  bottom: -450px;
  background: radial-gradient(circle, rgba(255,255,255,.05), transparent 65%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
  position: relative;
  z-index: 2;
}

.eyebrow,
.section-kicker {
  color: var(--gold);
  letter-spacing: .18em;
  font-size: 11px;
  font-weight: 800;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 24px;
}

.pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 15px var(--green);
}

.hero h1 {
  font-size: clamp(55px, 7vw, 100px);
  line-height: .86;
  letter-spacing: -.07em;
  max-width: 800px;
}

.hero h1 span,
.hero h1 em {
  display: block;
}

.hero h1 em,
.section-heading em,
.calc-copy em,
.delivery-grid em,
.contact-header em,
.newsletter em,
.modal-box em {
  color: var(--gold2);
  font-style: normal;
}

.hero-content > p {
  max-width: 620px;
  color: #aaa;
  line-height: 1.8;
  font-size: 15px;
  margin: 30px 0;
}

.hero-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  min-height: 49px;
  padding: 0 23px;
  border-radius: 10px;
  font-size: 11px;
  letter-spacing: .12em;
  font-weight: 900;
  transition: .25s;
}

.btn-gold {
  color: #090909;
  background: linear-gradient(135deg, #f6d990, #a8782f);
  box-shadow: 0 10px 35px rgba(215,173,88,.16);
}

.btn-gold:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 45px rgba(215,173,88,.27);
}

.btn-outline {
  color: var(--gold2);
  border: 1px solid rgba(215,173,88,.45);
  background: rgba(215,173,88,.03);
}

.btn-outline:hover {
  background: rgba(215,173,88,.1);
}

.full {
  width: 100%;
}

.hero-stats {
  display: flex;
  gap: 35px;
  margin-top: 55px;
}

.hero-stats div {
  display: grid;
  gap: 5px;
}

.hero-stats strong {
  font-size: 21px;
}

.hero-stats span {
  color: #777;
  font-size: 10px;
}

.hero-device-wrap {
  min-height: 580px;
  position: relative;
  display: grid;
  place-items: center;
}

.hero-ring {
  position: absolute;
  border: 1px solid rgba(215,173,88,.15);
  border-radius: 50%;
  animation: spin 20s linear infinite;
}

.ring-one {
  width: 530px;
  height: 530px;
  border-left-color: var(--gold);
}

.ring-two {
  width: 400px;
  height: 400px;
  border-right-color: rgba(255,255,255,.3);
  animation-duration: 13s;
  animation-direction: reverse;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.hero-device {
  width: 255px;
  height: 510px;
  border-radius: 43px;
  transform: rotate(9deg) perspective(1000px) rotateY(-16deg);
  background:
    linear-gradient(135deg,#777,#191919 15%,#050505 60%,#333);
  border: 5px solid #555;
  box-shadow:
    -30px 50px 80px rgba(0,0,0,.7),
    20px -10px 80px rgba(215,173,88,.1),
    inset 0 0 30px rgba(255,255,255,.06);
  position: relative;
  overflow: hidden;
}

.hero-device::after {
  content: "";
  position: absolute;
  inset: 7px;
  border-radius: 36px;
  background:
    radial-gradient(circle at 70% 20%, rgba(255,255,255,.2), transparent 10%),
    linear-gradient(145deg,#191919,#050505);
}

.device-camera {
  position: absolute;
  top: 22px;
  left: 20px;
  width: 82px;
  height: 115px;
  border-radius: 28px;
  background: #111;
  z-index: 3;
  padding: 11px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.device-camera i {
  display: block;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%,#555,#050505 50%);
  border: 3px solid #282828;
}

.device-logo {
  position: absolute;
  z-index: 3;
  top: 48%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 47px;
  color: #aaa;
}

.device-shine {
  position: absolute;
  z-index: 4;
  width: 130px;
  height: 700px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent);
  transform: rotate(20deg);
  left: -170px;
  animation: shine 4s infinite;
}

@keyframes shine {
  0%,45% { left: -180px; }
  70%,100% { left: 300px; }
}

.hero-badge {
  position: absolute;
  right: 30px;
  top: 70px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid rgba(215,173,88,.4);
  color: var(--gold2);
  display: grid;
  place-items: center;
  text-align: center;
  font-size: 10px;
  letter-spacing: .1em;
  background: rgba(0,0,0,.5);
  backdrop-filter: blur(10px);
}

.hero-badge small {
  color: #777;
  font-size: 7px;
}

.floating-card {
  position: absolute;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 13px;
  border: 1px solid var(--line);
  background: rgba(15,15,15,.85);
  backdrop-filter: blur(20px);
  border-radius: 14px;
  box-shadow: var(--shadow);
  animation: float 4s ease-in-out infinite;
}

.floating-card span {
  color: var(--gold2);
  font-size: 22px;
}

.floating-card strong,
.floating-card small {
  display: block;
}

.floating-card strong {
  font-size: 12px;
}

.floating-card small {
  color: #777;
  font-size: 8px;
  margin-top: 3px;
}

.fc-one { left: 0; top: 160px; }
.fc-two { right: 0; bottom: 140px; animation-delay: 1s; }

@keyframes float {
  50% { transform: translateY(-12px); }
}

.brands-section {
  padding: 30px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: #070707;
}

.brands {
  margin-top: 20px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.brands button {
  padding: 12px 18px;
  background: transparent;
  border: 1px solid var(--line);
  color: #777;
  border-radius: 8px;
  font-size: 11px;
  letter-spacing: .08em;
  transition: .25s;
}

.brands button:hover {
  color: var(--gold2);
  border-color: rgba(215,173,88,.5);
}

.section {
  padding: 120px 0;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 30px;
  margin-bottom: 50px;
}

.section-heading h2,
.calc-copy h2,
.delivery-grid h2,
.contact-header h2,
.newsletter h2 {
  font-size: clamp(38px,5vw,65px);
  line-height: .98;
  letter-spacing: -.055em;
  margin-top: 12px;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: flex-end;
}

.filter {
  background: transparent;
  color: #777;
  border: 1px solid var(--line);
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 10px;
}

.filter.active,
.filter:hover {
  color: #050505;
  background: var(--gold);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 15px;
}

.product-card {
  min-width: 0;
  border: 1px solid var(--line);
  background:
    linear-gradient(145deg, rgba(255,255,255,.045), transparent 45%),
    #0d0d0e;
  border-radius: var(--radius);
  overflow: hidden;
  position: relative;
  transition: .35s;
}

.product-card:hover {
  transform: translateY(-9px);
  border-color: rgba(215,173,88,.45);
  box-shadow: 0 30px 70px rgba(0,0,0,.45);
}

.product-image {
  height: 290px;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 50%, rgba(215,173,88,.13), transparent 45%),
    #111;
}

.product-image::before {
  content: "";
  position: absolute;
  width: 220px;
  height: 220px;
  border: 1px solid rgba(215,173,88,.1);
  border-radius: 50%;
}

.product-image img {
  width: 82%;
  height: 82%;
  object-fit: contain;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 30px 25px rgba(0,0,0,.65));
  transition: .4s;
}

.product-card:hover .product-image img {
  transform: scale(1.08) rotate(-2deg);
}

.product-tag {
  position: absolute;
  left: 14px;
  top: 14px;
  z-index: 4;
  background: var(--gold);
  color: #050505;
  font-size: 8px;
  font-weight: 900;
  padding: 6px 8px;
  border-radius: 5px;
}

.product-wish {
  position: absolute;
  right: 12px;
  top: 12px;
  z-index: 5;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(0,0,0,.5);
  color: white;
}

.product-info {
  padding: 20px;
}

.product-brand {
  color: var(--gold);
  font-size: 9px;
  letter-spacing: .15em;
}

.product-name {
  font-size: 19px;
  margin: 7px 0;
}

.product-spec {
  color: #707070;
  font-size: 10px;
  line-height: 1.6;
  min-height: 32px;
}

.product-bottom {
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.product-price strong {
  display: block;
  font-size: 21px;
}

.product-price span {
  display: block;
  color: #777;
  font-size: 9px;
  margin-top: 4px;
}

.product-buy {
  width: 39px;
  height: 39px;
  background: var(--gold);
  border-radius: 9px;
  font-size: 19px;
}

.rating {
  color: var(--gold2);
  font-size: 10px;
  margin-top: 9px;
}

.trust-section {
  padding: 35px 0;
  background: #090909;
  border-block: 1px solid var(--line);
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 20px;
}

.trust-card {
  display: flex;
  align-items: center;
  gap: 14px;
}

.trust-icon {
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(215,173,88,.3);
  border-radius: 10px;
  color: var(--gold2);
}

.trust-card strong,
.trust-card span {
  display: block;
}

.trust-card strong {
  font-size: 12px;
}

.trust-card span {
  font-size: 9px;
  color: #666;
  margin-top: 5px;
}

.calculator-section {
  background:
    radial-gradient(circle at 80% 50%, rgba(215,173,88,.09), transparent 30%),
    #080808;
}

.calc-grid {
  display: grid;
  grid-template-columns: 1fr .85fr;
  gap: 80px;
  align-items: center;
}

.calc-copy > p:last-child {
  color: #777;
  max-width: 550px;
  line-height: 1.8;
  margin-top: 25px;
}

.currency-box {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.currency {
  background: #111;
  color: #777;
  border: 1px solid var(--line);
  padding: 9px 15px;
  border-radius: 7px;
  font-size: 10px;
}

.currency.active {
  color: #050505;
  background: var(--gold);
}

.currency-box > span {
  color: #555;
  font-size: 9px;
  margin-left: 10px;
}

.glass {
  background: rgba(18,18,19,.72);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  backdrop-filter: blur(22px);
  border-radius: var(--radius);
}

.calculator {
  padding: 35px;
}

.calc-row {
  margin-bottom: 25px;
}

.calc-row label {
  display: block;
  color: #777;
  font-size: 10px;
  letter-spacing: .08em;
  text-transform: uppercase;
  margin-bottom: 9px;
}

.input-money {
  display: flex;
  align-items: center;
  background: #080808;
  border: 1px solid var(--line);
  border-radius: 10px;
  padding-left: 15px;
}

.input-money span {
  color: var(--gold2);
  font-size: 19px;
}

.input-money input,
.calc-row select {
  width: 100%;
  min-height: 55px;
  background: transparent;
  border: 0;
  color: white;
  padding: 0 14px;
  outline: 0;
}

.calc-row select {
  background: #080808;
  border: 1px solid var(--line);
  border-radius: 10px;
}

.calc-result {
  padding: 25px;
  border: 1px solid rgba(215,173,88,.18);
  border-radius: 14px;
  background: rgba(215,173,88,.035);
  margin-bottom: 20px;
}

.calc-result span,
.calc-result small {
  display: block;
  color: #777;
}

.calc-result strong {
  display: block;
  color: var(--gold2);
  font-size: 39px;
  margin: 7px 0;
}

.calc-result small {
  color: var(--green);
}

.score-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 16px;
}

.score-card {
  padding: 25px;
  border: 1px solid var(--line);
  background: #0c0c0d;
  border-radius: 17px;
}

.score-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.score-product {
  display: flex;
  align-items: center;
  gap: 12px;
}

.score-product img {
  width: 55px;
  height: 65px;
  object-fit: contain;
}

.score-product strong,
.score-product span {
  display: block;
}

.score-product span {
  color: #777;
  font-size: 9px;
  margin-top: 4px;
}

.score-number {
  width: 55px;
  height: 55px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #050505;
  background: conic-gradient(var(--gold) var(--score), #242424 0);
  font-weight: 900;
  position: relative;
}

.score-number::before {
  content: "";
  position: absolute;
  inset: 4px;
  background: #0c0c0d;
  border-radius: 50%;
}

.score-number span {
  position: relative;
  color: white;
}

.score-bars {
  margin-top: 20px;
}

.score-bar {
  display: grid;
  grid-template-columns: 80px 1fr 30px;
  gap: 8px;
  align-items: center;
  margin: 9px 0;
  font-size: 9px;
  color: #777;
}

.bar {
  height: 4px;
  background: #242424;
  border-radius: 10px;
  overflow: hidden;
}

.bar i {
  display: block;
  height: 100%;
  background: linear-gradient(90deg,var(--gold3),var(--gold2));
}

.live-tag {
  color: var(--green);
  border: 1px solid rgba(53,230,154,.2);
  padding: 8px 10px;
  border-radius: 7px;
  font-size: 9px;
}

.community-section {
  background:
    radial-gradient(circle at 20% 30%, rgba(215,173,88,.07), transparent 30%),
    #070707;
}

.online {
  font-size: 10px;
  color: #777;
}

.online span {
  width: 7px;
  height: 7px;
  display: inline-block;
  background: var(--green);
  border-radius: 50%;
  box-shadow: 0 0 12px var(--green);
  margin-right: 5px;
}

.community-grid {
  display: grid;
  grid-template-columns: 1.45fr .75fr;
  gap: 18px;
}

.chat-panel {
  overflow: hidden;
}

.chat-header {
  padding: 18px;
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  gap: 11px;
}

.chat-header > div:nth-child(2) {
  flex: 1;
}

.chat-header strong,
.chat-header small {
  display: block;
}

.chat-header strong {
  font-size: 12px;
}

.chat-header small {
  color: var(--green);
  font-size: 9px;
  margin-top: 4px;
}

.chat-header button {
  background: rgba(215,173,88,.1);
  color: var(--gold2);
  padding: 9px 12px;
  border-radius: 8px;
  font-size: 10px;
}

.avatar {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  color: #050505;
  font-weight: 900;
  background: linear-gradient(135deg,#f3d88e,#876021);
}

.avatar.mini {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  font-size: 11px;
}

.avatar.gold {
  background: linear-gradient(135deg,#fff,#b6b6b6);
}

.avatar.blue {
  background: linear-gradient(135deg,#68b7ff,#2860a0);
}

.chat-messages {
  height: 330px;
  padding: 20px;
  overflow: auto;
}

.chat-message {
  display: flex;
  gap: 10px;
  margin-bottom: 22px;
}

.chat-message strong,
.chat-message span,
.chat-message small {
  display: block;
}

.chat-message strong {
  font-size: 10px;
}

.chat-message span {
  color: #aaa;
  font-size: 12px;
  line-height: 1.6;
  margin: 4px 0;
}

.chat-message small {
  color: #555;
  font-size: 8px;
}

.chat-login-hint {
  padding: 10px 18px;
  background: rgba(215,173,88,.035);
  border-block: 1px solid var(--line);
  color: #666;
  font-size: 9px;
}

.chat-input {
  display: flex;
  padding: 14px;
  gap: 7px;
}

.chat-input button {
  width: 40px;
  border-radius: 9px;
  background: #181819;
  color: #999;
}

.chat-input input {
  flex: 1;
  min-width: 0;
  background: #090909;
  color: white;
  border: 1px solid var(--line);
  border-radius: 9px;
  padding: 0 13px;
  outline: none;
}

.registration {
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.register-icon {
  width: 60px;
  height: 60px;
  border: 1px solid rgba(215,173,88,.4);
  border-radius: 18px;
  display: grid;
  place-items: center;
  color: var(--gold2);
  font-size: 25px;
  margin-bottom: 25px;
}

.registration h3 {
  font-size: 30px;
  line-height: 1;
  margin: 10px 0 15px;
}

.registration > p:not(.section-kicker) {
  color: #777;
  line-height: 1.7;
  font-size: 12px;
  margin-bottom: 25px;
}

.register-benefits {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 20px;
}

.register-benefits span {
  color: #777;
  font-size: 9px;
}

.social-strip {
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
}

.social-strip > span {
  color: #555;
  font-size: 9px;
  margin-right: 12px;
}

.social-strip a,
.footer-socials a {
  width: 37px;
  height: 37px;
  border: 1px solid var(--line);
  border-radius: 9px;
  display: grid;
  place-items: center;
  color: #888;
  transition: .2s;
}

.social-strip a:hover,
.footer-socials a:hover {
  color: var(--gold2);
  border-color: var(--gold);
}

.sales-stats {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 12px;
  margin-bottom: 18px;
}

.sales-stat {
  padding: 24px;
  border: 1px solid var(--line);
  background: #0c0c0d;
  border-radius: 14px;
}

.sales-stat span,
.sales-stat small {
  display: block;
  color: #666;
  font-size: 9px;
}

.sales-stat strong {
  display: block;
  color: var(--gold2);
  font-size: 30px;
  margin: 8px 0;
}

.sales-table-wrap {
  overflow: hidden;
}

.table-head {
  padding: 20px;
  border-bottom: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
}

.table-head h3 {
  font-size: 13px;
}

.table-head select {
  background: #080808;
  border: 1px solid var(--line);
  color: #888;
  padding: 8px;
  border-radius: 6px;
  font-size: 9px;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 10px;
}

th,
td {
  text-align: left;
  padding: 17px 20px;
  border-bottom: 1px solid var(--line);
}

th {
  color: #555;
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: .1em;
}

td {
  color: #999;
}

.status {
  color: var(--green);
}

.delivery-section {
  background:
    radial-gradient(circle at 70% 50%, rgba(215,173,88,.08), transparent 30%);
}

.delivery-grid {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  align-items: center;
  gap: 100px;
}

.delivery-grid > div:last-child > p:not(.section-kicker) {
  color: #777;
  line-height: 1.8;
  max-width: 580px;
  margin: 25px 0;
}

.delivery-art {
  min-height: 440px;
  display: grid;
  place-items: center;
  position: relative;
}

.delivery-phone {
  width: 250px;
  height: 310px;
  border-radius: 25px;
  border: 1px solid rgba(215,173,88,.4);
  background: linear-gradient(145deg,#222,#070707);
  display: grid;
  place-items: center;
  font-size: 80px;
  transform: rotate(-8deg);
  box-shadow: -30px 40px 90px #000;
  z-index: 2;
}

.delivery-light {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle,rgba(215,173,88,.2),transparent 65%);
  filter: blur(20px);
}

.delivery-features {
  display: grid;
  gap: 12px;
  margin: 25px 0;
}

.delivery-features div {
  display: grid;
  grid-template-columns: 30px 130px 1fr;
  align-items: center;
  gap: 10px;
  padding: 13px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: rgba(255,255,255,.015);
}

.delivery-features strong {
  font-size: 10px;
}

.delivery-features span {
  color: #666;
  font-size: 9px;
}

.contact-section {
  background: #080808;
}

.contact-header {
  text-align: center;
  margin-bottom: 50px;
}

.contact-header p:last-child {
  color: #777;
  margin-top: 15px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 14px;
}

.contact-card {
  padding: 30px;
}

.contact-icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  color: var(--gold2);
  border: 1px solid rgba(215,173,88,.3);
  border-radius: 12px;
  margin-bottom: 25px;
}

.contact-card > span {
  color: #555;
  font-size: 8px;
  letter-spacing: .15em;
}

.contact-card h3 {
  margin: 9px 0;
  font-size: 17px;
}

.contact-card p {
  color: #777;
  font-size: 10px;
  min-height: 30px;
  margin-bottom: 18px;
}

.map-container {
  height: 430px;
  margin-top: 18px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  position: relative;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  border: 0;
  filter: grayscale(.9) contrast(1.1) brightness(.65);
}

.map-overlay {
  position: absolute;
  left: 25px;
  bottom: 25px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 17px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(5,5,5,.85);
  backdrop-filter: blur(20px);
}

.map-pin {
  width: 37px;
  height: 37px;
  display: grid;
  place-items: center;
  color: #050505;
  background: var(--gold);
  border-radius: 9px;
  font-weight: 900;
}

.map-overlay strong,
.map-overlay span {
  display: block;
}

.map-overlay strong {
  font-size: 11px;
}

.map-overlay span {
  color: #777;
  font-size: 8px;
  margin-top: 3px;
}

.newsletter {
  padding: 70px 0;
  border-top: 1px solid var(--line);
  background:
    radial-gradient(circle at 20% 50%,rgba(215,173,88,.08),transparent 30%),
    #0b0b0b;
}

.newsletter-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
}

.newsletter h2 {
  font-size: 42px;
}

.newsletter form {
  display: flex;
  width: min(480px,100%);
  gap: 8px;
}

.newsletter input {
  flex: 1;
  min-width: 0;
  background: #050505;
  border: 1px solid var(--line);
  color: white;
  padding: 0 15px;
  border-radius: 9px;
  outline: none;
}

footer {
  padding: 80px 0 25px;
  background: #030303;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr .8fr .8fr 1fr;
  gap: 50px;
}

.footer-brand p {
  color: #666;
  line-height: 1.8;
  font-size: 10px;
  max-width: 280px;
  margin: 20px 0;
}

.footer-socials {
  display: flex;
  gap: 7px;
}

.footer-grid h4 {
  color: #555;
  letter-spacing: .15em;
  font-size: 9px;
  margin-bottom: 18px;
}

.footer-grid > div:not(.footer-brand) a,
.footer-grid > div:not(.footer-brand) span {
  display: block;
  color: #777;
  font-size: 10px;
  margin: 12px 0;
}

.footer-grid a:hover {
  color: var(--gold2);
}

.footer-bottom {
  margin-top: 60px;
  padding-top: 20px;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  color: #444;
  font-size: 9px;
}

.modal {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0,0,0,.82);
  backdrop-filter: blur(15px);
  display: none;
  place-items: center;
  padding: 20px;
}

.modal.open {
  display: grid;
  animation: fadeIn .2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-box {
  width: min(560px,100%);
  max-height: 90vh;
  overflow: auto;
  padding: 35px;
  border: 1px solid rgba(215,173,88,.2);
  background: #101011;
  border-radius: 22px;
  box-shadow: 0 40px 120px #000;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 17px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  color: #aaa;
  background: #1a1a1b;
  font-size: 20px;
}

.modal-box h2 {
  font-size: 39px;
  line-height: 1;
  margin: 10px 0 25px;
}

.big-input {
  width: 100%;
  height: 53px;
  padding: 0 15px;
  margin-bottom: 10px;
  background: #070707;
  border: 1px solid var(--line);
  border-radius: 9px;
  color: white;
  outline: none;
}

.big-input:focus {
  border-color: rgba(215,173,88,.55);
}

.search-box {
  width: min(750px,100%);
}

#searchResults {
  display: grid;
  gap: 8px;
  margin-top: 12px;
}

.search-result {
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-result img {
  width: 45px;
  height: 50px;
  object-fit: contain;
}

.search-result small {
  color: #666;
  display: block;
}

.upload-photo {
  display: block;
  border: 1px dashed rgba(215,173,88,.4);
  padding: 17px;
  border-radius: 9px;
  text-align: center;
  color: var(--gold2);
  font-size: 10px;
  margin-bottom: 10px;
}

.hidden {
  display: none !important;
}

.registration-success {
  text-align: center;
}

.success-icon {
  width: 70px;
  height: 70px;
  display: grid;
  place-items: center;
  margin: auto;
  border-radius: 50%;
  background: rgba(53,230,154,.1);
  color: var(--green);
  font-size: 35px;
}

.registration-success h3 {
  margin: 20px 0 8px;
}

.registration-success p {
  color: #777;
}

.registration-success > strong {
  display: block;
  color: var(--gold2);
  font-size: 35px;
  letter-spacing: .15em;
  margin: 10px 0 25px;
}

.cart-modal {
  width: min(650px,100%);
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
}

.cart-item img {
  width: 60px;
  height: 65px;
  object-fit: contain;
}

.cart-item > div:nth-child(2) {
  flex: 1;
}

.cart-item strong,
.cart-item small {
  display: block;
}

.cart-item small {
  color: #666;
  margin-top: 4px;
}

.cart-remove {
  color: var(--red);
  background: transparent;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
  font-size: 16px;
}

.cart-total strong {
  color: var(--gold2);
  font-size: 26px;
}

.two-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.terms-check {
  display: flex;
  gap: 8px;
  align-items: center;
  color: #777;
  font-size: 10px;
  margin: 15px 0;
}

#toast {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 5000;
  padding: 14px 18px;
  background: #151516;
  border: 1px solid rgba(215,173,88,.35);
  border-radius: 10px;
  color: white;
  font-size: 11px;
  transform: translateY(130px);
  transition: .3s;
  box-shadow: var(--shadow);
}

#toast.show {
  transform: translateY(0);
}

.reveal {
  animation: reveal .8s ease both;
}

@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media(max-width:1050px) {
  .nav-links { display:none; }
  .menu-btn { display:block; }
  .mobile-menu.open { display:block; }

  .hero-grid,
  .calc-grid,
  .delivery-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding: 80px 0;
  }

  .hero-device-wrap {
    min-height: 550px;
  }

  .product-grid {
    grid-template-columns: repeat(2,1fr);
  }

  .trust-grid {
    grid-template-columns: repeat(2,1fr);
  }

  .community-grid {
    grid-template-columns: 1fr;
  }

  .score-grid {
    grid-template-columns: 1fr;
  }

  .sales-stats {
    grid-template-columns: repeat(2,1fr);
  }

  .delivery-grid {
    gap: 30px;
  }

  .delivery-art {
    min-height: 350px;
  }

  .footer-grid {
    grid-template-columns: repeat(2,1fr);
  }
}

@media(max-width:650px) {
  .container,
  .topbar-inner {
    width: min(100% - 24px,1240px);
  }

  .topbar-inner span:last-child {
    display:none;
  }

  .nav {
    height: 68px;
  }

  .brand strong {
    font-size: 12px;
  }

  .brand-mark {
    width: 38px;
    height: 38px;
  }

  .lang {
    display:none;
  }

  .hero {
    min-height: auto;
    padding: 80px 0 50px;
  }

  .hero h1 {
    font-size: 52px;
  }

  .hero-stats {
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 35px;
  }

  .hero-device-wrap {
    min-height: 440px;
    transform: scale(.82);
    margin: -20px 0;
  }

  .ring-one {
    width: 430px;
    height: 430px;
  }

  .ring-two {
    width: 330px;
    height: 330px;
  }

  .hero-device {
    width: 210px;
    height: 420px;
  }

  .fc-one {
    left: -5px;
  }

  .fc-two {
    right: -5px;
  }

  .section {
    padding: 75px 0;
  }

  .section-heading {
    display:block;
  }

  .filters {
    justify-content:flex-start;
    margin-top: 20px;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }

  .product-image {
    height: 330px;
  }

  .trust-grid,
  .contact-grid,
  .sales-stats {
    grid-template-columns: 1fr;
  }

  .calculator {
    padding: 22px;
  }

  .community-grid {
    grid-template-columns: 1fr;
  }

  .registration {
    padding: 25px;
  }

  .sales-table-wrap {
    overflow-x:auto;
  }

  table {
    min-width: 700px;
  }

  .newsletter-inner {
    display:block;
  }

  .newsletter form {
    margin-top:25px;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 35px 20px;
  }

  .footer-brand {
    grid-column: 1/-1;
  }

  .footer-bottom {
    display:block;
    line-height:2;
  }

  .map-container {
    height: 330px;
  }

  .two-inputs {
    grid-template-columns: 1fr;
    gap:0;
  }

  .modal-box {
    padding: 25px 18px;
  }
}
```

```
/* app.js */

/*
  KHPALWAK MOBILES
  Front-end application layer.

  Production database:
  Replace the DEMO_DATABASE object below with Firebase/Supabase credentials
  and connect registerUser(), sendMessage(), placeOrder() and sales data
  to your production backend.

  Current version stores registrations, cart, chat and orders locally so
  the three-file website works immediately without a server.
*/

const PRODUCTS = [
  {
    id: 1,
    brand: "Apple",
    name: "iPhone 17 Pro",
    category: "Apple",
    price: 1462,
    afn: 95000,
    image: "https://images.unsplash.com/photo-1592286927505-2fd5f1d99c1d?auto=format&fit=crop&w=900&q=90",
    spec: "A19 Pro • 256GB • Pro Camera",
    score: 98,
    tag: "NEW"
  },
  {
    id: 2,
    brand: "Apple",
    name: "iPhone 17 Pro Max",
    category: "Apple",
    price: 1609,
    afn: 104600,
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=900&q=90",
    spec: "A19 Pro • 256GB • Pro Max",
    score: 99,
    tag: "HOT"
  },
  {
    id: 3,
    brand: "Samsung",
    name: "Galaxy S25 Ultra",
    category: "Samsung",
    price: 1354,
    afn: 88000,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=90",
    spec: "200MP • 5,000mAh • S Pen",
    score: 97,
    tag: "BEST"
  },
  {
    id: 4,
    brand: "Apple",
    name: "iPhone Air",
    category: "Apple",
    price: 1000,
    afn: 65000,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=90",
    spec: "120Hz • A19 • 128GB",
    score: 94,
    tag: "NEW"
  },
  {
    id: 5,
    brand: "Apple",
    name: "iPad Air",
    category: "Tablet",
    price: 699,
    afn: 45400,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=90",
    spec: "Liquid Display • M-series • Wi-Fi",
    score: 93,
    tag: "TABLET"
  },
  {
    id: 6,
    brand: "Apple",
    name: "MacBook Air",
    category: "Laptop",
    price: 999,
    afn: 64900,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=90",
    spec: "Apple Silicon • 13-inch • 256GB",
    score: 96,
    tag: "LAPTOP"
  },
  {
    id: 7,
    brand: "Samsung",
    name: "Galaxy Tab",
    category: "Tablet",
    price: 599,
    afn: 38900,
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=900&q=90",
    spec: "AMOLED • S Pen • 5G",
    score: 91,
    tag: "TABLET"
  },
  {
    id: 8,
    brand: "Accessories",
    name: "AirPods Pro",
    category: "Accessories",
    price: 249,
    afn: 16200,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=90",
    spec: "ANC • USB-C • Spatial Audio",
    score: 95,
    tag: "AUDIO"
  }
];

const DEMO_SALES = [
  {
    product: "iPhone 17 Pro",
    customer: "A. Rahimi",
    date: "2026-10-05",
    time: "16:42",
    price: 1462,
    category: "iPhone"
  },
  {
    product: "Galaxy S25 Ultra",
    customer: "S. Ahmadi",
    date: "2026-10-05",
    time: "14:18",
    price: 1354,
    category: "Samsung"
  },
  {
    product: "AirPods Pro",
    customer: "F. Noori",
    date: "2026-10-04",
    time: "19:06",
    price: 249,
    category: "Accessories"
  },
  {
    product: "iPhone 17 Pro Max",
    customer: "M. Waziri",
    date: "2026-10-04",
    time: "12:31",
    price: 1609,
    category: "iPhone"
  },
  {
    product: "iPad Air",
    customer: "N. Karimi",
    date: "2026-10-03",
    time: "10:17",
    price: 699,
    category: "Tablet"
  }
];

const translations = {
  en: {
    navHome: "Home",
    navStore: "Store",
    navCalculator: "Calculator",
    navCommunity: "Community",
    navSales: "Sales",
    navContact: "Contact",
    heroEyebrow: "Kabul • Afghanistan • Since 2000",
    heroTitle1: "THE FUTURE",
    heroTitle2: "IS IN YOUR HAND.",
    heroText: "Discover authentic Apple, Samsung, Google, Xiaomi, OnePlus, Sony, Huawei, OPPO and more — with premium service from Khpalwak.",
    shopNow: "SHOP NOW",
    talkToUs: "TALK TO US",
    happy: "Happy Customers",
    products: "Products",
    brands: "Brands",
    featured: "FEATURED COLLECTION",
    latest: "Latest technology.",
    calcTitle: "Know your budget.",
    calcText: "Tell us how much you have. We'll show you what remains after buying your dream device.",
    yourMoney: "Your money",
    choosePhone: "Choose a device",
    remaining: "Money remaining",
    calculate: "CALCULATE MY BUDGET",
    communityTitle: "Talk. Share. Connect."
  },

  fa: {
    navHome: "خانه",
    navStore: "فروشگاه",
    navCalculator: "محاسبه بودجه",
    navCommunity: "جامعه",
    navSales: "فروش",
    navContact: "تماس",
    heroEyebrow: "کابل • افغانستان • از سال ۲۰۰۰",
    heroTitle1: "آینده",
    heroTitle2: "در دستان شماست.",
    heroText: "آیفون، سامسونگ، گوگل، شیائومی، وان‌پلاس، سونی، هواوی، اوپو و سایر محصولات اصل را با خدمات حرفه‌ای خپلواک دریافت کنید.",
    shopNow: "خرید",
    talkToUs: "با ما صحبت کنید",
    happy: "مشتری راضی",
    products: "محصول",
    brands: "برند",
    featured: "مجموعه ویژه",
    latest: "جدیدترین تکنولوژی.",
    calcTitle: "بودجه خود را بدانید.",
    calcText: "مقدار پول خود را وارد کنید تا ببینید بعد از خرید دستگاه مورد نظر چقدر باقی می‌ماند.",
    yourMoney: "پول شما",
    choosePhone: "انتخاب دستگاه",
    remaining: "پول باقی‌مانده",
    calculate: "محاسبه بودجه",
    communityTitle: "صحبت کنید. شریک شوید. ارتباط بگیرید."
  },

  ps: {
    navHome: "کور",
    navStore: "پلورنځی",
    navCalculator: "محاسبه",
    navCommunity: "ټولنه",
    navSales: "پلور",
    navContact: "اړیکه",
    heroEyebrow: "کابل • افغانستان • له ۲۰۰۰ کال راهیسې",
    heroTitle1: "راتلونکی",
    heroTitle2: "ستاسو په لاس کې دی.",
    heroText: "اصلي آیفون، سامسونګ، ګوګل، شیاومي، وان‌پلاس، سوني، هواوي، اوپو او نور محصولات له خپلواک څخه ترلاسه کړئ.",
    shopNow: "همدا اوس واخلئ",
    talkToUs: "موږ سره خبرې وکړئ",
    happy: "خوښ پیرودونکي",
    products: "محصولات",
    brands: "برانډونه",
    featured: "ځانګړې مجموعه",
    latest: "وروستۍ ټکنالوژي.",
    calcTitle: "خپله بودیجه وپیژنئ.",
    calcText: "خپلې پیسې ولیکئ، موږ به درته ووایو چې د موبایل له اخیستلو وروسته څومره پیسې پاتې کېږي.",
    yourMoney: "ستاسو پیسې",
    choosePhone: "وسیله انتخاب کړئ",
    remaining: "پاتې پیسې",
    calculate: "زما بودیجه محاسبه کړئ",
    communityTitle: "خبرې. شریکول. اړیکه."
  }
};

let currentCurrency = "USD";
let cart = JSON.parse(localStorage.getItem("khpalwak_cart") || "[]");
let currentUser = JSON.parse(localStorage.getItem("khpalwak_user") || "null");

const $ = id => document.getElementById(id);

window.addEventListener("load", () => {
  setTimeout(() => $("loader").classList.add("loaded"), 1600);

  renderProducts();
  renderScoreCards();
  populateCalculator();
  renderSales();
  updateCart();
  setupFilters();
  setupSearch();

  if (currentUser) {
    enableChat();
  }
});

function renderProducts(filter = "all") {
  const grid = $("productGrid");

  const items = PRODUCTS.filter(p =>
    filter === "all" ||
    p.category === filter ||
    p.brand === filter
  );

  grid.innerHTML = items.map(p => `
    <article class="product-card">
      <div class="product-image">
        <span class="product-tag">${p.tag} </span>
        <button class="product-wish" onclick="wishlist(${p.id})">♡</button>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>

      <div class="product-info">
        <span class="product-brand">${p.brand.toUpperCase()}</span>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-spec">${p.spec}</p>

        <div class="rating">
          ★★★★★ <span style="color:#555"> ${p.score}/100 value score</span>
        </div>

        <div class="product-bottom">
          <div class="product-price">
            <strong>$${p.price.toLocaleString()}</strong>
            <span>≈ ${p.afn.toLocaleString()} AFN</span>
          </div>
          <button class="product-buy" onclick="addToCart(${p.id})">+</button>
        </div>
      </div>
    </article>
  `).join("");
}

function setupFilters() {
  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      renderProducts(button.dataset.filter);
    });
  });
}

function filterBrand(brand) {
  document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));

  const matching = [...document.querySelectorAll(".filter")]
    .find(b => b.dataset.filter === brand);

  if (matching) matching.classList.add("active");

  renderProducts(brand);
  document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
}

function wishlist(id) {
  showToast("Added to your favourites ♡");
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  cart.push(product);
  localStorage.setItem("khpalwak_cart", JSON.stringify(cart));
  updateCart();
  showToast(`${product.name} added to cart.`);
}

function updateCart() {
  $("cartCount").textContent = cart.length;
}

function openCart() {
  const box = $("cartItems");

  if (!cart.length) {
    box.innerHTML = `
      <div style="padding:40px 0;text-align:center;color:#666">
        Your cart is empty.
      </div>
    `;
  } else {
    box.innerHTML = cart.map((p,index) => `
      <div class="cart-item">
        <img src="${p.image}" alt="">
        <div>
          <strong>${p.name}</strong>
          <small>$${p.price.toLocaleString()} • ${p.afn.toLocaleString()} AFN</small>
        </div>
        <button class="cart-remove" onclick="removeCart(${index})">Remove</button>
      </div>
    `).join("");
  }

  $("cartTotal").textContent =
    "$" + cart.reduce((sum,p) => sum + p.price,0).toLocaleString();

  openModal("cartModal");
}

function removeCart(index) {
  cart.splice(index,1);
  localStorage.setItem("khpalwak_cart",JSON.stringify(cart));
  updateCart();
  openCart();
}

function populateCalculator() {
  $("calcProduct").innerHTML = PRODUCTS
    .filter(p => p.category !== "Accessories")
    .map(p => `
      <option value="${p.id}">
        ${p.name} — $${p.price.toLocaleString()}
      </option>
    `).join("");

  calculateBudget();
}

function calculateBudget() {
  const budget = Number($("budget").value || 0);
  const product = PRODUCTS.find(p => p.id == $("calcProduct").value);

  if (!product) return;

  let convertedBudget = budget;

  if (currentCurrency === "AFN") convertedBudget = budget / 65;
  if (currentCurrency === "GBP") convertedBudget = budget / .79;

  const difference = convertedBudget - product.price;

  $("remaining").textContent =
    difference >= 0
      ? formatMoney(difference)
      : "-" + formatMoney(Math.abs(difference));

  $("calcMessage").textContent =
    difference >= 0
      ? `You can afford it — ${formatMoney(difference)} remains.`
      : `You need ${formatMoney(Math.abs(difference))} more to buy it.`;
}

function formatMoney(value) {
  if (currentCurrency === "AFN") {
    return Math.round(value * 65).toLocaleString() + " AFN";
  }

  if (currentCurrency === "GBP") {
    return "£" + (value * .79).toLocaleString(undefined,{
      maximumFractionDigits:0
    });
  }

  return "$" + Math.round(value).toLocaleString();
}

document.querySelectorAll(".currency").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".currency").forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    currentCurrency = button.dataset.currency;

    $("currencySymbol").textContent =
      currentCurrency === "AFN" ? "؋" :
      currentCurrency === "GBP" ? "£" : "$";

    calculateBudget();
  });
});

function renderScoreCards() {
  const selected = [PRODUCTS[0], PRODUCTS[2], PRODUCTS[4]];

  $("scoreGrid").innerHTML = selected.map(p => `
    <div class="score-card">
      <div class="score-head">
        <div class="score-product">
          <img src="${p.image}" alt="${p.name}">
          <div>
            <strong>${p.name}</strong>
            <span>${p.brand} • $${p.price.toLocaleString()}</span>
          </div>
        </div>

        <div class="score-number" style="--score:${p.score}%">
          <span>${p.score}</span>
        </div>
      </div>

      <div class="score-bars">
        <div class="score-bar">
          <span>Performance</span>
          <div class="bar"><i style="width:${p.score}%"></i></div>
          <b>${p.score}</b>
        </div>
        <div class="score-bar">
          <span>Camera</span>
          <div class="bar"><i style="width:${Math.min(100,p.score-2)}%"></i></div>
          <b>${Math.min(100,p.score-2)}</b>
        </div>
        <div class="score-bar">
          <span>Value</span>
          <div class="bar"><i style="width:${Math.min(100,p.score+1)}%"></i></div>
          <b>${Math.min(100,p.score+1)}</b>
        </div>
      </div>
    </div>
  `).join("");
}

function renderSales(filter = "All sales") {
  let sales = DEMO_SALES;

  if (filter !== "All sales") {
    sales = sales.filter(s => s.category === filter);
  }

  $("salesTable").innerHTML = sales.map(s => `
    <tr>
      <td>${s.product}</td>
      <td>${s.customer}</td>
      <td>${s.date}</td>
      <td>${s.time}</td>
      <td>$${s.price.toLocaleString()}</td>
      <td><span class="status">● Completed</span></td>
    </tr>
  `).join("");

  const total = DEMO_SALES.reduce((sum,s) => sum+s.price,0);

  $("totalSales").textContent = "$" + total.toLocaleString();
  $("productsSold").textContent = DEMO_SALES.length;
  $("ordersCount").textContent = DEMO_SALES.length;
  $("averageOrder").textContent =
    "$" + Math.round(total/DEMO_SALES.length).toLocaleString();
}

$("salesFilter").addEventListener("change", e => {
  renderSales(e.target.value);
});

function openRegistration() {
  openModal("registrationModal");
}

function registerUser(event) {
  event.preventDefault();

  const user = {
    id: generateEightDigitID(),
    firstName: $("regFirstName").value.trim(),
    lastName: $("regLastName").value.trim(),
    phone: $("regPhone").value.trim(),
    address: $("regAddress").value.trim(),
    createdAt: new Date().toISOString()
  };

  localStorage.setItem("khpalwak_user", JSON.stringify(user));
  currentUser = user;

  $("registerForm").classList.add("hidden");
  $("registrationSuccess").classList.remove("hidden");
  $("generatedID").textContent = user.id;

  enableChat();

  showToast("Welcome to Khpalwak Community!");
}

function generateEightDigitID() {
  let id;

  do {
    id = Math.floor(10000000 + Math.random() * 90000000).toString();
  } while (
    JSON.parse(localStorage.getItem("khpalwak_ids") || "[]").includes(id)
  );

  const ids = JSON.parse(localStorage.getItem("khpalwak_ids") || "[]");
  ids.push(id);
  localStorage.setItem("khpalwak_ids", JSON.stringify(ids));

  return id;
}

function enableChat() {
  $("messageInput").disabled = false;
  $("messageInput").placeholder =
    `Write as ${currentUser.firstName}...`;
  $("chatMessages").insertAdjacentHTML("afterbegin", `
    <div class="chat-message">
      <div class="avatar mini">${currentUser.firstName.charAt(0).toUpperCase()}</div>
      <div>
        <strong>Welcome, ${currentUser.firstName}!</strong>
        <span>Your Community ID is ${currentUser.id}</span>
        <small>Just now</small>
      </div>
    </div>
  `);
}

function sendMessage(event) {
  event.preventDefault();

  if (!currentUser) {
    openRegistration();
    return;
  }

  const input = $("messageInput");
  const text = input.value.trim();

  if (!text) return;

  $("chatMessages").insertAdjacentHTML("beforeend", `
    <div class="chat-message">
      <div class="avatar mini">${currentUser.firstName.charAt(0).toUpperCase()}</div>
      <div>
        <strong>${escapeHTML(currentUser.firstName)}</strong>
        <span>${escapeHTML(text)}</span>
        <small>Just now</small>
      </div>
    </div>
  `);

  input.value = "";
  $("chatMessages").scrollTop = $("chatMessages").scrollHeight;

  showToast("Message posted.");
}

function escapeHTML(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function openCheckout() {
  if (!cart.length) {
    showToast("Add a product to your cart first.");
    return;
  }

  closeModal("cartModal");
  openModal("checkoutModal");
}

function placeOrder(event) {
  event.preventDefault();

  const order = {
    id: "KHP-" + Date.now(),
    buyer: $("customerName").value,
    buyerPhone: $("customerPhone").value,
    recipient: $("deliveryRecipient").value,
    recipientPhone: $("deliveryPhone").value,
    address: $("deliveryAddress").value,
    city: $("deliveryCity").value,
    payment: $("paymentMethod").value,
    products: cart.map(p => p.name),
    totalUSD: cart.reduce((sum,p) => sum+p.price,0),
    createdAt: new Date().toISOString()
  };

  const orders = JSON.parse(localStorage.getItem("khpalwak_orders") || "[]");
  orders.push(order);
  localStorage.setItem("khpalwak_orders",JSON.stringify(orders));

  cart = [];
  localStorage.setItem("khpalwak_cart","[]");
  updateCart();

  closeModal("checkoutModal");

  showToast(
    `Order ${order.id} received. Khpalwak will contact you.`
  );
}

function openSearch() {
  openModal("searchModal");
  $("searchInput").focus();
}

function setupSearch() {
  $("searchInput").addEventListener("input", e => {
    const query = e.target.value.toLowerCase().trim();

    const results = PRODUCTS.filter(p =>
      `${p.brand} ${p.name} ${p.category} ${p.spec}`
        .toLowerCase()
        .includes(query)
    );

    $("searchResults").innerHTML = results.slice(0,6).map(p => `
      <div class="search-result" onclick="addToCart(${p.id})">
        <img src="${p.image}" alt="">
        <div>
          <strong>${p.name}</strong>
          <small>${p.brand} • $${p.price.toLocaleString()} • ${p.afn.toLocaleString()} AFN</small>
        </div>
      </div>
    `).join("");
  });
}

function openModal(id) {
  $(id).classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  $(id).classList.remove("open");

  if (!document.querySelector(".modal.open")) {
    document.body.style.overflow = "";
  }
}

document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal(modal.id);
  });
});

function toggleMobileMenu() {
  $("mobileMenu").classList.toggle("open");
}

function showToast(message) {
  const toast = $("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function subscribe(event) {
  event.preventDefault();

  const email = event.target.querySelector("input").value;

  const subscribers =
    JSON.parse(localStorage.getItem("khpalwak_subscribers") || "[]");

  subscribers.push({
    email,
    date: new Date().toISOString()
  });

  localStorage.setItem(
    "khpalwak_subscribers",
    JSON.stringify(subscribers)
  );

  event.target.reset();

  showToast("You're subscribed to Khpalwak updates.");
}

function escapeMapAddress() {
  return encodeURIComponent("Khpalwak Mobiles, Ansari Square, Kabul, Afghanistan");
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal.open").forEach(m => closeModal(m.id));
  }

  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    openSearch();
  }
});

/* Simulated live visitor counter for the front-end demo. */
setInterval(() => {
  const base = 247;
  const variation = Math.floor(Math.random() * 19) - 9;
  $("onlineCount").textContent = base + variation;
}, 5000);

/* Small entrance animation for sections. */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll(
  ".product-card,.trust-card,.score-card,.contact-card,.sales-stat"
).forEach(el => observer.observe(el));

/*
  PRODUCTION DATABASE SCHEMA

  users
  ├── id: 8-digit public ID
  ├── firstName
  ├── lastName
  ├── phone
  ├── address
  ├── photo
  └── createdAt

  messages
  ├── id
  ├── userId
  ├── text
  ├── image
  └── createdAt

  products
  ├── id
  ├── name
  ├── brand
  ├── category
  ├── priceUSD
  ├── priceAFN
  ├── stock
  └── image

  orders
  ├── id
  ├── buyer
  ├── buyerPhone
  ├── recipient
  ├── recipientPhone
  ├── address
  ├── city
  ├── paymentMethod
  ├── totalUSD
  ├── status
  └── createdAt

  sales
  ├── productId
  ├── customerId
  ├── quantity
  ├── priceUSD
  ├── priceAFN
  ├── soldAt
  └── status

  For actual multi-user chat, authentication, image uploads,
  payment verification and a real sales dashboard, connect this
  interface to a secure backend/database before publishing.
*/
```