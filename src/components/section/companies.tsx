import { icons } from "@/lib/constant";
import { Container } from "../container";

export function Companies() {
  return (
    <>
      <Container>
        <p className="text-md text-center text-brand font-medium">Trusted By</p>

        <div className="flex items-center max-w-[70rem] mx-auto my-5 overflow-hidden  mask-image-custom">
          <div className="flex animate-infinite-scroll [--animation-delay:50s]">
            {icons.map((icon) => (
              <div key={icon.id} className=" flex items-center mx-8 max-w-none">
                <icon.component className="w-auto h-auto" />
              </div>
            ))}
            {icons.map((icon) => (
              <div key={icon.id} className=" flex items-center mx-8 max-w-none">
                <icon.component className="w-auto h-auto" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
