/*
  Warnings:

  - You are about to drop the `BLPlayer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "BLPlayer";

-- CreateTable
CREATE TABLE "BLPLayer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "nickname" TEXT NOT NULL,
    "ageComment" TEXT,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "birthPlace" TEXT NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "domLeg" TEXT NOT NULL,
    "shoeSize" DOUBLE PRECISION NOT NULL,
    "bloodType" TEXT NOT NULL,
    "vision" DOUBLE PRECISION NOT NULL,
    "zodiac" TEXT NOT NULL,

    CONSTRAINT "BLPLayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "orderNumber" INTEGER NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Response" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "comment" TEXT,

    CONSTRAINT "Response_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Response_playerId_questionId_key" ON "Response"("playerId", "questionId");

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "BLPLayer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
