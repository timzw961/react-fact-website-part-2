# React facts website part 2

The primary purpose of this exercise is for practice :). In the Scrimba course, we were given this modified version of the React Facts website where the light and dark modes were already coded in and styled, however there was no functionality built for it.

We were tasked to build that functionality - to mimic being dropped into a new project environment and get use to understanding what components need state and which components require state. 

It was pretty easy, but I did know one key takeaway when I was trying to do it in the Scrimba IDE:
1) Passing props functions will break if you call it the same as the function that it uses.
So for example, I was passing a function called toggleDarkMode which would be passed into the Nav component in props. The issue I kept running into was that this function didn't work no matter what I did. The culprit was when the way I was passing it:
<Navbar
    darkMode = {dark}
    onClick = {toggleDarkMode}
/>

This does not work. 

<Navbar
  darkMode = {dark}
  toggleDarkMode = {toggleDarkMode}
/>

This does work. 
