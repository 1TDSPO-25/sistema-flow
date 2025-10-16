import { useState } from "react";

type FaqItem = {
  index: number;
  question: string;
  answer: string;
};

export default function FaqItem({ index, question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = `faq-item-${index}`;

  return (
    <li className="bg-white rounded-lg shadow p-4 transition-all duration-300">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">{question}</h3>