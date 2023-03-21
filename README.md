
# Installation

Make sure you have NodeJS, Yarn, MySQL installed.

Clone the project 

```bash
git clone https://github.com/thirthfamous/dans-jobs-api.git
cd dans-jobs-api
```

Create database

```sql
CREATE DATABASE `job_db`
```

In `job_db` create the table

```sql
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
```

Insert the data 

```sql
INSERT INTO job_db.`user`
(id, username, password)
VALUES(1, 'farhan', '$2a$12$fZ4/q1QgvVlirbQ.u/Chkef/fbX6unCs77yqr2mqgVUP9DRiDIG7u');
```

Install dependencies

```bash
yarn install
```

Copy env

```bash
cp .env.example .env
```

Start the server
```bash
// with nodemon
yarn start:dev

// without nodemon
yarn start
```

Login

```curl
curl --location 'localhost:3000/login' \
--header 'Content-Type: application/json' \
--data '{
    "username": "farhan",
    "password": "farhan123"
}'
```

Get Job list Data

```curl
curl --location 'localhost:3000/jobs?description=node&location=Berlin&full_time=true&page=1' \
--header 'Authorization: Bearer {token}'
```

Get Job By ID

```curl
curl --location 'localhost:3000/jobs/:id' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZhcmhhbiIsImlhdCI6MTY3OTM3NTYxOX0.JanbaAkVGaWxbk0Gr0ERtY8H_TuxD4AauSNpdu_opN4'
```