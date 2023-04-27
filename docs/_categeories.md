# Categeories

## Notes
- when creating a new product first you should create a categeory if there's non any categeories you won't be able to create a product and adding products to categeories is important for searching and matching products so when the user is going to create a new product send request to check if there's a categeories first then make hime create a new categeoy then allow him to create his product


- In this section we will discuss some actions to do with categeories 
  1. creating a new categeoy 
  2. getting all categeoy
  3. editting categeories
  4. deleting categeories this section won't just delete the categeory it's will also remove it from all products related to this categeory so be careful when working with deleting categeory

1. To create a new categeoy you should send the following items and note that all items required except `description` so if one of the others doesn't exist it's will throw an error `name, image, description` - you should first upload the image to get the image path and don't allow submmiting the form untill the image uploaded and check for the file type before upload you can find uploading examples in upload doc

```js
fetch("api.localhost/categeories/create", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
  body: JSON.stringify({ 
    name: "cate name", 
    image: "path/to/image", 
    description: "some text"
  })
})
.then(e => e.json())
.then(console.log)

```
- Expected response  `{"sucsess": true}` or `{"err": "error message"}`


2. To get all categeories just send a request to `/categeories`

```js
fetch("api.localhost/categeories")
.then(e => e.json())
.then(console.log)
```
- Expected response  
```json
[
  {
    "name": "cate name", 
    "image": "path/to/image", 
    "description": "some text",
    "_id": "484848525825"
    // "products": ["id1", "id2", "id3"]
  },
  {
    "name": "cate name", 
    "image": "path/to/image", 
    "description": "some text",
    "_id": "484848525825"
    // "products": ["id1", "id2", "id3"]
  }
]
```
-  or `{"err": "error message"}`


1. To edit categeories just send a request to `/categeories/edit/:id` with the categeoy id
  > Tip: the method of this request is `PUT`

```js
fetch("api.localhost/categeories/edit/6449902d7d8fc7fbd5903294", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
  body: JSON.stringify({ 
    name: "a new namet"
  })
})
.then(e => e.json())
.then(console.log)
```
- Expected response  `{"sucsess": true}` or `{"err": "error message"}`


1. To delete categeories just send the categeoy id to `/categeories/delete/:id` but like i mentioned at the top this is not good something to do

```js
fetch("api.localhost/categeories/delete/6449902d7d8fc7fbd5903294", {
  method: "DELETE",
})
.then(e => e.json())
.then(console.log)

```

- Response `{"sucsess": true}` or `{"err": "categeoy doesn't exist"}`



