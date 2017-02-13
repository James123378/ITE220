var shop = {
	customerName: "Ajarn Mintra",
	totalPrice: 0,
	products: [
		"Brooklyn T-Shirt White",
		"Brooklyn T-Shirt Black",
		"Apple Watch",
		"Android Phone"],
    
    
	prices: [	10,10,199,159],
	
	displayProductList: function() {
		var productText = "";
		var productsElement = document.getElementById("product-list");
    
	displayCustomerName: function() {
		var customerElement = document.getElementById("customer-name");
		customerElement.textContent = this.customerName;
	}
  
  productText += "<li class='list-group-item'><span class='badge'>$" + this.prices[0] + "</span>" + this.products[0] + "</li>";
		productText += "<li class='list-group-item'><span class='badge'>$" + this.prices[1] + "</span>" + this.products[1] + "</li>";
		productText += "<li class='list-group-item'><span class='badge'>$" + this.prices[2] + "</span>" + this.products[2] + "</li>";
		productText += "<li class='list-group-item'><span class='badge'>$" + this.prices[3] + "</span>" + this.products[3] + "</li>";
		
		productsElement.innerHTML = productText;
    },
	
	calculateTotalPrice: function() {
		return (this.prices[0] + this.prices[1] + this.prices[2] + this.prices[3]) * 0.75;
	},
	
	displayTotalPrice: function() {
		this.totalPrice = this.calculateTotalPrice();
		var totalPriceElement = document.getElementById("total-price");
		totalPriceElement.textContent = this.totalPrice;
	},
	
	timeDependentGreeting: function() {
		var time = new Date().getHours();
		if (time < 12) {
			document.getElementById("time-greeting").innerHTML = "Good Morning";
		} else if (time < 18) {
			document.getElementById("time-greeting").innerHTML = "Good Afternoon";
		} else {
			document.getElementById("time-greeting").innerHTML = "Good Evening";
		}
	}
};

shop.displayCustomerName();
shop.displayProductList();
shop.displayTotalPrice();
shop.timeDependentGreeting();
