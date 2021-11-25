#### Installation:

1. Download or clone the assembly
2. Install dependencies (npm i)

#### Run:

`start:dev` - development mode
`start:prod` - production mode

#### Application usage:

The default port is 3000

1. Open 'Postman'
2. Make a request to the address `http://localhost:3000/person/`
3. API path /person:
   - `GET` /person or /person/${personId} return all persons or person with corresponding personId
   - `POST` /person is used to create record about new person and store it in database
   - `PUT` /person/${personId} is used to update record about existing person
   - `DELETE` /person/${personId} is used to delete record about existing person from database
