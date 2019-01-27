// console.log(42);

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
  
    createDiv(text) {
        let div = document.createElement('div');
        div.textContent = text;

        div.style.height = this.height + 'px';
        div.style.width = this.width + 'px';
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize + 'pt';
        div.style.textAlign = this.textAlign;

        document.body.appendChild(div);
    }
  
  }

opt1 = new Options(100, 200, 'green', 20, 'right');
opt2 = new Options(100, 400, 'blue', 24, 'center');
console.log(opt1);
console.log(opt2);

opt1.createDiv('Какой-то текст!');
opt2.createDiv('А здесь текста больше!!!');