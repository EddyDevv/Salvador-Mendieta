import { Fragment, type ReactElement } from "react";
import { Typewriter } from "./Typewriter";
import Carousel from "./Carousel";

type InfoItem = {
  label: string;
  value: string;
};

type Header = string;
type Image = string;

type ReportItem = {
  header: Header;
  content: () => ReactElement;
  quote?: string;
};

const INFO_LIST: InfoItem[] = [
  {
    label: "Nacimiento",
    value: "Altagracia, Isla de Ometepe.",
  },
  {
    label: "Ocupación",
    value: "Escritor, Político, Unionista.",
  },
  {
    label: "Causa",
    value: "Unificación de C.A.",
  },
] as const;

const HEADER_LIST: Header[] = [
  "Salvador Mendieta",
  "Diplomático Nicaragüense",
  "Héroe de la Unión Centroamericana",
  "Defensor del unionismo centroamericano",
  "Grupo 1S1",
];

const REPORT: ReportItem[] = [
  {
    header: "I. Contexto Histórico",
    content: () => (
      <Fragment>
        Salvador Mendieta vivió en una época de conflictos políticos e
        intervenciones extranjeras que afectaban a <strong>Nicaragua</strong>{" "}
        <strong>Centroamérica</strong>. Ante esta inestabilidad, surgió su idea
        de que los problemas de la región solo podían resolverse mediante la
        unión regional y la cooperación entre países.
      </Fragment>
    ),
    quote: "La crisis regional exigía unidad.",
  },
  {
    header: "II. Biografía Sintética",
    content: () => (
      <Fragment>
        Nacido en 1879, fue abogado, escritor y diplomático nicaragüense.
        Utilizó el pensamiento político y la escritura para defender la{" "}
        <strong>democracia</strong>, la ley y la soberanía nacional,
        destacándose como un intelectual comprometido con el futuro de{" "}
        <strong>Nicaragua</strong>.
      </Fragment>
    ),
  },
  {
    header: "III. Gesta o Aporte Principal",
    content: () => (
      <Fragment>
        Su mayor aporte fue promover el{" "}
        <strong>unionismo centroamericano</strong>, defendiendo que una{" "}
        <strong>Centroamérica</strong> unida sería más fuerte política y
        económicamente. Su lucha fue civil e intelectual, basada en ideas y
        propuestas democráticas.
      </Fragment>
    ),
    quote: "Un héroe de las ideas.",
  },
  {
    header: "IV. Valores y Legado",
    content: () => (
      <Fragment>
        Mendieta destacó por su perseverancia, lealtad a sus ideales y valentía
        intelectual. Su legado inspira el pensamiento crítico, la cooperación
        regional y el compromiso con la <strong>unidad centroamericana</strong>.
      </Fragment>
    ),
  },
  {
    header: "V. Conclusión",
    content: () => (
      <Fragment>
        Su pensamiento continúa vigente al proponer una{" "}
        <strong>Centroamérica</strong> más integrada y democrática, recordando
        que la colaboración entre naciones fortalece la identidad y el
        desarrollo común.
      </Fragment>
    ),
    quote: "Las ideas trascienden generaciones",
  },
];

const IMAGES: Image[] = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
];

export default function Page() {
  return (
    <main className="flex-1 w-full max-w-4xl border-2 border-amber-950 py-4 px-6 shadow-[15px_15px_0px_#461901] max-md:shadow-[8px_8px_0px_#461901] transition-shadow duration-300 ease-out flex flex-col border-b-0">
      <header className="flex flex-col w-full items-start mt-2">
        <span className="px-2 py-1 bg-amber-900/95 text-amber-50 uppercase text-sm max-md:text-xs animate-fade-in-up">
          Expediente Histórico #505
        </span>
        <div className="flex w-full min-w-0 items-center my-3  animate-fade-in-up animate-delay-200">
          <Typewriter words={HEADER_LIST} pauseTime={2000} />
        </div>
        <p className="text-sm text-amber-800/80 font-semibold max-md:text-xs  animate-fade-in-up animate-delay-400">
          1879 — 1958 <small className="opacity-60">|</small> Nicaragua
        </p>
      </header>
      <hr className="w-[95%] mx-auto border-amber-950/15 my-4 border" />
      <section className="grid grid-cols-[auto_1fr] items-start max-md:grid-cols-1 gap-2 mb-4">
        <aside className="flex flex-col w-54 sticky top-5 gap-2 max-md:w-full max-md:flex-row max-md:relative max-md:top-0">
          <figure className="border-amber-950 border flex flex-col items-center justify-center p-3 select-none transition-all duration-300 ease-out hover:-rotate-4 hover:scale-106 hover:bg-white backdrop-xl cursor-crosshair w-full max-h-fit">
            <img
              src="/salvador-mendieta.png"
              alt="Salvador Mendieta"
              className="object-cover"
              width={605}
              height={605}
            />
            <figcaption className="text-xs mt-2.5 max-sm:text-[.5rem]">
              [ Retrato Oficial ]
            </figcaption>
          </figure>
          <table className="w-full border-collapse text-xs">
            <tbody>
              {INFO_LIST.map((item) => (
                <tr key={item.label}>
                  <td className="border border-amber-950 py-2 px-3 font-bold bg-white">
                    {item.label}
                  </td>
                  <td className="border border-amber-950 py-2 px-3">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </aside>
        <div className="flex flex-col gap-6 w-full">
          {REPORT.map((item) => (
            <article
              key={item.header}
              className="flex flex-col gap-2 timeline-view animate-blurred-fade-in animate-range-[entry_10%_contain_30%]"
            >
              <header className="flex items-center px-2 py-1 bg-amber-900/95 text-amber-50 font-semibold max-md:text-sm">
                {item.header}
              </header>
              <p className="leading-tight max-md:text-sm text-justify">
                {item.content()}
              </p>
              {item.quote && (
                <div className="px-3 py-2.5 bg-amber-950/5 mt-3 border-l-5 border-amber-800/90 italic hover:bg-amber-950/10 cursor-default transition-colors ease-out duration-300">
                  <p className="italic">"{item.quote}"</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
      <hr className="w-[95%] mx-auto border-amber-950/15 my-4 border" />
      <section className="flex flex-col gap-2 mb-4">
        <header className="flex items-center text-sm font-semibold justify-between">
          <h2 className="text-amber-800">Galeria</h2>
          <small className="text-xs text-amber-800/50">
            Fotos ofrecidas por{" "}
            <a
              href="https://gemini.google.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-amber-800 underline"
            >
              Gemini
            </a>
          </small>
        </header>
        <Carousel images={IMAGES} />
      </section>
      <footer className="text-center text-[0.7rem] border-t border-dashed border-amber-950/15 pt-5 mt-auto">
        Copyright © 2026 -{" "}
        <a
          href="https://eddydevv.vercel.app/"
          target="_blank"
          rel="noreferrer noopener"
          className="font-bold underline"
        >
          EddyDevv,
        </a>{" "}
        Douglas, Jonathan, Malquias, Ronald
      </footer>
    </main>
  );
}
