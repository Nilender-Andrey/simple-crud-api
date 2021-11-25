#### Installation:

1. Download or clone the assembly
2. Install dependencies (npm i)

#### Run:

`npm run start:dev` - development mode
`npm run start:prod` - production mode

#### Application usage:

The default port is 3000

1. Open 'Postman'
2. Make a request to the address `http://localhost:3000/person/`
3. API path /person:

   - `GET` /person or /person/${personId} return all persons or person with corresponding personId
   - `POST` /person is used to create record about new person and store it in database
   - `PUT` /person/${personId} is used to update record about existing person
   - `DELETE` /person/${personId} is used to delete record about existing person from database

   #### How to run tests

   1. In the first terminal, run the server (`npm run start:dev`)
   2. Open the second terminal and run tests (`npm run test:coverage`)

   /---------------------------/

#### Установка:

1. Скачайте или клонируйте сборку к себе на компьютер
2. Установите зависимости (npm i)

#### Запуск:

`npm run start:dev` - режим разработки
`npm run start:prod` - режим производства

#### Работа приложения:

Порт по умолчанию: `3000`

1. Откройте `"Postman"`
2. Запросы делаем по адресу: `http://localhost:3000/person`

   - `GET` /person или /person/${personId} возвращает все данные из базы или соответствующим personId
   - `POST` /person используется для создания новой записи в базу
   - `PUT` /person/${personId} используется для изменения записи в базе
   - `DELETE` /person/${personId} используется для удаления записи базы

#### Как запустить тесты:

1. Откройте терминал и запустите сервер (`npm run start:dev`)
2. Откройте второй терминал и запустите тесты (`npm run test:coverage`).
