# NAF App - Backend Repository
This is the backend repository for the NAF App, a full-stack web application developed to showcase NAF’s services and projects in Argentina and the United States. The frontend repository can be found ([here.](https://github.com/didonatodani/naf_front))

### About NAF
NAF was founded in 1997 by Normando Andrés Florian, specializing in water treatment and sanitation infrastructure works. In 2022, under the leadership of Eng. Lucas Florian, NAF expanded its services to include Structural Engineering and BIM Modeling, marking the beginning of a new chapter. NAF is dedicated to innovation, sustainability, and turning clients' ideas into concrete realities.

## Technologies Used
- Backend: Node.js, Express, MongoDB
- Email Service: Nodemailer (for sending emails from the contact form)
- Image Management: Cloudinary (for managing images)
- Data Fetching: Axios (for fetching project data from the database)

## Models:
- Construction Projects
- BIM Projects
- Wood Frame Projects
- Contact Model

## Routes:
- Construction Projects: Handles the routes related to construction projects.
- BIM Projects: Handles the routes related to BIM projects.
- Calculation Projects: Handles the routes related to structural calculations.
- Contact: Manages the contact form submissions.
- Index: Root route for general purposes.
  
## Deployment
The backend of this project is deployed through Vercel, which provides fast and scalable hosting for web applications. You can access the live backend here: ([NAF](https://naf-backend.vercel.app/api))

## Backlog / Future Enhancements
- Auth and User Models: Implementing authentication for partners, allowing them to create, update, and delete projects directly from the app. This will require creating user and authentication models and routes.
- Project Filtering: Adding functionality to filter projects based on various criteria (e.g., project type, date, etc.).

## Acknowledgments
I am very excited about this project, as it is my first full-scale, full-stack project. I’m progressing at my own pace, but I’m learning a lot of new things and overcoming various challenges along the way. It’s been an incredibly rewarding experience, and I look forward to continuing to build and improve it.
