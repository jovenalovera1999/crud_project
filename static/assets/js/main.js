/**
* Template Name: iPortfolio - v3.6.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

// Function to add multiple products
function addProducts() {
  // Fields
  const code = document.getElementById('code').value;
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const quantity = document.getElementById('quantity').value;
  const expirationDate = document.getElementById('expiration_date').value;
  const supplier = document.getElementById('supplier').value;

  // For message validation
  let nameValidation = document.getElementById('name_validation');
  let priceValidation = document.getElementById('price_validation');
  let quantityValidation = document.getElementById('quantity_validation');

  // Reset validation messages
  nameValidation.innerText = '';
  priceValidation.innerText = '';
  quantityValidation.innerText = '';

  // Validation
  if (!name) {
    nameValidation.innerText = 'The name field is required.';
    return; // Stop execution if validation fails
  }

  if (!price) {
    priceValidation.innerText = 'The price field is required.';
    return; // Stop execution if validation fails
  } else if (isNaN(price)) {
    priceValidation.innerText = 'The price field must contain numbers only.';
    return; // Stop execution if validation fails
  }

  if (!quantity) {
    quantityValidation.innerText = 'The quantity field is required.';
    return; // Stop execution if validation fails
  } else if (isNaN(quantity)) {
    quantityValidation.innerText = 'The quantity field must contain numbers only.';
    return; // Stop execution if validation fails
  }

  // Table
  let tblAddProducts = document.getElementById('tbl_add_products').getElementsByTagName('tbody')[0];

  // Insert row from textbox
  let row = tblAddProducts.insertRow(tblAddProducts.rows.length);
  let cellOne = row.insertCell(0);
  let cellTwo = row.insertCell(1);
  let cellThree = row.insertCell(2);
  let cellFour = row.insertCell(3);
  let cellFive = row.insertCell(4);
  let cellSix = row.insertCell(5);

  cellOne.innerHTML = code;
  cellTwo.innerHTML = name;
  cellThree.innerHTML = price;
  cellFour.innerHTML = quantity;
  cellFive.innerHTML = expirationDate;
  cellSix.innerHTML = supplier;

  // Add Cancel button
  let cancelButton = document.createElement('input');
  cancelButton.type = 'button';
  cancelButton.className = 'btn btn-danger';
  cancelButton.value = 'Cancel';
  cancelButton.onclick = function () {
    // Remove the row when the cancel button is clicked
    tblAddProducts.deleteRow(row.rowIndex);
  };
  let cellSeven = row.insertCell(6);
  cellSeven.appendChild(cancelButton);

  // Reset input fields
  document.getElementById('code').value = '';
  document.getElementById('name').value = '';
  document.getElementById('price').value = '';
  document.getElementById('quantity').value = '';
  document.getElementById('expiration_date').value = '';
  document.getElementById('supplier').value = '';

  document.getElementById('code').focus();
}
