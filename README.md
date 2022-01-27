# Food App

_This project is developed using express and react frameworks with docker support._

## Steps

1. Create network: `docker network create food-net`

2. Run MongoDB container: `docker run -d --rm --name mongodb --network food-net -v food-data:/data/db -e MONGO_INITDB_ROOT_USERNAME=akku -e MONGO_INITDB_ROOT_PASSWORD=akku1234 mongo`

3. Move to food api server directory: `cd my-food-api`

4. Build food api server image:
   `docker build -t akkuakhildev/express-food-api .`
5. Run food api server container: `docker run -d --rm -p 80:80 --name food-api --network food-net -v $(pwd):/app -v /app/node_modules akkuakhildev/express-food-api`

6. Move to food web server directory: `cd ../my-food-web`

7. Build food web server image:
   `docker build -t akkuakhildev/react-food-web .`
8. Run food api server container: `docker run -d --rm -it -p 3000:3000 --name food-web -v $(pwd)/src:/app/src -v /app/node_modules akkuakhildev/react-food-web`

9. Stop api server container: `docker stop food-api`
10. Stop api server container: `docker stop food-web`

## Endpoints

| Method | Endpoints                 | Response                      |
| ------ | ------------------------- | ----------------------------- |
| GET    | http://localhost:3000     | Home page of react web server |
| GET    | http://localhost/food     | Lists all food recipies       |
| POST   | http://localhost/food     | Insert a food recipie         |
| DELETE | http://localhost/food/:id | Delete a food recipie by id   |

**Author: Akhildev MJ**
