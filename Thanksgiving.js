const thanksgivingMeal = {
    starter : { 
        fruit: "honeydew melon ",
        wine: "moscato",
        calories: 180
    },
    entree : {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables : {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
            },
        sides : {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
            },
        calories: 450
        },
    dessert : {
        ice_cream: "pumpkin-vanilla ice-cream",
        cake: "frosted pumpkin pie",
        calories: 300
    },
    total_cost : 25.0,
    senior_discount: 10,

    enjoyGreeting : function() {
        let welcome = document.querySelector(".enjoy");
        welcome.textContent = "Enjoy Your Thanksgiving This Year!";
    },
    prettyPrint : function(){
       
       let menuString = document.querySelector(".meal");
       menuString.textContent = "Start your meal with " +this.starter.fruit + "a glass of " +this.starter.wine+ 
       ". Help yourself to " +this.entree.meat+ " or " + this.entree.alt+ " with " +this.entree.vegetables.salad+ ", " 
       +this.entree.vegetables.greens+ " and " + this.entree.vegetables.potatoes+ ".";
       menuString.textContent += " Have a side! Plenty of " + this.entree.sides.bread+ " and " +this.entree.sides.pasta+ 
       ". Finish your meal with a sweet - " +this.dessert.ice_cream+ ", " +this.dessert.cake;
    },

    totalPrice(isSenior) {
        let seniorPricing = document.querySelector(".seniorPrice");
        senior = prompt("Are you a senior? Yes or No");
        if (senior=="yes") {
            seniorPricing.textContent = "Seniors get a 10% discount to the total cost for your Thanksgiving meal. $ " +this.total_cost*(1-(this.senior_discount/100));
        }
        else {
            seniorPricing.textContent = "Seniors get a 10% discount, the total cost for your Thanksgiving meal? Adults: $" 
            + this.total_cost+", Seniors: $"+(this.total_cost*(1-(this.senior_discount/100)));
        }
    },

    totalCalories : function() {
        // Add the total calories
        let totCalInfo = document.querySelector(".calories");
        totCalInfo.textContent = "Worried about calories? Total damage is:  ";
        totCalInfo.textContent += this.starter.calories + this.entree.calories + this.dessert.calories;
    },

    caloriesFrom: function(indicator) {
        // get the total calories for the indicator
        // 1 - starter, 2 - entree, 3 - dessert
        let calFromInfo = document.querySelector(".calories");
        calFromInfo.textContent += " (Starter: "+this.starter.calories;
        calFromInfo.textContent += ", Entree: "+this.entree.calories;
        calFromInfo.textContent += ", Dessert: "+this.dessert.calories+")";
    }
};

thanksgivingMeal.enjoyGreeting();
thanksgivingMeal.prettyPrint();
thanksgivingMeal.totalPrice();
thanksgivingMeal.totalCalories();
thanksgivingMeal.caloriesFrom(1);