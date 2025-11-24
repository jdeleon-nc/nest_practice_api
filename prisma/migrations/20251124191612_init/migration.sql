-- CreateTable
CREATE TABLE "Fighter" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "weightClassId" INTEGER NOT NULL,

    CONSTRAINT "Fighter_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Fighter" ADD CONSTRAINT "Fighter_weightClassId_fkey" FOREIGN KEY ("weightClassId") REFERENCES "WeightClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
