![Customer Service Voice Chat](images/CustomerServiceVoiceChat.png)

For this project, I created a customer service voicebot product. The basic architecture is that it's a python server that sends requests back and forth with GPT-Live (voice model from OpenAI) over a webhook, while the user talks to OpenAI by calling up a phone number which is routed through SIP (using Twilio).

Below are some basic instructions on how you can replicate for what I did in this implementation. I already generated the python server, so feel free to fork the github repo below to replicate this type of system for yourself.


How to set up a customer service chatbot for a business:

Fork my Github Repo:
Write the link to your forked Github repo down: https://github.com/rwcunningham/CustomerServiceVoiceChat
Insert your own knowledge base under "data”
Set your system prompt
Decide on the configuration you'd like to use with openAI, and set those up where appropriate
Set up OpenAI:
Create an Open AI account
Create a new project
Create a new API key and hide it somewhere safe
Set up Twilio:
Create a Twilio account, purchase a number, complete the registration
Create a Twiml Bin, use the OpenAI project key inside of the SIP address format so if the project id is (need to fill this in), the SIP address is (need to fill this in)
Set up Render:
Create a new project, 
Create a new service
Add all of this to environment variables
RESTAURANT_NAME=McDonald's
LIVE_MODEL=gpt-live-1
LIVE_VOICE=marin
BACKEND_MODEL=gpt-6-luna
EMBEDDING_MODEL=text-embedding-3-small
EMBEDDING_DIMENSIONS=512


DB_PATH=./data/knowledge.sqlite3
AUTO_BOOTSTRAP_KB=true
BUNDLED_KB_PATH=./data/McDonalds_About_Our_Food_Summary.txt
BUNDLED_KB_SOURCE=mcdonalds-about-our-food-2026-10-06


LOG_LEVEL=INFO
LOG_TRANSCRIPTS=false
GREET_ON_CONNECT=true
Go back to OpenAI again,
Search "webhooks” and create a new webhook. Save the Webhook secret.
Give it the https://YOUR-PUBLIC-HOST/ from Render, and appen “webhooks/openai” so it's “https://YOUR-PUBLIC-HOST/webhooks/openai”
Generate a random hex with this command
openssl rand -hex 32
Save this value. This will be your admin token.
Go back to your Render service, go back to environment and add these values. (refer to the steps written in green to see where these came from):
OPENAI_API_KEY=your OpenAI project secret key
OPENAI_WEBHOOK_SECRET=your OpenAI webhook signing secret
ADMIN_TOKEN=make up a long random string
Fire up Render, make a call to the Twilio number
Everything should work at this point
