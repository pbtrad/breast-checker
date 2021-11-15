# Breast Checker Project
## Intro
This project was created for the Code Institute Women in Tech Hackathon with the theme of Breast Cancer Awareness. Our team focused on building a site to promote early detection through regular checks by providing a self examination guide and a monthly tracker that would also provide email reminders.
## Aim of the website:
The site was created to provide a tutorial on the steps required during a self examination. We wanted to normalise and promote regular checks by adding a small gamification element that would encourage users to keep an unbroken chain of monthly (minimum) checks.
This regularity is re-enforced by the distribution of an email reminder each month which would include a gentle prompt to check, or log an already completed check on the site. The email could also contain useful information in the form of links, news items and guidance but these may be beyond the scope of the initial implementation.
## User Stories
|**As a...**|**I want to...**|**So I can...**|
|:-----|:-----|:-----|
|Potential user|Immediately understand the purpose of the site|Decide if the site is for me|
||Quickly register|Start using the site for guidance|
||Quickly start the tutorial|Complete a self examination|
||Quickly mark a check as complete|Make sure my tracker is up-to-date|
||Check my progress|Ensure I have completed this months check|
||Opt-out of email reminders|Reduce the number of emails I receive|
|Site Owner|Ensure the tracker is fit for purpose|Retain users and keep them engaged|
||Encourage people to check their breasts and normalise the process|Remove any stigma related to the topic and increase awareness around the topic of breast cancer|
||Have an easy user experience|Manage the site without needing advanced computer skills|
## Structure
## Design
Color Scheme:
Images:
Wireframes:
## Technologies Used
Languages used:
* HTML
* CSS
* JavaScript
* Python
Frameworks, Libraries and Programs Used:
* React
* Django
* Bootstrap
* Git
* Github
* Git Pod
* Balsamiq
* Figma
* Fontawesome
## Backend
||The backend is a django rest framework using dj-rest-auth for authentication, celery for automated emails. Celery is served by cache using heroku redis.
## Testing
## Deployment
## Features
A user comes onto the website and either registers for an account or signs in if they have an existing account using a sign in form. They also have the option to sign in using their Google account.
Once signed in, they gain access to a monthly calendar which they will be able to check off each month once they have done a self-check up. As part of the service, they will be sent a reminder email each month to ensure they do a self-check up.
A video will be provided which will explain how to properly check yourself for breast cancer and there will also be a further actions button with helpful resources should they be needed.
## Bugs
## Future Development
### Blog:
* Link research / Site developments
* Guest Articles
* Supportive Stories
### Additional Items to include in the email reminder:
* Links to recent blog articles
* Link research / Site developments
* Requests for feedback / User engagement surveys
### Section to display a count of how many users have registered a check in the current month:
* This would further normalise checks by showing the activity is being completed by others users and promote an abstract sense of community.
### Additional user profile/interaction features:
* Profile photos
* Share that a check has been completed to social channels
## Team
* Darragh Reid
* Ian Meigh
* John Bachtiger
* Kay Alvær
* Maridel Antonio Arcagua
* Paul Browne
## Credits
### Code
* Use of Bootstrap
* Django
### Media
Logos for institutions taken from their respective websites:
* [https://www.cancer.org](https://www.cancer.org)
* [https://www.nhs.co.uk](https://www.nhs.co.uk)
* [https://www.hse.ie](https://www.hse.ie)
## Acknowledgements
The team at Code Institute for organising this hackathon and providing support for us to be able to complete this site.
The Code Institute hackathon team Check Yo Self who created the site and functionality for the breast checker.
