import React from "react";
import QuestionCard from "@/components/QuestionsCard";
import AddQuestion from "@/components/AddQuestion";
export default function Questions() {
  
  return (
    <>
      <div className="w-3/4 m-auto ">
        <div className=" mx-auto my-10 items-center w-full flex justify-between h-12">
          <h2>Latest Questions</h2>
          <AddQuestion></AddQuestion>
        </div>
      </div>
      <div>
      <QuestionCard/>
      <QuestionCard/>
      <QuestionCard/>
      <QuestionCard/>
      </div>
      
      
    </>
  );
}
