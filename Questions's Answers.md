
#### 1) What is the difference between var, let, and const?

Answer:- var is a Function-scoped variable , you can reassign it . var variables are hoisted to the top of their scope and initialized with undefined. 
          on the other hand "let" is a Block-scoped variable. It can be reassign to a new value but it's also hoisted but you cannot access it before declaration (they called it Temporal Dead Zone (TDZ)). (this is one of the key difference between var and let).
          const is also a Block-scoped variable (like let) , You cannot reassigned a new value after const declared. But it's content can be modified.
          like (adding or removing ) , like let it is also hoisted but cannot be accessed before initialized because of Temporal Dead Zone.


#### 2) What is the difference between map(), forEach(), and filter()? 

Answer:- All are can iterate over an array and perform some tasks..  after the iteration  they give some diffent thing based on new array creation and     returen value.
        map() return a array which have the result of the iteration while the main array remain unchanged. 
        forEach() return a "undefined" value but can show a result based on modifiyng elements.
        filter() return a new array with the providing conditon , this means if you want some elements from an array based on some conditons (like get the numbers have an odd value or even value etc.) . filter don't change the main array , It return a brand new array.

#### 3) What are arrow functions in ES6?

Answer:- arraow functions are new (shorter and simple)way to write the traditional functions. It's have a different Syntax to write.. 
        and for small tasks it is very usefull for the developers. and if you write it in one line (single expression) then you don't need to call "return" method to get returned anything.. so code will become more shorted..
        if you have signle parameter then you can declared it without Parentheses (). Generally it is use for short, anynomous and callback functions like
        map(), filter() and reduce() etc. 

#### 4) How does destructuring assignment work in ES6?

Answer:- we can easily get data from an array via destructuring methode. this feature provide more easy and readable way to handle the extraction a data from any arrays and objects. there are so many ways called Array destructuring and object destructuring .
        1.Array destructuring like: const nubmers = [420 , 220 , 320] 
                                                const [ab , bc , ca] = numbers; 
        and another is "operators" const colors = ["red", "green", "blue", "yellow"];
                                    const [primary1, primary2, ...restOfColors] = colors
                                    rest 2 colors will assign at "restOfColors"

        2. Properties can be  extracted from an object based on their property names.
                    e.g: const person = { name: "Alice", age: 30 };
                                const { name, age } = person;        

#### 5) Explain template literals in ES6. How are they different from string concatenation?

Answer:- First of all, I think it's a blessing for all of us. becuase template literals allows us to write or show something very easily.
        You don't need to cancatenate strings and variable's data by "+" or concatinate methode anymroe. we can easily write any string by simple "``",
        and the dymanic part of your output should be in the "${}" .
        we don't need "\n" anymore for line breaking. how many lines we are use in template literals it will show on screen like that.. 

        eg. const introduction = `Hello, my name is ${name}
                                     and I am ${age} years old.`;

        previous : const   introduction = "Hello, my name is " + name + " and I am " + age + " years old.";
