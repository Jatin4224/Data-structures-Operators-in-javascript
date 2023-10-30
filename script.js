 'use strict';

 // Data needed for a later exercise
 const flights =
   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

 // Data needed for first part of the section
 const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenze, Italy',
   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

   order: function(starterindex, mainIndex) {
     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   }
   openingHours: {
     thu: {
       open: 12,
       close: 22,
     },
     fri: {
       open: 11,
       close: 23,
     },
     sat: {
       open: 0, // Open 24 hours
       close: 24,
     },
   },
 };
 /*
 //(1)DESTRUCTURING ARRAYS
 // so DESTRUCTURING is an ESx feature and its basically way of unpacking values from an array into separate variables.so in other words the DESTRUCTURINGis to break a complex data structure down into a smaller data structure like a variable.
 // so for arrays we use DESTRUCTURING to retreive elements from the array and store them into variables in a very easy way
 const arr = [2, , 4];
 const a = arr[0];
 const b = arr[1];
 const c = arr[2];

 const [x, y, z] = arr;//wehenver js sees this here on  the left side of the equal sign ,it knows that it should do DESTRUCTURING.wehn u do these please dont forget to actually also declare the variables using const.
 console.log(x, y, z);
 //notice that even though we did DESTRUCTURING which sounds kind of distractive right?the original array is ofcourse not affected.so we are not destroying the array.
 console.(arr);

 //now letss work a little bit with the data from our restaurant.
 const[firt , , second] = restaurent.categories;//so now the second element will be skipped so then this second year simply becomes this third element .and so like this we dont have to create a variables for all the stuff that we might not even need.

 console.log(first , second);

 //we use DESTRUCTURING to do a lot of cool things,or example,let's say that the owner of restaurent now decided to switch the main and the secondary category.so right now the primary is italian nd secondary is vegetarian.
 let [main, , secondary] = restaurent.categories;
 console.log(main, secondary);
 //switching variables without DESTRUCTURING
 // const temp = main;
 // main = secondary;
 // secondary = temp;
 // console.log(main , secondary)
  //switching variable with DESTRUCTURING
  [main, secondary] = [secondary, main];//we would first start by creating a new array with the two variables inverted([secondary, main]) and then we can simply destruct them so main and secondary equals the destructing of this array now we're not using let or const here because we are simply reassigning the values of the two variables.
  console.log(main, secondary);
  //op-vegetarian italian

 //another trick with destructuring is that we can have a function, return an arrayand then we can immediately destruct the result into different variables.and so this basically allow us to return multiple values from the function.
 //receuve 2 return values from a function
 const  [starter, mainCourse] = restaurant.order(2, 0);
 console.log(starter, .mainCourse);
 //op - Garlic Bread Pizza

 //what happens if we have nested array
 //nested mtlb ek array k ander dusra array hona
 const nested  = [2, 4, [5,6]];
 // const [i, ,j] = nested;
 // console.log(i, j);
 //op-2 [5, 6]
 //but what if we actually wanted all the individual value?well then we would essentially have to do destructing inside of destructing.
 const [i, ,[j, k]] = nested;
 console.log(i, j, k);
 //op - 2 5 6

 //
 //default values
  //so we can also set default values for the variables when we are extracting them.and thats gonna be very useful in the case that we dont know the lenght of the array,this can sometimes happen in real world applications,eg - API
  const[p, q, r] = [8,9];
  console.log(p, q, r);
  //op- 8 9 undefined
  //we can set default values.
  const[p=1, q=1, r=1] = [8,9];
  console.log(p, q, r);
  //op - 8 9 1

  const[p=1, q=1, r=1] = [8];
  console.log(p, q, r);
  //op - 8 1 1\


  //(2)destructuring objects
  const {name, openingHours, categories} = restaurant;
  console.log(name,openingHours, categories);
  //op- ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
  //this is an extremely useful addition to the language especially when we deal with the result of an API call,which basically means to get data,from another web applications like wheaher data or data about movies or something like that and this data usually comes in the form of objects basically.

 //what if we wanted the variables names to be different from the property names?
 const {name: restaurentsName, openingHours: hours, categories: tags} = restaurant;
 console.log(restaurantName, hours, tags);
 //op- ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] //these three are actually exact same name but we were able to give them new variable names.which again that's gonna be immensely helpful when dealing with third-party data.

 //another useful feature for when we are dealing with third- party data like that.so like an object that we get from somewhere else,for example, an API call, as i was just explaining.it an be really useful to have default values for the case that we're trying to read a property that does not exist on the object.so usually then we get an undefined.
 //for example if we were trying to say restaurent.menu, this would be undefined because there is no property called menu.and so we can set default values
 //DEFAULT values
 const{ menu = [], starterMenu: starters = []} = restaurant;
 console.log(menu, starters);
 // op - []  //idhar undefined aata upr ka trick nahi lgate to
     //  ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
 //keep in mind that this is especially helpful when we do not have or data hard-coded like we have it here.but in the  real world we usually get the data from somewhere else.and then we might not always know how exactly the data looks like.and then its useful to set defaults like this.


 //Mutating variables while destructing objects
 let a = 111;
 let b = 999;
 const obj = { a:23,b: 7, c: 14 };

 // {a, b} = obj; //error aayega syntax kyuki {}se start karre h error solve krne ko parentheseis m put krdo
 ({ a,b } = obj);//destructing
 console.log(a, b);
 //op - 23 7

 //NESTED objects
 // let's say we wanted to create two variables,open nd close.nd these should contain the open and close hours for friday.
  const { fri: {open, close  } = openingHours;
  console.log(open, close);
  //op 11 23

  //practical application example
  // so many times in javascript we have functions with a lot of parameters.But then it can be hard to know the order of parameters for someone that is using this function.and so instead of defining the paramtersmanually,we can just pass an object into the function as an argument,and the function then immediately destructure that object.
  orderDelivery: function({ starterIndex, mainIndex,time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}will be delivered to ${adress} at ${time}`
    );
 }};
 restaurent.orderDelivery9({
   time: '22:30',
   address: 'landmark city,kota , 21',
   main Index: 2,
   starterIndex: 2,
 });


 // (3)The Spread Operator(...)
 // so we can use the spread operator to basically exapnd an array into all its elements.so bacically unpacking all the array elements at one.
 const arr = [7, 8, 9];
 const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
 console.log(badNewArr);


 const newArr = [1, 2, ...arr];
 console.log(newArr);
 //op- [1,2, 7, 8, 9]
 //1)we can use the spread operator whenever we would otherwise write multiple values seprated by commas.and that situation happens whenever we write array literal like we did up here.
 //2)we can use spread operator when we pass arguments into functions.for example
 console.log(...newArr);
 console.log(1, 2, 7, 8, 9);
 //op- 1 2 7 8 9

 //one more example so in this example,we will create an array with one more food item in the main menu array.so that main menu is here at restaurent dot main menu,and so basically we want to create a new menu here.
 const newMenu = [...restaurant.mainMenu, 'paneertikka'];
 console.log(newMenu);//op-["pizza", "pasta", "Risotto","paneertikka"]
 //here we are writing a new array but simply based on exapnding this array,and then adding another element to it.
 //note- the big difference is that the spread operator takes all the elements from the array and it also doesn't create new variables.and as a consequence,we can only use it in places where we would otherwise write values seprated by commas.

 //two important use cases of the pread operator
 // 1)to create shallow copies of arrays
 const mainMenuCopy = [...restaurent.mainMenu];


 // 2)to merge two arrays together.
 const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
 console.log(menu);
 //op-  ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'"pizza", "pasta", "Risotto"]


 //Iterables: arrays, strings, maps, set.NOT objects.spread operator works on all iterables.
 const str ='jatin';
 const letters = [...str,' ','s.'];
 console.log(letters);
 console.log(...str);
 console.log(...str);
 //console.log(`${...str} sharma`);//note-error-multiple values separated by a comma are usually only expected when we pass arguments into a function,or when we build a new array.


 //real world example-now enough with building arrays.let's now actually write our own function that accepts multiple arguments and then use the spread Operator to actually pass those arguents.
 // so lets say that we want a method to order just pasta nd the pasta a;ways need to have exactly three incredients.
 // so lets say order pasta,and it's gonna be function
 ordrPasta: function(ing1, ing2, ing3){
   conosle.log(`here is your tasty pasta with ${ing1}, ${ing2}, ${ing3}`);
 }};
 // now what i want to do here is to actually get these ingredients from a prompt window.
 const ingredients = [prompt("lets's make pasta! Ingredient 1?" ),
 promt('Ingredient 2?'),
 promt('Ingredient 3?'),
 ];
 // op-["a","b","c"]//we now get these array inrgedients with a,b and c,which are three strings that we just wrote there.
 // and now,how should we actually call the order pasta function?

 restaurant.orderPasta(incredients[0], incredients[1], incredients[2]);//normal method
 restaurant.orderPasta(...ingredients);//mentos method (using spread operator)
 //op- suppose we have entered paneer,cheese and sweet corn
     // op-here is oyur tasty pasta with paneer,cheese and sweetcorn

 // note-since ES 2018,the spread operator actually also works on objects,even though objects are not iterables.
 const newRestaurant = {foundedIn: 2002, ...restaurant, founder: 'charlie'}
 console.log(newRestaurant);
 //op-categories:[......vhi purana menu sb]
 founderIn: 2002
 founder: 'charlie'
 location: 'kota'
 //making copy
 const restaurantCopy = {...restaurant};
 restaurantCopy.name = 'amar punjabi';
 console.log(restaurantCopy.name);
 console.log(restaurant.name);
 //op- amar punjabi
 //    Classico Italiano

 // (4)REST PATTEN AND PARAMETERS
 // the rest pattern uses the exact same syntax however,to collect multiple elements and condense them into an array.so that's really the opposite of spread the spread operator is to unpack an array while rest is to pack elements into an array


 //1)FOr destructuring
 //spread operator on right side of =
 const arr = [1, 2, ... [3, 4]];

 //Rest operator on left side of =
 const [a, b, ...others] = [1 ,2 ,3 ,4 ,5];
 console.log(a, b, others);

 // another example here and this will show you that we can actually use the three dots on both sides of the assigment operator.
  const[pizza, , risotto, ...otherFood] = [...restaurant.main.Menu, ...restaurant.starterMenu];
  console.log(pizza, risotto, otherFood);
  //op- Pizza risotto
     // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
     //All right,so we get indeed the string pizza the string risotto and then all the rest of th elements that we did't select previously into their own variables and note here that the rest syntax collects all the array after the laast variable.
    //so in this case here risotto so it does not include any skipped elements so it's really just the rest of the elements again as i said,it does not include any skipped elements and os for that reason,the rest pattern always must be the last in the destructing assigment because otherwise how will javascript know until when it should  collect the rest of the array?
    //for example ,we could not do this
    const[pizza, , risotto, ...otherFood, bread] = [...restaurant.main.Menu, ...restaurant.starterMenu];
    console.log(pizza, risotto, otherFood);
    // op-error rest element must be last element

   //OBJECTS-
 // it also works indeed in objects.so the difference then of course,is that the remaining elements will be collected into a new object and not into a new array.

    // example-create an object only with these two.so only for thr week days and now that is easy to do all we need to do is to basically take out a saturday into its own variable and then we simply collect the rest into a new object and this we can call weekdays.


    //so now we know how the rest pattern works to collect elemtns in a destructing assigment.

    // 2) for functions
    const  add = function(...numbers) {
      let sum = 0;
      for (let i = 0; i < numbrrs.length; i++ ) sum +=
      numbers[i];
        console.log(sum);

    };

    add(2, 3);
    add(5, 3, 7, 2);
    add(8, 2, 5, 2, 1, 4);
 //op- 5
 // 17
 // 25

 const x = [23, 5, 7];
 add(...x);//spread operator


 //let's add yet another methodd here and thi ti,e tp method is gonna be about ordering pizza.

 orderPizza: function(mainIngredient, ...otherIngredients)//pizzas need to have at least one ingredient but the other ingredients are optional and for this rest parameters are perfect.
 //and then this is gonna work a little bit like destructuring again where this here basically we'll collect all of the rest of the  arguments into an array.
 console.log(mainIngredient);
 console.log(otherIngredients);

 //so now let's order pizza
 restaurant.orderPizza('cheese', 'onion', 'paneer',
 'sweetcorn');
 //op- cheese
 //'onion', 'paneer','sweetcorn'//so this is the result of the rest arguments.so, again the first arguement was stored into this main argument here and then all the remaining arguments that were passed in were simply stored into this array by the rest parameter of syntax.

 //we could also simply define just one.
 // let's order now pizza with only cheese
 restaurant.orderPizza('cheese');
 // op-cheese
 //   - []    //the ramining arguments here will simply be put in an empty array because of course there are none and so there is nothing to collect into the array but we still get an empty array.that we can work with if we want.


 //summary- the spread and rests syntax both look exactly the same but they work in opposite ways depending on where they are used so the spread operator is used where we would otherwise write values,separated by a comma.on the order hand the rest pattern is basically used where we would otherwise write varibales names seprated by commas.so again the rest pattern can be used where we would write variable names, seprated by commas and not values seprated by commas.
 // so it's a suble distinction,but this is how you know when and where to used spread and rest.

 // (5) Short Circuiting (&& and ||)
 // so up intil this point,we have used logical Operatorsonly to combine boolean values.but the truth is that we can do a lot more with the AND and OR operators.

 //THREE properties of logical operators.
 // 1) they can use any data type
 // 2) they can return any data type.
 // 3) they do something called short circuiting or as we also call it short circuit evaluation.

 console.log('---OR---');
 //OR- in the case of the OR operator , short circuitng means that is the first value is the truthy value it will immediately return that first value.
 console.log(3 || 'jatin');
 //op- 3 //that's exactly what we see here with the three which is truthy value.
 //so again, if the first oeprand is truthy here in the OR operator then the other operand will not even be evaluated.so javascript will not even take a look at it.and so that's what we mean with short circuiting.

 console.log(3 || 'jatin');
 console.log(''| 'jatin');
 console.log(true || 0);
 console.log(undefined || null);
 //op -
  //jatin //so that's because this here is a falsy value and so then, the second operand will actually be evaluated, and that's jatin and it will then be returned.and so here we see agin that the result of the OR operator doesn't have to be a boolean.
  //true //this first value here is truthy, and in fact,it's even true,and so therefore that will simply be the result of the operator.
  //null //undefined is a falsy value,and so we then go to the seconmd operand,so there is np short-circuiting,


  console.log(undefined || 0 || '' || 'hello' || 23 || null);
  //op- heloo //undefined falsy h ,uske aage fhr falsy uski next again falsy nd sirf hello truthy h so therefore it will short circuit the entire evaluation.



  Q)let's say that there might be a property on hthe restaurant object with the number of guests,we want to basically defines a variable based on this number of guests.and we want to set a default value if this doesn't exist.
  //so basically we want to do this
  restaurant.numGuests = 23;
  const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
  console.log(guests1);
  //op - 23

  //mentos method
  const guests2 = restaurant.numGuests || 10;
  console.log(guests2);
  ///so right now restaurant.numGuests IS UNDEFINED so it's a falsy value,so as we already know then the  second value here will be the result of the OR operator.so op-10
  //but now if we defined the value of restaurant.numGuests = 23 ,which is a truthy value and therefore the OR oeprator short circuits and it will become the return value.op-23

   //note- ek promblem h idhar
   restaurant.numGuests = 0;  //0- real number h fhr bhi print 10 hora h iska problem ka solution aage padhte h
   const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
   console.log(guests1);
   //op - 10

   //mentos method
   const guests2 = restaurant.numGuests || 10;
   console.log(guests2);//op-10


 console.log('---AND---');
 // the AND operator works int the exact opposite way
 console.log(0 && 'jatin');
 // op-0 //means that the AND operator short circuits,when the first value is falsy.and then immediately returns that falsy value without even evaluating the second operand.
 console.log(7 && 'jatin');
 //op- jatin //so when it is truthy,it means that the evaluation continues and then simply the last value is returned.


 console.log('hello' && 23 && null && 'jatin');//op-null

 //practical example
 if (restaurant.orderPizza) {
   restaurant.orderPizza('paneer', 'cheese');

 }
  restaurant.orderPizza && restaurant.orderPizza('paneer', 'cheese');



 // (6) The Nullish Coalescing Operator (??) introduced in ES2021
 //Nullish: null and undefined(NOT 0 pr '')
 //note- ek promblem h idhar
 restaurant.numGuests = 0;  //0- real number h fhr bhi print 10 hora h iska problem ka solution aage padhte h
 // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
 // console.log(guests1);
 //op - 10
 // solution of the problem
 const guestCorrect = restaurant.numGuests ?? 1


 // (7)Logical Assignment Operators
 // now,even more modern that the nullish Coalescing operator that we just talked about are three new so-called logical assigment operators that were introduced in ES 2021

 const rest1 = {
   name: 'amar punjabi'
   numGuests:20,
 };
 const rest1 = {
   name: 'ortus'
 owner: 'jatin'
 };

 //1) OR Assignment operator: thsi operator assigns a variable to a variable is currently falsy.
 rest1.numGuests = rest1.numGuests || 10;
 rest2.numGuests = rest2.numGuests || 10;
 // op - {name: 'amar punjabi' , numGuests:10}
 //      {name:'ortus', owner:'jatin', numGuests:10}

 // so, with that operator,we will be able to write the same thing basically in a more concise way.

 rest1.numGuests ||= 10;
 rest2.numGuests ||= 10;

 console.log(rest1);
 console.log(rest2);
 // OP-same upr wala

 //iF numGuests: 0;HOGA TO BHI VO 10 HI BTAYEGA VAHI SAME PROBLEM SO,IS PROBLEM K SOLVE KRNE K LYE NULLISH LOGICAL Operator USE KRNE KA.

 //(2) nullish assigment operator (NULL OR UNDEFINED)
 rest1.numGuests ??= 10;
 rest2.numGuests ??= 10;

 console.log(rest1);
 console.log(rest2);
  // (3)logical AND assigment operator:  asigns a value to  a  variable if it is currently truthy.

 rest1.owner = rest1.owner && '<ANONYMOUS>';
 // op-{name:'amar punjabi', numGuests: 0,owner: undefined}
 rest2.owner = rest2.owner && '<ANONYMOUS>';
 // op-  {name:'ortus', owner:'<ANNYMOUS>', numGuests:10}

 rest1.owner &&= <ANONYMOUS>;
 rest2.owner &&= <ANONYMOUS>;
 */

 // (8)Looping Arrays: The for-of Loop
 let 's say we wanted to loop over our entire menu here.so let'
 s start by creating again, the array with the entire menu.
 const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
 //now  you already know how to loop over this array with a regular for loop,so you would have to go through all the steps of setting up a counter, a condition and also update the counter and that's lot of work.
 //and so that's why we got the for-of loop now in which you don't need any of that.it's s much simpler

 for (const item of menu) console.log(item;
   //op-Focaccia
   // Bruschetta
   // Garlic Bread
   // Caprese Salad
   // Pizza
   // Pasta
   // Risotto

   //what's also great about the for-of loop,is that we can still use the continue and break keywords.

   // (9) Enhanced Object Literals
   // Now ES6 introduced three ways,which make it easier to write object literals like this.

   const openingHours = { //so now this is seprate variable
     thu: {
       open: 12,
       close: 22,
     },
     fri: {
       open: 11,
       close: 23,
     },
     sat: {
       open: 0, // Open 24 hours
       close: 24,
     },
   };
   //but now,we still want to have the opening hours object inside of the restaurant.
   so before ES6, we woulkd have to write openingHours: openingHours, //so then, the restaurant object is restored.
   //now the problem here is an d its not really a problem but it can become annoying is that this property name(openingHours) is exactly the same as the variable name(openingHours).and so with enhanced object literals you don't need to write this.

   //1)ES6 enhanced
   openingHours,

   // 2)writing methods enhancement
   // so the second enhancement to object literals is about writing methods.so in ES6 we no longer have to create a property and then set it to a function expression,
   //new syntax (tumhare upar h old syntax ya new syntax m jo sahi lagey vo use krna)
   order(starterindex, mainIndex) {
     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },
   // (3)ES6 enhancement-we can now actually compute(means like calculate) property names instead of having to write out manually and litrally
   const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
   const openingHours = {
     [weekdays[3]]: {
       open: 12,
       close: 22,
     },
     [weekdays[4]]: {
       open: 11,
       close: 23,
     },
     [weekdays[5]]: {
       open: 0, // Open 24 hours
       close: 24,
     },
   };

   //(10) Optional Chaining (?.)
   // let's say that we wanted to get the opening hours of our restaurant for monday.so let's qucikly check that.
   console.log(restaurant.openingHours.mon);
   // now,actually this property doesn't exist so you se this is undefined sp lets pretend that we dont know that this restaurant will open on monday or not.and that could be the case for example if this data came from a real web service.so a web api.and in thier service there cpuld be ,multiple restaurants and not all of them wiould open on monday.so we have no way of knowing is this particular restaurant would open on monday or not.but now let's go even further becuase we actually want to know exactly the hour on which the rest open on monday.

   //normal method
   if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
   //so it's not a big deal to having to add this logic here but it does make our code a little bit more unreadable and more messy.however,this is checking just for one property.so just for monday.but now imagine that opening hours here would also be optional.or in other words that maybe the restaurant object or in other words that maybe the restaurant oject can also not have opening hours.so,in this case we would have to check for both,right?so we do
   if (restaurant.openingHours && restaurant.openingHours.mon)
     console.log(restaurant.openingHours.mon.open);
   //nd this can get out of hand pretty qucikly when we have deeply nested objects with lots of optional properties.

   //so therefore ES2020 introduce a great solution,which is a feature called optional Chaining.and with optional chaining if a certain property does not exist,then undefined is returned immediately,and so that will then avoid that kind of error we saw earlier.

   //with optional Chaining
   console.log(restaurant.openingHours.mon?.open); //op-undefined
   //so here is how optional chaining works.so only if the property that is before this question mark here.so only if monday exists,then this open property will be read from there.
   but
   if not, then immediately undefined will be returned.so a property exists
   if it 's not null and not undefined.
   //without optional chaining
   console.log(restaurant.openingHours.mon.open); //op - error

   //and of course we can have multiple optional chainings.
   console.log(restaurant.openingHours?.mon?.open);


   //real world example
   const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
   //now we want to do is to loop over this ARRAY and then lock to the console,whether the restaurant is open or closed on each of the days.
   for (const day of days) {

     //  restaurant.openingHours.day //we cannot do this?because this is not an actual property name of the object.because this is not an actual property name of the object.and so rememeber if we want to use a variable name as the property name,basically we need to use the brackets notation.
     const open = restaurant.openingHours[day]?.open;
     console.log(`On ${day}, we open at ${open}`);
   }
   //op -
   // on mon, we open at undefined
   //  on tue, we open at undefined
   //      on wed, we open at undefined
   //         on thu, we open at 12
   //            on fri, we open at 11
   //               on sat, we open at 0
   //                  on sun, we open at undefined

   //thora or upgrade krdo sentence
   const open = restaurant.openingHours[day]?.open || 'closed'; console.log(`On ${day}, we open at ${open}`);
 }
 //op -
 // on mon, we open at closed
 //  on tue, we open at closed
 //      on wed, we open at closed
 //         on thu, we open at 12
 //            on fri, we open at 11
 //               on sat, we open at closed //problem
 //                  on sun, we open at closed

 //so we have a problem here and the problem is that the restaurant opens at zero.and so we have the same problem as before where zero is a falsy value.and so therefore it will then trigger this seconmd part (closed) of the operator.but we also saw the solution whic is to use the nullish coalescing operator.
 const open = restaurant.openingHours[day]?.open ?? 'closed';
 console.log(`On ${day}, we open at ${open}`);
 }
 //op -
 // on mon, we open at closed
 //  on tue, we open at closed
 //      on wed, we open at closed
 //         on thu, we open at 12
 //            on fri, we open at 11
 //               on sat, we open at 0 //problem solved
 //                  on sun, we open at closed


 //optional chaining on methods
 // so,essentially we can check if a method actually exists before we call it.
 console.log(restaurant.order?.(0, 1) ?? 'method does not exist'); //op - ["Focaccia" , "pasta"]
 console.log(restaurant.orderpaneer?.(0, 1) ?? 'method does not exist'); //op-method does not exist

 //optional chaining on ARRAYS
 const users = [{
   name: 'jatin',
   email: 'hello@jatin.com'
 }];

 console.log(users[0]?.name ?? 'user array empty'); //op - jatin
 const users = []; //in this case we get op - user array empty

 // and without optional chaining we have to write something like this

 if (user.length > 0) console.log(users[0].name);
 else console.log('user array empty'); //bhot lmba kaam

 //(11) Looping Objects: Object Keys, Values, and Entries.
 // so we learned about the for of loop to loop over a race,which remember is an iterable,but we can also loop over objects,which are not iterable,but in an indirect way.now we have different options here,and let's start by simply looping over property names.and so remember they are also called keys.now ultimately we will still have to use the for of loop to loop over the array,but again,we're going to do that in an indirect way.
 // so we're not actually looping over the objcet itself.instead,we're going to loop over,an array.

 //PROPERTY NAMES
 const properties = Object.keys(openingHours);
 console.log(properties);

 let openStr = `we are open on ${properties.length}days`;

 for (const day of properties) {
   openStr += `${day}`;
 }
 console.log(openStr); // op - we are open on 3 days: thu, fri, sat

 //BUT WHAT IF WE actually WANTED THE PROPERTY VALUES THEMSELVES?
 const values = Object.values(openingHours);
 console.log(values); //op- {open: 12, close: 22}
 // {open: 11, close: 23}
 // {open: 0, close: 24}

 //so before we had the keys,now we have the values and there is no needs to now loop over them again,because it's going to work exactly the same as here.
 //But now to really simulate,to loop over the entire object,we actually need the entries.
 //so entries is basically names plus the values together.and we already saw the entries before.

 //Entries on Object (entries on array phle karliya entries on object thora different h usse)



 //(13)------------SETS-----------
 // A JavaScript Set is a collection of unique values.
 // Each value can only occur once in a Set.
 // A Set can hold any value of any data type.

 //HOW TO CREATE A Set
 // You can create a JavaScript Set by:
 // Passing an Array to new Set()
 // Create a new Set and use add() to add values
 // Create a new Set and use add() to add variables

 const ordersSet = new Set(['Pasta', 'Pizza', 'paneer', 'Pizza', 'paneer', 'gulabjamun']); //A set can hold mixed  data types
 console.log(orderSet);
 //op- {'Pasta','Pizza', 'paneer'}//all dupliates are gone

 //just like arrays , set are also iterables
 //sets are different from arays
 // 1) its elemtns are unique.
 // 2) and  the order of set is irrelevant.

 //w eknow that strings strings are also itterables
 console.log(new saet('jatin'));
 // op - { "j", "a", "t", "i" , "n"}

 // lets now learn how to actually wor with sets.

 step 1) we can get the size of a set.
 console.log(orderSet.size); //op - 3
 //this might be useful for the chief of ou kitchen meal to know how many different meals.

 // note- dont be confused in size nd length

 2) we can check
 if a certain element is in a set.
 console.log(ordersSet.has('pasta')); //op- true //has is the method her
 console.log(ordersSet.has('bread')); //op- false
 //this has method is similar to includes method in arrays.

 3) we can also add new elements to a set.
 OrderSet.add('Garlic Bread');
 OrderSet.add('Garlic Bread');
 console.log(orderSet);
 //op - //op- {'Pasta','Pizza', 'paneer', Garlic Bread}

 4) we can also delete elements
 orderSet.delete('pasta'); //pasta will be deleted from the set


 Q) how do we actually retrieve values out of a set ?
   a)
 can we may be use index ?
   console.log(orderSet[0]); //op - UNDEFINED
 //no ,because in sets there are actually no indexes.nd there in no way of getting values out of a se t.

 5) pne more method but not much useful
 //ordersSet.clear();


 6) we know that sets are also iterables, so we can loop over them

 for (const order of orderSet) console.log(order);


 //so now we know how to work with sets ,lets see a big use case for them right now
 // the main use case of sets is actually to remove duplicate values of arrays.

 //example
 ....due

 // (14)-------Maps: Fundamentals--------
 //A map is a data structure taht we can use to map values to keys.so,just like n object data is stored in key value pairs in maps.now the big difference between objects and maps is that in maps,the keys can have any type and this can be huge.so,in objects, the keys are basically always strings.But in maps,we can have any type of key.it could be even be objcets,or arrays or other maps.so that can lead to some really great and advnaceed stuff.

 // How to Create a Map
 // You can create a JavaScript Map by:
 //
 // Passing an Array to new Map()
 // Create a Map and use Map.set()

 1) The new Map() Method
 You can create a Map by passing an Array to the new Map() constructor:

   Example
 // Create a Map
 const fruits = new Map([
 ["apples", 500],
 ["bananas", 300],
 ["oranges", 200]
 ]);

 2) The set() Method
 You can add elements to a Map with the set() method:

   Example
 // Create a Map
 const fruits = new Map();

 // Set Map Values
 fruits.set("apples", 500);
 fruits.set("bananas", 300);
 fruits.set("oranges", 200);

 3) The set() method can also be used to change existing Map values:

   Example
 fruits.set("apples", 200);

 4) The get() Method
 The get() method gets the value of a key in a Map:

   Example
 fruits.get("apples"); // Returns 500

 5) The size Property
 The size property returns the number of elements in a Map:

   Example
 fruits.size;

 6) The delete() Method
 The delete() method removes a Map element:

   Example
 fruits.delete("apples");

 7) The has() Method
 The has() method returns true
 if a key exists in a Map:

   Example
 fruits.has("apples");

 //difference between Object vs maps - google

 8) The forEach() Method
 The forEach() method calls a
 function
 for each key / value pair in a Map:

   Example
 // List all entries
 let text = "";
 fruits.forEach(function(value, key) {
   text += key + ' = ' + value;
 })


 // (15)------- Maps: iteration-------
 const question = new Map([ // now here we can pass in an array and this array itself will contain multiple arrays.and in each of these arrays,the first position is gonna be the key. nd second position is gonna be the value.
   ['question', 'what is the best programming language in the world?'],
   [1, 'c'],
   [2, 'java'],
   [3, 'javascript'],
   ['correct', 3],
   //we can also have like a success message and an error message.so use the boolean Keys
   [true, 'correct'],
   [false, 'try again'],
 ]);
 console.log(question);
 //SO WHEN CREATING A NEW MAP FROM SCRATCH,DIRECTLY IN THE CODE I ACTUALLY PREFER THIS WAY OF WRTING IT.


 //CONVERT OBJECT TO Map
 console.log(Object.entries(openingHours));
 const hoursMap = new Map(Object.entries(openingHours));

 console.log(hoursMap);
 //keep this small trick in mind whenver you need a map,when you already have an object.


 //iteration

 for {}









 // 15)----------strings part 1-----------
 const airline = 'TAP Air portugal';
 const plane = 'A320';

 console.log(plane[0]); //op - A
 console.log(plane[1]); //op - 3
 console.log(plane[2]); //op - 2
 //you r getting 3 nd 2 but both of them are still strings.so if we wanted them to be numbers,we would have to convert them and we can do the same directly on the string
 console.log('8737' [0]); //op - B

 console.log(airline.length);
 console.log('8737'.length);

 //so after comparing strings to arrays strings also have methods and some of them are similar to array methods.

 // 1) index0f method
 // we can get the position in which a certain letter is in the String.
 console.log(airline.indexOf('r')); //op- 6
 console.log(airline.lastIndexOf('r')); // op - 10
 console.log(airline.indexOf('portugal'));


 //now  what can we actually do with these indexes?why are they useful?well one good use case is to extract part of a string using the slice method.

 2) JavaScript String slice()
 //slice() extracts a part of a string and returns the extracted part in a new string.
 //The method takes 2 parameters: start position, and end position (end not included).
 console.log(airline.slice(4)); //op- Air portugal
 console.log(airline.slice(4, 7)); //op - Air


 //imp NOTE- 1) JAVASCRIPT COUNTS POSITION FROM ZERO.
 // FIRST POSITION IS 0.
 // SECOND POSITION IS 1.
 // 2) THE LENGTH OF THE EXTRACTED STRING IS ALWAYS GOING TO BE (END - BEGINNING ).7 - 4 = 3 (LENGTH)

 //lets try to extract just the first word of this string here,but wihtout knowing any of the indexes.and so thats where this indexOf,and lastindexOf here become really important.
 console.log(airline.slice(0, airline.indexOf(' '))); //op-TAP
 console.log(airline.slice(0, airline.lastIndexOf(' '))); //op- _portugal  //space bhi h usko hatane k liye -
 console.log(airline.slice(0, airline.lastIndexOf(' ') + 1)); //op - portugal

 //we can even define a negative begin argument .
 console.log(airline.slice(-2)); //op - al

