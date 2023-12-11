
var cartTotal = 0;
var cartDom = document.querySelector(".cart");
var cartTotalObjects = document.querySelector(".cart-img-block");
var modal = document.getElementById("thxForSale");
var addtocartbtnDom = document.querySelectorAll('[data-action="add-to-cart"]');

var usersString = localStorage.getItem('store');
cart = []; 


addtocartbtnDom.forEach(addtocartbtnDom => {
  addtocartbtnDom.addEventListener("click", () => {
    const productDom = addtocartbtnDom.parentNode.parentNode;
    const product = {
      img: productDom.querySelector(".product-img").getAttribute("src"),
      name: productDom.querySelector(".product-name").innerText,
      price: productDom.querySelector(".product-price").innerText,
      quantity: 1
    };

    const IsinCart = cart.filter(cartItem => cartItem.name === product.name).length > 0;
    if (IsinCart === false) {
      cartDom.insertAdjacentHTML("beforeend",`
      <div class="cart-items">
        <div class="store-flex-box">
          <div class="store-flex-box-1">
              <img src="${product.img}" alt="${product.name}" style="width: 100px;"/>
          </div>
          <div class="store-flex-box-2">
              <div class="store-flex-box-inside1">
                  <p class="cart_item_name">${product.name}</p>
                  <p class="cart_item_price">${product.price}</p>
              </div>
              <div class="store-flex-box-inside2 store-flex-box">
                  <div class="store-flex-box-inside3 store-flex-box">
                      <div>
                          <button class="store-btn" type="button" data-action="decrease-item">-
                      </div>
                      <div>
                          <p class="cart_item_quantity">${product.quantity}</p>
                      </div>
                      <div>
                          <button class="store-btn" type="button" data-action="increase-item">+
                      </div>
                  </div>
                  <div class="store-flex-box-inside4 store-flex-box">
                      <button class="store-btn btn-red" type="button" data-action="remove-item">Удалить товар
                  </div>
              </div>
          </div>
        </div>
      </div> `);
      if(cart.length == 0){
        cartTotalObjects.insertAdjacentHTML("beforeend",`
        <p class="relat-img-cart-total-objects">${cart.length + 1}</p>
        `);
      }
      else{
        document.querySelector('.relat-img-cart-total-objects').innerText = cart.length + 1;
      }

      if(document.querySelector('.cart-footer') === null){
        cartDom.insertAdjacentHTML("afterend",  `
          <div class="cart-footer">
            <p>Итог</p>
            <div class="store-flex-box">
              <div>
                <button class="store-btn" type="button" data-action="clear-cart">Очистить корзину
              </div>
              <div>
                <button class="store-btn" type="button" data-action="check-out">Купить <span class="pay"></span>
              </div>
            </div>
          </div>`); }

      addtocartbtnDom.innerText = "В корзине";
      addtocartbtnDom.disabled = true;
      cart.push(product);

      const cartItemsDom = cartDom.querySelectorAll(".cart-items");
      cartItemsDom.forEach(cartItemDom => {

        if (cartItemDom.querySelector(".cart_item_name").innerText === product.name) {

          cartTotal += parseInt(cartItemDom.querySelector(".cart_item_quantity").innerText) 
          * parseInt(cartItemDom.querySelector(".cart_item_price").innerText);
          document.querySelector('.pay').innerText = cartTotal + " ₽";
          document.querySelector('.cartCostOnMain').innerText = cartTotal + " ₽";

          cartItemDom.querySelector('[data-action="increase-item"]').addEventListener("click", () => {
            cart.forEach(cartItem => {
              if (cartItem.name === product.name) {
                cartItemDom.querySelector(".cart_item_quantity").innerText = ++cartItem.quantity;
                cartItemDom.querySelector(".cart_item_price").innerText = parseInt(cartItem.quantity) *
                parseInt(cartItem.price) + " ₽";
                cartTotal += parseInt(cartItem.price)
                document.querySelector('.pay').innerText = cartTotal + " ₽";
                document.querySelector('.cartCostOnMain').innerText = cartTotal + " ₽";
              }
            });
          });

          cartItemDom.querySelector('[data-action="decrease-item"]').addEventListener("click", () => {
            cart.forEach(cartItem => {
              if (cartItem.name === product.name) {
                if (cartItem.quantity > 1) {
                  cartItemDom.querySelector(".cart_item_quantity").innerText = --cartItem.quantity;
                  cartItemDom.querySelector(".cart_item_price").innerText = parseInt(cartItem.quantity) *
                  parseInt(cartItem.price) + " ₽";
                  cartTotal -= parseInt(cartItem.price)
                  document.querySelector('.pay').innerText = cartTotal + " ₽";
                  document.querySelector('.cartCostOnMain').innerText = cartTotal + " ₽";
                }
              }
            });
          });

          cartItemDom.querySelector('[data-action="remove-item"]').addEventListener("click", () => {
            cart.forEach(cartItem => {
              if (cartItem.name === product.name) {
                  cartTotal -= parseInt(cartItemDom.querySelector(".cart_item_price").innerText);
                  document.querySelector('.pay').innerText = cartTotal + " ₽";
                  document.querySelector('.cartCostOnMain').innerText = cartTotal + " ₽";
                  document.querySelector('.relat-img-cart-total-objects').innerText = cart.length - 1;
                  cartItemDom.remove();
                  cart = cart.filter(cartItem => cartItem.name !== product.name);
                  addtocartbtnDom.innerText = "Купить";
                  addtocartbtnDom.disabled = false;
              }
              if(cart.length < 1){
                document.querySelector('.cart-footer').remove();
                document.querySelector('.relat-img-cart-total-objects').remove();
                document.querySelector('.cartCostOnMain').innerText = "Корзина";
              }
            });
          });

          document.querySelector('[data-action="clear-cart"]').addEventListener("click" , () => {
            cartItemDom.remove();
            cart = [];
            cartTotal = 0;
            if(document.querySelector('.cart-footer') !== null){
              document.querySelector('.cart-footer').remove();

            }
            addtocartbtnDom.innerText = "Купить";
            addtocartbtnDom.disabled = false;
            document.querySelector('.relat-img-cart-total-objects').remove();
            document.querySelector('.cartCostOnMain').innerText = "Корзина";
          });
          document.querySelector('[data-action="check-out"]').addEventListener("click" , () => {
            thx();
            cartItemDom.remove();
            cart = [];
            cartTotal = 0;
            if(document.querySelector('.cart-footer') !== null){
              document.querySelector('.cart-footer').remove();

            }
            addtocartbtnDom.innerText = "Купить";
            addtocartbtnDom.disabled = false;
            document.querySelector('.relat-img-cart-total-objects').remove();
            document.querySelector('.cartCostOnMain').innerText = "Корзина";
          });
        }
      });
    }
  });
});


function thx(){
  document.getElementById("thxForSale").style.display = "block";
  setTimeout(function() { modal.style.display = "none"; }, 5000);
}

document.getElementById("cartImage").addEventListener("click", function() {
  var storage = document.getElementById("storage");
  if (storage.style.display === "none") {
    storage.style.display = "block";
  } else {
    storage.style.display = "none";
  }
});
