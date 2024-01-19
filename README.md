# Project Name

This document provides cURL commands to interact with the project's API endpoints.

## Create an Author

To create a new author, use the following cURL command:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"Author Name"}' http://localhost:3002/authors
```

Replace "Author Name" with the actual name of the author you want to create.

## Create a Book
To create a new book, use the following cURL command:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"title":"Book Title", "author":"Author Name"}' http://localhost:3002/books
```

Replace "Book Title" and "Author Name" with the actual title and author of the book you want to create.

## Create a Review
To create a new review, use the following cURL command:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"bookId":1, "authorId":1, "content":"Great book!"}' http://localhost:3002/reviews
```
Replace 1 with the actual IDs of the book and author you want to review, and "Great book!" with the actual content of your review.

