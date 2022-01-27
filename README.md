# Food App

_This project is developed using express and react frameworks with docker support._

## Steps

1. Start docker in detach mode: `docker-compose up -d`
2. To stop docker: `docker-compose down`

## Endpoints

| Method | Endpoints                 | Response                      |
| ------ | ------------------------- | ----------------------------- |
| GET    | http://localhost:3000     | Home page of react web server |
| GET    | http://localhost/food     | Lists all food recipies       |
| POST   | http://localhost/food     | Insert a food recipie         |
| DELETE | http://localhost/food/:id | Delete a food recipie by id   |

**Author: Akhildev MJ**
