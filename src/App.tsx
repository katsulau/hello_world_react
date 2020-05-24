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


  // 非同期処理

  const wakeUp = (milSecond: any) => {
    setTimeout(() => {console.log('起きた');}, milSecond);
  };

  const greet = () => {
    console.log('おやすみ');
    wakeUp(2000);

    console.log('おはよう!');
  }

  greet();


  // プロミス構文

  // const sleep = (milSecond: any) => new Promise( resolve => setTimeout(resolve, milSecond));

  // const doGreeting = () => {
  //   console.log('おやすみ');


  //   sleep(2000)
  //   .then(() => {
  //     console.log('起きた!');
  //     console.log('おはよう!');
  //   })
  //   .catch(error => {
  //     console.error('睡眠例外です: ', error);
  //   })
  // }

  // doGreeting();

  // async/await構文(上記プロミス構文と内容は同じ)
  // asyncで定義されたAsync関数は、本文中にawaitを前置きすることで、他のasync関数の実行結果を待ってくれる
  // async/awaitは実のところPromise構文のシンタックスシュガー。Async関数は隠されているだけで暗黙の内にPromiseオブジェクトを返している。
  const sleep = (milSecond: any) => new Promise(resolve => setTimeout(resolve, milSecond));

  const doGreeting = async() => {
    console.log('おやすみ');

    try {
      await sleep(2000);
      console.log('起きた!');
      console.log('おはよう!');
    } catch (error) {
      console.log('睡眠例外です: ', error);
    }
  }

  doGreeting();


  const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8];

  // map() は対象の配列の要素一つ一つを加工した新しい配列を作る
  console.log(arrayNumber.map(number => number * 2));


  // 上記の関数を書き換えると次のようになる
  // 上記のnumber => number * 2は無名関数。
  const double = (number: number) => number * 2;
  arrayNumber.map(double);

  // filter() は条件に適合する要素だけを抽出して新しい配列を作る
  console.log(arrayNumber.filter(number => number % 3 === 0));

  // find() は条件に適合した要素をひとつだけ取り出す。見つからない場合はundefindを返す
  console.log(arrayNumber.find(number => number > 4));

  // every() はすべての要素が条件を満たすかを真偽値で返す
  console.log(arrayNumber.every(number => number !== 0)); // true

  // some() は条件を満たす要素がひとつでもあるかを真偽値で返す
  console.log(arrayNumber.some(number => number > 0)); // false

  // includes() は指定した要素が含まれるかを真偽値で返す
  console.log(arrayNumber.includes(5)); // true

  // reduce() は配列の要素を、与えた式で畳み込んだ値を返す
  console.log(arrayNumber.reduce((n, m) => n + m)); // 36

  // sort() は各要素を、与えた条件によって並び替えた新しい配列を返す
  console.log(arrayNumber.sort((a,b)=>b-a)); // [8, 7, 6, 5, 4, 3, 2, 1]


//   これらが関数型プログラミングで多用されるのは、非破壊的な処理を行ってくれるから。
//   map() や filter() は元の配列の値を一切いじらずに、新しい配列を生成して返すよね。
//   関数型プログラミング は副作用を嫌うと説明したと思うけど、だから相性がいいの

// 1. 名前のない使い捨ての関数(無名関数)が使える
// 2. 変数に関数を代入できる(=変数に無名関数を代入することで名前をつけられる) 
// 3. 関数の引数に関数を渡したり、戻り値として関数を返すことができる(高階関数) 
// 4. 関数に特定の引数を固定した新しい関数を作ることができる(部分適用)
// 5. 複数の高階関数を合成して1つの関数にできる


// 戻り値として関数を返す関数である高階関数
const hof = (ex: number, fn: Function) => (n: number) => fn(n + ex);

const plusOneDouble = hof(1, (n: number) => n * 2);

console.log(plusOneDouble(4)); // 10 


// 実行ごとに値が加算されていくカウンターですね。クラスなら簡単に実現できますけど、これを関数だけでやるにはクロージャを使うと良い
class Counter {
  count: number;
  
  constructor(initialCount: number) {
    this.count = initialCount;
  }

  increment() {
    return this.count++;
  }
}

const counter = new Counter(1);

console.log(counter.increment(), counter.increment(), counter.increment())

// クロージャを使った書き方

const counterMaker = (initialCount: number) => {
  let count = initialCount;
  const increment = () => count++;

  return increment;
}

const count = counterMaker(1);

console.log(count(), count(), count()); // 1, 2, 3

//「あっ、変数 c の値が実行ごとにクリアされることなく加算されていってる! なんでこういう挙動 になるんでしょうか?」
// 「これはね、まず関数 counterMaker が最後に関数 increment を返してるから、その戻り値を代入した count の中身は内部の関数 increment なのよ。
// だからそれを実行すると counterMaker 内部の increment が実行される。increment が単体で呼ばれるわけでなく、
// あくまで counterMaker の環境の中で実行さ れているから変数 c の値が毎回リセットされることなく蓄積されていくわけ」



// ジェネレータ
function* rangeGenerator(end:number, start = 0) {
  let number = 0;

  for(let i = start; i < end; i++) {
    n += 1;
    yield i;
  }
}

const generator = rangeGenerator(3);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


// カリー化
const multipleArgumentFunction = (n: number, m: number) => n * m;

console.log(multipleArgumentFunction(2, 4)) // 8

const curriedMultipleArgumentFunction = (n: number) => {
  return (m: number) => n * m;
}

console.log(curriedMultipleArgumentFunction(2)(4)); // 8

const simpleCurriedMultipleFunction = (n: number) => (m: number) => n * m;
console.log(simpleCurriedMultipleFunction(2)(4)) // 8

console.log(simpleCurriedMultipleFunction(2)); // m => n * m


const multipleFunction = (n: number) => (m: number) => n * m;

console.log(multipleFunction(3)(5)); // 15

const triple = multipleFunction(3);
console.log(triple(5)); // 15


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
