let items = document.querySelectorAll("#items > div");
let main = document.querySelector("main"); // Accessing the first element
let appeneitems = document.createElement("div");
appeneitems.id = "appeneitems";

console.log(items);

function showdata(data) {
  data.forEach((item, index) => {
    let div = document.createElement("div");
    div.classList.add("item");
    let img = document.createElement("img");
    img.src = item.image;
    let title = document.createElement("h3");
    title.textContent = item.title;
    let describe = document.createElement("p");
    describe.textContent = item.describe;
    let location = document.createElement("p");
    location.textContent = "Set location for pricing.";
    let price = document.createElement("h4");
    price.innerHTML = `<h3>Price : ${item.price}</h3>`;
    let addCart = document.createElement("button");
    addCart.textContent = "Add to cart";
    addCart.addEventListener("click", () => {
        alert('Add sucess')
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
    });
    let buyItems = document.createElement("button");
    buyItems.textContent = "Buy Items";
    buyItems.addEventListener("click", () => {
      alert("this function is not working");
    });
    div.appendChild(img);
    div.appendChild(title);
    // div.appendChild(describe);
    div.appendChild(price);
    div.appendChild(location);
    div.appendChild(addCart);
    div.appendChild(buyItems);
    appeneitems.appendChild(div);
    main.appendChild(appeneitems);
  });
}

