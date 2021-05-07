# Ответственное хранение

## Общие сведения
Функционал «Ответственное хранение» предназначен для предоставления клиенту возможности самостоятельно через личный кабинет, посредством ручного или массового ввода:

* принимать на хранение продукцию ОАО «НЛМК»,
* выкупать принятую на хранение продукцию ОАО «НЛМК».

## Работа с функционалом ответственного хранения

Работа с функционалом Ответственного хранения доступна только клиентам с ролью Ответственный хранитель.

Процесс работы с функционалом ответственного хранения включает в себя выполнение следующих процедур:

1. **Принятие товара на ответственное хранение**

   1. Вызов формы оформления акта МХ-1
   2. Заполнение заголовочной части акта МХ-1
   3. Заполнение табличной части акта МХ-1
   4. Сохранение и работа с черновиком акта
   5. Отправка акта МХ-1 на рассмотрение
   6. Загрузка подписанного акта МХ-1
   7. Просмотр страницы «Список актов МХ-1»
   8. Выгрузка списка актов МХ-1 за период
2. **Принятие товара на ответственное хранение массовым вводом**

   1. Вызов формы оформления акта МХ-1
   2. Выбор файла
   3. Загрузка файла и создание актов МХ-1
   4. Работа с журналом загрузки
   5. Отправка акта МХ-1 на рассмотрение массово
   6. Просмотр результата обработки
3. **Выкуп заказа с ответственного хранения**

   1. Создание заявки на выкуп заказа
   2. Заполнение заголовочной части акта МХ-3
   3. Заполнение табличной части акта МХ-3
   4. Сохранение и работа с черновиком акта
   5. Отправка акта МХ-3 на рассмотрение
   6. Загрузка подписанного акта МХ-3
   7. Просмотр страницы «Список актов МХ-3»
   8. Выгрузка списка актов МХ-3 за период
4. **Выкуп заказа с ответственного хранения массовым вводом**

   1. Вызов формы оформления акта МХ-3
   2. Выбор файла
   3. Загрузка файла и создание актов МХ-3
   4. Работа с журналом загрузки
   5. Отправка актов МХ-3 в обработку массово
   6. Просмотр результата обработки


## Сценарий использования

Пункт содержит описание работы с функционалом по всем перечисленным пунктам 

### **1. Принятие товара на ответственное хранение**

**Предусловия:**\
Данным клиентом создана заявка на производство по договору Хранения (заказы должны находиться в статусе ”Началась отгрузка” и последующие)

**Шаги:**

1. Перейти к созданию документа МХ-1.

Переход к форме создания документа МХ-1 возможен:

* с главной страницы (вкладка “Документы МХ-1” → кнопка “Создать новый документ МХ-1”)
* из меню (пункт меню “ОХ” → пункт меню “МХ-1” → пункт меню “Добавить документы МХ-1”)
* со страницы списка документов МХ-1 (кнопка “Создать новый документ МХ-1”)

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-16_16-39-5.png?version=1&modificationDate=1615901946323&api=v2)

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-16_16-43-59.png?version=1&modificationDate=1615902239364&api=v2)

\
2. На появившейся форме заполнения заголовочной части документа МХ-1 заполнить необходимые поля:

* **Договор** (список доступных договоров ограничен типов “Договор Хранения”. -
* **Грузополучатель** (отображается после заполнения поля “Договор” и ограничен сбытовой организацией, с которой заключен договор). При выборе грузополучателя происходит автоматическое определение склада
* **Номер акта МХ-1**
* **Дата акта МХ-1**

и нажать на кнопку **“Создать черновик”**

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-16_16-46-26.png?version=1&modificationDate=1615902386210&api=v2)

Если не все поля заполнены, система показывает предупреждение.

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-16_16-49-30.png?version=1&modificationDate=1615902571103&api=v2)

Перед сохранением документа со статусом «Черновик» проводится проверка на уникальность номера и даты документа МХ-1 в рамках одного договора. Если уникальность не соблюдена, на экран выведется сообщение:

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-16_12-46-8.png?version=1&modificationDate=1615887968453&api=v2)

Результат успешного создания черновика документа МХ-1.

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-16_16-51-21.png?version=1&modificationDate=1615902681515&api=v2)

Доступна область поиска позиций поставок с возможностью фильтрации по номеру т/с и сертификату.

3. Выполнить поиск позиций поставок нажатием на кнопку “**Применить**”.

