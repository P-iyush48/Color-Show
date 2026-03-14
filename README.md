# Color-Show
 ● Random colors generate and display on screen with its RGB color code.
 ● Colors generate different RGB color code in every 1000ms (1s).

Using: 
# DOM : Document Object Model 
    DOM use for Dynamic Manipulation in Javascript can add, remove, or change node's(html element) and attributes to create interactive web experiences.

# Random(): 
    Using Math.random() function to generate the numbers, If you use Math.random() only then it return random decimal numbers between 0 to 1 ( like: 0.12, 0.85, etc ).
    -> Syntax:
          Math.random();
        
# Floor():
    It is a Math.floor() function which uses to return the integer value to the random() function. ( like: 15, 85, 30, 2, etc. ).
    -> Syntax: 
        Math.floor(Math.random()*(max-min)+min);
        
    ->Example:  
        Math.floor(Math.random()*(255-0)+0);
        This is a main code which helps to generate random integer number between 0 - 255.

  # SetInterval():
    setInterval() is method which repeatedly calls the function or executes a code with in a fixed time delay between each call.
    ->Syntax:
        setInterval(function, time_delay);