we can also spepcify a negative end parameter.
console.log(airline.slice(1, -1));//op - AP Air Portuga

// Q) write a function that receives an airplane seat and locks to the console,where it is middle seat or not.

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if(s == 'B' || s == 'E')
  console.log('you got the middle seat ');
  else console.log('you got lucky');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//how all of this actually works.
// so we know that strings are just primitives.so why do they have methods?shouldn't methods only be available on objects such as a race?well taht actually true.
// how this works - wehenever we call a method on a string, js will autamtically behind the scenes convert that string primitve to a string object with the same content.and then its on that object where the methods are called.and this process is called boxing because it basically takes our string and puts it into a box.which is the

// (16)----------string part 2--------------

// 3) Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():
// A string is converted to lower case with toLowerCase():

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());//op - tap air portugal
console.log(airline.toUpperCase());//op- TAP Air Portugal


//using this on more practical example
// fix the capitalization in a passenger name.

const passenger = 'jAtIn';// we want Jatin
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Jatin

// another real life example
// comparing Emails

const email = 'hello@jatin.io';
const loginEmail = 'Hello@Jatin.Io \n';

 //when we check use input like this
// step 1) convert it to lower case

const lowerEmail = loginEmail.toLowerCase();

//step 2) we must get rid of all the wide spaces here.also,this (/n) counts as a wide space.

