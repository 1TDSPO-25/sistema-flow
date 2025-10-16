import { useState } from "react";

type FaqItem = {
  index: number;
  question: string;
  answer: string;
};

export default function FaqItem({ index, question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = `faq-item-${index}`;