#!/bin/bash

# Create an author
AUTHOR_RESPONSE=$(curl -s -X POST -H "Content-Type: application/json" -d '{"name":"Author Name"}' http://localhost:3002/authors)
AUTHOR_ID=$(echo $AUTHOR_RESPONSE | jq -r '.id')

# Create a book
BOOK_RESPONSE=$(curl -s -X POST -H "Content-Type: application/json" -d "{\"title\":\"Book Title\", \"author\":\"$AUTHOR_ID\"}" http://localhost:3002/books)
BOOK_ID=$(echo $BOOK_RESPONSE | jq -r '.id')

# Create a review
curl -X POST -H "Content-Type: application/json" -d "{\"book\": { \"id\": $BOOK_ID }, \"authorId\":$AUTHOR_ID, \"content\":\"Great book!\"}" http://localhost:3002/reviews