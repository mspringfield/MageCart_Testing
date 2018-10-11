# Magecart testing

## What Is This?

This is simple application to test magecart silent AJAX posting of sensitive data. It is written in PHP and includes a simple HTML form to represent standard form submission. It also includes JavaScript that submits the data silently to insert_data.php on the backend.

Upon submission, the form data is posted and reflected back to the
user. Data is then submitted asynchronously via AJAX to insert_data.php--this
writes the credit card data to log.txt and inserts it in the sqlite database
(hacked_data.db). 

## How to run it
Grab the code:
`git clone https://github.com/mspringfield/MageCart_Testing.git`

Start a simple php web server:
`php -S localhost:8000`

Navigate to the webpage:
`http://localhost:8000/`

Tail the log.txt file for viewing the ajax silent submission.
`tail -f log.txt`

View the data inserted into the SQLite database
`sqlite hacked_data.db`
