do {
    // лучше писать const, если тебе не нужно потом менять значение переменной
    // https://learn.javascript.ru/variables
    var figure = prompt('Выбери тип фигуры: Квадрат, прямоугольник, круг')


    // работает, но можно использовать
    // figure.toLowerCase() === 'квадрат'
    if (figure == 'квадрат' || figure == 'Квадрат') {
      var Cube1 = prompt('Введите сторону квадрата')
      Cube()
    // == не равно === 
    // https://learn.javascript.ru/comparison  
    } else if (figure == 'прямоугольник' || figure == 'Прямоугольник') {
      var Rectangle1 = prompt('Введите первую сторону прямоугольника')
      var Rectangle2 = prompt('Введите вторую сторону прямоугольника')
      Rectangle()
    } else if (figure == 'круг' || figure == 'Круг') {
      var Circle1 = prompt('Введите радиус круга')
      Circle()
    }

    function Cube() {
      // эта штука по идее недолжна была работать
      // потому что ты забыл ``
      // https://learn.javascript.ru/string#kavychki
      alert(`Площадь квадрата: ${Cube1 ** 2}`)
    }

    function Rectangle() {
      alert(`Площадь прямоугольника: ${Rectangle1 * Rectangle2}`)
    }

    function Circle() {
      alert(`Площадь круга: ${Circle1 ** 2 * 3.14}`)
    }

  } while (confirm('Повторим ввод?'))
  
