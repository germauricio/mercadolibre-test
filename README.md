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
        "MLA2989",
        "MLA2989",
        "MLA2989",
        "MLA4274"
    ],
    "items": [
        {
            "id": "MLA698752044",
            "title": "Guitarra Criolla Clasica Nuevas Calidad Con Funda Pua Manual",
            "price": {
                "currency": "ARS",
                "amount": 6499,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_694346-MLA31351983361_072019-O.jpg",
            "condition": "new",
            "free_shipping": true
        },
        {
            "id": "MLA676545238",
            "title": "Guitarra Criolla De Estudio Varios Colores Con Funda Oferta!",
            "price": {
                "currency": "ARS",
                "amount": 5995,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_732564-MLA43693464164_102020-O.jpg",
            "condition": "new",
            "free_shipping": true
        },
        {
            "id": "MLA848015734",
            "title": "Guitarra Criolla Clasica De Estudio Color Negra",
            "price": {
                "currency": "ARS",
                "amount": 6079,
                "decimals": 0.15
            },
            "picture": "http://http2.mlstatic.com/D_799526-MLA42562146808_072020-O.jpg",
            "condition": "new",
            "free_shipping": true
        },
        {
            "id": "MLA803211819",
            "title": "Guitarra Acustica Parquer Master Marron Con Corte Y Funda",
            "price": {
                "currency": "ARS",
                "amount": 18066,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_698989-MLA31913085794_082019-O.jpg",
            "condition": "new",
            "free_shipping": true
        }
    ]
}
```
### /api/categories/:itemCategory

- Returns formated item parent categories

> Example

- Request: `/api/categories/MLA1055`

- Response: 

```
{
    "author": {
        "name": "Mauricio",
        "lastname": "Pauluk"
    },
    "parentCategories": [
        {
            "id": "MLA1051",
            "name": "Celulares y Teléfonos"
        },
        {
            "id": "MLA1055",
            "name": "Celulares y Smartphones"
        }
    ]
}
```

### /api/categories/item/:itemId

- Returns formated item category

> Example

- Request: `/api/categories/item/MLA614113303`

- Response: 

```
{
    "author": {
        "name": "Mauricio",
        "lastname": "Pauluk"
    },
    "category_id": "MLA61201"
}
```

I would really appreciate any commentary or suggestion about my resolution to the challenge!

Thanks for reading!
