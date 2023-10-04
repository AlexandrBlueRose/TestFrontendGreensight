# Тестовое задание для направления Frontend разработка для Greensight
---
## Описание

Вёрстка с использованием flex и grid(для Safari/Mozilla написал оптимизацию, где увидел ошибки)
Старался верстать по pixel perfect
Часть внешних и внутренних отступов делал clamp-ом(либо min/max), остальное медиа запросами
Все сверстано по стандартам w3, кроме пары моментов в фильтрации, добавлял флаги как аттрибуты


API
Изначально загружается 5 карточек
в самих карточках дополнительно делается запрос на получшение веб сайта работодателя и для получения описания вакансии
Во время фильтрации добавляются параметры в запрос и заново загружается(очищается контейнер) 5 карточек, внизу страницы кнопка загрузки дополнительных карточек берет параметры фильтров, если они указаны

Карточки берутся по 5 * страницу++ пока произведение меньше 2000(по правилам описанным в документации АПИ)
---
## Установка и запуск
Для запуска:
````
(npm install -D webpack-dev-server если не установлен)
webpack serve

````

Сборка:
````

webpack --node-env=production

````
Страница: http://localhost:9000/
Страница для устройств в общей сети: http://192.168.1.66:9000/
