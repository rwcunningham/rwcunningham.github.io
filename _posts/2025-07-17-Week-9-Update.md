layout:post
title: Building SoundGalore Week 9
---

What did you do last week?
Last week I worked more on the authentication process by creating the actual login page and the button leading there. It still has some "placeholder code" for now where the authentication works no matter what, but I'm much closer to having this process in place. I have been a little a short on time so I've been breaking it into small steps, solving one problem at a time.

The week before last, I made my login endpoints in my Flask, last week I made the login page (which ended up taking longer than expected because I had to break my JS into multiple "component" and "page" files. Now I'm planning to do the rest of what I need to in order to get authentication working. 


What do you plan to do this week?
This week I plan to finish the authentication process, and actually have some valid usernames and password hashes. I need to make it actually take what they user typed in, put it into a JSON and POST it to my /auth/login endpoint, and have it return an good HTTP status code, along with the user feed page to the let the user access their feed (or not).


Are there any impediments in your way?
The main impediment is just my own understanding. I'm learning a lot in this process, and becoming more fluent in the vocabulary of web dev, which is the goal. 

Reflection on the process you used last week, how can you make the process work better?
What I learned last week was basically that I should've built the login page first, as I ended up having to make some surgical changes to my URL structure because I didn't plan ahead. I also realized that maybe for future projects, I'll make some basic components first before trying to throw the whole app in one file. I hear that react was for "single-page apps" and I think I initially interpreted that too literally. In fact, more complex REACT projects do have a folder called "pages" with different .jsx files.

I got some more practice with building pages and components. It's starting to click a little more how this framework works, and why it's so popular.

