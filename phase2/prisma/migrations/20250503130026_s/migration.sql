/*
  Warnings:

  - You are about to drop the column `Studentname` on the `regesteration` table. All the data in the column will be lost.
  - Added the required column `name` to the `regesteration` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_regesteration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "course_name" TEXT NOT NULL,
    "instructor" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_regesteration" ("course_name", "grade", "id", "instructor", "status") SELECT "course_name", "grade", "id", "instructor", "status" FROM "regesteration";
DROP TABLE "regesteration";
ALTER TABLE "new_regesteration" RENAME TO "regesteration";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
