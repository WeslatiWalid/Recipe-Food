//array of Data
var meals = [
  {
    meal: "Burek",
    imgSrc: "./img/Burek.jpg",
    par: "Fry the finely chopped onions and minced meat in oil.Add the salt and pepper.Grease a round baking tray and put a layer of pastry in it.Cover with a thin layer of filling and cover this with another layer of filo pastry which must be well coated in oil.Put another layer of filling and cover with pastry.When you have five or six layers, cover with filo pastry, bake at 200ºC/392ºF for half an hour and cut in quarters and serve."
  },
  {
    meal: "Chakchouka",
    imgSrc: "./img/Chakchouka.jpg",
    par: "In a large cast iron skillet or sauté pan with a lid, heat oil over medium high heat.Add the onion and sauté for 2-3 minutes, until softened.Add the peppers and garlic, and sauté for an additional 3-5 minutes.Add the tomatoes, cumin, paprika, salt, and chili powder.Mix well and bring the mixture to a simmer.Reduce the heat to medium low and continue to simmer, uncovered, 10-15 minutes until the mixture has thickened to your desired consistency.(Taste the sauce at this point and adjust for salt and spice, as desired.) Using the back of a spoon, make four craters in the mixture, large enough to hold an egg.Crack one egg into each of the craters.Cover the skillet and simmer for 5-7 minutes, until the eggs have set.Serve immediately with crusty bread or pita."
  },
  {
    meal: "Chivito uruguayo",
    imgSrc: "./img/Chivito uruguayo.jpg",
    par: "Crush the meat so that it is finite and we put it on a griddle to brown.Put the eggs, bacon and ham to fry.Cut the bread in half, put the beef brisket, the fried eggs, the bacon, the ham, the mozzarella, the tomato and the lettuce.Cover with the other half of the bread and serve."
  },
  {
    meal: "Chocolate Souffle",
    imgSrc: "./img/Chocolate Souffle.jpg",
    par: "Heat oven to 220C/fan 200C/gas 7 and place a baking tray on the top shelf.For the sauce, heat the cream and sugar until boiling.Remove from the heat, stir in the chocolate and butter until melted, then keep warm.Brush 6 x 150ml ramekins with melted butter, sprinkle with the 2 tbsp caster sugar, then tip out any excess.Melt the chocolate and cream in a bowl over a pan of simmering water, cool, then mix in the egg yolks.Whisk the egg whites until they hold their shape, then add the sugar, 1 tbsp at a time, whisking back to the same consistency.Mix a spoonful into the chocolate, then gently fold in the rest.Working quickly, fill the ramekins, wipe the rims clean and run your thumb around the edges.Turn oven down to 200C/fan 180C/gas 6, place the ramekins onto the baking tray, then bake for 8-10 mins until risen with a slight wobble.Don’t open the oven door too early as this may make them collapse.Once the soufflés are ready, dust with icing sugar, scoop a small hole from their tops, then pour in some of the hot chocolate sauce.Replace the lids and serve straight away."
  },
  {
    meal: "Fettuccine Alfredo",
    imgSrc: "./img/Fettuccine Alfredo.jpg",
    par: "Cook pasta according to package instructions in a large pot of boiling water and salt.Add heavy cream and butter to a large skillet over medium heat until the cream bubbles and the butter melts.Whisk in parmesan and add seasoning (salt and black pepper).Let the sauce thicken slightly and then add the pasta and toss until coated in sauce.Garnish with parsley, and it's ready."
  },
  {
    meal: "Mushroom soup with buckwheat",
    imgSrc: "./img/Mushroom soup with buckwheat.jpg",
    par: "Chop the onion and garlic, slice the mushrooms and wash the buckwheat.Heat the oil and lightly sauté the onion.Add the mushrooms and the garlic and continue to sauté.Add the salt, vegetable seasoning, buckwheat and the bay leaf and cover with water.Simmer gently and just before it is completely cooked, add pepper, sour cream mixed with flour, the chopped parsley and vinegar to taste."
  },
  {
    meal: "Fresh sardines",
    imgSrc: "./img/Fresh sardines.jpg",
    par: "Wash the fish under the cold tap.Roll in the flour and deep fry in oil until crispy.Lay on kitchen towel to get rid of the excess oil and serve hot or cold with a slice of lemon."
  },
  {
    meal: "Pumpkin Pie",
    imgSrc: "./img/Pumpkin Pie.jpg",
    par: "Place the pumpkin in a large saucepan, cover with water and bring to the boil.Cover with a lid and simmer for 15 mins or until tender.Drain pumpkin; let cool.Heat oven to 180C / 160C fan/ gas 4.Roll out the pastry on a lightly floured surface and use it to line a 22cm loose - bottomed tart tin.Chill for 15 mins.Line the pastry with baking parchment and baking beans, then bake for 15 mins.Remove the beans and paper, and cook for a further 10 mins until the base is pale golden and biscuity.Remove from the oven and allow to cool slightly.Increase oven to 220C / 200C fan / gas 7.Push the cooled pumpkin through a sieve into a large bowl.In a separate bowl, combine the sugar, salt, nutmeg and half the cinnamon Mix in the beaten eggs, melted butter and milk, then add to the pumpkin purée and stir to combine.Pour into the tart shell and cook for 10 mins, then reduce the temperature to 180C / 160C fan / gas 4.Continue to bake for 35 - 40 mins until the filling has just set.Leave to cool, then remove the pie from the tin.Mix the remaining cinnamon with the icing sugar and dust over the pie.Serve chilled."
  },
{
  meal: "Croatian Bean Stew.jpg",
    imgSrc: "./img/Croatian Bean Stew.jpg",
      par: "Heat the oil in a pan.Add the chopped vegetables and sauté until tender.Take a pot, empty the beans together with the vegetables into it, put the sausages inside and cook for further 20 minutes on a low heat.Or, put it in an oven and bake it at a temperature of 180ºC/350ºF for 30 minutes.This dish is even better reheated the next day."
},
{
  meal: "Walnut Roll Gužvara",
    imgSrc: "./img/Walnut Roll Gužvara.jpg",
      par: "Mix all the ingredients for the dough together and knead well.Cover the dough and put to rise until doubled in size which should take about 2 hours.Knock back the dough and knead lightly.Divide the dough into two equal pieces; roll each piece into an oblong about 12 inches by 8 inches.Mix the filling ingredients together and divide between the dough, spreading over each piece.Roll up the oblongs as tightly as possible to give two 12 inch sausages.Place these side by side, touching each other, on a greased baking sheet.Cover and leave to rise for about 40 minutes.Heat oven to 200ºC (425ºF).Bake for 30-35 minutes until well risen and golden brown.Bread should sound hollow when the base is tapped.Remove from oven and brush the hot bread top with milk.Sift with a generous covering of icing sugar."
}
]

