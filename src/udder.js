import "babel-core/polyfill";
import parseUtterance from "./parser";

console.log(parseUtterance("foo {bar,baz|ASlot}{one|Number} bar baz's quux"));
