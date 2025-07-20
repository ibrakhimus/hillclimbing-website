import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "hillclimbing",
  // description:
  //   "Join our team of expert data labelers. Apply to contribute to high-quality AI training data at Hillclimbing.",
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
