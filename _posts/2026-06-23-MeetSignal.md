---
layout: post
title: "MeetSignal"
---

[Hackathon Party page about MeetSignal] (https://www.hackathonparty.com/hackathons/43/projects/567)
[Presentation Video on Youtube] (https://youtu.be/lZBKQMuFMmg?si=14gVkPPXz6VipVkI)

![MeetSignal](images/MeetSignal-Slideshow-Intro.png)
![MeetSignal](images/MeetSignal-Screenshot-1.png)
![MeetSignal](images/MeetSignal-Screenshot-2.png)

Meetsignal is an app I built using Codex for the 2026 Progress X GitNation Hackathon. It uses cosine distances between vectors to match people together by exploiting the same mathematical trick that Pandora uses to match songs that go together:


Framing the Problem
What is the problem you are trying to solve? Who does it affect?

Tech conferences are full of potentially valuable connections, but most networking still happens by chance. Attendees often walk into a crowded event with no clear way to know who they should meet, which sessions overlap with their goals, or when another person is actually free to talk.

This affects several groups:

Attendees, who may leave without meeting the people most relevant to their goals.

Speakers and builders, who want their ideas to reach the right audience.

Organizers, who want attendees to feel the event was valuable and worth returning to.

Sponsors and recruiters, who want better ways to connect with people who are actually interested.

The result is that conferences can feel busy but inefficient. The right people may be in the same room, but they never find each other.

Idea Explanation
What is your idea? How does it fix the problem?

MeetSignal is a conference networking app that helps attendees find the people they are most likely to have meaningful conversations with.

After creating an account, users complete a short survey about their role, goals, interests, conversation style, and availability. MeetSignal uses that information to recommend relevant matches, explain why each match makes sense, and help users take action.

The app does not stop at “you two should meet.” Users can follow other attendees, view their profiles and posts, request to meet, suggest meeting times, message each other, register for sessions, and see when they are free for coffee chats around the event schedule.

The core idea is simple:

Stop networking at random. Meet with purpose.

MeetSignal turns a conference from a room full of strangers into a map of relevant people, shared interests, and useful opportunities.

Implementation
MeetSignal is built as a React/Vite frontend using KendoReact components for a polished, interactive interface. Kendo UI is used throughout the app for cards, dialogs, forms, charts, buttons, avatars, tabs, dashboards, and other core interface elements.

The app currently uses local client-side state and seeded mock data to simulate a real conference environment. This includes users, profiles, survey answers, posts, comments, events, event signups, meeting requests, messages, notifications, and schedules.

The matching system represents each attendee as a set of weighted features based on survey answers. It compares attendees using topic similarity, goal compatibility, role complementarity, conversation style, and availability overlap. The app then produces a match score and explains why each person was recommended.

The main pieces are:

Account creation and login for entering the experience.

Onboarding survey for collecting match data.

Matching engine for generating recommended people.

Profiles for showing posts, events, comments, free times, and attendee details.

Feed for posts and event activity from relevant people.

Events and schedule system for conference sessions and availability.

Meeting requests and messages for turning matches into real conversations.

Organizer dashboard for viewing event-level insights.

There is not currently a production backend or shared database. For the hackathon MVP, the app uses local state to demonstrate the full product flow quickly. In a production version, the same data model could be connected to a backend such as Supabase, Firebase, or a custom API with a database for persistent accounts, shared posts, real messages, and live event data.

Challenges
What did you struggle with? How did you overcome it?

One major challenge was keeping the project focused. Conference software can easily become too broad: networking, scheduling, messaging, social feeds, event management, organizer analytics, and more. We had to keep returning to the core question: how do we help attendees find and act on meaningful connections?

Another challenge was making the app mobile-friendly. A conference networking product needs to work well on a phone, because that is how attendees would actually use it during an event. Several profile views, dialogs, and cards had to be reworked so they fit smaller screens and did not become oversized popups.

We also had to make sure the product felt functional instead of just visual. Buttons like “I want to meet,” “follow,” “message,” “register,” and “delete” needed to update real app state so the demo felt like a working product, not just a clickable mockup.

Finally, we had to balance technical ambition with hackathon realism. Instead of building a full backend, we focused on creating a complete, understandable MVP with seeded conference data and a clear path toward production.

Accomplishments
What did you learn? What did you accomplish?

I built a working conference networking prototype that demonstrates the full user journey from onboarding to meaningful connection.

The app can:

Create a user account and guide the user through a survey.

Recommend people based on compatibility and shared interests.

Explain why each match was suggested.

Show attendee profiles with posts, events, comments, and free times.

Let users follow people and see relevant feed activity.

Support posts, likes, comments, and event registration activity.

Let users request meetings, suggest times, and message each other.

Show sessions and schedules so meetings can happen around conference events.

Provide organizer-facing analytics and dashboards.

We also learned a lot about product scoping, responsive UI design, state management, and how to make an algorithmic feature feel understandable to users. The biggest accomplishment was turning an abstract matching idea into a guided conference experience that feels practical and demoable.

Next Steps
What are the next steps for your project? How can you improve it?

The next step is connecting MeetSignal to a real backend so multiple users can interact with the same live conference data. This would allow persistent accounts, shared posts, real-time messages, actual event registrations, and live notifications.

Future improvements include:

Adding a production database for users, posts, events, messages, and meetings.

Supporting real-time updates for notifications and chat.

Integrating with calendar tools so accepted meetings appear on users’ calendars.

Improving the recommendation engine with feedback signals like skips, follows, messages, and attended meetings.

Adding organizer tools to create events, manage sessions, and view engagement analytics.

Supporting sponsors and recruiters with opt-in lead discovery and better attendee insights.

Adding privacy controls so users can decide what information is public, private, or shared only after connecting.

Long term, MeetSignal could become the relationship layer for conferences: not just a schedule or a feed, but the system that helps every attendee leave with the right conversations, contacts, and opportunities.