//high order func
var each = function (coll, func) {
  if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
          func(coll[i], i)
      }
  }
  else {
      for (var key in coll) {
          func(coll[key], key)
      }
  }
}
var filter = function (array, predicate) {
  var acc = [];
  each(array, function (e, i) {
      if (predicate(e, i)) {
          acc.push(e)
      }
  })
  return acc;
}
//display all the img element on the second page
each(meals, function (e, i) {
  $("#meal").append('<div class="grid-item"><img id="' +i+ '" src="' + e.imgSrc + '" class="imgHome"/></div>')
})


//function for parallex scrolling
$(window).on("scroll", function () {
  var parallax = $(".parallax");
  var scrollPosition = $(this).scrollTop()
  console.log(scrollPosition)
  parallax.css("transform", "translateY(" + scrollPosition * 0.5 + "px" + ")")
})
//function for the sticky bar
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 80) {
      $("header").addClass("sticky")
    } else {
      $("header").removeClass("sticky")
    }
  })
})

$(document).on("click",function (e) {
  if(e.target.tagName==="IMG") {
     var targ =  $(e.target).attr("id")//the id is (i)
     console.log(targ)
      $("#meal").replaceWith('<div style="width:1500; margin:0 auto;" class="grid-item">'+//replacing the div with the clicked element
      '<h1>'+meals[targ].meal+'</h1>'+//the meal name "title"
      '<div><img  src="' + meals[targ].imgSrc + '" class="imgDetails"/></div> '+//the targeted meal img.
      '<div class="content"><p class="paracss">'+meals[targ].par+'</p> </div>')//the content of the targeted meal "instruction of the recipe".
  }})
 


  $(".logo").on("click",function(){//returning to the Home page by clicking on the logo.
  var url="/index.html"
    $(location).attr('href',url)

    
  })
var filt =[]
  $("#Btn").on("click",function(e){
    filt= filter(meals,function(e,i){
        var term=$("#searchTerm1").val()
       return e.meal.toLowerCase()===term.toLowerCase()
    })
   
    $("#mls").empty()
  each(filt,function(e,i){
  $("#mls").append('<div style="width:1500; margin:0 auto;" class="grid-item">'+//replacing the div with the clicked element
  '<h1>'+e.meal+'</h1>'+//the meal name "title"
  '<div><img  src="' + e.imgSrc + '" class="imgDetails"/></div> '+//the targeted meal img.
  '<div class="content"><p class="paracss">'+e.par+'</p> </div>')
})
  

})
