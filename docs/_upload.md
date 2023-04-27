# Uploading
- In this section i will show you how can you upload any type of data like images, videos, etc... including the file limit size and available data types every section will consits of 2 parts expected data for `request` and the expected `response`

## Uploading Single File 
1. To upload a single file you will bbe need to send the file as a form data and the form data input name is should to be `file` sp as an uploading api there's no place in server to redirect you on it when just uploading a file it's supposed that you send that form data as http request and fetch api by creating a new `FormData` instance then append the filename and the file and send the request - the expected `Content-Type` is `multipart/form-data` and the request method is `POST` here's and example of how the the request is suppose to be

```js
let fd = new FormData();
fd.append("file", document.getElementsByName("file")[0]);
fetch("api.localhost/upload", {
  method: "POST",
  body: fd
})
.then(e => e.json())
.then(console.log)

```
2. The Expected Response is object have a single property called `file` this property is an object contains the uploaded file path so the response is should to be like the following

```json
{
  "file": {
    "path": "/storage/fileName.extension"
  }
}
```


## Uploading Multiple Files

1. To upload a multiple files you will bbe need to do the same steps above but there's some changes in the request you will be need to append all files in a `FormData` key called `files` instead of `file` then send your request

```js
let fd = new FormData();
for(let i of document.getElementsByName("files")[0].files) fd.append("files", i);
fetch("api.localhost/upload/multiple", {
  method: "POST",
  body: fd
})
.then(e => e.json())
.then(console.log)

```

2. expected response is array of objects

```json
{
  "file": [
    {
      "path": "/storage/fileName1.extension"
    },
     {
      "path": "/storage/fileName2.extension"
    },
     {
      "path": "/storage/fileName2.extension"
    },
     {
      "path": "/storage/fileName3.extension"
    }
  ]
}
```

# Limit Size And Available Data Types 

- this part isn't discussed yet!

# Used paths 
- `/upload`, `/upload/multiple`