# Food App

_This project is developed using express and react frameworks with docker support._

## Steps

1. Build images:
   `docker build -t akkuakhildev/express-food-api .`
2. Create network: `docker network create food-net`
3. Run MongoDB container: `docker run -d --rm -p 27017:27017 --name mongodb --network food-net mongo`
4. Run food app container: `docker run -d --rm -p 80:80 --name food-api -v $(pwd):/app:ro -v /app/node_modules --network food-net akkuakhildev/express-food-api`
5. Install my-food-web dependencies by `npm install`
6. Run web server by `npm start`
7. Stop container: `docker stop food-app`

## Endpoints

| Method | Endpoints                 | Response                      |
| ------ | ------------------------- | ----------------------------- |
| GET    | http://localhost:3000     | Home page of react web server |
| GET    | http://localhost/food     | Lists all food recipies       |
| POST   | http://localhost/food     | Insert a food recipie         |
| DELETE | http://localhost/food/:id | Delete a food recipie by id   |

**Author: Akhildev MJ**
