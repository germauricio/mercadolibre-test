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

#### Pre-requisites 📋

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

## Api documentation 📄

### /api/items/:itemId

- Returns formated item detail

> Example

- Request: `/api/items/MLA614113303`

- Response: 

```
{
    "author": {
        "name": "Mauricio",
        "lastname": "Pauluk"
    },
    "item": {
        "id": "MLA614113303",
        "title": "Limpia Inyectores Nafta Liqui Moly Injection Reiniger 2124 Motores Nafteros Combustible - Nolin",
        "price": {
            "currency": "ARS",
            "amount": 1406,
            "decimals": 57
        },
        "picture": "http://http2.mlstatic.com/D_800958-MLA31134791578_062019-I.jpg",
        "condition": "new",
        "free_shipping": false,
        "sold_quantity": 500,
        "description": "Injection Reinger..."
    }
}
```
### /api/items?search={search}

- Returns formated item list

> Example

- Request: `/api/items?search=guitarra`

- Response: 

```
{
    "author": {
        "name": "Mauricio",
        "lastname": "Pauluk"
    },
    "categories": [
        "MLA432000",
        "MLA1645",
        "MLA410989",
        "MLA412445"
    ],
    "items": [
        {
            "id": "MLA882097946",
            "title": "Bolso Tote Bag Topman Original",
            "price": {
                "currency": "ARS",
                "amount": 4995,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_687000-MLA42653025055_072020-I.jpg",
            "condition": "used",
            "free_shipping": true
        },
        {
            "id": "MLA766701304",
            "title": "Ventilador De Pie 20  Bgh Bfsp20b18 100w ",
            "price": {
                "currency": "ARS",
                "amount": 7999,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_894320-MLA31024975757_062019-O.jpg",
            "condition": "new",
            "free_shipping": true
        },
        {
            "id": "MLA628978224",
            "title": "Tensiometro  Aspen Aneroide  102 Con Estetoscopio",
            "price": {
                "currency": "ARS",
                "amount": 3699,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_949091-MLA31116118382_062019-O.jpg",
            "condition": "new",
            "free_shipping": true
        },
        {
            "id": "MLA834199284",
            "title": "A Notebook For The Best Undefined Ever. : Viki Notebook Pub",
            "price": {
                "currency": "ARS",
                "amount": 3000,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_842098-MLA40418261558_012020-I.jpg",
            "condition": "new",
            "free_shipping": false
        }
    ]
}
```
