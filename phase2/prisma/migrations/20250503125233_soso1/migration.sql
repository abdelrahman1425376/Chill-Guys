/*
  Warnings:

  - You are about to alter the column `available_seats` on the `classess` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `seats` on the `classess` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to drop the column `CourceName` on the `regesteration` table. All the data in the column will be lost.
  - Added the required column `course_name` to the `regesteration` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_classess" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "course_name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "instructor" TEXT NOT NULL,
    "seats" INTEGER NOT NULL,
    "available_seats" INTEGER NOT NULL,
    "prerequisite" TEXT NOT NULL,
    "validation" TEXT NOT NULL
);
INSERT INTO "new_classess" ("available_seats", "category", "course_name", "id", "instructor", "prerequisite", "seats", "validation") SELECT "available_seats", "category", "course_name", "id", "instructor", "prerequisite", "seats", "validation" FROM "classess";
DROP TABLE "classess";
ALTER TABLE "new_classess" RENAME TO "classess";
CREATE TABLE "new_regesteration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "course_name" TEXT NOT NULL,
    "instructor" TEXT NOT NULL,
    "Studentname" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_regesteration" ("Studentname", "grade", "id", "instructor", "status") SELECT "Studentname", "grade", "id", "instructor", "status" FROM "regesteration";
DROP TABLE "regesteration";
ALTER TABLE "new_regesteration" RENAME TO "regesteration";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
