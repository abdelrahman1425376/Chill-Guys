/*
  Warnings:

  - You are about to drop the column `CourceName` on the `Preclassess` table. All the data in the column will be lost.
  - You are about to drop the column `CourceName` on the `classess` table. All the data in the column will be lost.
  - Added the required column `course_name` to the `Preclassess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `course_name` to the `classess` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Preclassess" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "course_name" TEXT NOT NULL,
    "instructor" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "seats" TEXT NOT NULL,
    "available_seats" TEXT NOT NULL,
    "prerequisite" TEXT NOT NULL,
    "validation" TEXT NOT NULL
);
INSERT INTO "new_Preclassess" ("available_seats", "category", "id", "instructor", "prerequisite", "seats", "validation") SELECT "available_seats", "category", "id", "instructor", "prerequisite", "seats", "validation" FROM "Preclassess";
DROP TABLE "Preclassess";
ALTER TABLE "new_Preclassess" RENAME TO "Preclassess";
CREATE TABLE "new_classess" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "course_name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "instructor" TEXT NOT NULL,
    "seats" TEXT NOT NULL,
    "available_seats" TEXT NOT NULL,
    "prerequisite" TEXT NOT NULL,
    "validation" TEXT NOT NULL
);
INSERT INTO "new_classess" ("available_seats", "category", "id", "instructor", "prerequisite", "seats", "validation") SELECT "available_seats", "category", "id", "instructor", "prerequisite", "seats", "validation" FROM "classess";
DROP TABLE "classess";
ALTER TABLE "new_classess" RENAME TO "classess";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
