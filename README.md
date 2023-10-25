# Support Docker

## Build file

```bash
docker compose build
```

## Run file

```bash
docker compose up
```

## Create table on Docker

```bash
docker compose exec app bash
npm run migrate
```

## Access to database on Docker

Check Docker Container

```bash
docker ps
```

<p align="center">
  <img src="./public/assets/images/dockerps.png" width="800" />
</p>

Get containerID from IMAGE: postgres

```bash
docker exec -it <CONTAINER ID> bash
```

<p align="center">
  <img src="./public/assets/images/dockerexec.png" width="800" />
</p>

Connect to database with user nhlcoding

```bash
psql -U nhlcoding
```

<p align="center">
  <img src="./public/assets/images/psql.png" width="800" />
</p>

How to exit from database

```bash
\q
```