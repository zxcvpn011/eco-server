# ADS / Sliders
  ## Summary
  - this section is about creating and editing and deleting the main page ADS or sliders before we start there's somethings to take care about it the limit for items that can be added to this section is 8 items so when creating a new AD and the items in the data base is 8 the AD won't created and you will receive a message with the limit size exceeds in this case you should display a list with available ADS and make him delete one or more to e able to create a new one

- In this section we will discuss some actions to do with ADS 
  1. creating a new AD
  2. getting all ADS
  3. editting an AD
  4. deleting an AD

1. To Create a new AD you will be need to send the following items in you request body `image, caption, card{title, subTitle, text, path}` 
  > Tip: all items above is required and the image is a string contains the image path so you will be need to upload the image first to get the image path and also you will be need to validate the image types to check that this is a vaild image
  - There's and example of the request body

```js
fetch("api.localhost/ads/create", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
  body: JSON.stringify({ 
    image: '/storage/854548d4s848s', 
    caption: 'some text', 
    card: {
      title: "string",
      subTitle: "string",
      text: "string",
      path: "string",
    }
  })
})
.then(e => e.json())
.then(console.log)
```

- Expected response  `{"sucsess": true}` or `{"err": "limit size exceeds or another error message"}`

2. To get all ADS just send a request to this path `/ads` here's example

```js
fetch("api.localhost/ads")
.then(e => e.json())
.then(console.log)
```

- Expected response  

```json
[
  {
    "image": "/storage/854548d4s848s", 
    "caption": "some text", 
    "card": {
      "title": "string",
      "subTitle": "string",
      "text": "string",
      "path": "string",
    },
    "_id": "6449902d7d8fc7fbd5903294"
  },
  {
    "image": "/storage/854548d4s848s", 
    "caption": "some text", 
    "card": {
      "title": "string",
      "subTitle": "string",
      "text": "string",
      "path": "string",
    },
    "_id": "6449902d7d8fc7fbd5903294"
  }
]
```

1. To edit an AD send a request to this path `/ads/edit/:id` with the ad id here's example
  > Tip: the method of this request is `PUT`

```js
fetch("api.localhost/ads/edit/6449902d7d8fc7fbd5903294", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
  body: JSON.stringify({ 
    caption: "some new text"
  })
})
.then(e => e.json())
.then(console.log)
```

- Expected response  `{"sucsess": true}` or `{"err": "error message"}`

4. To delete an AD just send the AD id to this path `/adss/delete/:id`
  > Tip: the method of this request is `DELETE`

```js
fetch("api.localhost/adss/delete/6449902d7d8fc7fbd5903294", {
  method: "DELETE",
})
.then(e => e.json())
.then(console.log)

```
- Response `{"sucsess": true}` or `{"err": "AD doesn't exist"}`

