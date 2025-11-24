-- CreateTable
CREATE TABLE "WeightClass" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lowerlimit" INTEGER NOT NULL,
    "upperlimit" INTEGER NOT NULL,

    CONSTRAINT "WeightClass_pkey" PRIMARY KEY ("id")
);