const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

//or acha code ek line m kaam khtam
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);
//op - hello@jatin.io
    // hello@jatin.io

    // Note:
    // All string methods return a new string. They don't modify the original string.
    // Formally said:
    // Strings are immutable: Strings cannot be changed, only replaced.

// 4)  JavaScript String trim()
//  - The trim() method removes whitespace from both sides of a string:
//  - The trimStart() method works like trim(), but removes whitespace only from the start of a string.
//  - The trimEnd() method works like trim(), but removes whitespace only from the end of a string.


//5) Replace parts of strings
const priceUS = '288,97$';
const priceInd = priceUS.replace('$', 'Rs');
console.log(priceUS);//op - 288,97Rs
//Now,we need to replace also the coma with the period.
//so we could create another variable now,but ionstead we will do chaining again.so on that string we will immediately call the next replace method.

const priceUS = '288.97$';
const priceInd = priceUS.replace('$', 'Rs').replace('.' , ',');
console.log(priceUS);//op - 288,97Rsb


//another Example
const announcement = 'All passengers come to boarding door 23, Boarding door 23!';

console.log(announcement.replace('door' , 'gate'));//op - All passengers come to boarding gate 23.Boarding door 23!
//pura sentence se door ko gate se replace karna heto use replace all method

//6)JavaScript String ReplaceAll()

