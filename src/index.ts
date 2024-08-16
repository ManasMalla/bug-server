import express, { Request, Response } from "express";
import cors from "cors";
import { pool } from './db';
import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import prisma from "./prismaClient";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.post("/signup", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const response = await prisma.user.create({
    data: {
      email: email,
      password: password,
      name: "Manas Malla",
    }
  });
  res.json({
    "message": {
      "apiKey": "GDGV?=" + response.id + "123kalamdreamlabs",
      "email": response.email,
      "name": response.name,
      "createdAt": response.createdAt,
      "updatedAt": response.updatedAt,
      "id": response.id,
    }
  });
});

app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const response = await prisma.user.findFirst({
    where: {
      email: email,
      password: password
    }
  });
  if (response) {
    res.json({
      "message": {
        "apiKey": "GDGV?=" + response.id + "123kalamdreamlabs",
        "email": response.email,
        "name": response.name,
        "createdAt": response.createdAt,
        "updatedAt": response.updatedAt,
        "id": response.id,
      }
    });
  } else {
    res.json({ error: "Invalid Credentials" });
  }
});

app.post("/get-all-posts", async (req: Request, res: Response) => {
  const { apiKey } = req.body;
  const response = await prisma.user.findUnique({

    where: {
      id: apiKey.replace("GDGV?=", "").replace("123kalamdreamlabs", "")
    }
  });
  if (response) {
    const posts = await prisma.post.findMany({
      include: {
        Author: true
      }
    });
    res.json(posts);
  } else {
    res.json({ error: "Invalid API Key" });
  }
});

app.post("/create-post", async (req: Request, res: Response) => {
  const { authorId, title, content, image, link } = req.body;

  try {
    const post = await prisma.post.create({
      data: {
        title: title,
        content: content,
        authorId: authorId,
        image: image,
        link: link,
      }
    });
    res.status(200).json(post);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }

});

app.post("/create-author", async (req: Request, res: Response) => {
  const { name, authorId, image, twitter } = req.body;
  try {
    const response = await prisma.author.create({
      data: {
        id: authorId,
        name: name,
        image: image,
        twitter: twitter
      }
    });
    res.status(200).json(response);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});
