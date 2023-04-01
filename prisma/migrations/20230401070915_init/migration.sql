-- CreateTable
CREATE TABLE "myUser" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "access_token" TEXT,

    CONSTRAINT "myUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "myUser_email_key" ON "myUser"("email");
