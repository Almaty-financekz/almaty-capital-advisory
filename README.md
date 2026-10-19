# FINANCE ALMATY — сайт для GitHub Pages

Адрес сайта, под который подготовлены SEO-файлы: https://almaty-financekz.github.io/almaty-capital-advisory/
Номер WhatsApp для заявок: +7 777 487 71 63 (в `script.js` и ссылке в подвале).

## Загрузка в действующий репозиторий
1. Создайте **новый публичный репозиторий** `almaty-capital-advisory` в аккаунте `almaty-financekz` через GitHub → New repository. Затем откройте https://github.com/almaty-financekz/almaty-capital-advisory. Старый репозиторий менять не требуется.
2. Откройте вкладку **Code** и нажмите **Add file → Upload files**.
3. Перетащите **файлы из папки**, а не саму папку: `index.html`, `styles.css`, `script.js`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `.nojekyll`. `README.md` можно загрузить отдельно.
4. В окне загрузки файлов GitHub при необходимости подтвердите замену файлов с совпадающими именами. Если интерфейс не позволяет заменить их, используйте редактор файла на GitHub или Git на компьютере. Сохраните изменения (`Commit changes`).
5. **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
6. Проверьте `https://almaty-financekz.github.io/almaty-capital-advisory/`, `https://almaty-financekz.github.io/almaty-capital-advisory/sitemap.xml` и `https://almaty-financekz.github.io/almaty-capital-advisory/robots.txt`.

## Google Search Console
1. Откройте https://search.google.com/search-console/ и добавьте ресурс типа **URL-prefix** (Ресурс с префиксом URL) со значением `https://almaty-financekz.github.io/almaty-capital-advisory/`.
2. Для подтверждения выберите HTML-тег; скопируйте значение атрибута `content` и вставьте метатег в `<head>` файла `index.html`, затем загрузите его на GitHub. Нажмите «Подтвердить». Или используйте HTML-файл подтверждения Google и загрузите его в корень репозитория.
3. Слева выберите **Sitemaps** и отправьте `https://almaty-financekz.github.io/almaty-capital-advisory/sitemap.xml` (можно ввести только `sitemap.xml`).
4. В «Проверка URL» укажите `https://almaty-financekz.github.io/almaty-capital-advisory/` → «Проверить опубликованную страницу» → «Запросить индексирование».
5. Дождитесь обработки; подача карты и запроса **не гарантирует** индексирование и позицию в поиске.

## Важное ограничение robots.txt на GitHub Pages
Файл `robots.txt` размещён внутри `/almaty-capital-advisory/`, но по стандарту robots.txt поисковые роботы ищут файл по корню хоста `https://almaty-financekz.github.io/robots.txt`. Поэтому локальный файл в каталоге проекта **не управляет** сканированием этого URL, хотя доступен посетителям. На Google Search Console нужно отправить sitemap напрямую. Если появится свой домен, разместите robots.txt в корне домена.

## Заявки и конфиденциальность
Форма открывает WhatsApp с заполненным текстом, пользователь должен нажать «Отправить». Никаких серверных заявок, Google Sheets или CRM пока не подключено. Публичный номер виден всем посетителям. Перед привлечением трафика оформите актуальную политику обработки персональных данных и идентификацию оператора.

## Состав
- `index.html` — страница и SEO-метаданные
- `styles.css` — дизайн
- `script.js` — интерактивность и WhatsApp
- `favicon.svg` — иконка
- `sitemap.xml` — карта главной страницы
- `robots.txt` — вспомогательный файл (см. ограничение выше)
- `.nojekyll` — отключение Jekyll-обработки GitHub Pages
