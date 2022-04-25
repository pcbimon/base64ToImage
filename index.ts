import * as fs from 'fs';
const world = 'world';

export function hello(world: string = 'world'): string {
  return `Hello ${world}! `;
}
console.log(hello()); 
const content = fs.readFileSync('content.txt', 'utf8');
var base64Data = content.replace(/^data:image\/jpeg;base64,/, "");

fs.writeFile("out.jpeg", base64Data, 'base64', function(err) {
    if(err){
        console.log(err);
    }
});