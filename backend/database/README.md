# PostgreSQL Database Definition

*This project contains the installation, creation, and test data for the database for this Set Builder web app*

## NX Commands

Install PostgreSQL
`nx install database`

Create the Database Schema
`nx create database`


## Installation Notes
PostgreSQL installs with an unknown password, which requires resetting on windows to use.  The solution is to disarm all the security, adjust the password inside the DB, and re-arm the security.

[Link to StackOver Flow Solution](https://stackoverflow.com/questions/27107557/what-is-the-default-password-for-postgres/27108276#27108276)
