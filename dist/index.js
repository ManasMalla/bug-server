"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const prismaClient_1 = __importDefault(require("./prismaClient"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const response = yield prismaClient_1.default.user.create({
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
}));
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const response = yield prismaClient_1.default.user.findFirst({
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
    }
    else {
        res.json({ error: "Invalid Credentials" });
    }
}));
app.post("/get-all-posts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { apiKey } = req.body;
    const response = yield prismaClient_1.default.user.findUnique({
        where: {
            id: apiKey.replace("GDGV?", "").replace("123kalamdreamlabs", "")
        }
    });
    if (response) {
        const posts = yield prismaClient_1.default.post.findMany({
        // {BUG 6} - Fix the bug in the query
        });
        res.json(posts);
    }
    else {
        res.json({ error: "Invalid API Key" });
    }
}));
app.post("/create-post", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, image, link } = req.body;
    const authorId = 'lakshit-malla';
    try {
        const author = yield prismaClient_1.default.author.findUnique({
            where: {
                id: authorId
            }
        });
        if (!author) {
            // {BUG 7} - Fix the bug in the query
            return;
        }
        const post = yield prismaClient_1.default.post.create({
            data: {
                title: title,
                content: content,
                authorId: authorId,
                image: image,
                link: link,
            }
        });
        res.status(200).json(post);
    }
    catch (e) {
        res.status(400).json({ error: e.message });
    }
}));
app.post("/create-author", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, authorId, image, twitter } = req.body;
    try {
        const response = yield prismaClient_1.default.author.create({
            data: {
                id: authorId,
                name: name,
                image: image,
                twitter: twitter
            }
        });
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json({ error: e.message });
    }
}));
app.listen(3003, () => {
    console.log("Server is running on port 3003");
});
//# sourceMappingURL=index.js.map