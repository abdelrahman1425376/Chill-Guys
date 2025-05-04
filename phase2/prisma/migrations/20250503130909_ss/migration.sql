-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_regesteration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "course_name" TEXT NOT NULL,
    "instructor" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "grade" TEXT,
    "status" TEXT NOT NULL
);
INSERT INTO "new_regesteration" ("course_name", "grade", "id", "instructor", "name", "status") SELECT "course_name", "grade", "id", "instructor", "name", "status" FROM "regesteration";
DROP TABLE "regesteration";
ALTER TABLE "new_regesteration" RENAME TO "regesteration";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
