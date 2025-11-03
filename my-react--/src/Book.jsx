export default function Book({book}){
    console.log("book are :",book)
    return(<>
    <li>Name : {book.name}</li>
    <li>Book Price :{book.price}</li>
    <li></li>
    </>)
}