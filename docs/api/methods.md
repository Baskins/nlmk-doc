# Методы работы с API НЛМК Connect

## Аутентификация и токен доступа

Для доступа к API НЛМК Connect необходимо пройти проедуру аутентификации и получить токены доступа.

Для аутентификации используется протокол [OAuth 2.0 RFC 6749](https://tools.ietf.org/html/rfc6749).

### Запрос
Для получения ключа доступа `access_token` необходимо выполнить `POST` запрос на адрес `https://nlmk.shop/authorizationserver/oauth/token`

*Обязательные параметры* (выдаются при подключении к API):
* `client_id`
* `client_secret`
* `username`
* `password`

*Заголовки запроса*
* Content-Type: `application/x-www-form-urlencoded`
* Accept: `application/json`


**Пример запроса (curl)**
``` bash
curl --location --request POST 'https://nlmk.shop/authorizationserver/oauth/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Accept: application/json' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'client_id=client-identificator' \
--data-urlencode 'client_secret=хххххх' \
--data-urlencode 'username=service@user.ru' \
--data-urlencode 'password=хххххх'
```

### Ответ

В ответ от API НЛМК Connect вы получите информацию о токене доступа `access_token` и времени его жизни `expires_in` (в секундах)

**Пример успешного ответа**
``` json
{
    "access_token": "9260d63b-4b29-423e-948e-xxxxxxxxxxxx",
    "token_type": "bearer",
    "refresh_token": "32e32660-b267-4385-90c6-xxxxxxxxxxxx",
    "expires_in": 86399,
    "scope": "openid"
}
```

В случае возникновения ошибки в ответе будет код ошибки `error` и её описание `error_description`

**Пример ответа с ошибкой**
``` json
{
    "error": "invalid_grant",
    "error_description": "Bad credentials"
}
```
::: tip Примечание
Во всех возвращаемых данных используется формат json
:::

## Работа с данными НЛМК Connect

Во всех методах используется авторизация типа Bearer

Обязательный заголовок запроса
* Authorization: `Bearer <access_token>`

Хост API `https://connect.nlmk.shop`

::: tip Примечание
Во всех возвращаемых данных используется формат json
:::


**Таблица 1 – Типы бизнес-запросов данных через сервис API НЛМК Connect**

|  Метод |  Эндпоинт |  Параметры |  Результат |
|---|---|---|---|
| Получить информацию по СК  | `GET` `/api/v1/certificates/<qr_code>`  | `qr_code` - код сертификата  |  Данные сертификата качества |
| Получить информацию по ЕП  | `GET` `/api/v1/certificates/product/<qr_code>`  | `qr_code` - код продукции  |  Данные единицы продукции |
| Скачать скан-копию СК  | `GET` `/api/v1/certificates/scans/<qr_code>`  | `qr_code` - код сертификата  |  pdf файл |

::: tip Примечание
В одном запросе может быть указан один qr-код.
:::

Проверить работу и узнать содержимое ответов можно через Postman

## Получение и обработка данных от НЛМК Connect

НЛМК Connect возвращает в АС покупателя набор данных в соответствии с типом бизнес-запроса (см. Таблицу 1 выше).

ИС клиента обрабатывает полученные от НЛМК Connect данные согласно описанию перечня передаваемых тегов, приведенном в [Приложение 1. Описание перечня передаваемых НЛМК Connect тегов](https://doc.nlmk.online/Product_API_Data_Specification.xlsx) (файл Excel, 59кб.).
 
В случае, отсутствия запрашиваемых данных НЛМК Connect возвращает в АС покупателя соответствующее информационное сообщение об ошибке.
