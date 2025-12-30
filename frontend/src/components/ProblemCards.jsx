import React from "react";
import { X } from "lucide-react";
import { Archive } from "lucide-react";
import { Calculator } from "lucide-react";
import { Banknote } from "lucide-react";

const ProblemCards = () => {
  const problems = [
    {
      title: "Lost Sales Records",
      description:
        "Paper books get lost or damaged. Never lose track of a sale again with digital backups.",
      icon: <X className="w-6 h-6" />,
      styles: {
        backgroundColor: "bg-red-500/10",
        border: "border-red-200",
        text: "text-red-500",
        iconBg: "bg-red-200",
      },
    },
    {
      title: "Stock Confusion",
      description:
        "Know exactly what you have in store without counting manually every single day.",
      icon: <Archive className="w-6 h-6" />,
      styles: {
        backgroundColor: "bg-orange-500/10",
        border: "border-orange-200",
        text: "text-orange-500",
        iconBg: "bg-orange-200",
      },
    },
    {
      title: "Calculation Errors",
      description:
        "Say goodbye to calculator mistakes. Automate your totals instantly.",
      icon: <Calculator className="w-6 h-6" />,
      styles: {
        backgroundColor: "bg-yellow-500/10",
        border: "border-yellow-200",
        text: "text-yellow-500",
        iconBg: "bg-yellow-200",
      },
    },
    {
      title: "Cash Management",
      description:
        "Track Cash, Transfer, and Paystack payments in one unified view.",
      icon: <Banknote className="w-6 h-6" />,
      styles: {
        backgroundColor: "bg-blue-500/10",
        border: "border-blue-200",
        text: "text-blue-500",
        iconBg: "bg-blue-200",
      },
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="flex flex-col justify-center items-center gap-2 w-[40%] mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold">
          Stop Losing Money to Manual Records
        </h1>
        <p className="text-lg text-muted">
          Running a business is hard enough without worrying about lost
          notebooks, stock confusion, or calculation errors.
        </p>
      </div>

      <div className="flex justify-center items-center gap-5">
        {problems.map((problem) => (
          <div
            key={problem.title}
            className={`flex flex-col items-start gap-5 w-[20%] rounded-lg border-2 ${problem.styles.border} p-6 h-[250px] ${problem.styles.backgroundColor}`}
          >
            <div
              className={`p-4 rounded-lg border border-border ${problem.styles.text} ${problem.styles.iconBg}`}
            >
              {problem.icon}
            </div>
            <h3 className="text-lg font-bold">{problem.title}</h3>
            <p className="text-muted">{problem.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemCards;
