var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create a user
        const signUpUser = yield prisma.user.create({
            data: {
                email: "manasmalla.dev@gmail.com",
                password: "malla",
                name: "Manas Malla",
            },
        });
        console.log("User created: ", signUpUser);
        console.log("API Key: " + "GDGV?=" + signUpUser.id + "123kalamdreamlabs");
        //Create author
        const author = yield prisma.author.create({
            data: {
                name: "Manas Malla",
                id: "manas-malla",
                twitter: "https://twitter.com/AndroidDev",
                image: "https://github.com/android.png"
            }
        });
        console.log("Author created: ", author);
        // Create a post
        const post = yield prisma.post.create({
            data: {
                title: "Navigating JetNews",
                content: "",
                authorId: "manas-malla",
                image: "https://miro.medium.com/v2/resize:fit:796/1*exNtX-qMLFAr_9T9zKda8Q.png",
                link: "Jetnews already had support for “traditional” mobile screens, so it was tempting to describe all of our changes as “adding large screen support.” While that is true, it misses the point of having adaptive UI. Let’s take a step back, and try to reframe the end result we want to create and maintain for our app. A user’s device is their unique, personal portal into the digital world.As an app developer, we should let users run the app in the orientation and configuration they prefer.Concretely, the user gives our app a window: a specific portion of the screen where we can display interactive UI.Most often this is the entire device screen, but it doesn’t have to be.If the user wants to use their phone in landscape or portrait, or split- screen multiple apps, they should be able to. There are many ways that an app’s window may change.To highlight just a few, split- screen support, foldable devices with an inner and outer display, and resizable windows on Chrome OS all impact your app’s window.It may be daunting to try to think about supporting each scenario individually, but there is a framing that simplifies the task significantly. The common thread between all of these scenarios is the screen size available to your app, which is the most relevant piece of information for displaying your app’s UI in the space the user is giving you.This is the primary reason why methods Display.getSize() and Display.getRealSize() were deprecated and replaced with WindowMetricsCalculator.computeCurrentWindowMetrics().For example, if your app is running in split screen mode on a tablet, it shouldn’t try to display “tablet UI” unless it actually has enough space for it."
            }
        });
        console.log("Post created: ", post);
        console.log("Seeding finished.");
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(this, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
//# sourceMappingURL=seed.js.map