## Top-level description
There are two main entities: doctor and client
 - There are additional entities: visit (client's visit to doctor), test, receipt, medical card for users
 - Clients can:
    1. Register in the system with email, name, password
    2. Login to the system with email and password
    4. Choose required specialization and view list of doctors with short info and schedule
    5. Choose doctor, look at doctor's full info and schedule
    6. Choose date and time of visit
    7. View list of his visits
        7.1 On each visit, client can view doctor's full info and schedule
        7.2 On each visit, client can reschedule or cancel visit
    8. View list of his receipts
    9. View list of his tests
 - Doctors can:
    1. Register in the system with email, name, password, specialization
    2. Login to the system with email and password
    3. View list of his visits
        3.1 On each visit, doctor can view client's full info
        3.2 On each visit, doctor can mark visit as done with additional info (needed tests, receipt)
        3.3. On each visit, doctor can cancel visit
        
## Technical implementations
### Backend
We should use nest.js, prisma, postgresql, docker, docker-compose. 
### Frontend
We should use react, redux, redux-saga, material-ui, react-router, axios, docker, docker-compose.

## Developing plan
Should develop whole backend first. It is sad, but we should do it for simplify the frontend development. All we can do with it is to mock all services on backend and develop logick later (after front-end)

Starts from describing the entities and their relations.
Then we should describe possible business units (commonly they we be grouped by entity) and describe services
Then we should describe controllers and DTOs


### Entities
#### Doctor
 - id
 - email
 - name
 - password
 - specialization
 - schedule

#### Client
- id
- email
- name
- password hash
- medical card

#### Visit
- id
- doctor
- medical card
- date time
- status
- receipt
- tests

#### Receipt
R

### Medical card
- id
- text


### Endpoints

#### Doctor
- POST /doctor/register
- POST /doctor/login
- GET /doctor/visits
- GET /doctor/visits/:id
- PUT /doctor/visits/:id
### Client
- POST /client/register
- POST /client/login
- GET /client/receipts
- GET /client/receipts/:id
- GET /client/tests
- GET /client/tests/:id
- GET /client/medical-card
- GET /client/doctors
- GET /client/doctors/:id


### UPDATE
First i thought that it will be nice to group business logic by use cases (clients can view their doctors, visits etc, so methods for showing that will be in clients.servide.ts).
Later i realised that it will be better to group business logic by entities (in clients.service.ts it should be only clients methods). So, i will do it in that way.