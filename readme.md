# Blog Application with Django

## Steps involved in setting up the project
1. Setup database(postgreSQL).
2. Setup backend(Django backend).
3. Setup Frontend(React App)

[Api Documentation](https://documenter.getpostman.com/view/28093502/2sA3Bq4Avt)

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
6. Run server. <br>
    `$ python manage.py runserver`
