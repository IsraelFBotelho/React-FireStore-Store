const express = require("express");
const router = express.Router();

const db = require("../firestore");

// RETORNA TODOS OS PRODUTOS
router.get("/", (req, res, next) => {
  db.collection("produtos")
    .get()
    .then((querySnapshot) => {
      let data = {};
      querySnapshot.forEach((doc) => {
        data[doc.id] = doc.data();
      });
      res.status(200).send({
        response: data,
      });
    })
    .catch((error) => {
      res.status(500).send({ message: error });
    });
});

// INSERE UM PRODUTO
router.post("/", (req, res, next) => {
  const dataProduto = {
    nome: req.body.nome,
    preco: req.body.preco,
  };

  db.collection("produtos")
    .add(dataProduto)
    .then((docRef) => {
      res.status(201).send({
        message: "Inserido no FireStore",
        id: docRef.id,
      });
    })
    .catch((error) => {
      res.status(500).send({ message: error });
    });
});

// RETORNA OS DADOS DE UM PRODUTO
router.get("/:id_produto", (req, res, next) => {
  const id = req.params.id_produto;

  db.collection("produtos")
    .where("nome", ">=", id)
    .where("nome", "<=", id + "~")
    .get()
    .then((querySnapshot) => {
      let data = {};
      querySnapshot.forEach((doc) => {
        data[doc.id] = doc.data();
      });
      res.status(200).send({
        response: data,
      });
    })
    .catch((error) => {
      res.status(500).send({ message: error });
    });
});

// ALTERA UM PRODUTO
router.patch("/", (req, res, next) => {
  const dataProduto = {
    preco: req.body.preco,
  };
  db.collection("produtos")
    .where("nome", "==", req.body.nome)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        db.collection("produtos").doc(doc.id).update(dataProduto);
      });
      res.status(202).send({
        message: "Produto atualizado com sucesso",
      });
    })
    .catch((error) => {
      res.status(500).send({ message: error });
    });
});

// DELETA UM PRODUTO
router.delete("/", (req, res, next) => {
  db.collection("produtos")
    .where("nome", "==", req.body.nome)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        db.collection("produtos").doc(doc.id).delete();
      });
      res.status(202).send({
        message: "Produto removido com sucesso",
      });
    })
    .catch((error) => {
      res.status(500).send({ message: error });
    });
});

module.exports = router;
