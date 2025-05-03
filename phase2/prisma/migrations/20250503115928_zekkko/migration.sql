-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "cources" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "prerequisite" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "regesteration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CourceName" TEXT NOT NULL,
    "instructor" TEXT NOT NULL,
    "Studentname" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "classess" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CourceName" TEXT NOT NULL,
    "instructor" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "seats" TEXT NOT NULL,
    "available_seats" TEXT NOT NULL,
    "prerequisite" TEXT NOT NULL,
    "validation" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Preclassess" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CourceName" TEXT NOT NULL,
    "instructor" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "seats" TEXT NOT NULL,
    "available_seats" TEXT NOT NULL,
    "prerequisite" TEXT NOT NULL,
    "validation" TEXT NOT NULL
);
