import { capitalize, truncate, clamp, randomInt } from './utils/index.js';

console.log(capitalize("hello world"));    // Hello world
console.log(truncate("Довгий текст", 6));  // Довгий...
console.log(clamp(150, 0, 100));           // 100
console.log(randomInt(1, 10));             // число від 1 до 10