Для поиска позиций отгрузки можно использовать буфер обмена (вставка массива данных из Excel и Word с удалением дубликатов) для мультипоиска.

Нажатие на кнопку “Применить” запускает поиск позиций поставок, которые еще не приняты на хранение.

Если для данного договора, склада и даты отсутствуют позиции, не принятые на хранение, отобразится сообщение “Нет данных”.

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-16_13-16-10.png?version=1&modificationDate=1615889770384&api=v2)

По умолчанию позиции поставок сгруппированы по номеру т/с и номеру заказа. Для настройки другой группировки есть возможность вынести необходимые столбцы из шапки таблицы/ вернуть необходимые столбцы, по которым выполнена группировка, в шапку таблицы.

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-25-44.png?version=1&modificationDate=1617193545572&api=v2)

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-30-36.png?version=1&modificationDate=1617193836737&api=v2)

В таблице найденных позиций поставок имеется возможность постраничного отображения записей с возможностью выбора количества отображаемых записей на странице: 25, 50 или 100 записей.

На записи позиции поставки, отобразятся поля записи (по умолчанию - дата тр. накладной и станция назначения).



4. Отметить необходимые строчки (проставить галочки в чек-боксе слева) и добавить их в табличную часть нажатием на кнопку “**Добавить**”

При выборе позиции поставки автоматически выбираются все позиции поставки из одного заказа.

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-34-36.png?version=1&modificationDate=1617194077507&api=v2)

После добавления позиции поставки перемещаются в табличную часть документа МХ-1

Есть возможность удалить строку из табличной части документа МХ-1 нажатием на иконку “Урна”.

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-35-56.png?version=1&modificationDate=1617194157355&api=v2)

5. Выполнить сохранение документа в статусе “Черновик” (нажатием на кнопку “**Сохранить**”) или отправку документа в обработку (нажатием на кнопку “**На рассмотрение**”)

Также есть возможность удалить документ нажатием на кнопку “**Удалить**” (доступна для документов в статусе “Черновик”)

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-37-45.png?version=1&modificationDate=1617194265939&api=v2)

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-38-37.png?version=1&modificationDate=1617194318547&api=v2)

6. При отправке документа МХ-1 на рассмотрение осуществляется смена статуса на “Готов синхронизации”. После подтверждения документа во внутренней учетной системе НЛМК осуществляется смена статуса на “**Принято на ОХ**”.

При отображении статуса “Ошибка синхронизации” или “Ошибка SAP синхронизации” просим вас обратиться в техническую поддержку.

7. Выполнить загрузку подписанной заявки на хранение, сформированной в учетной системе клиента.

Для этого необходимо кликнуть на текст “**Выберите файл**” и указать файл или переместить документ в область выбора файла. Файл загрузки должен иметь формат JPEG, PNG, PDF или TIF и размер не более 8 МБ.

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-50-29.png?version=1&modificationDate=1617195030032&api=v2)

После того, как файл загружен, его код отображается над областью выбора файла.

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-53-1.png?version=1&modificationDate=1617195181837&api=v2)

При необходимости можно заменить загруженную подписанную заявку. Для этого необходимо повторить действия из п.7. Удаление предзагруженного файла не требуется.

8. Вернуться к списку документов МХ-1 можно по навигационной цепочке (пункт “**Документы**”)

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_15-54-57.png?version=1&modificationDate=1617195297894&api=v2)

9. Список документов МХ-1 поддерживает возможность фильтрации, сортировки значений и группировку по столбцам.

По каждому документу отражена следующая информация:

* Номер акта
* Дата акта
* Статус
* Договор
* Площадка
* Грузополучатель
* Кол-во по акту (т)
* Склад

В нижней части списка отображается общий объем по всем документам МХ-1. При настройке фильтрации объем пересчитывается.

Для формирования отчета “Список актов МХ-1 за период” необходимо::

* нажать на фильтр в столбце “Дата акта”,
* выбрать необходимый временной диапазон,
* нажать кнопку “ОК”,
* для выгрузки списка в формате .xlsx нажать на иконку

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-2-25.png?version=1&modificationDate=1617195746415&api=v2)

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-4-31.png?version=1&modificationDate=1617195872710&api=v2)



Для просмотра документа необходимо нажать на наименование документа МХ-1, после чего откроется форма существующего документа МХ-1.

Редактирование доступно только для документов МХ-1 в статусе “Черновик”.

