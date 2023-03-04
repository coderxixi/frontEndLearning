type Stringify<T> = {
  [K in keyof T]: string;
};

interface Foo {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: () => void;
}
type StringifiedFoo = Stringify<Foo>;

let str:StringifiedFoo={
  prop1: 'string',
  prop2: 'number',
  prop3: 'boolean',
  prop4: 'strin'
}

export {

}