import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  
  // 変数について
  // var変数のスコープは関数単位。そのため、制御構文のブロックをすり抜けてしまうため、varは使ってはいけない。
  var n = 0;

  if (true) {
    var n = 50;
    var m = 100;
    console.log(n);
  }

  console.log(n);
  console.log(m);


  // letを使えば、ブロック単位になる。
  let a = 0;

  if (true) {
    let a = 50;
    let b = 100;
    console.log(a);
  }

  console.log(a);

  // bは見つけられない
  // console.log(b);


  // アロー関数について
  // この３つの書き方は全て同じ意味になる
  // function plusOne(n: number) {
  //   return n + 1;
  // }
  const plusNumberOne = (n: number) => {return n + 1};
  const plusOne = (n: number) => n + 1;


  // ただし、function での関数宣言とアロー関数式での宣言 は this の挙動が変わるので気をつけてね。その違いを理解するために、次のコードを実行


  const obj1 = { 
    num: 444,
    fn: function () {
      console.log(this.num);
    }
  }

  const obj2 = {
    num: 888,
    fn: () => {
    // console.log(this.num);
    } 
  }

  obj1.fn(); // 444
  obj2.fn(); // undefined

  // funciton による関数宣言では、その文脈における直上のオブジェクトが this になる。
  // 直上に定義したオブジェクトがない場合はグローバルオブジェクトね。いっぽう、アロー関数式では this はその 関数それ自体になる


  // 関数のデフォルト引数を使った書き方もできる。この例だと、デフォルト引数は0
  const plusTwo = (n = 0) => n + 2;

  console.log(plusTwo(5)); // 7
  console.log(plusTwo()); // 2



  // クラス構文


  class Bird {
    name: String;

    constructor(name: String) {
      this.name = name;
    }

    chirp() {
      console.log(`${this.name}が鳴きました`)
    }

    static explain(name: String) {
      console.log(`${name}は翼が合って卵を産みます`);
    }
  }

  class FlyableBird extends Bird {
    constructor(name: String) {
      super(name);
    }

    fly() {
      console.log(`${this.name}が飛びました`);
    }
  }


  const penguin = new Bird('ペンギン')

  penguin.chirp();

  Bird.explain('カラス');

  const sparrow = new FlyableBird('スズメ');

  sparrow.chirp();

  sparrow.fly();



  // 分割代入


  const [firstNumber, secondNumber] = [1, 4];

  console.log(firstNumber, secondNumber);


  // こんなこともできる
  const person = { name: 'Katsu', age: 26}

  const {name, age} = person;

  console.log(name, age);


  // こんなことも

  const arrayAbc = ['A', 'B', 'C'];

  // この書き方をスプレッド構文と言って、『...』をスプレッド演算子と呼ぶ
  const arrayAbcde = [...arrayAbc, 'D', 'E'];
  
  console.log(arrayAbcde);

  const numberHashObject = {a: 1, b: 2, c: 3}

  const allNumberHashObject = {...numberHashObject, d:4, e:5}

  console.log(allNumberHashObject);


  const minimun = 10;


  // プロパティ名のショートハンドとかって呼ばれる書き方。minumunが勝手にキー名になってくれる。
  const minumunAndMaxNumber = {minimun, max: 500}
  console.log(minumunAndMaxNumber); // {minimun: 10, max: 500}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.tsx</code> and save to reload. */}
          Hello, world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
