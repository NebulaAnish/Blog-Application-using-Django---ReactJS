# Blog Application with Django

It is a blog application made by using django, react and postgreSQL stack. Some features of the app are:

- Test first approach.
- Tests for CustomUser account and blog views.
- JWT authentication with email as username.
- Authorization: Only users who created the blog can modify/delete it.
- Every user can view all blogs.
- CRUD operations on blog.
- Slug based url for SEO optimization.
- React UI with tailwindCSS for optimized performance.
- Mobile responsive.

### Project Gallery

<table>
<tr>
    <th><img src='images/1.png'>
    </th>
    <th>
<img src='images/2.png'>
    </th>
</tr>

<tr>
    <th><img src='images/3.png'>
    </th>
    <th>
<img src='images/4.png'>
    </th>
</tr>
</table>

## Steps involved in setting up the project

1. Clone project locally.
2. Setup database(postgreSQL).
3. Setup backend(Django backend).
4. Setup Frontend(React App)


<a href="https://documenter.getpostman.com/view/28093502/2sA3Bq4Avt" target="_blank">API Documentation</a>

### Clone project locally

1. `$ git clone <link-to-this-repository>`

### Setting up Database

Below are steps to setup databse using shell. You can perform similar actions using GUI tools by noting down the credentials below.

1. Open postgres shell: <br>
   `$ sudo su - postgres`
2. Login to your default postgres account: <br>

   `# psql -U postgres -W` <br>
   (If you wish to create new user account, you'll need to provide privileges of database to this user and supply these credentials in the `settings.py` file.)

3. Create database: <br>
   `CREATE DATABASE blog;`
4. Exit psql shell: <br>
   `\q`

### Setting up Backend Server

1. Navigate to the backend folder.
2. Create a virtual environment. <br>
   `$ python -m venv .venv`
3. Activate virtual environment. <br>
   On Linux/Mac: `$ source .venv/bin/activate`
4. Install required dependencies. <br>
   `$ pip install -r requirements.txt`
5. Run migrations to your database. <br>
   `$ python manage.py migrate`
6. Run tests (Optional). <br> 
   `$ python manage.py test`
7. Run server. <br>
   `$ python manage.py runserver`

### Setting up Frontend Server

1. Navigate to frontend/ folder.
2. Install dependencies. <br>
   `$ npm i`
3. Run server. <br>
   `$ npm run dev`
