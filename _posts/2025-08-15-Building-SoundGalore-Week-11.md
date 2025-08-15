---
layout: post
title: Building SoundGalore Week 5
---

What did you do last week? 

Last week I worked on my "CreatePost.jsx" page, including some work in both the server and the database. I had planned on doing a lot more from the backend to add media, and create "follow" relationships between people etc, but I realized that maybe I should actually build a place for the user to create a post, rather than just putting posts into the database blindly, in case I need to add or remove columns from the database. This made me realize that I actually need to build two components to hand browsing for audio files and image files, so that's what I'm doing now. 

There was a lot to learn about helping the user upload a file, storing the file in storage media, saving the metadata in the database. There was far more to think about than I had really considered, and I also sort of started by approaching this the wrong way as well, so I had to backtrack. 

So now I'm working on building these two componenets, putting them on this one page, and then testing that page. Then if that succeeds, then users will have posts, so I can create follow relationships, and finish building out "my feed" so that it supplies a chronological stream of posts from the users' followed creators. 


What do you plan to do this week? 

I plan to finish this "create post" page and start uploading posts from one of the users accounts. If I have time I would still love to create user pages, give them a "follow" button, create a "next post" button on the "my feed" and then start get the button to supply the correct next post. This is turning out to be a lot, so we'll see how far I get. 


Are there any impediments in your way? 

Just knowledge mainly. This has been a crash-course, which was my intention. Surprisingly, last week my knowledge of html (well, JSX) was holding me back and I had to do a bit of reading to get caught up. It's a lot of interlocking pieces: JSX, Javascript, React, Flask, CSS and I'm using Werkzeug to handle authentication, random python libraries like "time"  or "dotenv" or "os". Then there's questions of which layer should handle what? At first I was creating timestamps in the frontend, then the server, then I realized I could just create timestamps in the database and avoid a lot of annoyance.

I'm introducing myself to a lot of new concepts like how during authentication, the browser stores a cookie, and it's wrapped up in a Secret_key and how that works for keeping the site secure, as well as integrating a lot of concepts from other classes like how to design a database. 

Just looking at a trivial boilerplate example I found of React File for a simple task like inputing some text, and storing it in a database. And it's actually quite a few lines, but I'm understanding how each of these super super specific steps contributes to the whole. 


Reflection on the process you used last week, how can you make the process work better?

The process I used last week was a lot of just "going for it" and seeing what has stuck with me. It was good practice to an extent, but I ended up trying to send a whole image file inside a JSON before I caught myself, and then went to the internet for help, and realized that using a form would be more appropriate for transferring a file. I think this will continue to happen for a while, until one day it's more fluent, and I feel comfortable building something to a specification.
