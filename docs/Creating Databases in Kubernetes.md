### Mongo DB 

* Typescript and Mongoose do not work that well.

### Connect

```javascript
const connect = async () => {
    await mongoose.connect('url o domain name');
}
```
* If we delete or restart the pod running MongoDB, we will lose all of hte data in it!

### Fix