"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  const { user } = useUser();


  

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 ">
            Welcome back, 
            <span>
              {user?.firstName ?? user?.emailAddresses[0].emailAddress}! 👋
            </span>
          </h1>
          <p className="text-gray-600 text-2xl">Here&apos;s what happening with your boards today</p>
          <Button onClick={handleCreateBoard()}>
            <Plus />
            Create Board
          </Button>
        </div>
      </main>
    </div>
  );
}
