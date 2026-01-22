import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export default function ProjectsCarousel({ projects = [] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps' });
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    emblaApi.on('init', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('init', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="w-full">
      <div className="relative">
        <div ref={emblaRef} className="embla overflow-hidden">
          <div className="embla__container flex gap-4 py-4">
            {projects.map((project) => (
              <div key={project.title} className="embla__slide flex-none w-64 sm:w-72 md:w-80 p-2">
                <div className="bg-white border border-neutral-light rounded-lg shadow-sm hover:shadow-lg hover:bg-primary/10 transition-all p-4 flex flex-col items-center h-full">
                  <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded mb-4" loading="lazy" />
                  <h3 className="font-title text-lg font-bold text-primary mb-1 text-center">{project.title}</h3>
                  <span className="text-secondary font-semibold mb-2">{project.category}</span>
                  <p className="text-neutral-dark text-sm mb-4 text-center">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-2">
          <button
            aria-label="Anterior"
            className="bg-white/90 p-2 rounded-full shadow-md hover:bg-white"
            onClick={() => emblaApi && emblaApi.scrollPrev()}
          >
            ‹
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-2">
          <button
            aria-label="Próximo"
            className="bg-white/90 p-2 rounded-full shadow-md hover:bg-white"
            onClick={() => emblaApi && emblaApi.scrollNext()}
          >
            ›
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Ir para slide ${idx + 1}`}
            className={`w-2 h-2 rounded-full ${selected === idx ? 'bg-primary' : 'bg-neutral-light'}`}
            onClick={() => emblaApi && emblaApi.scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}
