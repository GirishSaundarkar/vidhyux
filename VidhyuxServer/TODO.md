# TODO List to Fix 404 Error for /book/book-us - COMPLETED

## Plan Steps:
1. [x] Fix controller bug: Change createUser to bookUs in src/controllers/bookUs.controller.js
2. [x] Add queryBookUs service method in src/services/bookUs.service.js
3. [x] Add getBookUs controller method in src/controllers/bookUs.controller.js
4. [x] Add GET route '/book-us' in src/routes/v1/bookUs.route.js
5. [x] Test endpoints (POST and GET /v1/book/book-us) - Now supported: GET lists bookings with pagination, POST creates new booking.
6. [x] Restart server (pm2 restart ecosystem.config.js or kill port 3000 and node src/index.js)

All changes implemented. Routes now handle both GET /v1/book/book-us (list) and POST /v1/book/book-us (create). Controller/service fixed. No more 404 for these endpoints."

