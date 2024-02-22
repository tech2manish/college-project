// this code is used for the toggle between the login , signup, and products data 
document.addEventListener('DOMContentLoaded', function () {
  showDefaultView();

  document.getElementById('showProduct').addEventListener('click', function () {
    showDefaultView();
  });

  var loginButtons = document.getElementsByClassName('showLogin');
  for (var i = 0; i < loginButtons.length; i++) {
    loginButtons[i].addEventListener('click', function () {
      showLoginForm();
    });
  }

  document.getElementById('showSignup').addEventListener('click', function () {
    showSignupForm();
  });
});

function showDefaultView() {
  document.querySelector('.product-container').style.display = 'block';
  document.querySelector('.login-form').style.display = 'none';
  document.querySelector('.signup-form').style.display = 'none';
}

function showLoginForm() {
  document.querySelector('.product-container').style.display = 'none';
  document.querySelector('.login-form').style.display = 'block';
  document.querySelector('.signup-form').style.display = 'none';
}

function showSignupForm() {
  document.querySelector('.product-container').style.display = 'none';
  document.querySelector('.login-form').style.display = 'none';
  document.querySelector('.signup-form').style.display = 'block';
}
// toggle code ends here 


// menu hide and unhide code starts here 
document.addEventListener('DOMContentLoaded', function () {
  var floatingSection = document.getElementById('floatingSection');
  var toggleButton = document.getElementById('toggleButton');

  toggleButton.addEventListener('click', function () {
    // Toggle the visibility of the floating section
    if (floatingSection.style.display === 'none' || floatingSection.style.display === '') {
      floatingSection.style.display = 'block';
    } else {
      floatingSection.style.display = 'none';
    }
  });
});
// menu hide and unhide code ends here 



// product search code starts here 
function filterCards() {
  var input, filter, cards, card, description, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  cards = document.getElementsByClassName("product-card");

  for (i = 0; i < cards.length; i++) {
    description = cards[i].getElementsByClassName("product-description")[0];
    txtValue = description.textContent || description.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}
// product search code ends here 

// To make delivery address easy to fill code start.
document.addEventListener('DOMContentLoaded', function() {
  const billingForm = document.getElementById('billing-form');
  const deliveryForm = document.getElementById('delivery-form');
  const sameAddressCheckbox = document.getElementById('same-address');

  sameAddressCheckbox.addEventListener('change', function() {
      if (this.checked) {
          deliveryForm.elements['delivery-name'].value = billingForm.elements['billing-name'].value;
          deliveryForm.elements['delivery-mobile'].value = billingForm.elements['billing-mobile'].value;
          deliveryForm.elements['delivery-email'].value = billingForm.elements['billing-email'].value;
          deliveryForm.elements['delivery-address'].value = billingForm.elements['billing-address'].value;
          deliveryForm.elements['delivery-city'].value = billingForm.elements['billing-city'].value;
          deliveryForm.elements['delivery-zip'].value = billingForm.elements['billing-zip'].value;
          deliveryForm.elements['delivery-country'].value = billingForm.elements['billing-country'].value;
      } else {
          // Clear delivery address fields
          deliveryForm.reset();
      }
  });
});
// To make delivery address easy to fill code end.

// Paymet method code start here.
document.addEventListener('DOMContentLoaded', function() {
  const paymentMethod = document.querySelectorAll('input[name="payment-option"]');
  const cardDetails = document.getElementById('card-details');

  // Function to show or hide card details based on selected payment method
  function toggleCardDetails() {
      if (this.value === 'card') {
          cardDetails.style.display = 'block';
      } else {
          cardDetails.style.display = 'none';
      }
  }

  // Add event listener to each payment method radio button
  paymentMethod.forEach(function(method) {
      method.addEventListener('change', toggleCardDetails);
  });
});

// Paymet method code end here.