var i;
for (i = 0; i < 300000000; i++)
{
    Math.random();
}
console.log("Done - from web worker");
postMessage(i);