// In 2021, JavaScript introduced the string method replaceAll():
// he replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
// If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.

//note-
// replaceAll() is an ES2021 feature.
// replaceAll() does not work in Internet Explorer.

console.log(announcement.replaceAll('door' , 'gate'));


//7) there are three simple methods that return Booleans
const plane = 'Airbus A320neo';
console.log(plane.inlcudes('A320'));
console.log(plane.inlcudes('Boeing'));
console.log(plane.startsWith('Airb'))
//op - true
   // false
   // true
if(plane.startsWith('Airbus') && plane.endsWith('neo'))
{
  console.log('part of the NEW Arirbus family');
}
// op- Part of the NEW ARirbus family



///practice exercise
const checkBaggage = function(items) {
  const baggage = items.toLocaleLowerCase();
  if(baggage.includes('knife')) || baggage.includes('gun')) {
    console.log('YOU are NOT allowed on board');
  } else {
    console.log('welcome aboard!');
  }
};

checkBaggage('I have a laptop,some food and a pocket knife ');
checkBaggage('Socks and camera');
checkBaggage('Got some snack and a gun for prtoection ')

//op - You are NOT allowed on board
//  welcome aboard!
// You are NOT allowed on board


//------------strings part-3----------------

// 8)String SPLIT (most powerful method of string)
// - split allows us to split a string into multiple parts based on a divider string.
// - A string can be converted to an array with the split() method:

console.log('a+very+nice+string'.split('+'));//here we need to specify a divider string.so let's just use plus,and so what will happen now is that it will split up
//["a","very","nice","string"]
console.log('Jatin sharma'.split(' '));

const [firstName, lastName] = 'Jatin sharma'.split(' ');//split by the space
//op - ['"Jatin", "sharma"]

 //9)joint method(opposite of string)
 //we want to make the last name uppercase here.and then we also want to add a minister in the begining

//split and joint
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName);//op - Mr. Jatin SHARMA

 //Q) capitalize a  name.using split and joint.

const capitalizeName = function(name){
  const names = name.split(' ');
}
 const  passenger = 'the rock is cookin'