### **2. Принятие товара на ответственное хранение массовым вводом**

**Предусловия:**\
Данным клиентом создана заявка на производство по договору Хранения (заказы должны находиться в статусе ”Началась отгрузка” и последующие)

**Шаги:**

1. Перейти к созданию документа МХ-1 массовым вводом

Переход к форме создания документа МХ-1 массовым вводом возможен:

* с главной страницы (вкладка “Документы МХ-1” → кнопка “Импортировать документ из файла”)
* из меню (пункт меню “ОХ” → пункт меню “МХ-1” → пункт меню “Массовый импорт МХ-1”)
* со страницы списка документов МХ-1 (кнопка “Импортировать документ из файла”)

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-7-19.png?version=1&modificationDate=1617196040364&api=v2)

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-8-7.png?version=1&modificationDate=1617196088522&api=v2)

2. На появившейся странице импорта выбрать сбытовую организацию из выпадающего списка

При выборе сбытовой организации отобразится ссылка на скачивание шаблона файла загрузки

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-10-51.png?version=1&modificationDate=1617196252661&api=v2)

Входной файл для ПАО должен содержать следующую информацию: 

* Вагон
* Сертификат/Позиция сертификата
* Номер МХ-1
* Дата МХ-1

Входной файл для Сортовых площадок должен содержать следующую информацию: 

* Вагон
* Номер МХ-1
* Дата МХ-1
* Договор

Первая строка заголовочная, то есть она должна содержать названия столбцов.

![](https://confluence.nlmk.com/download/attachments/24774890/image-20200311-162820.png?version=1&modificationDate=1583922503406&api=v2)





3.Выполнить загрузку файла, кликнув на текст “**Выберите файл**” и указав файл или переместив документ в область выбора файла. Файл загрузки должен иметь формат .xlsx или .csv ![](https://confluence.nlmk.com/download/attachments/24774890/image-20200311-152759.png?version=1&modificationDate=1583918882217&api=v2)




Далее нажать кнопку “**Загрузить**”.

При загрузке файла выполняется проверка корректности заполнения данных. Если ошибки будут найдены, то на экран выведутся сообщения по каждой строке и каждому полю, в которых обнаружены ошибки. Загрузка файла останавливается.

![](https://confluence.nlmk.com/download/attachments/24774890/image-20200311-153239.png?version=1&modificationDate=1583919162972&api=v2)





4. При успешной загрузке файла будет доступен журнал загрузки. В журнале отображаются созданные акты или описание ошибок в акте.

По клику на номера успешно созданных актов есть возможность перейти к просмотру документа.

Для созданных актов МХ-1 отображается активный чек-бокс. Акты, отмеченные галкой в чек-боксе, можно массово отправить в обработку.

Для отправки актов на рассмотрение необходимо нажать кнопку «**На рассмотрение**».

При успешном результате обработки на стороне внутренней учетной системы НЛМК отобразится статус обработки “Принято на ОХ”.

При отображении статуса “Ошибка при отправке” просим вас обратиться в техническую поддержку.

![](https://confluence.nlmk.com/download/attachments/24774890/image-20200311-161216.png?version=1&modificationDate=1583921540923&api=v2)

### **3. Выкуп заказа с ответственного хранения**

**Предусловия:**\
У данного клиента имеется подтвержденная заявка по принятию на ответственное хранение продукции НЛМК.

**Шаги:**

1. Перейти к созданию документа МХ-3.
2. Переход к форме создания документа МХ-3 возможен:

   1. с главной страницы (вкладка “Документы МХ-3” → кнопка “Создать новый документ МХ-3”)
   2. из меню (пункт меню “ОХ” → пункт меню “МХ-3” → пункт меню “Добавить документы МХ-3”)
   3. со страницы списка документов МХ-3 (кнопка “Создать новый документ МХ-3”)

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-21-18.png?version=1&modificationDate=1617196879596&api=v2)

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-22-22.png?version=1&modificationDate=1617196943324&api=v2)



2. На появившейся форме заполнения заголовочной части документа МХ-3 заполнить необходимые поля:

* **Договор** (список доступных договоров ограничен типов “Договор Хранения”.
* **Грузополучатель** (отображается после заполнения поля “Договор” и ограничен сбытовой организацией, с которой заключен договор). При выборе грузополучателя происходит автоматическое определение склада.
* **Номер акта МХ-3**
* **Дата акта МХ-3**

и нажать на кнопку **“Создать черновик”**

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-25-18.png?version=1&modificationDate=1617197119190&api=v2)

Если не все поля заполнены, система показывает предупреждение.

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-26-16.png?version=1&modificationDate=1617197177147&api=v2)

Перед сохранением документа со статусом «Черновик» проводится проверка на уникальность номера и даты документа МХ-3 в рамках одного договора. Если уникальность не соблюдена, на экран выведется сообщение:

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-30-28.png?version=1&modificationDate=1617197429582&api=v2)

