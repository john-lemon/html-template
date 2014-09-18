[Html-template.][4]

Для сборки [Stylus][1] и JavaScript используется [gruntjs.com][2] или [Gulp][5]

Для работы требуется: Node.js.


### Установка Grunt

    sudo npm install -g grunt-cli

### Или установка Gulp

    npm install  gulp

Перезапустите консоль.

Для дальнейшей установки перейдите в папку с проектом и выполните коману:

    npm install


### Использование Grunt в проекте

* Переходим в папку с проектом.
* Выполняем команду `grunt` – запустится событие, которое будет отслеживать изменения в папке `layout/assets/`
* JS и CSS скомпилируются в папку `layout/media/`

### Использование Gulp в проекте

* Переходим в папку с проектом.
* Выполняем команду `gulp` – запустится событие, которое будет отслеживать изменения в папке `layout/assets/`
* JS и CSS скомпилируются в папку `layout/media/`

### Генерация спрайтов. Использование.

* PNG складываем в папку `layout/media/images/sprite/`
* После компиляции появятся/обновятся `layout/media/images/sprite.png` и `layout/assets/css/variables/sprite-mixins.styl`
* Пример использования: .class-name { s-filename() или s-filename(p) или s-filename(r)}


[1]: http://learnboost.github.io/stylus/
[2]: http://gruntjs.com
[3]: https://glue.readthedocs.org/en/latest/installation.html
[4]: https://github.com/trolev/html-template/tree/master
[5]: http://gulpjs.com
