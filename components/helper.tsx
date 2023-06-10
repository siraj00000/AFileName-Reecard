export function P1({ text }: { text: string }) {
  return (
    <p className="font-inter text-base sm:text-[11px] text-[#131313] dark:text-[#ffffff] font-bold">
      {text}
    </p>
  );
}
export function H1({ text }: { text: string }) {
  return (
    <h1
      className="text-4xl tracking-[1.5px] md:text-3xl sm:text-xl text-[#242634]
 dark:text-[#ffffff] font-bold text-center font-karla"
    >
      {text}
    </h1>
  );
}
