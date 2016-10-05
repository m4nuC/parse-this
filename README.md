# Convert stringified values back to native types

When sending formData the server and the client, data types may get converted to strings. i.g. `true` because `'true'` `1` `'1'` and so on. This librairy aim to port back those value to their original type.

## usage

```
import {objectParser, arrayParser} from 'parse-this';
const parsedData = objectParser(formData)
```
