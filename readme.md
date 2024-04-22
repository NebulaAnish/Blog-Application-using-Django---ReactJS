# Blog Application with Django

## Steps involved in setting up the project
1. Setup database(postgreSQL).
2. Setup backend(Django backend).
3. Setup Frontend(React App)

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