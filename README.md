# Mercado Libre Challenge

## How to run the project 🚀

First of all, you have to clone the repo, step in its root directory and copy environment variables

```
git clone https://github.com/germauricio/mercadolibre-test.git

cd mercadolibre-test

cp .env.example .env
```

There is two ways to run the project:

**With** or **Without** Docker

### With Docker

#### Installation 🔧

```
docker-compose build

docker-compose up
```

And the project will be working on http://localhost:3000/ !

### Without Docker

#### Pre-requisitos 📋

- Node v14.5.0
- Npm v6.14.5

#### Installation 🔧

```
npm install

npm install next

npm run dev
```

And the project will be working on http://localhost:3000/ !


## How to run Tests ⚙️

Once the project is correctly installed, you can execute tests by running:

```
npm run test
```

## Deploy 📦

The project is deployed with Heroku. It is deployed automatically when CI successes

Site: http://challenge-pauluk-mercadolibre.herokuapp.com/

## Build with 🛠️

- NextJS
- Express
- Sass
- Jest
