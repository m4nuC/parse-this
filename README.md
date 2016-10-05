# Cast stringified values (in an object or array) back to native types

When sending `formData` to the server, data types may get cast to strings. i.g. `true` because `'true'` `1` `'1'` and so on. This librairy aim is to cast back those value to their original type.

I couldn't find anything out there in under 5 minutes so I've started this implementation. It very barebone and probably very flawed but I will polish it in the next few days. I'll appreciate any feedback / PR that may help to make this more robust.

## install

```
npm install --save(-dev) parse-this
```

## usage

```
import {objectParser, arrayParser} from 'parse-this';
const parsedData = objectParser(formData)
```
