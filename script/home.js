/* start dropdown menu coding */
function dropdown(){
	let shop_dropdown = document.querySelector(".shop-dropdown");
	let recipes_dropdown = document.querySelector(".recipes-dropdown");
	let love_dropdown = document.querySelector(".love-dropdown");
	let inr_dropdown = document.querySelector(".inr-dropdown");
	shop_dropdown.onclick = ()=>{
		let dropdown_content = document.querySelector(".shop-dropdown-content");
		if(dropdown_content.style.display === "none")
		{
			dropdown_content.style.display = "block";
		}

		else{
			dropdown_content.style.display = "none";
		}
	}

	recipes_dropdown.onclick = ()=>{
		let dropdown_content = document.querySelector(".recipes-dropdown-content");
		if(dropdown_content.style.display === "none")
		{
			dropdown_content.style.display = "block";
		}

		else{
			dropdown_content.style.display = "none";
		}
	}

	love_dropdown.onclick = ()=>{
		let dropdown_content = document.querySelector(".love-dropdown-content");
		if(dropdown_content.style.display === "none")
		{
			dropdown_content.style.display = "block";
		}

		else{
			dropdown_content.style.display = "none";
		}
	}

	inr_dropdown.onclick = ()=>{
		let dropdown_content = document.querySelector(".inr-dropdown-content");
		if(dropdown_content.style.display === "none")
		{
			dropdown_content.style.display = "block";
		}

		else{
			dropdown_content.style.display = "none";
		}
	}
}
dropdown();
/* start dropdown menu coding */
/* start search coding */
function search(){
	let search_icon = document.querySelector(".search-icon");
	search_icon.onclick = ()=>{
		let search_input = document.querySelector(".search-input");
		if(search_input.style.display === "none")
		{
			search_input.style.display = "block";
		}

		else{
			search_input.style.display = "none";
		}
	}
}
search()
/* end search coding */

/* start accound coding */
function account(){
	let account_icon = document.querySelector(".account-icon");
	account_icon.onclick = ()=>{
		let account_content = document.querySelector(".account-content");
		if(account_content.style.display === "none")
		{
			 account_content.style.display = "block";
		}

		else{
			 account_content.style.display = "none";
		}
	}
}
account()
/* end account coding */

/* start cart coding */
function cart(){
	let cart_icon = document.querySelector(".cart-icon");
	cart_icon.onclick = ()=>{
		let cart_content = document.querySelector(".cart-content");
		if(cart_content.style.display === "none")
		{
			 cart_content.style.display = "block";
		}

		else{
			 cart_content.style.display = "none";
		}
	}
}
cart();
/* end cart coding */

/* start mobile menu coding */
function mobile_menu(){
	let menu_icon = document.querySelector(".menu-icon");
	let menu_box = document.querySelector(".menu-box");
		menu_icon.onclick = ()=>{
		menu_box.style.display = "block";
		menu_box.style.height = "250px";
		menu_box.style.transition = "3s";
	}

	let close_menu = document.querySelector(".close-menu");
	close_menu.onclick = ()=>{
		menu_box.style.display = "none";
	}
}
mobile_menu();
/* end mobile menu coding */