Результат успешного создания черновика документа МХ-3.



Доступна область поиска позиций поставок с возможностью фильтрации по номеру т/с, материалу и сертификату.

3. Выполнить поиск позиций поставок нажатием на кнопку “**Применить**” для поиска всех остатков, хранящихся на указанном складе на выбранную дату.

Для поиска позиций отгрузки можно использовать буфер обмена (вставка массива данных из Excel и Word с удалением дубликатов) для мультипоиска.

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-31-47.png?version=1&modificationDate=1617197508162&api=v2)

Для поиска лучше использовать фильтр «Сертификат/позиция» (пачка), а остальные поля фильтра использовать как дополнительные в случае дублирования данных Сертификат/позиция.

Нажатие на кнопку “Применить” запускает поиск позиций поставок, которые приняты на хранение, но не выкуплены.

Если для данного договора, склада и даты отсутствуют позиции, принятые на хранение и не выкупленные, отобразится сообщение “Нет данных”.

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-33-38.png?version=1&modificationDate=1617197619426&api=v2)

Есть возможность настроить группировку по столбцам. Для этого необходимо вынести столбцы из шапки таблицы.

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-41-40.png?version=1&modificationDate=1617198101464&api=v2)

В таблице найденных позиций поставок имеется возможность постраничного отображения записей с возможностью выбора количества отображаемых записей на странице: 25, 50 или 100 записей.

На записи позиции поставки, отобразятся поля записи (по умолчанию - № тр. накладной и название материала). 

4. Отметить необходимые строчки (проставить галочки в чек-боксе слева) и добавить их в табличную часть нажатием на кнопку “**Добавить**”

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-44-18.png?version=1&modificationDate=1617198259018&api=v2)

После добавления позиции поставки перемещаются в табличную часть документа МХ-3.

Есть возможность удалить строку из табличной части документа МХ-3 нажатием на иконку “Урна”.

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-48-5.png?version=1&modificationDate=1617198486592&api=v2)

Для позиций поставок в документах МХ-3 по договорам с Сортовыми площадками предусмотрена возможность редактирования тоннажа при добавлении в табличную часть

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-49-19.png?version=1&modificationDate=1617198560920&api=v2)



5. Выполнить сохранение документа в статусе “Черновик” (нажатием на кнопку “**Сохранить**”) или отправку документа в обработку (нажатием на кнопку “**На рассмотрение**” внизу страницы)

Также есть возможность удалить документ нажатием на кнопку “**Удалить**” (доступна для документов в статусе “Черновик”)

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-50-20.png?version=1&modificationDate=1617198621730&api=v2)

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_16-50-46.png?version=1&modificationDate=1617198647613&api=v2)

6. При отправке документа МХ-3 на рассмотрение осуществляется смена статуса на “Готов к синхронизации”. Затем после подтверждения документа во внутренней учетной системе НЛМК отображается статус “**Подтверждено в SAP**”.

При отображении статуса “Ошибка синхронизации” или “Ошибка SAP синхронизации” просим вас обратиться в техническую поддержку.

7. Выполнить загрузку подписанной заявки на выкуп, сформированной в учетной системе клиента.

Для этого необходимо кликнуть на текст “**Выберите файл**” и указать файл или переместить документ в область выбора файла. Файл загрузки должен иметь формат JPEG, PNG, PDF или TIF и размер не более 8 МБ.

