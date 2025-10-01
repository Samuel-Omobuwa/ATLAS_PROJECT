"use client";

import { useUser } from "@clerk/nextjs";
import { boardDataService } from "../services";
import { useState } from "react";
import { Board } from "../supabase/model";

export function useBoards() {
  const { user } = useUser();
  const [boards, setBoards] = useState<Board[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function createBoard(boardData: {
    title: string;
    description?: string;
    color?: string;
  }) {
    if (!user) throw new Error("User not authenticated");
    try {
      const newBoard = await boardDataService.createBoardWithDefaultColumns({
        ...boardData,
        userId: user.id,
      });

      setBoards();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create board");
    }
  }

  return { createBoard };
}
