interface Res {
  code: 10000 | 10001 | 50000;
  status: "success" | "failure";
  data: any;
}


interface Tmp {
  mixed: true | string | 599 | {} | (() => {}) | (1 | 2)
}