![](https://confluence.nlmk.com/download/attachments/24774890/image-20200311-223457.png?version=1&modificationDate=1583944499849&api=v2)





















После того, как файл загружен, его код отображается над областью выбора файла.

![](https://confluence.nlmk.com/download/attachments/24774890/image-20200311-223531.png?version=1&modificationDate=1583944533943&api=v2)

При необходимости можно заменить загруженную подписанную заявку. Для этого необходимо повторить действия из п.7. Удаление предзагруженного файла не требуется.

8. Вернуться к списку документов МХ-3 можно по навигационной цепочке (пункт “**Документы**”)

![](https://confluence.nlmk.com/download/attachments/24774890/image-20200311-223633.png?version=1&modificationDate=1583944596147&api=v2)























9. Список документов МХ-3 поддерживает возможность фильтрации, сортировки значений и группировку по столбцам.

По каждому документу отражена следующая информация:

* Номер акта
* Дата акта
* Статус
* Договор
* Грузополучатель
* Кол-во по акту (т)
* Склад

В нижней части списка отображается общий объем по всем документам МХ-3. При настройке фильтрации объем пересчитывается.

Для формирования отчета “Список актов МХ-3 за период” необходимо:

* нажать на фильтр в столбце “Дата акта”,
* выбрать необходимый временной диапазон,
* нажать кнопку “ОК”,
* для выгрузки списка в формате .xlsx нажать на иконку

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_17-8-22.png?version=1&modificationDate=1617199703189&api=v2)



Для просмотра документа необходимо нажать на наименование документа МХ-3, после чего откроется форма существующего документа МХ-3.

Редактирование возможно только для документов МХ-3, находящихся в статусе “Черновик”.

### **4. Выкуп заказа с ответственного хранения массовым вводом**

**Предусловия:**\
У данного клиента имеется подтвержденная заявка по принятию на ответственное хранение продукции НЛМК.

**Шаги:**

1. Перейти к созданию документа МХ-3 массовым вводом

Переход к форме создания документа МХ-3 массовым вводом возможен:

* с главной страницы (вкладка “Документы МХ-3” → кнопка “Импортировать документ из файла”)
* из меню (пункт меню “ОХ” → пункт меню “МХ-3” → пункт меню “Массовый импорт МХ-3”)
* со страницы списка документов МХ-3 (кнопка “Импортировать документ из файла”)

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_17-10-21.png?version=1&modificationDate=1617199822549&api=v2)

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_17-11-43.png?version=1&modificationDate=1617199904977&api=v2)

2. На появившейся странице импорта выбрать сбытовую организацию из выпадающего списка.

При выборе сбытовой организации отобразится ссылка на скачивание шаблона файла загрузки.

![](https://confluence.nlmk.com/download/attachments/24774890/image2021-3-31_17-12-33.png?version=1&modificationDate=1617199954722&api=v2)

Входной файл для ПАО должен содержать следующую информацию: 

* Вагон
* Сертификат/Позиция сертификата
* Номер МХ-3
* Дата МХ-3
* Договор

Входной файл для Сортовых площадок должен содержать следующую информацию: 

* Вагон
* Код ОЗМ
* Объем
* Номер МХ-3
* Дата МХ-3
* Договор
* Склад

Первая строка заголовочная, то есть она должна содержать названия столбцов.

![](https://confluence.nlmk.com/download/attachments/24774890/image-20200312-125721.png?version=1&modificationDate=1583996245270&api=v2)











3.Выполнить загрузку файла, кликнув на текст “**Выберите файл**” и указав файл или переместив документ в область выбора файла. Файл загрузки должен иметь формат .xlsx или .csv

![](https://confluence.nlmk.com/download/attachments/24774890/image-20200312-130319.png?version=1&modificationDate=1583996601433&api=v2)































Далее нажать кнопку “**Загрузить**”.

При загрузке файла выполняется проверка корректности заполнения данных. Если ошибки будут найдены, то на экран выведутся сообщения по каждой строке и каждому полю, в которых обнаружены ошибки. Загрузка файла останавливается.![](https://confluence.nlmk.com/download/attachments/24774890/image-20200312-131659.png?version=1&modificationDate=1583997423430&api=v2)











































4. При успешной загрузке файла будет доступен журнал загрузки. В журнале отображаются созданные акты или описание ошибок в акте.

По клику на номера успешно созданных актов есть возможность перейти к просмотру документа.

Для созданных актов МХ-3 отображается активный чек-бокс. Акты, отмеченные галкой в чек-боксе, можно массово отправить в обработку.

Для отправки актов на рассмотрение, необходимо нажать кнопку «**На рассмотрение**».

При успешном результате обработки на стороне внутренней учетной системы НЛМК отобразится статус обработки “Успешно”.

При отображении статуса “Ошибка при отправке” просим вас обратиться в техническую поддержку.

![](https://confluence.nlmk.com/download/attachments/24774890/image-20200312-130545.png?version=1&modificationDate=1583996747984&api=v2)