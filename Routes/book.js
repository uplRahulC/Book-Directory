var express = require("express");
const { update } = require("../Models/bookStructure");
var router = express.Router();
const bookstructure = require("../Models/bookStructure");

router.post("/newBook", async (req, res) => {
  console.log(req.body);
  const newBook = new bookstructure(req.body);
  try {
    const book = await newBook.save();
    return res.send({
      error: false,
      message: "Book Sucessfully Uploaded",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      error: true,
      message: "Server Error",
    });
  }
});

router.get("/getAllBooks", async (req, res) => {
  try {
    const allBooks = await bookstructure.find({});
    return res.send({
      error: false,
      result: allBooks,
      message: "Book found",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      error: true,
      message: "Server Error",
    });
  }
});

router.get("/findbookbyid/:Bookid", async (req, res) => {
  try {
    const findonebook = await bookstructure.findById(req.params.Bookid);
    return res.send({
      error: false,
      result: findonebook,
      message: "Book found",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      error: true,
      message: "Server Error",
    });
  }
});

router.get("/findbookbyauthor/:authorname", async (req, res) => {
  try {
    console.log(req.params)
    const findbookbyauth = await bookstructure.find({
      "author.name": req.params.authorname,
      
    });
    return res.send({
      error: false,
      result: findbookbyauth,
      message: "Book found",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      error: true,
      message: "Server Error",
    });
  }
});

router.put("/updatebook/:Bookid", async (req, res) => {
  try {
    const updatebook = await bookstructure.findById(req.params.Bookid);

    updatebook.bookname = req.body.bookname || updatebook.bookname;
    updatebook.booktype = req.body.booktype || updatebook.booktype;
    updatebook.author.name = req.body.authorname || updatebook.authorname;
    updatebook.author.email = req.body.authoremail || updatebook.authoremail;
    updatebook.publisheddate =
      req.body.publisheddate || updatebook.publisheddate;

    const updatedbook = await updatebook.save();
    console.log(updatedbook);
    return res.send({
      error: false,
      message: "Book updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      error: true,
      message: "Server Error",
    });
  }
});

module.exports = router;
