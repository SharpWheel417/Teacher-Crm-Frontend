
import { Snippet } from "@nextui-org/snippet";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/button";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Ваша&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>дорога&nbsp;</h1>
          <br />
          <h1 className={title()}>
          к успеху начинается здесь
          </h1>
          <h4 className={subtitle({ class: "mt-4" })}>
          Ваши цели — наша миссия
          </h4>
        </div>


        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
            Проведи к новым вершинам знаний
            </span>
          </Snippet>
        </div>
      </section>
      <section className="flex flex-row items-center justify-center gap-4">
        <Button>Начать</Button>
        <Button className="bg-violet-600">Узнать подробнее</Button>
      </section>
    </DefaultLayout>
  );
}
