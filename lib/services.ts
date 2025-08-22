import { createClient } from "@/lib/supabase/client";
import { Board } from "./supabase/model";


const supabase = createClient();

export const boardService = {
  async getBoards(userId: string): Promise<Board[]> {
    const {data, error} = await supabase
      .from("boards")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

      if (error) throw error;
      return data || [];
  },

  async createBoards(board: Omit<Board, "id" | "created_at" | "updated_at">): Promise<Board>{
    const {data, error} = await supabase
      .from("boards")
      .insert(board)
      .select()
      .single();

      if (error) throw error;
      return data || [];
  },
};

export const boardService = {
  async getBoards(userId: string): Promise<Board[]> {
    const {data, error} = await supabase
      .from("boards")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

      if (error) throw error;
      return data || [];
  },

  async columService(board: Omit<Board, "id" | "created_at" | "updated_at">): Promise<Board>{
    const {data, error} = await supabase
      .from("boards")
      .insert(board)
      .select()
      .single();

      if (error) throw error;
      return data || [];
  },

  
//   async columnService(board: Omit<Board, "id" | "created_at" | "updated_at">): Promise<Board>{
//     const {data, error} = await supabase
//       .from("boards")
//       .insert(board)
//       .select()
//       .single();

//       if (error) throw error;
//       return data || [];
//   },

  async createColumn(Column: Omit<Board, "id" | "created_at">): Promise<Column>{
    const {data, error} = await supabase
      .from("columns")
      .insert(column)
      .select()
      .single();

      if (error) throw error;
      return data || [];
  },
};






