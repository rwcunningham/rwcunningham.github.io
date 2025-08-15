layout: post
title: Building SoundGalore Week 7

---
What did you do last week?
Last Week I got the play button, the scrubber, and the time formatting working. I also got started with figuring our some of the authentication process.

Getting the scrubber working was fairly straightforward in some ways once I got the hang of what pieces need to be connected where. The position of the HTX <input> object needs to be tied to the "currentTime" in the audio clip, along with the display time, and then it also needs to go the other direction so the position of the input is also controlling where the audio is playing from. HTX and React take care of a surprising amount of the leg-work here though which is a relief, but it's a good way to practice working with React. 

The same thing is falling into place with the authentication process. I'm still in progress with this, and it seems like there's a lot to learn with how these libraries that are designed to work around python and flask interact. What's great though is that all the libraries are designed to work together seamlessly, and so far they do. 

Basically what I have right now is a "POST" endpoint which expects a request with a JSON that has the user's email and password, my react front end is going to supply this request by having the user enter some strings and then hit "login." Next we use SQLAlchemy to retrieve the corresponding user from my "Users" table. I set up the "Users" table using SQLAlchemy, which creates it as a Class, and I created a method for that class called "check password" which just wraps the Werkzeug "check_password_hash" function, and checks if the password hashes to the correct password_hash. If the user's input passes all of these tests, we can just use a nifty flask_login function called "login_user" (which works magically on our "user" obejct we got from SQLAlchemy, because we made it so our User class inherits from a library called UserMixin), and then our use has access. (As you can see, there's a lot that's gone into this, and a few things that are still needed like the actual login screen).


Overall these, feel like big learning cliffs, but as I get over each cliff I gain a ton of new knowledge about web development. 

What do you plan to do this week?
This week I plan to finish the authentication process, create an actual login screen, and make a few test users. This will give me the bare bones needed to start creating "feeds" for each of the users, which will allow me to start to add more of the front-end features I want, like "previous" and "next" audio-transport controls, that retrieve the correct post from the user's feed. 

I also want to start working on getting some audio files and "posts" entered into the database as soon as possible. I'm trying to just "path-of-least-resistance" myself toward getting a really basic prototype of: user logs in, user scrolls back and forth through a feed of clips of audio unique to that user. 


Are there any impediments in your way?
Right now the biggest impediment is just focus and time. I'm getting stuck and unstuck a lot, which is okay as that was my intention in starting this project. 


Reflection on the process you used last week, how can you make the process work better?
Last week I felt like I was struggling to search for starting points for how to get to the next step. This week I think I've identified many more starting points, so it's just going to be about "not breaking the flow."
