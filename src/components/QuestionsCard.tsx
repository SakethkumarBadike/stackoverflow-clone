import React from "react";

export default function QuestionCard() {
  return (
    <div className="mt-2 h-32 w-3/4 mx-auto text-white border-gray-500 border-2">
      <div className="h-full w-full mx-auto px-3 py-1 flex justify-between items-center">
        <div className="flex-col justify-between items-center">
          <h3>Votes: 10</h3>
          <h3>Answers: 5</h3>
          <h3>Views: 150</h3>
        </div>
        <div className="w-10/12">
          <h1 className="mb-3 font-semibold text-2xl flex-col truncate ">
            Title 
          </h1>
          <h3 className="font-light text-md truncate mb-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos officiis nesciunt beatae dolore aliquid atque corporis odit distinctio ut inventore, facilis reprehenderit laudantium? Veniam repellendus dolores pariatur neque illum aliquid.
          
          </h3>
          <div className="text-xs font-light w-1/6 ml-auto">
            <h5>✏️ authorName</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
