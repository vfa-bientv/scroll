import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);
  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-neutral-900 flex  gap-6"
    >
      <div className="sticky flex-1 top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
      <div className="flex-1">
        <div className="h-screen flex justify-center items-center">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non
            sunt deleniti libero officiis. Odio animi laborum autem ad accusamus
            culpa laboriosam. Saepe vitae tempore vel, nobis quas libero
            voluptatibus voluptates possimus consequuntur.
          </p>
        </div>
        <div className="h-screen flex justify-center items-center">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non
            sunt deleniti libero officiis. Odio animi laborum autem ad accusamus
            culpa laboriosam. Saepe vitae tempore vel, nobis quas libero
            voluptatibus voluptates possimus consequuntur.
          </p>
        </div>
        <div className="h-screen flex justify-center items-center">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non
            sunt deleniti libero officiis. Odio animi laborum autem ad accusamus
            culpa laboriosam. Saepe vitae tempore vel, nobis quas libero
            voluptatibus voluptates possimus consequuntur.
          </p>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

type CardType = {
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    title: "Title 1",
    id: 1,
  },
  {
    title: "Title 2",
    id: 2,
  },
  {
    title: "Title 3",
    id: 3,
  },
  {
    title: "Title 4",
    id: 4,
  },
  {
    title: "Title 5",
    id: 5,
  },
  {
    title: "Title 6",
    id: 6,
  },
  {
    title: "Title 7",
    id: 7,
  },
];
