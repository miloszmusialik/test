function modify (a) {
    a.foo = "bar";
}

var obj = {foo: "foo"}
modify(obj);
console.log(obj);

function ms (sv) {
    sv = "newStringValue";
    console.log("StringValue", sv);
}

const ssv = "value 123";

ms(ssv);
console.log(ssv);