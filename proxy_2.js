const target = {
  message1: "hello",
  message2: "everyone",
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);

console.log("Handler 1 consoled");
console.log(proxy1.message1); // hello
console.log(proxy1.message2); // everyone

const handler2 = {
  get(target, prop, receiver) {
    return "world";
  },
};

const proxy2 = new Proxy(target, handler2);

//Handler functions are sometimes called traps, presumably because they trap calls to the target object. The very simple trap in handler2 above redefines all property accessors:
console.log("Handler 2 consoled");
console.log(proxy2.message1); // world
console.log(proxy2.message2); // world

const handler3 = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(target, handler3);

//Proxies are often used with the Reflect object, which provides some methods with the same names as the Proxy traps. The Reflect methods provide the reflective semantics for invoking the corresponding object internal methods.
console.log("Handler 3 consoled");
console.log(proxy3.message1); // hello
console.log(proxy3.message2); // world
