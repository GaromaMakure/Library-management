"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { borrowBook } from "@/lib/actions/book";

interface Props {
  userId: string;
  bookId: string;
  borrowingEligibility: {
    isEligible: boolean;
    message: string;
  };
}

const BorrowBook = ({
  userId,
  bookId,
  borrowingEligibility: { isEligible, message },
}: Props) => {
  const router = useRouter();
  const [borrowing, setBorrowing] = useState(false);

  const handleBorrowBook = async () => {
    if (!isEligible) {
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
      return; // ✅ Prevents continuing if user is not eligible
    }

    setBorrowing(true);

    try {
      const result = await borrowBook({ bookId, userId });

      if (result.success) {
        toast({
          title: "Success",
          description: "Book borrowed successfully",
        });

        router.push("/");
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to borrow the book",
          variant: "destructive",
        });
      }
    } catch (error: unknown) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred while borrowing the book",
        variant: "destructive",
      });
    } finally {
      setBorrowing(false);
    }
  };

  return (
    <Button
      className="book-overview_btn"
      onClick={handleBorrowBook}
      disabled={borrowing || !isEligible} // ✅ disable if already borrowing OR not eligible
    >
      <Image src="/icons/book.svg" alt="book" width={20} height={20} />
      <span className="font-bebas-neue text-xl text-dark-100">
        {borrowing ? "Borrowing ..." : "Borrow Book"}
      </span>
    </Button>
  );
};

export default BorrowBook;