// Convert NodeList to array using spread syntax
[...items].forEach((ele, i) => {
  ele.addEventListener("click", () => {
    main.innerHTML = "";
    if (i == 0) {
      let obj = [
        {
          image:
            "https://digitaleat.kfc.com/menus/image/bare/kfc-TasteofKFCValue2pc.png?q=75&w=1024",
          title: "TASTE OF KFC 2 PC. DEAL",
          price: 850,
          describe:
            "Part of our Taste of KFC Deals, this homestyle fried chicken meal includes 2 pieces of our crispy and juicy dark meat chicken (1 drum stick & 1 thigh), a side of our creamy mashed potatoes and gravy, and an extra buttery biscuit. Order online for delivery or pick up at a KFC® near you for a quick lunch or dinner!",
        },
        {
          image:
            "https://digitaleat.kfc.com/menus/image/bare/kfc-TasteofKFCValue2pc.png?q=75&w=1024",
          title: "TASTE OF KFC 2 PC. DEAL",
          price: 550,
          describe:
            "Part of our Taste of KFC Deals, this homestyle fried chicken meal includes 2 pieces of our crispy and juicy dark meat chicken (1 drum stick & 1 thigh), a side of our creamy mashed potatoes and gravy, and an extra buttery biscuit. Order online for delivery or pick up at a KFC® near you for a quick lunch or dinner!",
        },
        {
          image:
            "https://digitaleat.kfc.com/menus/image/bare/kfc-6pcTasteofKFCMeal.png?q=75&w=1024",
          title: "TASTE OF KFC 6 PC. DEAL",
          price: 250,
          describe:
            "Treat yourself to all of your KFC® favorites with our 6pc. Taste of KFC® Fried Chicken Meal! This combo includes 6 pieces of our hand breaded crispy fried chicken (2 drums, 2 thighs, 1 breast, 1 wing) with individual sides of our cheesy Mac & Cheese, freshly prepared Coleslaw, creamy Mashed Potatoes & Gravy, Sweet Corn and 4 of our extra buttery biscuits. Place your order online for delivery or pick up at your local KFC® and enjoy our world famous fried chicken near you!",
        },
        {
          image:
            "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1024",
          title: "10 PC. SAUCY NUGGETS COMBO",
          price: 450,
          describe:
            "Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame.",
        },
        {
          image:
            "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggets.png?q=75&w=1024",
          title: "10 PC. SAUCY NUGGETS",
          price: 1050,
          describe:
            "Discover the perfect harmony of flavors with our all-new KFC® Saucy Nuggets! Enjoy 10 of our juicy, hand-breaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame. Order online at a KFC® near you!",
        },
        {
          image:
            "https://digitaleat.kfc.com/menus/image/bare/kfc-4pcPiePoppers.png?q=75&w=1024",
          title: "APPLE PIE POPPERS",
          price: 850,
          describe:
            "Indulge in the sweet delight of our new mini Apple Pie Poppers when you order online at your local KFC®. These miniature pie snacks are everything you love about fruity pie flavor in a fun, handheld apple pie treat. This dessert is filled with warm apple pie filling and wrapped in a buttery, flaky crust. Available in 4 or 10 counts for easy snacking. Grab this apple pie dessert on the go when you order online from a KFC® near you!",
        },
        {
          image:
            "https://digitaleat.kfc.com/menus/image/bare/kfc-BlackberryLemonade.png?q=75&w=1024",
          title: "BLACKBERRY LEMONADE",
          price: 500,
          describe:
            "Looking for a fun twist on a a classic refreshment? Try our signature Blackberry Lemonade for a limited time. This ice cold lemonade delivers the perfect balance of sweet and tart flavors in every sip by combining the refreshing taste of our famous Colonel's Lemonade with a splash of crisp blackberry puree. Order online for delivery or pick up with your next fried chicken meal from a KFC® near you!",
        },
        {
          image:
            "https://digitaleat.kfc.com/menus/image/bare/kfc-FillUpBox.png?q=75&w=1024",
          title: "FILL UP BOX",
          price: 1000,
          describe:
            "If you're looking for your next easy dinner idea, KFC® has you covered with our all-new Fill Up Box. This chicken dinner deal includes 4 pieces of our mouthwatering fried chicken, 12 of our 100% white meat chicken nuggets, a side of our crispy Secret Recipe French Fries, 4 buttermilk biscuits and 4 dipping sauces of your choice - all at a great price! Enjoy this convenient meal when ordering online for delivery or pick up at a KFC® near you!",
        },
      ];

      showdata(obj);
    }
    else if(i==1){
        let obj=[
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1280",
                title: "10 PC. SAUCY NUGGETS COMBO",
                price:10000,
                describe:"Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1280",
                title: "8 PC. SAUCY NUGGETS COMBO",
                price:8000,
                describe:"Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1280",
                title: "12 PC. SAUCY NUGGETS COMBO",
                price:12000,
                describe:"Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-2BWCombo.png?q=75&w=1280",
                title: "2 PC. CHICKEN COMBO",
                price:500,
                describe:"Get your hands on 2 pieces of our freshly prepared, world famous fried chicken with our 2 Piece Fried Chicken Combo! Choose between our Variety Combo (1 breast and 1 wing) or our all-dark meat Drum & Thigh Combo (1 drum and 1 thigh). Includes a side of your choice, biscuit and medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-2BWCombo.png?q=75&w=1280",
                title: " PC. CHICKEN COMBO",
                price:750,
                describe:"Get your hands on 2 pieces of our freshly prepared, world famous fried chicken with our 2 Piece Fried Chicken Combo! Choose between our Variety Combo (1 breast and 1 wing) or our all-dark meat Drum & Thigh Combo (1 drum and 1 thigh). Includes a side of your choice, biscuit and medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-2BWCombo.png?q=75&w=1280",
                title: "4 PC. CHICKEN COMBO",
                price:1000,
                describe:"Get your hands on 2 pieces of our freshly prepared, world famous fried chicken with our 2 Piece Fried Chicken Combo! Choose between our Variety Combo (1 breast and 1 wing) or our all-dark meat Drum & Thigh Combo (1 drum and 1 thigh). Includes a side of your choice, biscuit and medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-3pcBox2B1W.png?q=75&w=1280",
                title: "3 PC. CHICKEN BIG BOX MEAL",
                price:3000,
                describe:"Order online and enjoy 3 pieces of our world famous fried chicken in the KFC® recipe of your choice! Choose between our Variety Box Meal (2 breasts and 1 wing) or our all-dark meat Drum & Thigh Box Meal (2 thighs and 1 drum). This box combo includes your choice of 2 sides, a biscuit and medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-TendersCombo.png?q=75&w=1280",
                title: "3 PC. TENDERS COMBO",
                price:800,
                describe:"Enjoy 3 of our Extra Crispy™ fried chicken tenders, a side of your choice, dipping sauce, biscuit and a medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-TendersCombo.png?q=75&w=1280",
                title: "4 PC. TENDERS COMBO",
                price:900,
                describe:"Enjoy 3 of our Extra Crispy™ fried chicken tenders, a side of your choice, dipping sauce, biscuit and a medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-TendersCombo.png?q=75&w=1280",
                title: "8 PC. TENDERS COMBO",
                price:1600,
                describe:"Enjoy 3 of our Extra Crispy™ fried chicken tenders, a side of your choice, dipping sauce, biscuit and a medium drink."
              },
        ]
        showdata(obj);
    }
    else if(i==2){
        let obj=[
            {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-6pcTasteofKFCMeal.png?q=75&w=1024",
                title: "TASTE OF KFC 6 PC. DEAL",
                price: 250,
                describe:
                  "Treat yourself to all of your KFC® favorites with our 6pc. Taste of KFC® Fried Chicken Meal! This combo includes 6 pieces of our hand breaded crispy fried chicken (2 drums, 2 thighs, 1 breast, 1 wing) with individual sides of our cheesy Mac & Cheese, freshly prepared Coleslaw, creamy Mashed Potatoes & Gravy, Sweet Corn and 4 of our extra buttery biscuits. Place your order online for delivery or pick up at your local KFC® and enjoy our world famous fried chicken near you!",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1024",
                title: "10 PC. SAUCY NUGGETS COMBO",
                price: 450,
                describe:
                  "Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame.",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggets.png?q=75&w=1024",
                title: "10 PC. SAUCY NUGGETS",
                price: 1050,
                describe:
                  "Discover the perfect harmony of flavors with our all-new KFC® Saucy Nuggets! Enjoy 10 of our juicy, hand-breaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame. Order online at a KFC® near you!",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-4pcPiePoppers.png?q=75&w=1024",
                title: "APPLE PIE POPPERS",
                price: 850,
                describe:
                  "Indulge in the sweet delight of our new mini Apple Pie Poppers when you order online at your local KFC®. These miniature pie snacks are everything you love about fruity pie flavor in a fun, handheld apple pie treat. This dessert is filled with warm apple pie filling and wrapped in a buttery, flaky crust. Available in 4 or 10 counts for easy snacking. Grab this apple pie dessert on the go when you order online from a KFC® near you!",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-BlackberryLemonade.png?q=75&w=1024",
                title: "BLACKBERRY LEMONADE",
                price: 500,
                describe:
                  "Looking for a fun twist on a a classic refreshment? Try our signature Blackberry Lemonade for a limited time. This ice cold lemonade delivers the perfect balance of sweet and tart flavors in every sip by combining the refreshing taste of our famous Colonel's Lemonade with a splash of crisp blackberry puree. Order online for delivery or pick up with your next fried chicken meal from a KFC® near you!",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-FillUpBox.png?q=75&w=1024",
                title: "FILL UP BOX",
                price: 1000,
                describe:
                  "If you're looking for your next easy dinner idea, KFC® has you covered with our all-new Fill Up Box. This chicken dinner deal includes 4 pieces of our mouthwatering fried chicken, 12 of our 100% white meat chicken nuggets, a side of our crispy Secret Recipe French Fries, 4 buttermilk biscuits and 4 dipping sauces of your choice - all at a great price! Enjoy this convenient meal when ordering online for delivery or pick up at a KFC® near you!",
              },
              {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1280",
                title: "12 PC. SAUCY NUGGETS COMBO",
                price:12000,
                describe:"Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-2BWCombo.png?q=75&w=1280",
                title: "2 PC. CHICKEN COMBO",
                price:500,
                describe:"Get your hands on 2 pieces of our freshly prepared, world famous fried chicken with our 2 Piece Fried Chicken Combo! Choose between our Variety Combo (1 breast and 1 wing) or our all-dark meat Drum & Thigh Combo (1 drum and 1 thigh). Includes a side of your choice, biscuit and medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-2BWCombo.png?q=75&w=1280",
                title: " PC. CHICKEN COMBO",
                price:750,
                describe:"Get your hands on 2 pieces of our freshly prepared, world famous fried chicken with our 2 Piece Fried Chicken Combo! Choose between our Variety Combo (1 breast and 1 wing) or our all-dark meat Drum & Thigh Combo (1 drum and 1 thigh). Includes a side of your choice, biscuit and medium drink."
              }
        ]
        showdata(obj);
    }
    else if(i==3){
        let obj=[
            {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1024",
                title: "10 PC. SAUCY NUGGETS COMBO",
                price: 450,
                describe:
                  "Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame.",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggets.png?q=75&w=1024",
                title: "10 PC. SAUCY NUGGETS",
                price: 1050,
                describe:
                  "Discover the perfect harmony of flavors with our all-new KFC® Saucy Nuggets! Enjoy 10 of our juicy, hand-breaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame. Order online at a KFC® near you!",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-4pcPiePoppers.png?q=75&w=1024",
                title: "APPLE PIE POPPERS",
                price: 850,
                describe:
                  "Indulge in the sweet delight of our new mini Apple Pie Poppers when you order online at your local KFC®. These miniature pie snacks are everything you love about fruity pie flavor in a fun, handheld apple pie treat. This dessert is filled with warm apple pie filling and wrapped in a buttery, flaky crust. Available in 4 or 10 counts for easy snacking. Grab this apple pie dessert on the go when you order online from a KFC® near you!",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1024",
                title: "10 PC. SAUCY NUGGETS COMBO",
                price: 450,
                describe:
                  "Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame.",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggets.png?q=75&w=1024",
                title: "10 PC. SAUCY NUGGETS",
                price: 1050,
                describe:
                  "Discover the perfect harmony of flavors with our all-new KFC® Saucy Nuggets! Enjoy 10 of our juicy, hand-breaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame. Order online at a KFC® near you!",
              }
              
        ]
        showdata(obj);
    }
    else if(i==4){
            let obj = [
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-TasteofKFCValue2pc.png?q=75&w=1024",
                title: "TASTE OF KFC 2 PC. DEAL",
                price: 850,
                describe:
                  "Part of our Taste of KFC Deals, this homestyle fried chicken meal includes 2 pieces of our crispy and juicy dark meat chicken (1 drum stick & 1 thigh), a side of our creamy mashed potatoes and gravy, and an extra buttery biscuit. Order online for delivery or pick up at a KFC® near you for a quick lunch or dinner!",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-TasteofKFCValue2pc.png?q=75&w=1024",
                title: "TASTE OF KFC 2 PC. DEAL",
                price: 550,
                describe:
                  "Part of our Taste of KFC Deals, this homestyle fried chicken meal includes 2 pieces of our crispy and juicy dark meat chicken (1 drum stick & 1 thigh), a side of our creamy mashed potatoes and gravy, and an extra buttery biscuit. Order online for delivery or pick up at a KFC® near you for a quick lunch or dinner!",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-6pcTasteofKFCMeal.png?q=75&w=1024",
                title: "TASTE OF KFC 6 PC. DEAL",
                price: 250,
                describe:
                  "Treat yourself to all of your KFC® favorites with our 6pc. Taste of KFC® Fried Chicken Meal! This combo includes 6 pieces of our hand breaded crispy fried chicken (2 drums, 2 thighs, 1 breast, 1 wing) with individual sides of our cheesy Mac & Cheese, freshly prepared Coleslaw, creamy Mashed Potatoes & Gravy, Sweet Corn and 4 of our extra buttery biscuits. Place your order online for delivery or pick up at your local KFC® and enjoy our world famous fried chicken near you!",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1024",
                title: "10 PC. SAUCY NUGGETS COMBO",
                price: 450,
                describe:
                  "Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame.",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggets.png?q=75&w=1024",
                title: "10 PC. SAUCY NUGGETS",
                price: 1050,
                describe:
                  "Discover the perfect harmony of flavors with our all-new KFC® Saucy Nuggets! Enjoy 10 of our juicy, hand-breaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame. Order online at a KFC® near you!",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-4pcPiePoppers.png?q=75&w=1024",
                title: "APPLE PIE POPPERS",
                price: 850,
                describe:
                  "Indulge in the sweet delight of our new mini Apple Pie Poppers when you order online at your local KFC®. These miniature pie snacks are everything you love about fruity pie flavor in a fun, handheld apple pie treat. This dessert is filled with warm apple pie filling and wrapped in a buttery, flaky crust. Available in 4 or 10 counts for easy snacking. Grab this apple pie dessert on the go when you order online from a KFC® near you!",
              },

              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-FillUpBox.png?q=75&w=1024",
                title: "FILL UP BOX",
                price: 1000,
                describe:
                  "If you're looking for your next easy dinner idea, KFC® has you covered with our all-new Fill Up Box. This chicken dinner deal includes 4 pieces of our mouthwatering fried chicken, 12 of our 100% white meat chicken nuggets, a side of our crispy Secret Recipe French Fries, 4 buttermilk biscuits and 4 dipping sauces of your choice - all at a great price! Enjoy this convenient meal when ordering online for delivery or pick up at a KFC® near you!",
              },
            ];
      
            showdata(obj);
    }
    else if(i==10){
        let obj=[
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1280",
                title: "10 PC. SAUCY NUGGETS COMBO",
                price:10000,
                describe:"Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1280",
                title: "8 PC. SAUCY NUGGETS COMBO",
                price:8000,
                describe:"Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1280",
                title: "12 PC. SAUCY NUGGETS COMBO",
                price:12000,
                describe:"Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-2BWCombo.png?q=75&w=1280",
                title: "2 PC. CHICKEN COMBO",
                price:500,
                describe:"Get your hands on 2 pieces of our freshly prepared, world famous fried chicken with our 2 Piece Fried Chicken Combo! Choose between our Variety Combo (1 breast and 1 wing) or our all-dark meat Drum & Thigh Combo (1 drum and 1 thigh). Includes a side of your choice, biscuit and medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-2BWCombo.png?q=75&w=1280",
                title: " PC. CHICKEN COMBO",
                price:750,
                describe:"Get your hands on 2 pieces of our freshly prepared, world famous fried chicken with our 2 Piece Fried Chicken Combo! Choose between our Variety Combo (1 breast and 1 wing) or our all-dark meat Drum & Thigh Combo (1 drum and 1 thigh). Includes a side of your choice, biscuit and medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-2BWCombo.png?q=75&w=1280",
                title: "4 PC. CHICKEN COMBO",
                price:1000,
                describe:"Get your hands on 2 pieces of our freshly prepared, world famous fried chicken with our 2 Piece Fried Chicken Combo! Choose between our Variety Combo (1 breast and 1 wing) or our all-dark meat Drum & Thigh Combo (1 drum and 1 thigh). Includes a side of your choice, biscuit and medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-3pcBox2B1W.png?q=75&w=1280",
                title: "3 PC. CHICKEN BIG BOX MEAL",
                price:3000,
                describe:"Order online and enjoy 3 pieces of our world famous fried chicken in the KFC® recipe of your choice! Choose between our Variety Box Meal (2 breasts and 1 wing) or our all-dark meat Drum & Thigh Box Meal (2 thighs and 1 drum). This box combo includes your choice of 2 sides, a biscuit and medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-TendersCombo.png?q=75&w=1280",
                title: "3 PC. TENDERS COMBO",
                price:800,
                describe:"Enjoy 3 of our Extra Crispy™ fried chicken tenders, a side of your choice, dipping sauce, biscuit and a medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-TendersCombo.png?q=75&w=1280",
                title: "4 PC. TENDERS COMBO",
                price:900,
                describe:"Enjoy 3 of our Extra Crispy™ fried chicken tenders, a side of your choice, dipping sauce, biscuit and a medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-TendersCombo.png?q=75&w=1280",
                title: "8 PC. TENDERS COMBO",
                price:1600,
                describe:"Enjoy 3 of our Extra Crispy™ fried chicken tenders, a side of your choice, dipping sauce, biscuit and a medium drink."
              },
        ]
        showdata(obj);
    }
    else if(i==6){
        let obj=[
            {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1024",
                title: "10 PC. SAUCY NUGGETS COMBO",
                price: 450,
                describe:
                  "Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame.",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggets.png?q=75&w=1024",
                title: "10 PC. SAUCY NUGGETS",
                price: 1050,
                describe:
                  "Discover the perfect harmony of flavors with our all-new KFC® Saucy Nuggets! Enjoy 10 of our juicy, hand-breaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame. Order online at a KFC® near you!",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-4pcPiePoppers.png?q=75&w=1024",
                title: "APPLE PIE POPPERS",
                price: 850,
                describe:
                  "Indulge in the sweet delight of our new mini Apple Pie Poppers when you order online at your local KFC®. These miniature pie snacks are everything you love about fruity pie flavor in a fun, handheld apple pie treat. This dessert is filled with warm apple pie filling and wrapped in a buttery, flaky crust. Available in 4 or 10 counts for easy snacking. Grab this apple pie dessert on the go when you order online from a KFC® near you!",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1024",
                title: "10 PC. SAUCY NUGGETS COMBO",
                price: 450,
                describe:
                  "Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame.",
              },
              {
                image:
                  "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggets.png?q=75&w=1024",
                title: "10 PC. SAUCY NUGGETS",
                price: 1050,
                describe:
                  "Discover the perfect harmony of flavors with our all-new KFC® Saucy Nuggets! Enjoy 10 of our juicy, hand-breaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame. Order online at a KFC® near you!",
              }
              
        ]
        showdata(obj);
    }
    if (i == 7) {
        let obj = [
          {
            image:
              "https://digitaleat.kfc.com/menus/image/bare/kfc-TasteofKFCValue2pc.png?q=75&w=1024",
            title: "TASTE OF KFC 2 PC. DEAL",
            price: 850,
            describe:
              "Part of our Taste of KFC Deals, this homestyle fried chicken meal includes 2 pieces of our crispy and juicy dark meat chicken (1 drum stick & 1 thigh), a side of our creamy mashed potatoes and gravy, and an extra buttery biscuit. Order online for delivery or pick up at a KFC® near you for a quick lunch or dinner!",
          },
          {
            image:
              "https://digitaleat.kfc.com/menus/image/bare/kfc-TasteofKFCValue2pc.png?q=75&w=1024",
            title: "TASTE OF KFC 2 PC. DEAL",
            price: 550,
            describe:
              "Part of our Taste of KFC Deals, this homestyle fried chicken meal includes 2 pieces of our crispy and juicy dark meat chicken (1 drum stick & 1 thigh), a side of our creamy mashed potatoes and gravy, and an extra buttery biscuit. Order online for delivery or pick up at a KFC® near you for a quick lunch or dinner!",
          },
          {
            image:
              "https://digitaleat.kfc.com/menus/image/bare/kfc-6pcTasteofKFCMeal.png?q=75&w=1024",
            title: "TASTE OF KFC 6 PC. DEAL",
            price: 250,
            describe:
              "Treat yourself to all of your KFC® favorites with our 6pc. Taste of KFC® Fried Chicken Meal! This combo includes 6 pieces of our hand breaded crispy fried chicken (2 drums, 2 thighs, 1 breast, 1 wing) with individual sides of our cheesy Mac & Cheese, freshly prepared Coleslaw, creamy Mashed Potatoes & Gravy, Sweet Corn and 4 of our extra buttery biscuits. Place your order online for delivery or pick up at your local KFC® and enjoy our world famous fried chicken near you!",
          },
          {
            image:
              "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1024",
            title: "10 PC. SAUCY NUGGETS COMBO",
            price: 450,
            describe:
              "Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame.",
          },
          {
            image:
              "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggets.png?q=75&w=1024",
            title: "10 PC. SAUCY NUGGETS",
            price: 1050,
            describe:
              "Discover the perfect harmony of flavors with our all-new KFC® Saucy Nuggets! Enjoy 10 of our juicy, hand-breaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame. Order online at a KFC® near you!",
          },
          {
            image:
              "https://digitaleat.kfc.com/menus/image/bare/kfc-4pcPiePoppers.png?q=75&w=1024",
            title: "APPLE PIE POPPERS",
            price: 850,
            describe:
              "Indulge in the sweet delight of our new mini Apple Pie Poppers when you order online at your local KFC®. These miniature pie snacks are everything you love about fruity pie flavor in a fun, handheld apple pie treat. This dessert is filled with warm apple pie filling and wrapped in a buttery, flaky crust. Available in 4 or 10 counts for easy snacking. Grab this apple pie dessert on the go when you order online from a KFC® near you!",
          },
          {
            image:
              "https://digitaleat.kfc.com/menus/image/bare/kfc-BlackberryLemonade.png?q=75&w=1024",
            title: "BLACKBERRY LEMONADE",
            price: 500,
            describe:
              "Looking for a fun twist on a a classic refreshment? Try our signature Blackberry Lemonade for a limited time. This ice cold lemonade delivers the perfect balance of sweet and tart flavors in every sip by combining the refreshing taste of our famous Colonel's Lemonade with a splash of crisp blackberry puree. Order online for delivery or pick up with your next fried chicken meal from a KFC® near you!",
          },
          {
            image:
              "https://digitaleat.kfc.com/menus/image/bare/kfc-FillUpBox.png?q=75&w=1024",
            title: "FILL UP BOX",
            price: 1000,
            describe:
              "If you're looking for your next easy dinner idea, KFC® has you covered with our all-new Fill Up Box. This chicken dinner deal includes 4 pieces of our mouthwatering fried chicken, 12 of our 100% white meat chicken nuggets, a side of our crispy Secret Recipe French Fries, 4 buttermilk biscuits and 4 dipping sauces of your choice - all at a great price! Enjoy this convenient meal when ordering online for delivery or pick up at a KFC® near you!",
          },
        ];
  
        showdata(obj);
      }
    else if(i==8){
        let obj=[
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1280",
                title: "10 PC. SAUCY NUGGETS COMBO",
                price:10000,
                describe:"Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1280",
                title: "8 PC. SAUCY NUGGETS COMBO",
                price:8000,
                describe:"Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1280",
                title: "12 PC. SAUCY NUGGETS COMBO",
                price:12000,
                describe:"Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-2BWCombo.png?q=75&w=1280",
                title: "2 PC. CHICKEN COMBO",
                price:500,
                describe:"Get your hands on 2 pieces of our freshly prepared, world famous fried chicken with our 2 Piece Fried Chicken Combo! Choose between our Variety Combo (1 breast and 1 wing) or our all-dark meat Drum & Thigh Combo (1 drum and 1 thigh). Includes a side of your choice, biscuit and medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-2BWCombo.png?q=75&w=1280",
                title: " PC. CHICKEN COMBO",
                price:750,
                describe:"Get your hands on 2 pieces of our freshly prepared, world famous fried chicken with our 2 Piece Fried Chicken Combo! Choose between our Variety Combo (1 breast and 1 wing) or our all-dark meat Drum & Thigh Combo (1 drum and 1 thigh). Includes a side of your choice, biscuit and medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-2BWCombo.png?q=75&w=1280",
                title: "4 PC. CHICKEN COMBO",
                price:1000,
                describe:"Get your hands on 2 pieces of our freshly prepared, world famous fried chicken with our 2 Piece Fried Chicken Combo! Choose between our Variety Combo (1 breast and 1 wing) or our all-dark meat Drum & Thigh Combo (1 drum and 1 thigh). Includes a side of your choice, biscuit and medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-3pcBox2B1W.png?q=75&w=1280",
                title: "3 PC. CHICKEN BIG BOX MEAL",
                price:3000,
                describe:"Order online and enjoy 3 pieces of our world famous fried chicken in the KFC® recipe of your choice! Choose between our Variety Box Meal (2 breasts and 1 wing) or our all-dark meat Drum & Thigh Box Meal (2 thighs and 1 drum). This box combo includes your choice of 2 sides, a biscuit and medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-TendersCombo.png?q=75&w=1280",
                title: "3 PC. TENDERS COMBO",
                price:800,
                describe:"Enjoy 3 of our Extra Crispy™ fried chicken tenders, a side of your choice, dipping sauce, biscuit and a medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-TendersCombo.png?q=75&w=1280",
                title: "4 PC. TENDERS COMBO",
                price:900,
                describe:"Enjoy 3 of our Extra Crispy™ fried chicken tenders, a side of your choice, dipping sauce, biscuit and a medium drink."
              },
            {
                image:"https://digitaleat.kfc.com/menus/image/bare/kfc-TendersCombo.png?q=75&w=1280",
                title: "8 PC. TENDERS COMBO",
                price:1600,
                describe:"Enjoy 3 of our Extra Crispy™ fried chicken tenders, a side of your choice, dipping sauce, biscuit and a medium drink."
              },
        ]
        showdata(obj);
    }
    else if (i == 9) {
        let obj = [
          {
            image:
              "https://digitaleat.kfc.com/menus/image/bare/kfc-TasteofKFCValue2pc.png?q=75&w=1024",
            title: "TASTE OF KFC 2 PC. DEAL",
            price: 850,
            describe:
              "Part of our Taste of KFC Deals, this homestyle fried chicken meal includes 2 pieces of our crispy and juicy dark meat chicken (1 drum stick & 1 thigh), a side of our creamy mashed potatoes and gravy, and an extra buttery biscuit. Order online for delivery or pick up at a KFC® near you for a quick lunch or dinner!",
          },
          {
            image:
              "https://digitaleat.kfc.com/menus/image/bare/kfc-TasteofKFCValue2pc.png?q=75&w=1024",
            title: "TASTE OF KFC 2 PC. DEAL",
            price: 550,
            describe:
              "Part of our Taste of KFC Deals, this homestyle fried chicken meal includes 2 pieces of our crispy and juicy dark meat chicken (1 drum stick & 1 thigh), a side of our creamy mashed potatoes and gravy, and an extra buttery biscuit. Order online for delivery or pick up at a KFC® near you for a quick lunch or dinner!",
          },
          {
            image:
              "https://digitaleat.kfc.com/menus/image/bare/kfc-6pcTasteofKFCMeal.png?q=75&w=1024",
            title: "TASTE OF KFC 6 PC. DEAL",
            price: 250,
            describe:
              "Treat yourself to all of your KFC® favorites with our 6pc. Taste of KFC® Fried Chicken Meal! This combo includes 6 pieces of our hand breaded crispy fried chicken (2 drums, 2 thighs, 1 breast, 1 wing) with individual sides of our cheesy Mac & Cheese, freshly prepared Coleslaw, creamy Mashed Potatoes & Gravy, Sweet Corn and 4 of our extra buttery biscuits. Place your order online for delivery or pick up at your local KFC® and enjoy our world famous fried chicken near you!",
          },
          {
            image:
              "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1024",
            title: "10 PC. SAUCY NUGGETS COMBO",
            price: 450,
            describe:
              "Order for delivery or pick up at a KFC® near you and grab our all-new KFC® Saucy Chicken Nugget Meal! Enjoy 10 of our juicy, handbreaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. This saucy chicken nugget meal comes with our secret recipe fries, an extra buttery biscuit and a medium drink of your choice. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame.",
          },
          {
            image:
              "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggets.png?q=75&w=1024",
            title: "10 PC. SAUCY NUGGETS",
            price: 1050,
            describe:
              "Discover the perfect harmony of flavors with our all-new KFC® Saucy Nuggets! Enjoy 10 of our juicy, hand-breaded crispy chicken nuggets tossed in your choice of one of our flavorful sauces. Nashville Hot: Smoky, spicy and crispy, with an even ratio of flavor and smokiness to heat that brings balance; Georgia Gold: A honey-mustard style BBQ sauce made with vinegar, honey and savory seasoning. It’s tangy with a flavorful punch.; Sticky Chicky Sweet ‘n Sour Sauce: A balanced combination of sweet and tangy flavors including pineapple, garlic, vinegar and chili; Honey Siracha: A sweet heat sauce using a blend of red chili peppers, garlic and honey; Korean BBQ: A sweet and savory umami sauce with soy sauce, garlic, sugar and sesame. Order online at a KFC® near you!",
          },
          {
            image:
              "https://digitaleat.kfc.com/menus/image/bare/kfc-4pcPiePoppers.png?q=75&w=1024",
            title: "APPLE PIE POPPERS",
            price: 850,
            describe:
              "Indulge in the sweet delight of our new mini Apple Pie Poppers when you order online at your local KFC®. These miniature pie snacks are everything you love about fruity pie flavor in a fun, handheld apple pie treat. This dessert is filled with warm apple pie filling and wrapped in a buttery, flaky crust. Available in 4 or 10 counts for easy snacking. Grab this apple pie dessert on the go when you order online from a KFC® near you!",
          },
          {
            image:
              "https://digitaleat.kfc.com/menus/image/bare/kfc-BlackberryLemonade.png?q=75&w=1024",
            title: "BLACKBERRY LEMONADE",
            price: 500,
            describe:
              "Looking for a fun twist on a a classic refreshment? Try our signature Blackberry Lemonade for a limited time. This ice cold lemonade delivers the perfect balance of sweet and tart flavors in every sip by combining the refreshing taste of our famous Colonel's Lemonade with a splash of crisp blackberry puree. Order online for delivery or pick up with your next fried chicken meal from a KFC® near you!",
          },
          {
            image:
              "https://digitaleat.kfc.com/menus/image/bare/kfc-FillUpBox.png?q=75&w=1024",
            title: "FILL UP BOX",
            price: 1000,
            describe:
              "If you're looking for your next easy dinner idea, KFC® has you covered with our all-new Fill Up Box. This chicken dinner deal includes 4 pieces of our mouthwatering fried chicken, 12 of our 100% white meat chicken nuggets, a side of our crispy Secret Recipe French Fries, 4 buttermilk biscuits and 4 dipping sauces of your choice - all at a great price! Enjoy this convenient meal when ordering online for delivery or pick up at a KFC® near you!",
          },
        ];
  
        showdata(obj);
      }
  });
});
